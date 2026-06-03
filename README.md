# Daily Planner

A small web app for planning your week. You add one-off tasks (with priority,
date, time) and weekly routines (e.g. "Gym 3× / week"), and the app spreads the
routines across the next 7 days automatically, reflowing them when you add new
fixed commitments. Everything is saved locally in your browser.

Current version: **0.4**

## Files

```
planner/
├── index.html              the app (UI + logic)
├── manifest.webmanifest    makes it installable as an app
├── service-worker.js       offline caching
├── icons/                  app icons (192, 512, maskable)
└── README.md               this file
```

## Run it locally

Because it uses a service worker, open it through a local server rather than
double-clicking the file (service workers don't run over `file://`):

```bash
cd planner
python3 -m http.server 8000
# then open http://localhost:8000
```

## Host it for free (recommended)

Hosting gives you a fixed URL, reliable saving, and full "install as app"
support. Any of these work — pick one:

- **Netlify Drop** — go to https://app.netlify.com/drop and drag the `planner`
  folder onto the page. You get a live URL in seconds.
- **Cloudflare Pages** or **GitHub Pages** — connect a repo and deploy the folder.

All paths in the app are relative, so it works whether it's served from the root
(`yoursite.com`) or a subpath (`yoursite.com/planner/`).

### Installing it as an app

Once it's on a URL (https):
- **Desktop (Chrome/Edge):** open the URL, then use the install icon in the
  address bar, or menu → Install. It opens in its own window and can be pinned.
- **iPhone/iPad (Safari):** Share → Add to Home Screen.
- **Android (Chrome):** menu → Add to Home Screen / Install app.

## Your data

Tasks and routines are stored in your browser's local storage, on the device
you use. They are **not** synced across devices. Use the **Export data** button
to download a backup, and **Import data** to restore it (e.g. on another device
or after clearing browser data). Keep the URL the same and updates won't wipe
your data.

## Developing it further with Claude Code

[Claude Code](https://docs.claude.com/en/docs/claude-code/overview) lets Claude
edit these files directly from your terminal.

1. **Install (native installer, recommended — no Node needed):**
   - macOS / Linux: `curl -fsSL https://claude.ai/install.sh | bash`
   - Windows (PowerShell): `irm https://claude.ai/install.ps1 | iex`
   - Alternative via npm (needs Node.js 18+): `npm install -g @anthropic-ai/claude-code`

2. **Start it in this folder:**
   ```bash
   cd planner
   claude
   ```
   The first run signs you in (a Claude Pro/Max subscription or API credits
   works).

3. **Ask for changes**, e.g. "add a time-of-day preference to routines" or
   "let me drag tasks between days." Claude edits the files; refresh the browser
   (or redeploy) to see the result.

Tip: put the folder under git (`git init`) so every change is tracked and easy
to undo.

## Ideas for next versions

- Time-of-day preferences for routines (morning / evening)
- Skip a single routine session without changing the weekly target
- Drag tasks between days
- Week view / calendar layout
- Dutch language toggle
