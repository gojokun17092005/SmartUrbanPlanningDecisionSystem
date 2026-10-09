from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, create_model
import joblib
import pandas as pd
import json
import os

app = FastAPI(title="Urban Risk ML Prediction API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL_PATH = '../models/urban_risk_rf_pipeline.pkl'
METADATA_PATH = '../models/model_metadata.json'

model_pipeline = None
model_metadata = None

# Load model and metadata on startup
@app.on_event("startup")
def load_model():
    global model_pipeline, model_metadata
    try:
        if os.path.exists(MODEL_PATH) and os.path.exists(METADATA_PATH):
            model_pipeline = joblib.load(MODEL_PATH)
            with open(METADATA_PATH, 'r') as f:
                model_metadata = json.load(f)
            print("Model and metadata loaded successfully.")
        else:
            print("Warning: Model or metadata not found. Please train the model first.")
    except Exception as e:
        print(f"Error loading model: {e}")

# Define input schema dynamically or statically (statically is fine based on the 20 features)
class PredictionRequest(BaseModel):
    populationDensity: float = 12500
    populationGrowthRate: float = 2.4
    builtUpAreaPct: float = 62
    vacantLandPct: float = 12
    residentialLandPct: float = 45
    commercialLandPct: float = 18
    roadDensity: float = 11.5
    trafficCongestion: float = 48
    publicTransportAccessibility: float = 65
    waterSupplyCoverage: float = 82
    sewerageCoverage: float = 72
    wasteManagementCoverage: float = 76
    aqi: float = 135
    greenSpacePct: float = 14.5
    floodRisk: float = 32
    distanceToHospital: float = 2.4
    distanceToSchool: float = 0.9
    averageIncome: float = 68
    landPrice: float = 85
    infrastructureCost: float = 48

@app.post("/predict")
def predict(request: PredictionRequest):
    if model_pipeline is None or model_metadata is None:
        raise HTTPException(status_code=503, detail="Model is not available. Please train the model.")
    
    try:
        # Convert request to DataFrame for the pipeline
        data_dict = request.dict()
        
        # Ensure features are in the exact order expected by the model
        features_expected = model_metadata['features']
        input_data = {feature: [data_dict.get(feature, 0)] for feature in features_expected}
        df = pd.DataFrame(input_data)
        
        # Predict class and probabilities
        prediction = model_pipeline.predict(df)[0]
        probabilities = model_pipeline.predict_proba(df)[0]
        
        # Map probabilities to class names
        class_names = model_pipeline.classes_.tolist()
        class_probabilities = {class_name: float(prob) for class_name, prob in zip(class_names, probabilities)}
        
        response = {
            "predicted_risk": prediction,
            "class_probabilities": class_probabilities,
            "model_version": model_metadata['model_version'],
            "model_status": model_metadata['model_status'],
            "data_status": model_metadata['data_status'],
            "disclaimer": model_metadata['disclaimer']
        }
        return response
    
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/health")
def health_check():
    status = "ONLINE" if model_pipeline is not None else "UNAVAILABLE"
    return {
        "status": status,
        "service": "Urban Risk ML Service",
        "model_loaded": model_pipeline is not None
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
