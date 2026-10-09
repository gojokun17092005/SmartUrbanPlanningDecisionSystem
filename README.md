# 🏙️ Smart Urban Planning Decision Support System (DSS)

A human-centered, multi-domain **Municipal Decision Support System & Policy Simulator** that helps urban planners, municipal authorities, and civil engineers understand city conditions, evaluate infrastructure health, check statutory compliance, and explore what thoughtful planning can do for residents.

The system combines a **rule-based analytics engine** with a **Random Forest Machine Learning model** in a hybrid architecture — each engine runs independently and presents its results separately.

---

## 🌟 Key Features

* **👋 Human-Centered Dashboard**: Conversational language, friendly insights, and plain-English explanations designed for real people — not just data engineers.
* **🎛️ 20-Parameter Urban Modeler**: Explore city conditions across 8 planning domains with real-time interactive sliders.
* **🚨 Rule-Based Stress Classifier**: Automated urban stress index (0–100) and urgency classification (**Critical**, **High**, **Moderate**, **Low**) based on documented planning thresholds.
* **🤖 ML Urban Risk Prediction**: A Random Forest classifier that predicts urban risk (Low, Moderate, High, Critical) from the 20 input features.
* **💡 Human Insights Generator**: Automatically surfaces the most important findings in plain language (e.g., *"Clean air needs attention"* instead of *"AQI: 225"*).
* **📊 8-Domain Equilibrium Radar**: Chart.js radar chart with a dynamic story interpreting the shape.
* **📜 Statutory Compliance Check**: Benchmark verification against **MoHUA**, **URDPFI 2014**, **CPCB**, **WHO**, and **NDMA** guidelines.
* **🏗️ Actionable Project Recommendations**: Prioritized capital projects with plain-language explanations of *why* each matters to residents.
* **🗺️ Spatial Zoning Simulator**: HTML5 Canvas rendering of residential, commercial, green buffer, and transit zones.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, Vanilla JS (ES6+) | Dashboard, sliders, visualizations |
| **Visualization** | Chart.js (CDN) & HTML5 Canvas | Radar chart & spatial zoning map |
| **Backend** | Node.js, Express.js | REST API & rule-based analytics engine |
| **ML Service** | Python 3, FastAPI, uvicorn | Random Forest prediction API |
| **ML Model** | scikit-learn `RandomForestClassifier` | Urban risk classification |
| **ML Pipeline** | pandas, NumPy, joblib | Data preprocessing & model persistence |
| **Data Format** | JSON | API communication |

---

## 📂 Project Structure

```text
smart-urban-planning-dss/
├── package.json          # Node.js dependencies & scripts
├── server.js             # Express server & rule-based analytics engine
├── README.md             # Documentation
├── public/
│   ├── index.html        # Human-centered dashboard UI
│   ├── style.css         # Minimalist light theme & layout
│   └── script.js         # Event handling, API calls, charts & canvas
└── ml/
    ├── requirements.txt  # Python ML dependencies
    ├── data/
    │   └── synthetic_urban_data.csv   # Development dataset (synthetic)
    ├── models/
    │   ├── urban_risk_rf_pipeline.pkl # Trained model pipeline
    │   └── model_metadata.json        # Evaluation metrics & feature schema
    └── src/
        ├── train.py      # Data generation, preprocessing & training
        └── predict.py    # FastAPI prediction service
```

---

## 📑 20 Urban Planning Parameters & 8 Core Domains

### 1. People & Population (Demographic)
* **Population Density** (`cap/km²`): 1,000–35,000 (URDPFI benchmark: 6,000–15,000).
* **Population Growth Rate** (`%/yr`): -2.0%–8.0% (Sustainable target: 1.0–2.5%).

### 2. Land & Zoning (Land Use)
* **Built-up Area %** (`%`): 10%–90% (Balanced norm: 50–65%).
* **Vacant Land %** (`%`): 0%–60% (Strategic reserve: 10–20%).
* **Residential Land %** (`%`): 10%–80% (URDPFI norm: 40–50%).
* **Commercial Land %** (`%`): 2%–50% (URDPFI norm: 12–20%).

### 3. Roads & Transit (Transport)
* **Road Density** (`km/km²`): 2.0–25.0 (URDPFI guideline: 10–18).
* **Traffic Congestion Index** (`% delay`): 10%–95% (Target: ≤ 35%).
* **Public Transit Accessibility** (`/100`): 10–100 (TOD standard: ≥ 75).

### 4. Basic Utilities (Infrastructure)
* **Water Supply Coverage** (`%`): 20%–100% (MoHUA SLB: 100% @ 135 lpcd).
* **Sewerage Coverage** (`%`): 10%–100% (MoHUA SLB: 100% underground).
* **Waste Management Coverage** (`%`): 20%–100% (CPCB / Swachh Bharat: 100%).

### 5. Nature & Air (Environment)
* **Air Quality Index (AQI)**: 20–500 (CPCB/WHO satisfactory threshold: ≤ 100).
* **Green Space %** (`%`): 2.0%–45.0% (URDPFI & WHO norm: ≥ 15%).

### 6. Safety & Risks (Disaster Resilience)
* **Flood Risk Index** (`/100`): 0–100 (NDMA safety threshold: < 25).

### 7. Schools & Hospitals (Public Services)
* **Distance to Hospital** (`km`): 0.3–15.0 km (URDPFI healthcare norm: ≤ 3.0 km).
* **Distance to School** (`km`): 0.2–6.0 km (15-minute neighborhood norm: ≤ 1.0 km).

### 8. Money & Costs (Economic Viability)
* **Average Monthly Household Income** (`₹k/mo`): ₹15k–₹250k.
* **Land Market Valuation** (`₹k/m²`): ₹10k–₹300k.
* **Infrastructure Capital Cost Index** (`₹Cr/km²`): ₹10Cr–₹200Cr.

---

## 🚀 Quick Start Guide

### Prerequisites
* **Node.js** v18+
* **Python** v3.8+
* **npm** and **pip**

### Step 1: Install Node.js Dependencies
```bash
npm install
```

### Step 2: Install Python ML Dependencies
```bash
cd ml
pip install -r requirements.txt
```

### Step 3: Train the Random Forest Model
```bash
cd ml/src
python train.py
```
> ⚠️ **Note:** The model is currently trained on **synthetic development data**. This means predictions are illustrative only and should not be used for real-world planning decisions. To use real data, replace `ml/data/synthetic_urban_data.csv` with a real labeled dataset and re-run training.

### Step 4: Start the ML Prediction Service (Terminal 1)
```bash
cd ml/src
python predict.py
```
The FastAPI service will start at `http://127.0.0.1:8000`.

### Step 5: Start the Node.js Server (Terminal 2)
```bash
npm start
```

### Step 6: Open the Dashboard
```
http://localhost:5000
```

---

## 🧠 Hybrid Architecture

The system uses two **independent** engines that run in parallel and present results separately. The ML model is **never** used as a substitute for the rule-based engine's output.

```
Browser (Dashboard)
       │
       ▼
Node.js / Express (Port 5000)
  ├── Rule-Based Analytics Engine   → Stress Index, Domain Scores, Benchmarks, Projects
  └── Calls Python ML Service ──►  FastAPI (Port 8000)
                                     └── RandomForestClassifier
                                          └── Predicted Risk + Class Probabilities
```

| Engine | Technology | Output |
|---|---|---|
| Rule-Based | Node.js | Stress Index, 8 Domain Scores, Benchmark Gaps, Urgency Level |
| Machine Learning | Python / scikit-learn | Predicted Risk Class, Per-Class Probabilities, Model Status |

---

## 🤖 Machine Learning Details

### Problem Definition
**Urban Risk Classification**: Given 20 urban planning parameters, predict a risk level of **Low**, **Moderate**, **High**, or **Critical**.

### Dataset
* **Type**: Synthetic development data (2,000 observations).
* **Purpose**: Pipeline testing and development only.
* **Disclaimer**: Results do **not** demonstrate real-world predictive accuracy.
* **To use real data**: Replace `ml/data/synthetic_urban_data.csv` with a properly labeled dataset and retrain.

### Model Evaluation (Synthetic Data — Development Only)
| Metric | Score |
|---|---|
| Accuracy | ~81% |
| Weighted Precision | ~81% |
| Weighted Recall | ~81% |
| Weighted F1-Score | ~80% |

These figures are based on a held-out 20% test split from the synthetic dataset.

---

## 📡 REST API Documentation

### POST `/api/predict`
**Headers**: `Content-Type: application/json`

#### Sample Request:
```json
{
  "populationDensity": 22000,
  "trafficCongestion": 72,
  "waterSupplyCoverage": 92,
  "sewerageCoverage": 88,
  "aqi": 185,
  "greenSpacePct": 6.5,
  "floodRisk": 38
}
```

#### Sample Response (extended with ML):
```json
{
  "params": { "...all 20 parameters with defaults applied..." },
  "urgency": {
    "level": "High",
    "stressIndex": 48,
    "explanation": "Elevated pressure: traffic congestion (72% delay)..."
  },
  "compositeInfrastructureScore": 74,
  "equilibriumDimensions": {
    "demographic": 78, "landUse": 85, "transport": 72,
    "infrastructure": 88, "environment": 52, "disaster": 62,
    "publicServices": 95, "economic": 92
  },
  "benchmarks": [
    { "name": "Water Supply Coverage", "target": "100%", "current": "92%", "status": "Moderate Deficit" }
  ],
  "projects": [
    { "name": "Universal Potable Water Pipeline", "priority": "High", "impact": "Eliminates 8% water deficit." }
  ],
  "mlAnalytics": {
    "predicted_risk": "High",
    "class_probabilities": {
      "Low": 0.05, "Moderate": 0.20, "High": 0.60, "Critical": 0.15
    },
    "model_version": "1.0",
    "model_status": "trained",
    "data_status": "synthetic_development_data_only",
    "disclaimer": "Model trained on synthetic data. Predictions are illustrative only."
  }
}
```

> If the ML service is unavailable, `mlAnalytics` will contain `{ "error": "ML Service Unreachable" }`. All rule-based outputs continue to work normally.

### GET `/api/health`
```json
{
  "status": "ONLINE",
  "service": "Smart Urban Planning DSS",
  "mlService": "ONLINE",
  "timestamp": "2026-10-09T00:00:00.000Z"
}
```

---

## ⚖️ Statutory Standards Reference

* **URDPFI Guidelines (2014)** — Urban & Regional Development Plans Formulation, Ministry of Housing and Urban Affairs.
* **MoHUA Service Level Benchmarks** — Universal water supply (135 lpcd), 100% underground sewerage.
* **CPCB Air Quality Standards** — NAAQS & WHO Guidelines (≤ 100 AQI satisfactory).
* **NDMA Urban Flood Guidelines** — Stormwater retention benchmarks.

> **Important**: Benchmarks shown in the dashboard are based on the above published planning guidelines. They are not verified legal compliance determinations. Always consult a qualified planner or authority for statutory decisions.

---

## 🔮 Known Limitations & Next Steps

* The ML model is trained on **synthetic data** — not real-world urban datasets. Replace with authoritative labeled data (e.g., Census of India, smart city sensor data) for production use.
* Feature importance is a **global model-level measure** of variable contribution, not proof of causation.
* ML risk predictions should **not** be used as a substitute for statutory compliance checks.

**Future improvements:**
- Integrate real labeled urban datasets.
- Add SHAP-based local explanations per prediction.
- Export reports as PDF.
- Multi-city comparison mode.

---

## 📜 License & Acknowledgments

* Developed for **Smart Urban Planning & Municipal Decision Support**.
* Built using open web standards: HTML5, CSS3, ES6+, Express.js, Python, scikit-learn, FastAPI.
