// 20 Urban Parameter Definitions
const PARAM_SCHEMA = [
  { id: 'populationDensity', name: 'Population Density', category: 'Demographic', unit: 'cap/km²', min: 1000, max: 35000, step: 500, default: 12500 },
  { id: 'populationGrowthRate', name: 'Growth Rate', category: 'Demographic', unit: '%/yr', min: -2, max: 8, step: 0.1, default: 2.4 },
  { id: 'builtUpAreaPct', name: 'Built-up Area', category: 'Land Use', unit: '%', min: 10, max: 90, step: 1, default: 62 },
  { id: 'vacantLandPct', name: 'Vacant Land', category: 'Land Use', unit: '%', min: 0, max: 60, step: 1, default: 12 },
  { id: 'residentialLandPct', name: 'Residential Land', category: 'Land Use', unit: '%', min: 10, max: 80, step: 1, default: 45 },
  { id: 'commercialLandPct', name: 'Commercial Land', category: 'Land Use', unit: '%', min: 2, max: 50, step: 1, default: 18 },
  { id: 'roadDensity', name: 'Road Density', category: 'Transport', unit: 'km/km²', min: 2, max: 25, step: 0.5, default: 11.5 },
  { id: 'trafficCongestion', name: 'Traffic Congestion', category: 'Transport', unit: '% delay', min: 10, max: 95, step: 1, default: 48 },
  { id: 'publicTransportAccessibility', name: 'Public Transit Access', category: 'Transport', unit: '/100', min: 10, max: 100, step: 1, default: 65 },
  { id: 'waterSupplyCoverage', name: 'Water Coverage', category: 'Infrastructure', unit: '%', min: 20, max: 100, step: 1, default: 82 },
  { id: 'sewerageCoverage', name: 'Sewerage Coverage', category: 'Infrastructure', unit: '%', min: 10, max: 100, step: 1, default: 72 },
  { id: 'wasteManagementCoverage', name: 'Waste Management', category: 'Infrastructure', unit: '%', min: 20, max: 100, step: 1, default: 76 },
  { id: 'aqi', name: 'Air Quality (AQI)', category: 'Environment', unit: 'AQI', min: 20, max: 500, step: 5, default: 135 },
  { id: 'greenSpacePct', name: 'Green Space %', category: 'Environment', unit: '%', min: 2, max: 45, step: 0.5, default: 14.5 },
  { id: 'floodRisk', name: 'Flood Risk Index', category: 'Disaster', unit: '/100', min: 0, max: 100, step: 1, default: 32 },
  { id: 'distanceToHospital', name: 'Dist. to Hospital', category: 'Public Service', unit: 'km', min: 0.3, max: 15, step: 0.1, default: 2.4 },
  { id: 'distanceToSchool', name: 'Dist. to School', category: 'Public Service', unit: 'km', min: 0.2, max: 6, step: 0.1, default: 0.9 },
  { id: 'averageIncome', name: 'Avg Income', category: 'Economic', unit: '₹k/mo', min: 15, max: 250, step: 5, default: 68 },
  { id: 'landPrice', name: 'Land Price', category: 'Economic', unit: '₹k/m²', min: 10, max: 300, step: 5, default: 85 },
  { id: 'infrastructureCost', name: 'Infra Cost Index', category: 'Economic', unit: '₹Cr/km²', min: 10, max: 200, step: 5, default: 48 },
];

const PRESET_SCENARIOS = {
  metro_cbd: {
    populationDensity: 22000, populationGrowthRate: 1.8, builtUpAreaPct: 78, vacantLandPct: 5, residentialLandPct: 20, commercialLandPct: 48,
    roadDensity: 16.5, trafficCongestion: 72, publicTransportAccessibility: 85, waterSupplyCoverage: 92, sewerageCoverage: 88, wasteManagementCoverage: 85,
    aqi: 185, greenSpacePct: 6.5, floodRisk: 38, distanceToHospital: 1.5, distanceToSchool: 1.2, averageIncome: 95, landPrice: 180, infrastructureCost: 95
  },
  residential: {
    populationDensity: 19500, populationGrowthRate: 3.4, builtUpAreaPct: 70, vacantLandPct: 8, residentialLandPct: 65, commercialLandPct: 12,
    roadDensity: 12.0, trafficCongestion: 58, publicTransportAccessibility: 62, waterSupplyCoverage: 76, sewerageCoverage: 68, wasteManagementCoverage: 74,
    aqi: 142, greenSpacePct: 8.2, floodRisk: 44, distanceToHospital: 3.2, distanceToSchool: 0.8, averageIncome: 65, landPrice: 85, infrastructureCost: 55
  },
  eco_garden: {
    populationDensity: 6500, populationGrowthRate: 1.4, builtUpAreaPct: 42, vacantLandPct: 22, residentialLandPct: 55, commercialLandPct: 8,
    roadDensity: 9.5, trafficCongestion: 22, publicTransportAccessibility: 52, waterSupplyCoverage: 94, sewerageCoverage: 88, wasteManagementCoverage: 90,
    aqi: 65, greenSpacePct: 24.0, floodRisk: 16, distanceToHospital: 3.8, distanceToSchool: 1.2, averageIncome: 88, landPrice: 65, infrastructureCost: 35
  },
  industrial: {
    populationDensity: 4800, populationGrowthRate: 1.2, builtUpAreaPct: 65, vacantLandPct: 18, residentialLandPct: 8, commercialLandPct: 15,
    roadDensity: 13.5, trafficCongestion: 52, publicTransportAccessibility: 40, waterSupplyCoverage: 74, sewerageCoverage: 62, wasteManagementCoverage: 70,
    aqi: 225, greenSpacePct: 7.0, floodRisk: 48, distanceToHospital: 5.5, distanceToSchool: 3.2, averageIncome: 42, landPrice: 45, infrastructureCost: 72
  },
  tod_corridor: {
    populationDensity: 14500, populationGrowthRate: 3.6, builtUpAreaPct: 66, vacantLandPct: 14, residentialLandPct: 35, commercialLandPct: 38,
    roadDensity: 15.0, trafficCongestion: 54, publicTransportAccessibility: 88, waterSupplyCoverage: 94, sewerageCoverage: 90, wasteManagementCoverage: 88,
    aqi: 112, greenSpacePct: 15.5, floodRisk: 24, distanceToHospital: 2.1, distanceToSchool: 1.1, averageIncome: 120, landPrice: 140, infrastructureCost: 78
  },
  mixed_15min: {
    populationDensity: 16000, populationGrowthRate: 2.2, builtUpAreaPct: 72, vacantLandPct: 6, residentialLandPct: 40, commercialLandPct: 32,
    roadDensity: 14.2, trafficCongestion: 62, publicTransportAccessibility: 78, waterSupplyCoverage: 86, sewerageCoverage: 82, wasteManagementCoverage: 84,
    aqi: 128, greenSpacePct: 11.0, floodRisk: 30, distanceToHospital: 1.8, distanceToSchool: 0.6, averageIncome: 75, landPrice: 110, infrastructureCost: 62
  }
};

let currentParams = { ...PRESET_SCENARIOS.metro_cbd };
let currentCategory = 'All';
let radarChartInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  renderSliders();
  setupEvents();
  runSimulation();
});

function renderSliders() {
  const grid = document.getElementById('slidersGrid');
  grid.innerHTML = '';

  const list = currentCategory === 'All' ? PARAM_SCHEMA : PARAM_SCHEMA.filter(p => p.category === currentCategory);

  list.forEach(p => {
    const val = currentParams[p.id] ?? p.default;
    const box = document.createElement('div');
    box.className = 'slider-box';
    box.innerHTML = `
      <div class="slider-header">
        <span class="slider-name">${p.name}</span>
        <span class="slider-val" id="lbl_${p.id}">${val} ${p.unit}</span>
      </div>
      <input type="range" id="input_${p.id}" min="${p.min}" max="${p.max}" step="${p.step}" value="${val}" />
    `;
    grid.appendChild(box);

    const input = box.querySelector('input');
    input.addEventListener('input', (e) => {
      const v = Number(e.target.value);
      currentParams[p.id] = v;
      document.getElementById(`lbl_${p.id}`).textContent = `${v} ${p.unit}`;
      runSimulation();
    });
  });
}

function setupEvents() {
  document.getElementById('presetSelect').addEventListener('change', (e) => {
    const preset = PRESET_SCENARIOS[e.target.value];
    if (preset) {
      currentParams = { ...preset };
      renderSliders();
      runSimulation();
      showToast(`Selected Scenario: ${e.target.options[e.target.selectedIndex].text}`);
    }
  });

  document.getElementById('btnReset').addEventListener('click', () => {
    document.getElementById('presetSelect').value = 'metro_cbd';
    currentParams = { ...PRESET_SCENARIOS.metro_cbd };
    renderSliders();
    runSimulation();
    showToast('↺ Preset parameters reset to Metropolitan CBD');
    flashCards();
  });

  document.getElementById('btnSimulate').addEventListener('click', () => {
    runSimulation();
    showToast('⚡ Simulation computed successfully');
    flashCards();
  });

  document.getElementById('pillsContainer').addEventListener('click', (e) => {
    if (e.target.classList.contains('pill')) {
      document.querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.dataset.cat;
      renderSliders();
    }
  });
}

function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function flashCards() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(c => {
    c.classList.add('card-pulse');
    setTimeout(() => c.classList.remove('card-pulse'), 500);
  });
}

async function runSimulation() {
  try {
    const res = await fetch('/api/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(currentParams),
    });

    if (res.ok) {
      const data = await res.json();
      updateUI(data);
      return;
    }
  } catch (err) {
    console.warn('Backend API unavailable, using local calculation fallback:', err.message);
  }

  // Local fallback calculation engine
  const localData = calculateLocalPrediction(currentParams);
  updateUI(localData);
}

function calculateLocalPrediction(params) {
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

  const benchmarks = [
    { name: "Water Supply Coverage", target: "100%", current: `${p.waterSupplyCoverage}%`, status: p.waterSupplyCoverage >= 100 ? "Pass" : p.waterSupplyCoverage >= 80 ? "Moderate Deficit" : "Critical Gap" },
    { name: "Sewerage Network Coverage", target: "100%", current: `${p.sewerageCoverage}%`, status: p.sewerageCoverage >= 100 ? "Pass" : p.sewerageCoverage >= 75 ? "Sub-Optimal" : "Severe Deficit" },
    { name: "Air Quality Index (AQI)", target: "≤ 100", current: `${p.aqi} AQI`, status: p.aqi <= 100 ? "Pass" : p.aqi <= 150 ? "Moderate Pollution" : "Severe Air Pollution" },
    { name: "Green Space Coverage", target: "≥ 15%", current: `${p.greenSpacePct}%`, status: p.greenSpacePct >= 15 ? "Pass" : p.greenSpacePct >= 10 ? "Below Norm" : "Ecological Deficit" },
    { name: "Traffic Congestion", target: "≤ 35%", current: `${p.trafficCongestion}%`, status: p.trafficCongestion <= 35 ? "Pass" : p.trafficCongestion <= 60 ? "Moderate Congestion" : "Severe Gridlock" },
    { name: "Flood Risk Index", target: "< 25", current: `${p.floodRisk} / 100`, status: p.floodRisk <= 25 ? "Pass" : p.floodRisk <= 50 ? "Moderate Hazard" : "High Hazard" },
  ];

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

function updateUI(data) {
  const { urgency, compositeInfrastructureScore, equilibriumDimensions, benchmarks, projects } = data;

  // Banner
  const card = document.getElementById('urgencyCard');
  card.className = `card urgency-banner level-${urgency.level}`;
  
  const badge = document.getElementById('urgencyBadge');
  badge.className = `badge badge-${urgency.level}`;
  badge.textContent = `${urgency.level.toUpperCase()} URGENCY`;

  document.getElementById('urgencyTitle').textContent = `${urgency.level} Priority Urban Decision Required`;
  document.getElementById('urgencyExplanation').textContent = urgency.explanation;
  document.getElementById('stressVal').textContent = urgency.stressIndex;
  document.getElementById('compositeVal').textContent = compositeInfrastructureScore;

  // Domain Scores
  const domainGrid = document.getElementById('domainScoresGrid');
  domainGrid.innerHTML = '';
  Object.entries(equilibriumDimensions).forEach(([key, val]) => {
    const div = document.createElement('div');
    div.className = 'domain-item';
    div.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="color: var(--text-muted); text-transform: capitalize; font-weight: 600;">${key}</span>
        <span class="score">${val} / 100</span>
      </div>
      <div class="domain-bar-bg">
        <div class="domain-bar-fill" style="width: ${val}%;"></div>
      </div>
    `;
    domainGrid.appendChild(div);
  });

  // Render Chart.js Radar
  renderRadarChart(equilibriumDimensions);

  // Benchmarks Table
  const tbody = document.getElementById('benchmarksTbody');
  tbody.innerHTML = '';
  benchmarks.forEach(b => {
    const tr = document.createElement('tr');
    const isPass = b.status === 'Pass' || b.status.includes('Universal');
    const statusColor = isPass ? 'var(--accent-emerald)' : 'var(--accent-rose)';

    tr.innerHTML = `
      <td><strong>${b.name}</strong></td>
      <td>${b.target}</td>
      <td><strong style="color: ${statusColor};">${b.current}</strong></td>
      <td><span style="color: ${statusColor}; font-weight: 600;">${b.status}</span></td>
    `;
    tbody.appendChild(tr);
  });

  // Projects List
  const projectsList = document.getElementById('projectsList');
  projectsList.innerHTML = '';
  projects.forEach(p => {
    const badgeColor = p.priority === 'Critical' ? 'var(--accent-rose)' : p.priority === 'High' ? 'var(--accent-amber)' : 'var(--primary-cyan)';

    const div = document.createElement('div');
    div.className = 'project-item';
    div.innerHTML = `
      <div class="project-title">
        <span>${p.name}</span>
        <span style="font-size: 0.7rem; color: ${badgeColor}; font-weight: 700;">${p.priority} Priority</span>
      </div>
      <div class="project-desc">${p.impact}</div>
    `;
    projectsList.appendChild(div);
  });

  // Canvas Drawing
  drawMap(currentParams);
}

function renderRadarChart(dims = {}) {
  const ctx = document.getElementById('radarChart')?.getContext('2d');
  if (!ctx) return;

  const labels = ['Demographic', 'Land Use', 'Transport', 'Infrastructure', 'Environment', 'Disaster', 'Public Services', 'Economic'];
  const values = [
    dims.demographic || 80,
    dims.landUse || 75,
    dims.transport || 65,
    dims.infrastructure || 70,
    dims.environment || 60,
    dims.disaster || 68,
    dims.publicServices || 85,
    dims.economic || 75
  ];

  if (radarChartInstance) {
    radarChartInstance.destroy();
  }

  if (typeof Chart !== 'undefined') {
    radarChartInstance = new Chart(ctx, {
      type: 'radar',
      data: {
        labels,
        datasets: [{
          label: 'Sector Performance',
          data: values,
          backgroundColor: 'rgba(56, 189, 248, 0.25)',
          borderColor: '#38bdf8',
          borderWidth: 2,
          pointBackgroundColor: '#38bdf8',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
            grid: { color: 'rgba(255, 255, 255, 0.1)' },
            pointLabels: { color: '#94a3b8', font: { size: 10 } },
            ticks: { backdropColor: 'transparent', color: '#64748b', stepSize: 20 },
            suggestedMin: 0,
            suggestedMax: 100,
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }
}

function drawMap(p) {
  const canvas = document.getElementById('zoningCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  ctx.fillStyle = '#070a12';
  ctx.fillRect(0, 0, w, h);

  // Background Grid Lines
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 30) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 0; y < h; y += 30) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  // Green Zone Buffer
  const greenW = Math.max(40, w * ((p.greenSpacePct || 14.5) / 100) * 1.5);
  ctx.fillStyle = 'rgba(16, 185, 129, 0.25)';
  ctx.strokeStyle = '#10b981';
  ctx.lineWidth = 1.5;
  ctx.fillRect(15, 15, greenW, 75);
  ctx.strokeRect(15, 15, greenW, 75);
  ctx.fillStyle = '#10b981';
  ctx.font = '11px sans-serif';
  ctx.fillText(`Green Buffer Zone (${(p.greenSpacePct || 14.5)}%)`, 25, 40);

  // Residential Sector
  const resW = Math.max(90, w * ((p.residentialLandPct || 45) / 100) * 0.8);
  ctx.fillStyle = 'rgba(56, 189, 248, 0.25)';
  ctx.strokeStyle = '#38bdf8';
  ctx.fillRect(15, 110, resW, 110);
  ctx.strokeRect(15, 110, resW, 110);
  ctx.fillStyle = '#38bdf8';
  ctx.fillText(`Residential Zone (${(p.residentialLandPct || 45)}%)`, 25, 135);

  // Commercial Core
  const comW = Math.max(80, w * ((p.commercialLandPct || 18) / 100) * 1.2);
  ctx.fillStyle = 'rgba(245, 158, 11, 0.25)';
  ctx.strokeStyle = '#f59e0b';
  ctx.fillRect(resW + 30, 110, comW, 110);
  ctx.strokeRect(resW + 30, 110, comW, 110);
  ctx.fillStyle = '#f59e0b';
  ctx.fillText(`Commercial Core (${(p.commercialLandPct || 18)}%)`, resW + 40, 135);

  // Transit Corridor
  ctx.strokeStyle = '#ec4899';
  ctx.lineWidth = 3;
  ctx.setLineDash([6, 3]);
  ctx.beginPath();
  ctx.moveTo(0, h / 2);
  ctx.lineTo(w, h / 2);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#ec4899';
  ctx.fillText(`Transit Corridor (${p.roadDensity || 11.5} km/km²)`, w - 180, h / 2 - 8);
}
