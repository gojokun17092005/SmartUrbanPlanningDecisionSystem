# 🏙️ Smart Urban Planning Decision Support System (DSS)

An interactive, multi-domain **Municipal Decision Support System & Policy Simulator** designed to assist urban planners, municipal authorities, and civil engineers in evaluating city infrastructure equilibrium, statutory standards compliance, decision urgency, and targeted capital projects.

---

## 🌟 Key Features

* **🎛️ 20-Parameter Urban Planning Modeler**: Real-time calibration across 8 core municipal planning domains.
* **🚨 Decision Urgency Classifier**: Automated municipal stress index (0-100) and multi-level urgency classification (**Critical**, **High**, **Moderate**, **Low**).
* **📊 8-Domain Equilibrium Radar**: Interactive Chart.js radar visualization evaluating demographic pressure, land use balance, mobility, utilities, environment, disaster resilience, public amenities, and economic viability.
* **📜 Statutory Standards Evaluation**: Automated compliance verification against **MoHUA** (Ministry of Housing and Urban Affairs), **URDPFI 2014**, **CPCB**, **WHO**, and **NDMA** benchmarks.
* **🏗️ Actionable Capital Directives**: Automated prioritization of engineering interventions (e.g., 24x7 water expansion, underground sewerage, anti-smog corridors, sponge city stormwater basins).
* **🗺️ Spatial Zoning Canvas Simulator**: Live HTML5 Canvas rendering of commercial cores, residential sectors, green buffers, and transit corridors.
* **💡 Lightweight Tech Stack**: Zero-framework Vanilla HTML, CSS, and JavaScript frontend with a Node.js / Express REST API server.

---

## 🛠️ Technology Stack

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, Vanilla JavaScript (ES6+) | Maximum speed, zero build overhead, high performance. |
| **Visualization** | Chart.js (CDN) & HTML5 2D Canvas | Lightweight radar graphics & spatial layout simulator. |
| **Backend** | Node.js, Express.js | Fast asynchronous RESTful API service. |
| **Data Format** | JSON | Standardized API payload communication. |

---

## 📂 Project Structure

```text
smart-urban-planning-dss/
├── package.json        # Node.js dependencies & scripts
├── server.js            # Express server & urban decision analytics engine
├── README.md            # Technical documentation & usage guide
└── public/
    ├── index.html       # HTML5 dashboard interface
    ├── style.css        # CSS variables, glassmorphism UI & layout system
    └── script.js        # DOM event handling, API integration & Canvas drawing
```

---

## 📑 20 Urban Planning Parameters & 8 Core Domains

The decision engine evaluates 20 parameters categorized across 8 statutory urban planning domains:

### 1. Demographic Domain
* **Population Density** (`cap/km²`): 1,000 – 35,000 cap/km² (URDPFI benchmark: 6,000–15,000 cap/km²).
* **Population Growth Rate** (`%/yr`): -2.0% – 8.0%/yr (Sustainable growth target: 1.0–2.5%).

### 2. Land Use Domain
* **Built-up Area %** (`%`): 10% – 90% (Balanced urban footprint norm: 50–65%).
* **Available / Vacant Land %** (`%`): 0% – 60% (Strategic reserve target: 10–20%).
* **Residential Land %** (`%`): 10% – 80% (URDPFI norm: 40–50%).
* **Commercial Land %** (`%`): 2% – 50% (URDPFI norm: 12–20%).

### 3. Transport & Mobility Domain
* **Road Density** (`km/km²`): 2.0 – 25.0 km/km² (URDPFI guideline: 10–18 km/km²).
* **Traffic Congestion Index** (`% delay`): 10% – 95% delay (Target: ≤ 35% delay / Level of Service C).
* **Public Transport Accessibility** (`/100`): 10 – 100 score (Target: ≥ 75 / TOD standard).

### 4. Utility Infrastructure Domain
* **Water Supply Coverage** (`%`): 20% – 100% (MoHUA SLB Target: 100% piped supply @ 135 lpcd).
* **Sewerage Network Coverage** (`%`): 10% – 100% (MoHUA SLB Target: 100% connected underground sewerage).
* **Waste Management Coverage** (`%`): 20% – 100% (CPCB / Swachh Bharat Target: 100% segregation & processing).

### 5. Environmental Quality Domain
* **Air Quality Index (AQI)** (`AQI`): 20 – 500 AQI (CPCB / WHO Satisfactory threshold: ≤ 100 AQI).
* **Green Space %** (`%`): 2.0% – 45.0% (URDPFI & WHO biophilic norm: ≥ 15%).

### 6. Disaster Resilience Domain
* **Flood Risk Index** (`/100`): 0 – 100 index (NDMA Safety threshold: < 25).

### 7. Public Services Domain
* **Distance to Hospital** (`km`): 0.3 – 15.0 km (URDPFI healthcare norm: ≤ 3.0 km / Golden hour).
* **Distance to School** (`km`): 0.2 – 6.0 km (15-Minute neighborhood norm: ≤ 1.0 km).

### 8. Economic Viability Domain
* **Average Monthly Household Income** (`₹k/mo`): ₹15k – ₹250k/month.
* **Land Market Valuation** (`₹k/m²`): ₹10k – ₹300k/m².
* **Infrastructure Capital Cost Index** (`₹Cr/km²`): ₹10Cr – ₹200Cr/km².

---

## 🚀 Quick Start Guide

### Prerequisites
* **Node.js** (v18+ recommended)
* **npm** (Node Package Manager)

### Step 1: Install Dependencies
Open your terminal in the project directory and run:
```bash
npm install
```

### Step 2: Start the Application Server
Run the single-command starter:
```bash
npm start
```
*(Alternatively, run `node server.js` directly)*

### Step 3: Access the Web Dashboard
Open your web browser and navigate to:
```text
http://localhost:5000
```

---

## 📡 REST API Documentation

### 1. Prediction & Decision Analytics
**Endpoint**: `POST /api/predict`  
**Headers**: `Content-Type: application/json`

#### Sample Request Payload:
```json
{
  "populationDensity": 22000,
  "populationGrowthRate": 1.8,
  "builtUpAreaPct": 78,
  "vacantLandPct": 5,
  "residentialLandPct": 20,
  "commercialLandPct": 48,
  "roadDensity": 16.5,
  "trafficCongestion": 72,
  "publicTransportAccessibility": 85,
  "waterSupplyCoverage": 92,
  "sewerageCoverage": 88,
  "wasteManagementCoverage": 85,
  "aqi": 185,
  "greenSpacePct": 6.5,
  "floodRisk": 38,
  "distanceToHospital": 1.5,
  "distanceToSchool": 1.2,
  "averageIncome": 95,
  "landPrice": 180,
  "infrastructureCost": 95
}
```

#### Sample Response Payload:
```json
{
  "params": { ... },
  "urgency": {
    "level": "High",
    "stressIndex": 48,
    "explanation": "Elevated pressure: traffic congestion (72% delay), green space (6.5%), and utility gaps need near-term municipal budget allocation."
  },
  "compositeInfrastructureScore": 74,
  "equilibriumDimensions": {
    "demographic": 78,
    "landUse": 85,
    "transport": 72,
    "infrastructure": 88,
    "environment": 52,
    "disaster": 62,
    "publicServices": 95,
    "economic": 92
  },
  "benchmarks": [
    {
      "name": "Water Supply Coverage",
      "target": "100%",
      "current": "92%",
      "status": "Moderate Deficit"
    },
    ...
  ],
  "projects": [
    {
      "name": "Clean Air Action & Smog Towers",
      "priority": "Critical",
      "impact": "Deploys anti-smog sweepers & low-emission transit zones."
    },
    ...
  ]
}
```

### 2. System Health Check
**Endpoint**: `GET /api/health`

#### Sample Response:
```json
{
  "status": "ONLINE",
  "service": "Smart Urban Planning DSS",
  "timestamp": "2026-10-09T00:00:00.000Z"
}
```

---

## ⚖️ Statutory Standards Reference Framework

* **URDPFI Guidelines (2014)** — Urban and Regional Development Plans Formulation and Implementation Guidelines, Ministry of Housing and Urban Affairs (India).
* **MoHUA Service Level Benchmarks (SLB)** — Universal water supply (135 lpcd) and 100% underground sewerage coverage.
* **CPCB Ambient Air Quality Standards** — National Ambient Air Quality Standards (NAAQS) & WHO Air Quality Guidelines (Satisfactory ceiling ≤ 100 AQI).
* **NDMA Urban Flood Guidelines** — National Disaster Management Authority urban inundation and stormwater retention benchmarks.

---

## 📜 License & Acknowledgments

* Developed for **Smart Urban Planning & Municipal Decision Support**.
* Built using open web standards (HTML5, CSS3, ES6 JavaScript, Express.js).
