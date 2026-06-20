# Your Name — GIS & Remote Sensing Portfolio

A complete, self-contained portfolio website for a GIS / Remote Sensing / Environmental
Research profile. Plain HTML, CSS and JavaScript — no build tools, no framework,
no paid services, and no subscription required to host it.

```
gis-portfolio/
├── index.html        ← page structure (you shouldn't need to edit this)
├── css/style.css      ← all visual styling / colours / fonts
├── js/config.js       ← ⭐ EDIT THIS — all your text, projects, skills, links
├── js/main.js          ← renders config.js into the page (you shouldn't need to edit this)
└── assets/
    ├── favicon.svg
    ├── cv.pdf          ← placeholder — replace with your real CV/résumé
    └── profile.jpg      ← add your own photo here (not included)
```

---

## 1. Edit your content

Open **`js/config.js`** in any text editor (Notepad, VS Code, even Google Docs as plain
text). Every section of the site — your name, bio, skills, projects, publications,
field-site map pins, social links — is a plain JavaScript object with comments
explaining each field. Change the text between the quotes `" "` and save.

You do **not** need to touch `index.html`, `style.css`, or `main.js` for everyday
edits like updating your bio or adding a new project.

**To add your photo:** save it as `profile.jpg` inside the `assets` folder (same name).
**To add your real CV:** export it as a PDF and save it as `assets/cv.pdf`, replacing
the placeholder.
**To add a new project / publication / skill:** copy an existing `{ ... }` block inside
the matching list in `config.js`, paste it as a new item, and edit the text. Don't
forget the comma between items.

---

## 2. Preview it on your own computer

No installation needed:

- **Easiest:** double-click `index.html` — it opens in your browser.
- **Best results (recommended):** serve it locally so the map and any future
  fetch-based features behave exactly like they will online:
  - VS Code users: install the "Live Server" extension, right-click `index.html` →
    "Open with Live Server".
  - Or, with Python installed, open a terminal in this folder and run:
    ```
    python -m http.server 8000
    ```
    then visit `http://localhost:8000` in your browser.

---

## 3. Put it online for free (no subscription, no credit card)

Any of these work well. Pick whichever feels easiest.

### Option A — Netlify (drag and drop, fastest, no account needed to try)
1. Go to **https://app.netlify.com/drop**
2. Drag the whole `gis-portfolio` folder onto the page.
3. Netlify gives you a live URL (e.g. `your-site-name.netlify.app`) in seconds.
4. Create a free Netlify account to keep the site and edit it later — still free,
   no credit card required on the free tier.

### Option B — GitHub Pages (great if you want version history / a `github.io` URL)
1. Create a free account at **https://github.com**.
2. Create a new repository (e.g. `portfolio`).
3. Upload all the files in this folder to that repository (use "Add file → Upload
   files" in the browser — no command line required).
4. Go to the repository's **Settings → Pages**.
5. Under "Branch", choose `main` and folder `/ (root)`, then **Save**.
6. After a minute, your site is live at `https://your-username.github.io/portfolio/`.

### Option C — Cloudflare Pages
1. Create a free account at **https://pages.cloudflare.com**.
2. Choose "Upload assets" and drag in this folder.
3. Cloudflare gives you a free `*.pages.dev` URL.

All three are genuinely free forever for a personal portfolio — no trial period,
no card on file, no usage limits you'd realistically hit.

### Using your own domain name (optional)
If you later buy a domain (e.g. `yourname.com`), every option above has a free
"Custom domain" setting where you just point your domain's DNS at it — still no
subscription on the hosting side, you'd only ever pay your domain registrar.

---

## 4. Contact form behaviour

The contact form works out of the box with **no backend and no sign-up**: when a
visitor clicks "Send message", it opens their email app with your address, their
message, and a subject line already filled in.

If you'd rather have messages land directly in your inbox without opening an email
app, you can connect a free form backend:

1. Create a free account at **https://formspree.io** (no credit card; free plan
   covers a generous number of monthly submissions).
2. Create a new form and copy your form endpoint URL.
3. In `js/main.js`, find the `setupContactForm` function — there's a commented-out
   `fetch(...)` block right there with instructions. Uncomment it, paste in your
   endpoint, and remove the `mailto` line above it.

This step is entirely optional — the site works fully without it.

---

## 5. Things you'll want to personalise first

- [ ] Name, title, location, email, phone — `js/config.js` → `meta`
- [ ] Hero tagline and stats — `hero`
- [ ] About bio and quick facts — `about`
- [ ] Your photo — `assets/profile.jpg`
- [ ] Your real CV — `assets/cv.pdf`
- [ ] Expertise cards — `expertise`
- [ ] Skills & proficiency — `skills`
- [ ] Field site coordinates for the interactive map — `fieldSites`
- [ ] Projects — `projects`
- [ ] Publications — `publications`
- [ ] Experience & education timeline — `timeline`
- [ ] Social links (LinkedIn, ResearchGate, ORCID, GitHub, Google Scholar) — `social`

---

## Notes

- The interactive "Field Sites" map uses **Leaflet.js** with free **OpenStreetMap /
  CARTO** map tiles — no API key, no account, no usage cost for a personal site.
- Fonts load from Google Fonts' free CDN.
- Everything else is plain HTML/CSS/JS with zero dependencies, so there's nothing
  to "break" with version updates — it will keep working indefinitely.
