// 20 Urban Parameter Definitions
const PARAM_SCHEMA = [
  { id: 'populationDensity', name: 'Population Density', category: 'Demographic', unit: 'cap/km²', min: 1000, max: 35000, step: 500, default: 12500, desc: "Number of residents per square kilometer. Affects infrastructure load and service reach." },
  { id: 'populationGrowthRate', name: 'Growth Rate', category: 'Demographic', unit: '%/yr', min: -2, max: 8, step: 0.1, default: 2.4, desc: "Annual change in population. High growth requires rapid expansion of housing and utilities." },
  { id: 'builtUpAreaPct', name: 'Built-up Area', category: 'Land Use', unit: '%', min: 10, max: 90, step: 1, default: 62, desc: "Percentage of land covered by buildings and roads. Balances development with open space." },
  { id: 'vacantLandPct', name: 'Vacant Land', category: 'Land Use', unit: '%', min: 0, max: 60, step: 1, default: 12, desc: "Undeveloped land available for future strategic reserves, parks, or new projects." },
  { id: 'residentialLandPct', name: 'Residential Land', category: 'Land Use', unit: '%', min: 10, max: 80, step: 1, default: 45, desc: "Share of land zoned for housing. A healthy balance prevents overcrowding." },
  { id: 'commercialLandPct', name: 'Commercial Land', category: 'Land Use', unit: '%', min: 2, max: 50, step: 1, default: 18, desc: "Land zoned for business and trade. Supports local economy and employment." },
  { id: 'roadDensity', name: 'Road Density', category: 'Transport', unit: 'km/km²', min: 2, max: 25, step: 0.5, default: 11.5, desc: "Length of roads per square kilometer. Impacts mobility, freight, and traffic distribution." },
  { id: 'trafficCongestion', name: 'Traffic Congestion', category: 'Transport', unit: '% delay', min: 10, max: 95, step: 1, default: 48, desc: "Average delay compared to free-flowing traffic. High congestion impacts air quality and productivity." },
  { id: 'publicTransportAccessibility', name: 'Public Transit Access', category: 'Transport', unit: '/100', min: 10, max: 100, step: 1, default: 65, desc: "An indicator (0-100) of how easily residents can reach reliable public transportation." },
  { id: 'waterSupplyCoverage', name: 'Water Coverage', category: 'Infrastructure', unit: '%', min: 20, max: 100, step: 1, default: 82, desc: "Percentage of households with access to piped, potable water supply." },
  { id: 'sewerageCoverage', name: 'Sewerage Coverage', category: 'Infrastructure', unit: '%', min: 10, max: 100, step: 1, default: 72, desc: "Percentage of properties connected to a formal underground sewerage network." },
  { id: 'wasteManagementCoverage', name: 'Waste Management', category: 'Infrastructure', unit: '%', min: 20, max: 100, step: 1, default: 76, desc: "Percentage of municipal solid waste that is formally collected and processed." },
  { id: 'aqi', name: 'Air Quality (AQI)', category: 'Environment', unit: 'AQI', min: 20, max: 500, step: 5, default: 135, desc: "Air Quality Index. Lower is better for public health and environmental sustainability." },
  { id: 'greenSpacePct', name: 'Green Space %', category: 'Environment', unit: '%', min: 2, max: 45, step: 0.5, default: 14.5, desc: "Share of the area dedicated to parks, vegetation, and other green spaces." },
  { id: 'floodRisk', name: 'Flood Risk Index', category: 'Disaster', unit: '/100', min: 0, max: 100, step: 1, default: 32, desc: "A risk indicator (0-100) combining drainage capacity and historical inundation." },
  { id: 'distanceToHospital', name: 'Dist. to Hospital', category: 'Public Service', unit: 'km', min: 0.3, max: 15, step: 0.1, default: 2.4, desc: "Average distance to the nearest major healthcare facility." },
  { id: 'distanceToSchool', name: 'Dist. to School', category: 'Public Service', unit: 'km', min: 0.2, max: 6, step: 0.1, default: 0.9, desc: "Average distance to primary or secondary educational facilities." },
  { id: 'averageIncome', name: 'Avg Income', category: 'Economic', unit: '₹k/mo', min: 15, max: 250, step: 5, default: 68, desc: "Average monthly household income, affecting affordability and tax base." },
  { id: 'landPrice', name: 'Land Price', category: 'Economic', unit: '₹k/m²', min: 10, max: 300, step: 5, default: 85, desc: "Average property valuation. Influences housing affordability and commercial viability." },
  { id: 'infrastructureCost', name: 'Infra Cost Index', category: 'Economic', unit: '₹Cr/km²', min: 10, max: 200, step: 5, default: 48, desc: "Cost index for developing and maintaining municipal infrastructure." },
];

const PRESET_SCENARIOS = {
  metro_cbd: {
    meta: { name: "Metropolitan CBD", desc: "Explore congestion, pollution, and pressure on central infrastructure." },
    params: {
      populationDensity: 22000, populationGrowthRate: 1.8, builtUpAreaPct: 78, vacantLandPct: 5, residentialLandPct: 20, commercialLandPct: 48,
      roadDensity: 16.5, trafficCongestion: 72, publicTransportAccessibility: 85, waterSupplyCoverage: 92, sewerageCoverage: 88, wasteManagementCoverage: 85,
      aqi: 185, greenSpacePct: 6.5, floodRisk: 38, distanceToHospital: 1.5, distanceToSchool: 1.2, averageIncome: 95, landPrice: 180, infrastructureCost: 95
    }
  },
  residential: {
    meta: { name: "Rapid Urbanizing Residential Sector", desc: "Understand how population growth affects housing, utilities, and public services." },
    params: {
      populationDensity: 19500, populationGrowthRate: 3.4, builtUpAreaPct: 70, vacantLandPct: 8, residentialLandPct: 65, commercialLandPct: 12,
      roadDensity: 12.0, trafficCongestion: 58, publicTransportAccessibility: 62, waterSupplyCoverage: 76, sewerageCoverage: 68, wasteManagementCoverage: 74,
      aqi: 142, greenSpacePct: 8.2, floodRisk: 44, distanceToHospital: 3.2, distanceToSchool: 0.8, averageIncome: 65, landPrice: 85, infrastructureCost: 55
    }
  },
  eco_garden: {
    meta: { name: "Sustainable Eco-Garden City", desc: "Explore the balance between urban development and environmental sustainability." },
    params: {
      populationDensity: 6500, populationGrowthRate: 1.4, builtUpAreaPct: 42, vacantLandPct: 22, residentialLandPct: 55, commercialLandPct: 8,
      roadDensity: 9.5, trafficCongestion: 22, publicTransportAccessibility: 52, waterSupplyCoverage: 94, sewerageCoverage: 88, wasteManagementCoverage: 90,
      aqi: 65, greenSpacePct: 24.0, floodRisk: 16, distanceToHospital: 3.8, distanceToSchool: 1.2, averageIncome: 88, landPrice: 65, infrastructureCost: 35
    }
  },
  industrial: {
    meta: { name: "Industrial & Manufacturing Hub", desc: "Examine industrial infrastructure, air quality, utilities, and resilience." },
    params: {
      populationDensity: 4800, populationGrowthRate: 1.2, builtUpAreaPct: 65, vacantLandPct: 18, residentialLandPct: 8, commercialLandPct: 15,
      roadDensity: 13.5, trafficCongestion: 52, publicTransportAccessibility: 40, waterSupplyCoverage: 74, sewerageCoverage: 62, wasteManagementCoverage: 70,
      aqi: 225, greenSpacePct: 7.0, floodRisk: 48, distanceToHospital: 5.5, distanceToSchool: 3.2, averageIncome: 42, landPrice: 45, infrastructureCost: 72
    }
  },
  tod_corridor: {
    meta: { name: "Transit-Oriented IT Corridor", desc: "Explore commuter demand, transport accessibility, and employment growth." },
    params: {
      populationDensity: 14500, populationGrowthRate: 3.6, builtUpAreaPct: 66, vacantLandPct: 14, residentialLandPct: 35, commercialLandPct: 38,
      roadDensity: 15.0, trafficCongestion: 54, publicTransportAccessibility: 88, waterSupplyCoverage: 94, sewerageCoverage: 90, wasteManagementCoverage: 88,
      aqi: 112, greenSpacePct: 15.5, floodRisk: 24, distanceToHospital: 2.1, distanceToSchool: 1.1, averageIncome: 120, landPrice: 140, infrastructureCost: 78
    }
  },
  mixed_15min: {
    meta: { name: "15-Minute Mixed-Use Quarter", desc: "Evaluate how easily residents can reach everyday services within their neighborhood." },
    params: {
      populationDensity: 16000, populationGrowthRate: 2.2, builtUpAreaPct: 72, vacantLandPct: 6, residentialLandPct: 40, commercialLandPct: 32,
      roadDensity: 14.2, trafficCongestion: 62, publicTransportAccessibility: 78, waterSupplyCoverage: 86, sewerageCoverage: 82, wasteManagementCoverage: 84,
      aqi: 128, greenSpacePct: 11.0, floodRisk: 30, distanceToHospital: 1.8, distanceToSchool: 0.6, averageIncome: 75, landPrice: 110, infrastructureCost: 62
    }
  }
};

let currentScenarioKey = 'metro_cbd';
let currentParams = { ...PRESET_SCENARIOS.metro_cbd.params };
let currentCategory = 'All';
let radarChartInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  updateScenarioDesc();
  renderSliders();
  setupEvents();
  runSimulation();
});

function updateScenarioDesc() {
  const meta = PRESET_SCENARIOS[currentScenarioKey].meta;
  document.getElementById('scenarioTitle').textContent = meta.name;
  document.getElementById('scenarioDesc').textContent = meta.desc;
}

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
        <span class="slider-name">
          ${p.name}
          <span class="info-icon">i</span>
          <span class="tooltip">${p.desc}</span>
        </span>
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
    });
  });
}

function setupEvents() {
  document.getElementById('presetSelect').addEventListener('change', (e) => {
    currentScenarioKey = e.target.value;
    const preset = PRESET_SCENARIOS[currentScenarioKey];
    if (preset) {
      currentParams = { ...preset.params };
      updateScenarioDesc();
      renderSliders();
      runSimulation();
      showToast(`Viewing: ${preset.meta.name}`);
    }
  });

  document.getElementById('btnReset').addEventListener('click', () => {
    document.getElementById('presetSelect').value = 'metro_cbd';
    currentScenarioKey = 'metro_cbd';
    currentParams = { ...PRESET_SCENARIOS.metro_cbd.params };
    updateScenarioDesc();
    renderSliders();
    runSimulation();
    showToast('Reset to default scenario.');
  });

  document.getElementById('btnSimulate').addEventListener('click', () => {
    runSimulation();
    showToast('Your updated scenario is ready. Review the findings below.');
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
  }, 3500);
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

  // Local fallback
  const localData = calculateLocalPrediction(currentParams);
  updateUI(localData);
}

// Minimal reproduction of local fallback logic for standalone operation
function calculateLocalPrediction(p) {
  const waterSupplyCoverage = p.waterSupplyCoverage || 82;
  const sewerageCoverage = p.sewerageCoverage || 72;
  const aqi = p.aqi || 135;
  const greenSpacePct = p.greenSpacePct || 14.5;
  const trafficCongestion = p.trafficCongestion || 48;
  const floodRisk = p.floodRisk || 32;

  let stressPoints = 0;
  if (aqi > 250) stressPoints += 25; else if (aqi > 150) stressPoints += 15; else if (aqi > 100) stressPoints += 8;
  if (greenSpacePct < 6.0) stressPoints += 20; else if (greenSpacePct < 12.0) stressPoints += 10;
  if (waterSupplyCoverage < 65) stressPoints += 22; else if (waterSupplyCoverage < 80) stressPoints += 10;
  if (sewerageCoverage < 60) stressPoints += 20; else if (sewerageCoverage < 75) stressPoints += 10;
  if (trafficCongestion > 65) stressPoints += 18; else if (trafficCongestion > 45) stressPoints += 10;
  if (floodRisk > 55) stressPoints += 22; else if (floodRisk > 35) stressPoints += 12;

  const stressIndex = Math.min(100, Math.round(stressPoints));
  let level = "Moderate";
  if (stressIndex >= 60) level = "Critical";
  else if (stressIndex >= 38) level = "High";
  else if (stressIndex >= 20) level = "Moderate";
  else level = "Low";

  return {
    params: p,
    urgency: { level, stressIndex, explanation: "Generated locally." },
    compositeInfrastructureScore: 75,
    equilibriumDimensions: {
      demographic: 80, landUse: 75, transport: 65, infrastructure: 70, environment: 60, disaster: 68, publicServices: 85, economic: 75
    },
    benchmarks: [
      { name: "Water Supply Coverage", target: "100%", current: `${waterSupplyCoverage}%`, status: waterSupplyCoverage >= 100 ? "Pass" : "Moderate Deficit" },
      { name: "Air Quality Index (AQI)", target: "≤ 100", current: `${aqi} AQI`, status: aqi <= 100 ? "Pass" : "Severe Air Pollution" }
    ],
    projects: [
      { name: "Universal Potable Water Pipeline", priority: waterSupplyCoverage < 75 ? "Critical" : "High", impact: "Eliminates water deficit." }
    ],
    mlAnalytics: null
  };
}

function generateHumanInsights(p, benchmarks) {
  const insights = [];
  
  if (p.aqi > 100) {
    insights.push({
      icon: "💨",
      title: "Clean air needs attention.",
      desc: "Air quality is above the configured target (Current: "+p.aqi+" AQI). Consider reviewing emissions controls, public transport options, and industrial pollution sources to improve public health."
    });
  }
  
  if (p.waterSupplyCoverage < 100 || p.sewerageCoverage < 100) {
    insights.push({
      icon: "🚰",
      title: "Essential services have room to improve.",
      desc: "Water and sewerage coverage are below full capacity. Expanding access could help more residents receive reliable basic services and improve sanitation."
    });
  }
  
  if (p.greenSpacePct < 15) {
    insights.push({
      icon: "🌳",
      title: "Green spaces are limited.",
      desc: "Current green-space coverage ("+p.greenSpacePct+"%) is below the planning target of 15%. Consider opportunities for parks, green corridors, and tree cover to enhance neighborhood well-being."
    });
  }
  
  if (p.trafficCongestion > 45) {
    insights.push({
      icon: "🚗",
      title: "Traffic is causing delays.",
      desc: "Congestion levels suggest that commuters are experiencing regular delays. Better transit alternatives could relieve pressure on the road network."
    });
  }

  if (insights.length === 0) {
    insights.push({
      icon: "✅",
      title: "Key indicators look stable.",
      desc: "The current scenario is performing well against basic targets. Focus on long-term sustainability and equitable growth."
    });
  }
  
  return insights.slice(0, 3);
}

function determineBenchmarkStatus(statusStr) {
  if (statusStr.includes("Pass") || statusStr.includes("Universal")) return { label: "Meeting target", cls: "pass" };
  if (statusStr.includes("Moderate") || statusStr.includes("Sub-Optimal") || statusStr.includes("Below Norm")) return { label: "Needs improvement", cls: "warn" };
  return { label: "Significant gap", cls: "fail" };
}

function generateChartStory(dims) {
  const strong = [];
  const weak = [];
  Object.entries(dims).forEach(([key, val]) => {
    if (val >= 75) strong.push(key);
    else if (val <= 60) weak.push(key);
  });
  
  let story = "Performance is balanced across most sectors.";
  if (strong.length > 0 && weak.length > 0) {
    story = `${strong[0].charAt(0).toUpperCase() + strong[0].slice(1)} and ${strong.length > 1 ? strong[1] : 'other areas'} are relatively strong, while ${weak[0]} needs more attention.`;
  } else if (weak.length > 0) {
    story = `Several areas, including ${weak[0]}, require significant attention to achieve balanced growth.`;
  } else if (strong.length > 1) {
    story = `The city shows strong performance, particularly in ${strong[0]} and ${strong[1]}.`;
  }
  return story;
}

function updateUI(data) {
  const { urgency, compositeInfrastructureScore, equilibriumDimensions, benchmarks, projects, mlAnalytics, params } = data;

  // 1. Summary Block
  let urgencyDesc = "stable";
  if (urgency.level === 'Critical') { urgencyDesc = "in critical need of action"; }
  else if (urgency.level === 'High') { urgencyDesc = "experiencing elevated pressure"; }
  else if (urgency.level === 'Moderate') { urgencyDesc = "needing some attention"; }
  
  const gapsCount = benchmarks.filter(b => !b.status.includes('Pass')).length;

  document.getElementById('conversationalSummary').innerHTML = `
    I've analyzed the data, and currently, the city's overall situation is <strong>${urgencyDesc}</strong>. Our urban stress level is sitting at a <strong style="color: var(--primary-accent);">${urgency.stressIndex} out of 100</strong>. When looking at our infrastructure as a whole, it's scoring <strong style="color: var(--primary-accent);">${compositeInfrastructureScore} out of 100</strong>. However, there are still <strong style="color: var(--accent-rose);">${gapsCount}</strong> essential service targets that we aren't quite meeting yet.
  `;

  // 2. Human Insights
  const insightsContainer = document.getElementById('insightsContainer');
  insightsContainer.innerHTML = '';
  const insights = generateHumanInsights(params || currentParams, benchmarks);
  insights.forEach(ins => {
    insightsContainer.innerHTML += `
      <div class="insight-item">
        <div class="insight-icon">${ins.icon}</div>
        <div class="insight-content">
          <h4>${ins.title}</h4>
          <p>${ins.desc}</p>
        </div>
      </div>
    `;
  });

  // 3. ML Risk Panel
  const mlStatusEl = document.getElementById('mlModelStatus');
  const mlPredictedRiskEl = document.getElementById('mlPredictedRisk');
  const mlProbabilitiesGridEl = document.getElementById('mlProbabilitiesGrid');
  const mlDisclaimerEl = document.getElementById('mlDisclaimer');

  if (mlAnalytics && !mlAnalytics.error) {
    mlStatusEl.textContent = `(v${mlAnalytics.model_version} Active)`;
    mlStatusEl.style.color = 'var(--accent-green)';
    
    mlPredictedRiskEl.textContent = mlAnalytics.predicted_risk.toUpperCase();
    
    let riskColor = 'var(--primary-accent)';
    if (mlAnalytics.predicted_risk === 'Critical') riskColor = 'var(--accent-rose)';
    else if (mlAnalytics.predicted_risk === 'High') riskColor = 'var(--accent-amber)';
    mlPredictedRiskEl.style.color = riskColor;
    
    mlDisclaimerEl.textContent = mlAnalytics.disclaimer || 'Data status: ' + mlAnalytics.data_status;
    
    mlProbabilitiesGridEl.innerHTML = '';
    Object.entries(mlAnalytics.class_probabilities).forEach(([cls, prob]) => {
      const pct = (prob * 100).toFixed(1);
      mlProbabilitiesGridEl.innerHTML += `
        <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.85rem;">
          <span style="width: 80px; font-weight: 500;">${cls}</span>
          <div style="flex: 1; margin: 0 15px; height: 8px; background: var(--border-color); border-radius: 4px; overflow: hidden;">
            <div style="width: ${pct}%; height: 100%; background: var(--primary-accent);"></div>
          </div>
          <span style="width: 45px; text-align: right;">${pct}%</span>
        </div>
      `;
    });
  } else {
    mlStatusEl.textContent = '(Unavailable)';
    mlStatusEl.style.color = 'var(--accent-rose)';
    mlPredictedRiskEl.textContent = 'N/A';
    mlPredictedRiskEl.style.color = 'var(--text-muted)';
    mlDisclaimerEl.textContent = (mlAnalytics && mlAnalytics.error) ? mlAnalytics.error : 'ML Service Offline';
    mlProbabilitiesGridEl.innerHTML = '<div style="color: var(--text-muted); font-size: 0.85rem;">Probabilities unavailable</div>';
  }

  // 4. Domain Scores & Radar Chart
  document.getElementById('chartStory').textContent = generateChartStory(equilibriumDimensions);
  
  const domainGrid = document.getElementById('domainScoresGrid');
  domainGrid.innerHTML = '';
  Object.entries(equilibriumDimensions).forEach(([key, val]) => {
    const div = document.createElement('div');
    div.className = 'domain-item';
    div.innerHTML = `
      <div class="score-header">
        <span style="color: var(--text-muted); text-transform: capitalize;">${key}</span>
        <span class="score">${val}</span>
      </div>
      <div class="domain-bar-bg">
        <div class="domain-bar-fill" style="width: ${val}%;"></div>
      </div>
    `;
    domainGrid.appendChild(div);
  });
  renderRadarChart(equilibriumDimensions);

  // 5. Benchmarks Table
  const tbody = document.getElementById('benchmarksTbody');
  tbody.innerHTML = '';
  benchmarks.forEach(b => {
    const tr = document.createElement('tr');
    const bStatus = determineBenchmarkStatus(b.status);
    tr.innerHTML = `
      <td><strong>${b.name}</strong></td>
      <td>${b.target}</td>
      <td><strong>${b.current}</strong></td>
      <td><span class="status-badge ${bStatus.cls}">${bStatus.label}</span></td>
    `;
    tbody.appendChild(tr);
  });

  // 6. Projects List
  const projectsList = document.getElementById('projectsList');
  projectsList.innerHTML = '';
  projects.forEach(p => {
    const badgeColor = p.priority === 'Critical' ? 'var(--accent-rose)' : p.priority === 'High' ? 'var(--accent-amber)' : 'var(--primary-accent)';
    const whyItMatters = getProjectReasoning(p.name);
    
    const div = document.createElement('div');
    div.className = 'project-item';
    div.innerHTML = `
      <div class="project-title">
        <span>${p.name}</span>
        <span style="font-size: 0.75rem; color: ${badgeColor}; padding: 2px 8px; border: 1px solid ${badgeColor}; border-radius: 12px;">${p.priority} Priority</span>
      </div>
      <div class="project-desc"><strong>Why it matters:</strong> ${whyItMatters}</div>
      <div class="project-step"><strong>Suggested next step:</strong> ${p.impact}</div>
    `;
    projectsList.appendChild(div);
  });

  // Canvas Drawing
  drawMap(params || currentParams);
}

function getProjectReasoning(name) {
  if (name.includes("Water")) return "More reliable water access supports everyday household needs and improves local resilience.";
  if (name.includes("Sewerage")) return "Proper sanitation prevents public health hazards and protects local waterways.";
  if (name.includes("Clean Air")) return "Improving air quality directly reduces respiratory risks and enhances outdoor livability.";
  if (name.includes("Stormwater")) return "Better drainage reduces property damage and ensures safety during extreme weather.";
  if (name.includes("Green Buffer")) return "Parks and green spaces reduce urban heat, provide recreation, and improve mental health.";
  return "Infrastructure improvements enhance overall quality of life and municipal efficiency.";
}

function renderRadarChart(dims = {}) {
  const ctx = document.getElementById('radarChart')?.getContext('2d');
  if (!ctx) return;

  const labels = ['Demographic', 'Land Use', 'Transport', 'Infrastructure', 'Environment', 'Disaster', 'Public Services', 'Economic'];
  const values = [
    dims.demographic || 80, dims.landUse || 75, dims.transport || 65, dims.infrastructure || 70,
    dims.environment || 60, dims.disaster || 68, dims.publicServices || 85, dims.economic || 75
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
          backgroundColor: 'rgba(37, 99, 235, 0.15)',
          borderColor: '#2563eb',
          borderWidth: 2,
          pointBackgroundColor: '#2563eb',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { color: 'rgba(0, 0, 0, 0.05)' },
            grid: { color: 'rgba(0, 0, 0, 0.05)' },
            pointLabels: { color: '#687386', font: { size: 11, family: 'Inter' } },
            ticks: { display: false },
            suggestedMin: 0,
            suggestedMax: 100,
          }
        },
        plugins: { legend: { display: false } }
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

  ctx.fillStyle = '#F7F8F5';
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = '#E7EAE6';
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 30) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
  for (let y = 0; y < h; y += 30) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

  // Green Zone
  const greenW = Math.max(40, w * ((p.greenSpacePct || 14.5) / 100) * 1.5);
  ctx.fillStyle = 'rgba(79, 138, 112, 0.2)';
  ctx.strokeStyle = '#4F8A70';
  ctx.lineWidth = 1.5;
  ctx.fillRect(15, 15, greenW, 75);
  ctx.strokeRect(15, 15, greenW, 75);
  ctx.fillStyle = '#4F8A70';
  ctx.font = '11px sans-serif';
  ctx.fillText(`Green Buffer (${(p.greenSpacePct || 14.5)}%)`, 25, 40);

  // Residential
  const resW = Math.max(90, w * ((p.residentialLandPct || 45) / 100) * 0.8);
  ctx.fillStyle = 'rgba(37, 99, 235, 0.2)';
  ctx.strokeStyle = '#2563eb';
  ctx.fillRect(15, 110, resW, 110);
  ctx.strokeRect(15, 110, resW, 110);
  ctx.fillStyle = '#2563eb';
  ctx.fillText(`Residential (${(p.residentialLandPct || 45)}%)`, 25, 135);

  // Commercial
  const comW = Math.max(80, w * ((p.commercialLandPct || 18) / 100) * 1.2);
  ctx.fillStyle = 'rgba(107, 114, 128, 0.2)';
  ctx.strokeStyle = '#6b7280';
  ctx.fillRect(resW + 30, 110, comW, 110);
  ctx.strokeRect(resW + 30, 110, comW, 110);
  ctx.fillStyle = '#6b7280';
  ctx.fillText(`Commercial (${(p.commercialLandPct || 18)}%)`, resW + 40, 135);

  // Transit
  ctx.strokeStyle = '#202B3C';
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  ctx.moveTo(0, h / 2);
  ctx.lineTo(w, h / 2);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#202B3C';
  ctx.fillText(`Transit Corridor (${p.roadDensity || 11.5} km/km²)`, w - 180, h / 2 - 8);
}
