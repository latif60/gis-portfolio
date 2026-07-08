/* ======================================================================
   MAIN.JS — site behaviour. You shouldn't need to edit this file.
   All editable content lives in js/config.js
   ====================================================================== */

(function () {
  "use strict";

  if (typeof SITE_DATA === "undefined") {
    console.error("config.js failed to load — check that js/config.js exists and is linked before main.js.");
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* -------------------------------------------------------------
     ICON LIBRARY — small inline SVGs used across the site.
     Add a new key here if you reference a new icon name in config.js
  --------------------------------------------------------------- */
  const ICONS = {
    satellite: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="8.5" y="8.5" width="7" height="7" rx="1"/><path d="M3 6l4 4M21 6l-4 4M3 18l4-4M21 18l-4-4"/><path d="M11 8.5V5M13 15.5V19"/></svg>`,
    layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/><path d="M3 17.5l9 5 9-5"/></svg>`,
    leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4C10 4 4 10 4 18c8 0 14-6 14-14z"/><path d="M5.5 17.5C9 13 13 10 19.5 5"/></svg>`,
    droplet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c3.5 4 7 8.2 7 11.5A7 7 0 0 1 5 14.5C5 11.2 8.5 7 12 3z"/></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 4 5.8 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.8-4-9s1.5-6.5 4-9z"/></svg>`,
    drone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="10" width="4" height="4" rx="0.5"/><path d="M10 10L5 5M14 10l5-5M10 14l-5 5M14 14l5 5"/><circle cx="4.2" cy="4.2" r="1.8"/><circle cx="19.8" cy="4.2" r="1.8"/><circle cx="4.2" cy="19.8" r="1.8"/><circle cx="19.8" cy="19.8" r="1.8"/></svg>`,
    compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M14.8 9.2l-2 5.6-5.6 2 2-5.6 5.6-2z"/></svg>`,
    chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M11 20V4M18 20v-7"/><path d="M2 20h20"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M4 6.5l8 6.5 8-6.5"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h3l1.5 4-2 1.5a13 13 0 006.5 6.5l1.5-2 4 1.5v3a1.5 1.5 0 01-1.6 1.5C10.5 19.6 4.4 13.5 4 6.6 4 5.6 4.6 4.7 5 4z"/></svg>`,
    pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.6 7-11.5A7 7 0 005 9.5C5 14.4 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.3"/></svg>`,
    default: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/></svg>`,
  };
  const getIcon = (name) => ICONS[name] || ICONS.default;

  // Short text badges for social links (avoids using trademarked logo marks)
  const SOCIAL_ABBR = {
    linkedin: "in",
    github: "gh",
    researchgate: "rg",
    orcid: "id",
    scholar: "gs",
    x: "x",
    mail: "@",
  };

  const MARKER_COLORS = {
    vegetation: "#4C7A52",
    water: "#2E8C99",
    urban: "#C97D3A",
    climate: "#B3503F",
  };
  const MARKER_LABELS = {
    vegetation: "Vegetation / land cover",
    water: "Hydrology / water",
    urban: "Urban / climate exposure",
    climate: "Climate & land degradation",
  };

  /* ----------------------------- helpers ----------------------------- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const el = (tag, className, html) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  };

  /* ----------------------------- rendering ----------------------------- */

  function renderHero(data) {
    $("#brandInitials").textContent = data.meta.initials;
    $("#heroName").textContent = data.meta.name;
    $("#heroRole").textContent = data.meta.role;
    $("#heroTagline").textContent = data.hero.tagline;
    $("#footerName").textContent = data.meta.name;

    const coordEl = $("#heroCoords");
    if (data.meta.coordinates) {
      coordEl.textContent = `${data.meta.coordinates} — based in ${data.meta.location}`;
    } else {
      coordEl.textContent = `based in ${data.meta.location}`;
    }

    const statsWrap = $("#heroStats");
    (data.hero.stats || []).forEach((stat) => {
      const dt = el("div", "stat");
      dt.innerHTML = `<dt class="stat-value mono">${stat.value}</dt><dd class="stat-label">${stat.label}</dd>`;
      statsWrap.appendChild(dt);
    });

    const resumeLink = $('.hero-actions a[download]');
    if (resumeLink && data.meta.resumeFile) resumeLink.setAttribute("href", data.meta.resumeFile);
  }

  function renderAbout(data) {
    const textWrap = $("#aboutText");
    (data.about.paragraphs || []).forEach((p) => textWrap.appendChild(el("p", null, p)));

    const factsWrap = $("#aboutFacts");
    (data.about.facts || []).forEach((f) => {
      factsWrap.appendChild(el("li", null, `<span class="fact-label mono">${f.label}</span><span class="fact-value">${f.value}</span>`));
    });
  }

  function renderExpertise(data) {
    const grid = $("#expertiseGrid");
    (data.expertise || []).forEach((item, i) => {
      const card = el(
        "article",
        "card card-expertise",
        `<div class="card-icon">${getIcon(item.icon)}</div>
         <h3>${item.title}</h3>
         <p>${item.description}</p>`
      );
      card.style.setProperty("--d", `${i * 70}ms`);
      grid.appendChild(card);
    });
  }

  function renderSkills(data) {
    const grid = $("#skillsGrid");
    (data.skills || []).forEach((group) => {
      const block = el("div", "legend-block", `<h3 class="legend-title mono">${group.category}</h3>`);
      const list = el("ul", "legend-items");
      group.items.forEach((item) => {
        const li = el(
          "li",
          "legend-item",
          `<div class="legend-item-top"><span>${item.label}</span><span class="mono legend-pct">${item.level}%</span></div>
           <div class="bar"><span style="--w:${item.level}%"></span></div>`
        );
        list.appendChild(li);
      });
      block.appendChild(list);
      grid.appendChild(block);
    });
  }

  function renderMap(data) {
    const sites = data.fieldSites || [];
    const mapEl = $("#fieldMap");
    if (!mapEl || !sites.length || typeof L === "undefined") return;

    const map = L.map(mapEl, {
      scrollWheelZoom: false,
      attributionControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      subdomains: "abc",
      maxZoom: 19,
      className: "map-tiles-dark",
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const bounds = [];
    sites.forEach((site) => {
      const color = MARKER_COLORS[site.type] || "#C97D3A";
      const icon = L.divIcon({
        className: "field-marker",
        html: `<span style="background:${color}"></span>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });
      const marker = L.marker([site.lat, site.lng], { icon }).addTo(map);
      const photoHtml = site.photo ? `<img src="${site.photo}" alt="${site.name}" class="popup-photo" />` : "";
      marker.bindPopup(
        `${photoHtml}<strong>${site.name}</strong><br/>${site.description || ""}${site.year ? `<br/><span class="mono">${site.year}</span>` : ""}`
      );
      bounds.push([site.lat, site.lng]);
    });

    if (bounds.length === 1) {
      map.setView(bounds[0], 7);
    } else {
      map.fitBounds(bounds, { padding: [40, 40] });
    }

    // Re-enable scroll zoom only once the user clicks into the map (nicer page-scroll behaviour)
    map.on("focus", () => map.scrollWheelZoom.enable());
    map.on("blur", () => map.scrollWheelZoom.disable());

    // Legend
    const legendWrap = $("#mapLegend");
    const usedTypes = [...new Set(sites.map((s) => s.type))];
    usedTypes.forEach((type) => {
      legendWrap.appendChild(
        el(
          "li",
          null,
          `<span class="dot" style="background:${MARKER_COLORS[type] || "#C97D3A"}"></span> ${MARKER_LABELS[type] || type}`
        )
      );
    });
  }

  function renderProjects(data) {
    const grid = $("#projectsGrid");
    (data.projects || []).forEach((p, i) => {
      const tags = (p.tags || []).map((t) => `<li>${t}</li>`).join("");

      // Supports either p.photo (single image) or p.photos (array of images)
      const photoList = p.photos || (p.photo ? [p.photo] : []);
      const imageTag = photoList.length
        ? `<div class="project-gallery">
             ${photoList.map(src => `<img src="${src}" alt="${p.title}" class="project-image">`).join("")}
           </div>`
        : "";

      const card = el(
        "article",
        "card card-project",
        `<div class="card-project-top">
           <div class="card-icon">${getIcon(p.icon)}</div>
           <span class="mono card-year">${p.year}</span>
         </div>
         ${imageTag}
         <p class="card-category mono">${p.category}</p>
         <h3>${p.title}</h3>
         <p>${p.description}</p>
         <ul class="tag-list">${tags}</ul>`
      );
      card.style.setProperty("--d", `${i * 60}ms`);
      grid.appendChild(card);
    });
  }
  function initLightbox() {
    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.innerHTML = `<span class="lightbox-close">&times;</span><img src="" alt="">`;
    document.body.appendChild(overlay);

    const overlayImg = overlay.querySelector("img");

    overlay.addEventListener("click", () => {
      overlay.classList.remove("active");
    });

    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("project-image")) {
        overlayImg.src = e.target.src;
        overlayImg.alt = e.target.alt;
        overlay.classList.add("active");
      }
    });
  }

  function renderPublications(data) {
    const list = $("#pubList");
    (data.publications || []).forEach((pub, i) => {
      const li = el(
        "li",
        "pub-item",
        `<span class="pub-index mono">${String(i + 1).padStart(2, "0")}</span>
         <div class="pub-body">
           <h3>${pub.title}</h3>
           <p class="pub-meta">${pub.authors} — <em>${pub.venue}</em>, ${pub.year}</p>
         </div>
         <a class="pub-link" href="${pub.link || "#"}" aria-label="Read: ${pub.title}">View →</a>`
      );
      list.appendChild(li);
    });
  }

function renderTimeline(items, containerId) {
    const wrap = $(containerId);
    (items || []).forEach((item) => {
      const node = el(
        "div",
        `timeline-item timeline-${item.type}`,
        `<div class="timeline-marker">${getIcon(item.type === "education" ? "layers" : "compass")}</div>
         <div class="timeline-content">
           <p class="mono timeline-period">${item.period}</p>
           <h3>${item.title}</h3>
           ${item.CGPA ? `<p class="timeline-cgpa">CGPA: ${item.CGPA}</p>` : ""}
          ${item.percentage ? `<p class="timeline-percentage">Percentage: ${item.percentage}</p>` : ""}
           <p class="timeline-org">${item.org}</p>
           <p>${item.description}</p>
         </div>`
         
      );
      wrap.appendChild(node);
    });
  
  }


  function renderContact(data) {
    const details = $("#contactDetails");
    if (data.meta.email) {
      details.appendChild(
        el("li", null, `<span class="contact-icon">${getIcon("mail")}</span><a href="mailto:${data.meta.email}">${data.meta.email}</a>`)
      );
    }
    if (data.meta.phone) {
      details.appendChild(
        el("li", null, `<span class="contact-icon">${getIcon("phone")}</span><a href="tel:${data.meta.phone.replace(/\s+/g, "")}">${data.meta.phone}</a>`)
      );
    }
    if (data.meta.location) {
      details.appendChild(el("li", null, `<span class="contact-icon">${getIcon("pin")}</span><span>${data.meta.location}</span>`));
    }

    const socialWrap = $("#socialList");
    (data.social || []).forEach((s) => {
      const a = el("a", "social-link", `<span class="mono">${SOCIAL_ABBR[s.icon] || s.icon.slice(0, 2)}</span>`);
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", s.label);
      socialWrap.appendChild(el("li", null, a.outerHTML));
    });
  }

  /* ----------------------------- interactions ----------------------------- */

  function setupNav() {
    const header = $("#siteHeader");
    const toggle = $("#navToggle");
    const links = $("#navLinks");

    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("nav-open", isOpen);
    });

    $$("a[data-nav]").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
      })
    );

    // scrollspy
    const sections = $$("section[id]");
    const navMap = {};
    $$("a[data-nav]").forEach((a) => (navMap[a.getAttribute("href").slice(1)] = a));

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = navMap[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            $$("a[data-nav]").forEach((a) => a.classList.remove("is-active"));
            link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  function setupReveal() {
    const groupChildren = $$("[data-reveal-group]").flatMap((g) => Array.from(g.children));

    if (prefersReducedMotion) {
      [...$$("[data-reveal]"), ...groupChildren].forEach((n) => n.classList.add("is-visible"));
      return;
    }
    const targets = [...$$("[data-reveal]"), ...groupChildren];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((t) => {
      t.classList.add("reveal");
      observer.observe(t);
    });
  }

  function setupContactForm(data) {
    const form = $("#contactForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#cf-name").value.trim();
      const email = $("#cf-email").value.trim();
      const subject = $("#cf-subject").value.trim();
      const message = $("#cf-message").value.trim();

      const body = `${message}\n\n— ${name} (${email})`;
      const mailto = `mailto:${data.meta.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;

      /* ---------------------------------------------------------------
         Want submissions to go straight to an inbox WITHOUT opening the
         visitor's email app? You can swap the two lines above for a
         free form backend such as Formspree (no credit card required
         on the free plan):

           fetch("https://formspree.io/f/your-form-id", {
             method: "POST",
             headers: { "Accept": "application/json" },
             body: new FormData(form),
           });

         See the README for step-by-step instructions.
      --------------------------------------------------------------- */
    });
  }


function renderGallery(data) {
    const grid = $("#galleryGrid");
    if (!grid || !data.gallery) return;
    const zoomIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>`;
    data.gallery.forEach((item, i) => {
      const card = el(
        "figure",
        "gallery-item",
        `<button type="button" class="gallery-thumb" data-index="${i}">
           <img src="${item.image}" alt="${item.title}" loading="lazy" />
           <span class="gallery-ticks" aria-hidden="true"></span>
           <span class="gallery-zoom" aria-hidden="true">${zoomIcon}</span>
         </button>
         <figcaption>
           <span class="gallery-tag mono">${item.category}</span>
           <span class="gallery-title">${item.title}</span>
         </figcaption>`
      );
      card.style.setProperty("--d", `${i * 50}ms`);
      grid.appendChild(card);
    });
    grid.addEventListener("click", (e) => {
      const btn = e.target.closest(".gallery-thumb");
      if (!btn) return;
      openLightbox(data.gallery[Number(btn.dataset.index)]);
    });
  }

  function openLightbox(item) {
    let box = $("#lightbox");
    if (!box) {
      box = el("div", "lightbox", "");
      box.id = "lightbox";
      document.body.appendChild(box);
      box.addEventListener("click", (e) => {
        if (e.target === box || e.target.closest(".lightbox-close")) {
          box.classList.remove("is-open");
          document.body.classList.remove("lightbox-open");
        }
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") { box.classList.remove("is-open"); document.body.classList.remove("lightbox-open"); }
      });
    }
    box.innerHTML = `
      <div class="lightbox-inner">
        <button class="lightbox-close" aria-label="Close">×</button>
        <img src="${item.image}" alt="${item.title}" />
        <div class="lightbox-caption">
          <h3>${item.title}</h3>
          <p>${item.caption || ""}</p>
        </div>
      </div>`;
    box.classList.add("is-open");
    document.body.classList.add("lightbox-open");
  }


  function setupFooter() {
    $("#footerYear").textContent = new Date().getFullYear();
  }

  /* ----------------------------- init ----------------------------- */
  function init() {
    try {
      renderHero(SITE_DATA);
      renderAbout(SITE_DATA);
      renderExpertise(SITE_DATA);
      renderSkills(SITE_DATA);
      renderProjects(SITE_DATA);
      initLightbox();
      renderGallery(SITE_DATA); 
      renderPublications(SITE_DATA);
      renderTimeline(SITE_DATA.experience, "#timeline-experience");
      renderTimeline(SITE_DATA.education, "#timeline-education");
      renderContact(SITE_DATA);
      setupFooter();
      setupNav();
      setupReveal();
      setupContactForm(SITE_DATA);
      renderMap(SITE_DATA); // after layout settles, so Leaflet measures the container correctly
    } catch (err) {
      console.error("Portfolio failed to initialise:", err);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
