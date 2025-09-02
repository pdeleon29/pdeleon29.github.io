# Tatsu Solutions — Starter Portfolio (Modular)

Hey Pedro — this is a clean, modular starter portfolio you can deploy to Netlify and hook to your `tatsusolutions.com` domain. It's made so you start as "you the dev" and then expand to "Tatsu Solutions the agency" later.

---

## What is included

- `index.html` — single-page portfolio with sections: Hero, About, Projects, Contact. Netlify-ready contact form included.
- `styles.css` — modern, mobile-first CSS with variables, responsive grid, and keyframe-ready animations.
- `script.js` — small JS for mobile nav, smooth scroll, and reveal-on-scroll.
- `netlify.toml` — minimal Netlify config (static site).
- `README.md` — this file.
- A few inline SVG placeholders for project thumbnails.

---

## Quick local preview (2 minutes)
1. Unzip the starter project.
2. Open `index.html` in your browser (double-click). Works offline — no build required.
3. Edit `index.html` and `styles.css` with your content and images.

---

## Suggested repo & deploy workflow (GitHub + Netlify)
You have two options: update your existing repo (`pdeleon29/pdeleon29.github.io`) or create a new repo (recommended: `pdeleon29/tatsusolutions-site`). I recommend a new repo so your GitHub Pages repo can stay as an archive if you want.

### Create a new GitHub repo & push
```bash
# from inside the unzipped project folder
git init
git branch -M main
git add .
git commit -m "Initial Tatsu Solutions portfolio v1"
# create a repo on GitHub (e.g. pdeleon29/tatsusolutions-site) then:
git remote add origin git@github.com:pdeleon29/tatsusolutions-site.git
git push -u origin main
```

### Link your repo in Netlify
1. Login to Netlify -> "Add new site" -> "Import from Git" -> choose GitHub -> authorize -> select your repo (`tatsusolutions-site`).
2. For a static HTML site: **Build command:** *(leave blank)*, **Publish directory:** `/` (or leave blank if Netlify auto-detects).
3. Deploy site — Netlify will generate a random `*.netlify.app` URL for you and trigger the first deploy.
4. Confirm the site works at the Netlify URL.

---

## Hooking your custom domain (tatsusolutions.com) — with Cloudflare (DNS only / grey cloud)
Since you already use Namecheap -> Cloudflare (DNS-only) -> Netlify, here's the safe path to connect the custom domain without breaking SSL:

1. In Netlify: go to **Site settings > Domain management > Add custom domain** and enter `tatsusolutions.com` (and `www.tatsusolutions.com` as well).
2. Netlify will show the DNS records you need to add. **Important:** in Cloudflare, add the records *as DNS-only* (ensure the cloud is **grey**, NOT orange). Proxying (orange cloud) prevents Netlify's automatic Let's Encrypt cert from validating.
3. Typical records Netlify asks for:
   - `CNAME` for `www` → points to your Netlify site domain (e.g. `your-site-name.netlify.app`)
   - For the apex (`tatsusolutions.com`) Netlify may suggest `A` or ANAME/ALIAS records — follow the exact records Netlify shows in the dashboard and add them to Cloudflare as DNS-only.
4. Wait for DNS propagation (usually minutes, sometimes a few hours). Netlify will automatically provision an SSL cert once DNS verifies. You can check HTTPS status in Netlify's Domain settings.
5. If SSL doesn't provision: verify Cloudflare is **grey-cloud** for those records. If you previously used orange cloud, toggle to grey and re-trigger verification.

> Quick note: If you currently have your Netlify site connected to `pdeleon29/pdeleon29.github.io`, you can swap that in Netlify to this new repo in Site settings > Build & deploy > Continuous Deployment (link a new repo), or simply update the existing repo with the new site contents.

---

## Netlify forms
This starter uses Netlify's built-in form handling. The form is named `contact` and includes a hidden `form-name` field. Netlify detects the form during build and stores submissions in the Netlify dashboard. If you push the site and the form doesn't appear in Netlify's UI, re-deploy once and check "Forms" in the Netlify site admin.

---

## How to update projects / content
- Open `index.html` and find the `<section id="projects">` area. Replace the sample `.card` blocks with your project thumbnails, short description, and links (live demo + code).
- Use real screenshots (put them in an `assets/` folder) and set `href` targets to your demo URLs or GitHub repos.
- Commit and push to GitHub — Netlify auto-deploys on push.

---

## Add animations & JS libraries
- **CSS animations:** use `@keyframes` in `styles.css` and toggle classes in `script.js`. Already included: reveal-on-scroll and a pulse keyframe sample.
- **JS libraries (GSAP / Anime.js):** if you want advanced animations later, include the library via CDN and trigger animations inside `script.js`. You don't need to ship these now for an entry-level job — CSS keyframes look great and are fast to read in a code review.

---

## How to replace existing repo (if you prefer using pdeleon29.github.io)
1. If you want this to live at `pdeleon29.github.io` (and that repo is already connected to Netlify), you can replace the content:
   - Clone the repo locally
   - Copy these files into the repo root (replace the old `index.html`)
   - Commit & push — Netlify will rebuild and redeploy.
2. If you'd rather keep the current repo as-is, create a new repo and update Netlify to point to it (Site settings > Build & deploy > Continuous Deployment -> link to a different repo).

---

## Pro tips (Pedro-level moves)
- Use `README.md` on your repo to describe each project and link to case studies — recruiters read it.
- Add a `CNAME` file if you ever use GitHub Pages instead of Netlify for the domain.
- Keep `tatsusolutions.com` branded from day one. Put your LLC name in the footer and show a simple "Services" placeholder so visitors imagine the business is bigger than a single dev (this helps the S→B transition).
- Keep your GitHub profile tidy — add links to live demos in repo READMEs.

---

## Need me to push to GitHub / update Netlify?
Tell me which repo name you want (`pdeleon29/tatsusolutions-site` is my recommendation) and I’ll give you the exact `git` commands and a ready-to-copy `git remote add` line. If you want, I can also craft the content for each project card (titles + descriptions + suggested repo links).

Good job setting up the stack — you already have DNS, domain, and Netlify in place. This starter is the polished skin for that skeleton. Let's get it live and beautiful.
