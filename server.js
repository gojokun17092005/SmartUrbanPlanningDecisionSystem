import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Urban Planning Calculation Logic
function calculateUrbanPrediction(params) {
  const p = {
    populationDensity: Number(params.populationDensity ?? 12500),
    populationGrowthRate: Number(params.populationGrowthRate ?? 2.4),
    builtUpAreaPct: Number(params.builtUpAreaPct ?? 62),
    vacantLandPct: Number(params.vacantLandPct ?? 12),
    residentialLandPct: Number(params.residentialLandPct ?? 45),
    commercialLandPct: Number(params.commercialLandPct ?? 18),
    roadDensity: Number(params.roadDensity ?? 11.5),
    trafficCongestion: Number(params.trafficCongestion ?? 48),
    publicTransportAccessibility: Number(params.publicTransportAccessibility ?? 65),
    waterSupplyCoverage: Number(params.waterSupplyCoverage ?? 82),
    sewerageCoverage: Number(params.sewerageCoverage ?? 72),
    wasteManagementCoverage: Number(params.wasteManagementCoverage ?? 76),
    aqi: Number(params.aqi ?? 135),
    greenSpacePct: Number(params.greenSpacePct ?? 14.5),
    floodRisk: Number(params.floodRisk ?? 32),
    distanceToHospital: Number(params.distanceToHospital ?? 2.4),
    distanceToSchool: Number(params.distanceToSchool ?? 0.9),
    averageIncome: Number(params.averageIncome ?? 68),
    landPrice: Number(params.landPrice ?? 85),
    infrastructureCost: Number(params.infrastructureCost ?? 48),
  };

  // Domain Scores (0 - 100)
  const demographicScore = Math.round(
    (p.populationDensity > 18000 ? Math.max(10, 100 - (p.populationDensity - 18000) / 200) : 95) * 0.6 +
    (p.populationGrowthRate > 3.5 ? Math.max(20, 100 - (p.populationGrowthRate - 3.5) * 18) : 92) * 0.4
  );

  const landUseScore = Math.round(
    (p.builtUpAreaPct > 80 ? Math.max(15, 100 - (p.builtUpAreaPct - 80) * 4) : 90) * 0.6 +
    (p.vacantLandPct < 5 ? 35 : 90) * 0.4
  );

  const roadScore = Math.min(100, Math.max(15, (p.roadDensity / 15) * 85));
  const congestionScore = Math.max(10, 100 - p.trafficCongestion);
  const transportScore = Math.round(roadScore * 0.3 + congestionScore * 0.35 + p.publicTransportAccessibility * 0.35);

  const infrastructureEquilibrium = Math.round(
    p.waterSupplyCoverage * 0.38 + p.sewerageCoverage * 0.34 + p.wasteManagementCoverage * 0.28
  );

  const aqiScore = p.aqi <= 50 ? 100 : Math.round(Math.max(10, 100 - ((p.aqi - 50) / 250) * 90));
  const greenScore = Math.min(100, Math.max(10, Math.round((p.greenSpacePct / 18) * 95)));
  const environmentScore = Math.round(aqiScore * 0.55 + greenScore * 0.45);

  const disasterScore = Math.round(Math.max(10, 100 - p.floodRisk));

  const hospitalScore = p.distanceToHospital <= 2.5 ? 95 : Math.max(15, Math.round(100 - (p.distanceToHospital - 2.5) * 12));
  const schoolScore = p.distanceToSchool <= 1.0 ? 98 : Math.max(20, Math.round(100 - (p.distanceToSchool - 1.0) * 20));
  const publicServicesScore = Math.round(hospitalScore * 0.55 + schoolScore * 0.45);

  const affordabilityRatio = (p.averageIncome * 12) / Math.max(10, p.landPrice);
  const economicScore = Math.round(
    Math.min(100, Math.max(20, Math.min(85, affordabilityRatio * 10) + (100 - Math.min(80, p.infrastructureCost * 0.6)) * 0.35))
  );

  const compositeInfrastructureScore = Math.round(
    demographicScore * 0.10 + landUseScore * 0.10 + transportScore * 0.16 +
    infrastructureEquilibrium * 0.20 + environmentScore * 0.18 + disasterScore * 0.10 +
    publicServicesScore * 0.10 + economicScore * 0.06
  );

  // Decision Stress Index
  let stressPoints = 0;
  if (p.aqi > 250) stressPoints += 25; else if (p.aqi > 150) stressPoints += 15; else if (p.aqi > 100) stressPoints += 8;
  if (p.greenSpacePct < 6.0) stressPoints += 20; else if (p.greenSpacePct < 12.0) stressPoints += 10;
  if (p.waterSupplyCoverage < 65) stressPoints += 22; else if (p.waterSupplyCoverage < 80) stressPoints += 10;
  if (p.sewerageCoverage < 60) stressPoints += 20; else if (p.sewerageCoverage < 75) stressPoints += 10;
  if (p.trafficCongestion > 65) stressPoints += 18; else if (p.trafficCongestion > 45) stressPoints += 10;
  if (p.floodRisk > 55) stressPoints += 22; else if (p.floodRisk > 35) stressPoints += 12;

  const stressIndex = Math.min(100, Math.round(stressPoints));

  let level = "Moderate";
  let explanation = "";

  if (stressIndex >= 60) {
    level = "Critical";
    explanation = `Critical deficits detected: air pollution (AQI ${p.aqi}), utility gaps (Water ${p.waterSupplyCoverage}%, Sewer ${p.sewerageCoverage}%), or flood risk (${p.floodRisk}/100) require urgent intervention.`;
  } else if (stressIndex >= 38) {
    level = "High";
    explanation = `Elevated pressure: traffic congestion (${p.trafficCongestion}% delay), green space (${p.greenSpacePct}%), and utility gaps need near-term municipal budget allocation.`;
  } else if (stressIndex >= 20) {
    level = "Moderate";
    explanation = `Stable operation: incremental transit upgrades (${p.publicTransportAccessibility}/100) and waste management will sustain urban equilibrium.`;
  } else {
    level = "Low";
    explanation = `Optimal urban equilibrium: air quality (AQI ${p.aqi}), water (${p.waterSupplyCoverage}%), and green space (${p.greenSpacePct}%) meet statutory benchmarks.`;
  }

  // Statutory Benchmarks
  const benchmarks = [
    { name: "Water Supply Coverage", target: "100%", current: `${p.waterSupplyCoverage}%`, status: p.waterSupplyCoverage >= 100 ? "Pass" : p.waterSupplyCoverage >= 80 ? "Moderate Deficit" : "Critical Gap" },
    { name: "Sewerage Network Coverage", target: "100%", current: `${p.sewerageCoverage}%`, status: p.sewerageCoverage >= 100 ? "Pass" : p.sewerageCoverage >= 75 ? "Sub-Optimal" : "Severe Deficit" },
    { name: "Air Quality Index (AQI)", target: "≤ 100", current: `${p.aqi} AQI`, status: p.aqi <= 100 ? "Pass" : p.aqi <= 150 ? "Moderate Pollution" : "Severe Air Pollution" },
    { name: "Green Space Coverage", target: "≥ 15%", current: `${p.greenSpacePct}%`, status: p.greenSpacePct >= 15 ? "Pass" : p.greenSpacePct >= 10 ? "Below Norm" : "Ecological Deficit" },
    { name: "Traffic Congestion", target: "≤ 35%", current: `${p.trafficCongestion}%`, status: p.trafficCongestion <= 35 ? "Pass" : p.trafficCongestion <= 60 ? "Moderate Congestion" : "Severe Gridlock" },
    { name: "Flood Risk Index", target: "< 25", current: `${p.floodRisk} / 100`, status: p.floodRisk <= 25 ? "Pass" : p.floodRisk <= 50 ? "Moderate Hazard" : "High Hazard" },
  ];

  // Actionable Projects
  const projects = [
    { name: "Universal Potable Water Pipeline", priority: p.waterSupplyCoverage < 75 ? "Critical" : "High", impact: `Eliminates ${Math.max(0, 100 - p.waterSupplyCoverage)}% water deficit.` },
    { name: "Underground Sewerage Network & STPs", priority: p.sewerageCoverage < 70 ? "Critical" : "High", impact: `Serves unsewered wards to eliminate raw effluent discharge.` },
    { name: "Clean Air Action & Smog Towers", priority: p.aqi > 150 ? "Critical" : "Medium", impact: "Deploys anti-smog sweepers & low-emission transit zones." },
    { name: "Stormwater Drainage & Sponge Corridors", priority: p.floodRisk > 40 ? "Critical" : "Medium", impact: "Upgrades roadside drainage and constructs retention bioswales." },
    { name: "Urban Green Buffer Acquisition", priority: p.greenSpacePct < 15 ? "High" : "Low", impact: `Reclaims vacant municipal land to hit 15% statutory green target.` },
  ];

  return {
    params: p,
    urgency: { level, stressIndex, explanation },
    compositeInfrastructureScore,
    equilibriumDimensions: {
      demographic: demographicScore,
      landUse: landUseScore,
      transport: transportScore,
      infrastructure: infrastructureEquilibrium,
      environment: environmentScore,
      disaster: disasterScore,
      publicServices: publicServicesScore,
      economic: economicScore,
    },
    benchmarks,
    projects,
  };
}

// API Route
app.post('/api/predict', async (req, res) => {
  const result = calculateUrbanPrediction(req.body || {});
  
  // Try fetching from ML service
  let mlResult = null;
  try {
    const mlResponse = await fetch('http://127.0.0.1:8000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result.params),
      signal: AbortSignal.timeout(3000) // 3 seconds timeout
    });
    
    if (mlResponse.ok) {
      mlResult = await mlResponse.json();
    } else {
      console.warn(`ML Service returned ${mlResponse.status}`);
      mlResult = { error: "ML Service Unavailable", model_status: "unavailable" };
    }
  } catch (err) {
    console.warn('ML Service unreachable:', err.message);
    mlResult = { error: "ML Service Unreachable", model_status: "unavailable" };
  }
  
  res.json({
    ...result,
    mlAnalytics: mlResult
  });
});

// Health check
app.get('/api/health', async (req, res) => {
  let mlHealth = { status: 'UNAVAILABLE' };
  try {
    const mlResponse = await fetch('http://127.0.0.1:8000/health', { signal: AbortSignal.timeout(2000) });
    if (mlResponse.ok) {
      mlHealth = await mlResponse.json();
    }
  } catch (err) {
    // ML service down
  }
  
  res.json({ 
    status: 'ONLINE', 
    service: 'Smart Urban Planning DSS',
    mlService: mlHealth.status,
    timestamp: new Date().toISOString() 
  });
});

// Fallback to static index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 Smart Urban Planning DSS running on http://localhost:${PORT}`);
  console.log(`🧠 ML Prediction Service expected at http://127.0.0.1:8000`);
  console.log(`======================================================\n`);
});
