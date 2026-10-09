import os
import json
import joblib
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix, classification_report

# Ensure directories exist
os.makedirs('../data', exist_ok=True)
os.makedirs('../models', exist_ok=True)

print("Phase 3: Defining ML Target & Phase 4: Implementing Preprocessing and Training Pipeline")

# 1. Generate Synthetic Data for Development
# NOTE: This is entirely synthetic data intended ONLY for development and pipeline testing.
# It does NOT represent real-world accuracy or causation.
print("Generating synthetic development data...")
np.random.seed(42)
n_samples = 2000

data = {
    'populationDensity': np.random.uniform(1000, 35000, n_samples),
    'populationGrowthRate': np.random.uniform(-2.0, 8.0, n_samples),
    'builtUpAreaPct': np.random.uniform(10, 90, n_samples),
    'vacantLandPct': np.random.uniform(0, 60, n_samples),
    'residentialLandPct': np.random.uniform(10, 80, n_samples),
    'commercialLandPct': np.random.uniform(2, 50, n_samples),
    'roadDensity': np.random.uniform(2.0, 25.0, n_samples),
    'trafficCongestion': np.random.uniform(10, 95, n_samples),
    'publicTransportAccessibility': np.random.uniform(10, 100, n_samples),
    'waterSupplyCoverage': np.random.uniform(20, 100, n_samples),
    'sewerageCoverage': np.random.uniform(10, 100, n_samples),
    'wasteManagementCoverage': np.random.uniform(20, 100, n_samples),
    'aqi': np.random.uniform(20, 500, n_samples),
    'greenSpacePct': np.random.uniform(2.0, 45.0, n_samples),
    'floodRisk': np.random.uniform(0, 100, n_samples),
    'distanceToHospital': np.random.uniform(0.3, 15.0, n_samples),
    'distanceToSchool': np.random.uniform(0.2, 6.0, n_samples),
    'averageIncome': np.random.uniform(15, 250, n_samples),
    'landPrice': np.random.uniform(10, 300, n_samples),
    'infrastructureCost': np.random.uniform(10, 200, n_samples)
}
df = pd.DataFrame(data)

# Create synthetic labels (introducing some logic to make it learnable, but this is STILL SYNTHETIC)
def assign_risk(row):
    stress = 0
    if row['aqi'] > 150: stress += 2
    elif row['aqi'] > 100: stress += 1
    if row['waterSupplyCoverage'] < 60: stress += 2
    if row['trafficCongestion'] > 75: stress += 2
    if row['floodRisk'] > 60: stress += 2
    if row['greenSpacePct'] < 10: stress += 1
    
    # Introduce randomness to make the problem non-deterministic
    stress += np.random.choice([-1, 0, 1], p=[0.2, 0.6, 0.2])
    
    if stress >= 6: return 'Critical'
    elif stress >= 4: return 'High'
    elif stress >= 2: return 'Moderate'
    else: return 'Low'

df['target_risk'] = df.apply(assign_risk, axis=1)

# Save synthetic dataset
df.to_csv('../data/synthetic_urban_data.csv', index=False)
print("Synthetic data saved to data/synthetic_urban_data.csv")

# 2. Data Preprocessing & Splitting
features = list(data.keys())
X = df[features]
y = df['target_risk']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

print(f"Training set: {X_train.shape[0]} samples")
print(f"Test set: {X_test.shape[0]} samples")

# Define preprocessing for numerical features
numeric_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler())
])

preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, features)
    ])

# 3. Model Definition
rf_classifier = RandomForestClassifier(
    n_estimators=100, 
    max_depth=10, 
    random_state=42, 
    class_weight='balanced'
)

# 4. Pipeline Creation
pipeline = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('classifier', rf_classifier)
])

# Phase 5: Train and Evaluate
print("Training the Random Forest model...")
pipeline.fit(X_train, y_train)

print("Evaluating the model on held-out test set...")
y_pred = pipeline.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred, average='weighted', zero_division=0)
recall = recall_score(y_test, y_pred, average='weighted', zero_division=0)
f1 = f1_score(y_test, y_pred, average='weighted', zero_division=0)

print(f"Accuracy: {accuracy:.4f}")
print(f"Precision: {precision:.4f}")
print(f"Recall: {recall:.4f}")
print(f"F1-score: {f1:.4f}")
print("\nClassification Report:")
print(classification_report(y_test, y_pred))

# Save the trained model pipeline
model_path = '../models/urban_risk_rf_pipeline.pkl'
joblib.dump(pipeline, model_path)
print(f"Model pipeline saved to {model_path}")

# Calculate Feature Importances for global explainability
importances = pipeline.named_steps['classifier'].feature_importances_
feature_names = features
feature_importance_dict = {
    fname: float(imp) for fname, imp in zip(feature_names, importances)
}
# Sort by importance
feature_importance_dict = dict(sorted(feature_importance_dict.items(), key=lambda item: item[1], reverse=True))

# Save metadata
metadata = {
    'model_version': '1.0',
    'model_status': 'trained',
    'data_status': 'synthetic_development_data_only',
    'classes': pipeline.classes_.tolist(),
    'features': features,
    'evaluation': {
        'accuracy': float(accuracy),
        'precision': float(precision),
        'recall': float(recall),
        'f1_score': float(f1)
    },
    'feature_importance': feature_importance_dict,
    'disclaimer': 'Model trained on synthetic data for development. Predictions do NOT reflect real-world outcomes.'
}

metadata_path = '../models/model_metadata.json'
with open(metadata_path, 'w') as f:
    json.dump(metadata, f, indent=2)
print(f"Model metadata saved to {metadata_path}")
print("Training phase completed successfully.")
