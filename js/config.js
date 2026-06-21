/* ======================================================================
   SITE CONTENT — EDIT THIS FILE ONLY
   ======================================================================
   Everything you see on the website (your name, bio, projects,
   publications, skills, map pins, contact info) lives in this one file
   as plain data. Change the text inside the quotes " " and save.
   You do NOT need to touch index.html, style.css, or main.js.

   Tips:
   - Keep the commas between items.
   - Keep the quotes around text.
   - If you delete an entire { ... } block, also delete its trailing comma.
   - Dates can be written however you like, e.g. "2022 – Present".
   ====================================================================== */

const SITE_DATA = {

  /* -------------------- 1. BASIC INFO -------------------- */
  meta: {
    name: "Abdul latif",
    initials: "Y.N.",
    role: "GIS Analyst & Remote Sensing Researcher",
    location: "Hyderabad, Sindh, Pakistan",
    coordinates: "29.9691° N · 73.8567° E", // optional lat/long shown in the hero — use your city's coordinates or remove
    email: "latifsiyal965@gmail.com",
    phone: "+92 3063228040", // set to "" to hide
    resumeFile: "assets/cv.pdf", // replace assets/cv.pdf with your own PDF
  },

  /* -------------------- 2. HERO SECTION -------------------- */
  hero: {
    tagline: "I translate satellite imagery and spatial data into evidence for climate, land-use, and environmental decision-making — combining cartography, statistics, and field observation.",
    stats: [
      { value: "3+", label: "Years in GIS & RS" },
      { value: "2+", label: "Projects mapped" },
      { value: "0", label: "Publications" },
      { value: "150k+", label: "km² analysed" },
    ],
  },

  /* -------------------- 3. ABOUT SECTION -------------------- */
  about: {
    // Each string in this list becomes its own paragraph.
    paragraphs: [
      "I'm an environmental researcher focused on Geographic Information Systems (GIS) and remote sensing, working at the intersection of satellite Earth observation, spatial statistics, and field-based environmental monitoring.",
      "My work spans land use and land cover change detection, vegetation and water resource monitoring, climate risk mapping, and building decision-support tools for researchers, NGOs, and government agencies.",
      "I'm especially interested in open and reproducible geospatial workflows — Google Earth Engine, Python (GDAL, rasterio, geopandas), and QGIS — that make environmental data accessible beyond the research lab.",
    ],
    facts: [
      { label: "Based in", value: "Hyderabad, Sindh, Pakistan" },
      { label: "Focus areas", value: "Remote sensing · GIS · Climate & land-use change" },
      { label: "Currently", value: "Open to research & consulting roles" },
      { label: "Languages", value: "English, Urdu/Sindhi" },
    ],
  },

  /* -------------------- 4. EXPERTISE CARDS -------------------- */
  // icon options: "satellite", "layers", "leaf", "droplet", "chart", "globe", "drone", "compass"
  expertise: [
    {
      icon: "satellite",
      title: "Remote Sensing & Image Classification",
      description: "Processing multispectral and SAR imagery (Landsat, Sentinel-1/2, MODIS) for land cover classification, change detection, and time-series analysis.",
    },
    {
      icon: "layers",
      title: "GIS Spatial Analysis",
      description: "Vector & raster analysis, spatial statistics, interpolation, and geoprocessing automation in QGIS, ArcGIS Pro, and Python.",
    },
    {
      icon: "leaf",
      title: "Environmental Monitoring",
      description: "Tracking vegetation health, deforestation, and ecosystem change using NDVI, EVI, and other spectral indices over time.",
    },
    {
      icon: "droplet",
      title: "Hydrology & Water Resources",
      description: "Watershed delineation, flood risk mapping, and surface water dynamics using DEMs and hydrological models.",
    },
    {
      icon: "globe",
      title: "Climate & Land-Use Change",
      description: "Modelling land-use transitions and climate impact scenarios to support adaptation planning and policy.",
    },
    {
      icon: "drone",
      title: "UAV & Field Data Collection",
      description: "Drone-based aerial surveys, orthomosaic generation, and ground-truthing to validate satellite-derived products.",
    },
  ],

  /* -------------------- 5. SKILLS (LEGEND) -------------------- */
  // level is a number from 0–100, used to draw the bar.
  skills: [
    {
      category: "Software & Platforms",
      items: [
        { label: "QGIS", level: 95 },
        { label: "ArcGIS Pro", level: 95 },
        { label: "Google Earth Engine", level: 90 },
      ],
    },
    {
      category: "Programming & Analysis",
      items: [
        { label: "Python (GDAL, rasterio, geopandas)", level: 90 },
        { label: "R (spatial stats)", level: 70 },
               { label: "JavaScript (Earth Engine)", level: 70 },
      ],
    },
    {
      category: "Data & Sensors",
      items: [
        { label: "Landsat / Sentinel-1 & 2", level: 95 },
        { label: "MODIS / VIIRS time series", level: 80 },
        { label: "LiDAR & DEM processing", level: 70 },
        { label: "UAV photogrammetry", level: 65 },
      ],
    },
  ],

  fieldSites: [
    {
      name: "Khipro Forest Soil Sampling & Biomass Estimation",
      lat: 25.8242,
      lng: 69.3757,
      type: "vegetation",
      year: "2025–2026",
      description: "Supervised soil sampling and biomass estimation across the 24,000-acre Khipro Forest, collecting data from 71 sampling points to establish a carbon stock baseline for the Sindh Forest Department.",
    },
    {
      name: "Miani Forest Enumeration & Biomass Estimation",
      lat: 25.4766,
      lng: 68.4058,
      type: "vegetation",
      year: "2025–2026",
      description: "Carried out a full enumeration of a 4-acre compartment in Miani Forest, recording tree-level data and conducting biomass estimation for the plot.",
    },
    {
      name: "Tharparkar Rangeland Carrying Capacity Assessment",
      lat: 24.8209,
      lng: 70.18,
      type: "climate",
      year: "2025–2026",
      description: "Conducted a rangeland carrying capacity and soil nutrient assessment across 29 villages for the UN-FAO funded SRAS project, benchmarking current conditions against a 2021 baseline.",
    },
    {
      name: "Sindh Forest Inventory — UNOPS Project",
      lat: 25.8943,
      lng: 68.5247,
      type: "vegetation",
      year: "2026",
      description: "Conducted structured field data collection and survey activities across designated forest inventory sites as part of the UNOPS-funded Forest, Climate and Nature in Pakistan project.",
    },
  ],

  /* -------------------- 7. PROJECTS -------------------- */
  // link can be "#" if don't have a live link yet
  projects: [
    {
      title: "Land Cover Change Detection — 2010 to 2024",
      year: "2024",
      category: "Remote Sensing",
      icon: "satellite",
      description: "Multi-temporal classification of Landsat & Sentinel-2 imagery to quantify agricultural expansion and urban sprawl over 14 years.",
      tags: ["Google Earth Engine", "Random Forest", "Python"],
      link: "#",
    },
    {
      title: "Flood Hazard Mapping for the Lower Indus Basin",
      year: "2023",
      category: "Hydrology",
      icon: "droplet",
      description: "SAR-based flood extent mapping combined with a DEM-derived hydrological model to identify high-risk settlements.",
      tags: ["Sentinel-1", "QGIS", "HEC-RAS"],
      link: "#",
    },
    {
      title: "Mangrove Ecosystem Health Monitoring",
      year: "2023",
      category: "Environmental Monitoring",
      icon: "leaf",
      description: "Time-series NDVI analysis to track mangrove forest health and identify degradation hotspots along the coastline.",
      tags: ["NDVI", "Time Series", "Field Validation"],
      link: "#",
    },
    {
      title: "UAV-Based Crop Health Assessment",
      year: "2022",
      category: "Agriculture",
      icon: "drone",
      description: "Drone-acquired multispectral imagery processed into orthomosaics to assess crop vigour across smallholder farms.",
      tags: ["UAV", "Multispectral", "Pix4D"],
      link: "#",
    },
    {
      title: "Urban Heat Island Mapping",
      year: "2021",
      category: "Climate",
      icon: "globe",
      description: "Land surface temperature retrieval from Landsat thermal bands to identify and rank urban heat hotspots for green-infrastructure planning.",
      tags: ["Landsat 8/9", "LST", "Spatial Statistics"],
      link: "#",
    },
    {
      title: "Watershed Delineation & Erosion Risk Model",
      year: "2021",
      category: "GIS Modelling",
      icon: "layers",
      description: "Automated watershed and stream-network delineation from DEM data feeding into a soil-erosion risk model.",
      tags: ["DEM", "ArcGIS Pro", "RUSLE"],
      link: "#",
    },
  ],

  /* -------------------- 8. PUBLICATIONS -------------------- */
  publications: [
    {
      title: "Mapping mangrove degradation using multi-temporal Sentinel-2 imagery in the Indus Delta",
      authors: "Your Name, Co-Author A., Co-Author B.",
      venue: "Journal of Environmental Remote Sensing",
      year: "2024",
      link: "#",
    },
    {
      title: "A random forest approach to land cover classification in semi-arid landscapes",
      authors: "Your Name, Co-Author C.",
      venue: "International Journal of Applied Earth Observation and Geoinformation",
      year: "2023",
      link: "#",
    },
    {
      title: "SAR-based flood mapping for early warning in data-scarce river basins",
      authors: "Your Name",
      venue: "Proceedings of the Asian Conference on Remote Sensing",
      year: "2022",
      link: "#",
    },
    {
      title: "Urban heat island dynamics in a rapidly growing South Asian city",
      authors: "Your Name, Co-Author D.",
      venue: "Technical Report, Department of Geography",
      year: "2021",
      link: "#",
    },
  ],

  /* -------------------- 9. EXPERIENCE & EDUCATION TIMELINE -------------------- */
  // type: "work" or "education" — controls the icon used
  timeline: [
    {
      type: "work",
      period: "2023 — Present",
      title: "GIS & Remote Sensing Researcher",
      org: "Your Organization",
      description: "Leading geospatial analysis for environmental monitoring projects, from data acquisition to policy-facing reporting.",
    },
    {
      type: "work",
      period: "2021 — 2023",
      title: "Remote Sensing Analyst",
      org: "Previous Organization",
      description: "Built automated Earth Engine pipelines for land cover and vegetation monitoring across multiple field sites.",
    },
    {
      type: "education",
      period: "2019 — 2021",
      title: "M.Sc. in Remote Sensing & GIS",
      org: "Your University",
      description: "Thesis on land-use change detection using multi-sensor satellite time series.",
    },
    {
      type: "education",
      period: "2015 — 2019",
      title: "B.Sc. in Environmental Science / Geography",
      org: "Your University",
      description: "Specialized coursework in cartography, geomorphology, and environmental policy.",
    },
  ],

  /* -------------------- 10. CONTACT & SOCIAL LINKS -------------------- */
  // icon options: "linkedin", "github", "researchgate", "orcid", "mail", "x", "scholar"
  social: [
    { icon: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/yourname" },
    { icon: "researchgate", label: "ResearchGate", url: "https://researchgate.net/profile/yourname" },
    { icon: "scholar", label: "Google Scholar", url: "https://scholar.google.com" },
    { icon: "github", label: "GitHub", url: "https://github.com/yourname" },
    { icon: "orcid", label: "ORCID", url: "https://orcid.org/0000-0000-0000-0000" },
  ],
};
