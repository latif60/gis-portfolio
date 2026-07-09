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
    role: "GIS Analyst & Remote Sensing Researcher",
    location: "Hyderabad, Sindh, Pakistan",
    coordinates: "25.3792° N · 68.3683° E", // optional lat/long shown in the hero — use your city's coordinates or remove
    email: "latifsiyal965@gmail.com",
    phone: "+92 3063228040", // set to "" to hide
    resumeFile: "assets/cv.pdf", // replace assets/cv.pdf with your own PDF
  },

  /* -------------------- 2. HERO SECTION -------------------- */
  hero: {
    tagline: "I translate satellite imagery and spatial data into evidence for climate, land use, and environmental decision making combining cartography, statistics, and field observation.",
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
      "I'm especially interested in open and reproducible geospatial workflows Google Earth Engine, Python (GDAL, rasterio, geopandas), and QGIS — that make environmental data accessible beyond the research lab.",
    ],
    facts: [
      { label: "Based in", value: "Hyderabad, Sindh, Pakistan" },
      { label: "Focus areas", value: "Remote sensing · GIS · Climate & land-use change" },
      { label: "Currently", value: "Open to GIS, Research & consulting roles" },
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
               { label: "JavaScript (Google Earth Engine)", level: 70 },
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
      photo: "assets/sites/khipro.jpg",
      description: "Supervised soil sampling and biomass estimation across the 24,000-acre Khipro Forest, collecting data from 71 sampling points to establish a carbon stock baseline for the Sindh Forest Department.",
    },
    {
      name: "Miani Forest Enumeration & Biomass Estimation",
      lat: 25.4766,
      lng: 68.4058,
      type: "vegetation",
      year: "2025–2026",
      photo: "assets/sites/miani.jpg",
      description: "Carried out a full enumeration of a 4-acre compartment in Miani Forest, recording tree-level data and conducting biomass estimation for the plot.",
    },
    {
      name: "Tharparkar Rangeland Carrying Capacity Assessment",
      lat: 24.8209,
      lng: 70.18,
      type: "climate",
      year: "2025–2026",
      photo: "assets/sites/thar.jpg",
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
      title: "Afternoon Temperature Crisis Pakistan 2026",
      year: "2026",
      category: "Remote Sensing",
      photo: "assets/projects/pakistan_temperature.jpg",
      icon: "satellite",
      description: " ERA-5 Based temperature map of pakistan highlights the afternoon temperature of the hotest month of pakistan June-4-2026.",
      tags: ["Google Earth Engine", "ERA-5", "ArcGIS Pro"],
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
      title: "Supporting Maps for plantation projects documentation",
      year: "2026",
      category: "Remote sensing",
      photos: [
  "assets/projects/final_lst_lahore.jpg",
  "assets/projects/final_NDMI_lahore.jpg",
  "assets/projects/final_NDVI_lahore.jpg"
],
      icon: "leaf",
      description: "Created three maps for a client for his river side plantation documentation of lahore.",
      tags: ["NDMI","LST","NDVI", "ArcGIS Pro"],
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
      title: "Urban Heat Island Map Of Karachi",
      year: "2026",
      category: "Climate",
      photo: "assets/projects/KARACHI_UHI_MAP.jpg",
      icon: "globe",
      description: "Land surface temperature retrieval from Landsat thermal bands to identify and rank urban heat hotspots for green-infrastructure planning.",
      tags: ["Landsat-9", "LST", "Spatial Statistics"],
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


  /* -------------------- 6B. MAP GALLERY -------------------- */
  // category = short label shown on the thumbnail (e.g. "LULC", "Precipitation", "Climate")
  gallery: [
    {
      title: "Afternoon Temperature Crisis — Pakistan",
      category: "Climate",
      image: "assets/gallery/pakistan_temperature.jpg",
      caption: "Tools: Google Earth Engine, ArcGIS Pro.",
    },
  ],


  /* -------------------- 8. PUBLICATIONS -------------------- */
  publications: [
    {
      title: "Mapping mangrove degradation using multi-temporal Sentinel-2 imagery in the Indus Delta",
      authors: "Author, Co-Author A., Co-Author B.",
      venue: "Journal of Environmental Remote Sensing",
      year: "0000",
      link: "#",
    },
    
  ],

  /* -------------------- 9. EXPERIENCE & EDUCATION TIMELINE -------------------- */
  // type: "work" or "education" — controls the icon used
  experience: [
    {
      type: "work",
      period: "MAR-2026 — Present",
      title: "GIS Specialist",
      org: "Eco Nature Consultancy (ENC)",
      description: "Leading geospatial analysis for environmental monitoring projects, from data acquisition to policy facing reporting.",
    },

     {
      type: "work",
      period: "DEC-2025 — MAR-2026",
      title: "Forestry Intern",
      org: "Sindh Forest and Wildlife Training School Miani, Hyderabad",
      description: "Gained hands on experience in forest and rangeland management, field surveys, sampling, and FGDs. Applied GIS tools for LULC mapping, vegetation indices, and carbon stock estimation, linking field data with spatial analysis for practical environmental insights.",
    },

    {
      type: "work",
      period: "JAN-2026 (Contract)",
      title: "Field Enumerator",
      org: "GIS Plus",
      description: " Worked as a Field Enumerator for the UNOPS Project – Forest, Climate and Nature in Pakistan, I worked closely with my team to execute comprehensive field data collection and survey activities for the Sindh Field Inventory.",
    },

{
      type: "work",
      period: "JAN-2025 — JAN-2026",
      title: "GIS & Remote Sensing Research Assistant",
      org: "University of Sindh Jamshoro",
      description: [
        "Provided ongoing technical GIS support and spatial data analysis across multiple academic research projects to strengthen research methodologies.",
        "Developed high quality thematic maps and spatial datasets using ArcGIS Pro and QGIS.",
        "Conducted statistical analysis and data interpretation to verify environmental research findings.",
        "Translated geospatial results into clear summaries supporting scientific reports and research papers."
      ].join("<br>"),
    },

    ],

    education: [
    {
      type: "education",
      period: "2022 — 2026",
      title: "BS Environmental Science",
      CGPA: "2.93",
      percentage: "73.5%",
      org: "University of Sindh Jamshoro",
      description: "Thesis : Assessment of MODIS MAIAC AOD Retrievals over a Complex Semi-Arid Region: Geometric Dependencies, Aerosol Typing, and Precipitation Trends.",
    },

  ],

  /* -------------------- 10. CONTACT & SOCIAL LINKS -------------------- */
  // icon options: "linkedin", "github", "researchgate", "orcid", "mail", "x", "scholar"
  social: [
    { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/abdul-latif-078a31243/" },
    { icon: "scholar", label: "Google Scholar", url: "https://scholar.google.com" },
    { icon: "github", label: "GitHub", url: "https://github.com/yourname" },
    
  ],
};
