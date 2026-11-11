# Semester Desk

A semester planner for QUT College Summer 2026 (EGD101, EGD102, EGD105, QCD210) that runs on its own in any browser. You don't need Claude open to use it.

It has the same features as the Semester Desk page that was built in Claude:

- **Semester ribbon:** teaching weeks, the mid-semester break, SWOTVAC, exams, and countdowns to the census date and exams.
- **Week planner:** your classes, due dates and study sessions for any week.
- **Weekly work:** a checklist of readings, lecture recordings, and tutorial or lab prep for each week.
- **Assessments:** due dates and hurdles, with stages from *Not started* to *Marked*.
- **Units & results:** weightings, marks, HD/D/C/P/N grades, and estimates of your WAM and GPA.
- **Import:** reads a timetable calendar file (.ics) right on your device.

## Using it

Open the GitHub Pages address (see *Publishing* below). On a phone, choose **Add to Home Screen** (iPhone) or **Install app** (Android or Chrome). It then opens like a normal app and keeps working offline.

The first time it opens, it loads your current semester from `seed.json`: the four units, your term dates and the weekly study items. After that, every change is saved in that browser on that device.

### Moving between devices

Your data lives only in the browser where you use the app. To move it to another phone or computer, open **Settings & backup**, press **Download backup** on the old device, then press **Restore from backup** on the new one. Downloading a backup now and then is also a good safeguard against a cleared browser.

### Optional Claude features

Three features need Claude: reading pasted unit outlines, reading screenshots on the Import tab, and **Plan my week with Claude**. To turn them on, paste a Claude API key from [console.anthropic.com](https://console.anthropic.com) into **Settings & backup**.

The key is kept in that browser only, and each use is billed to that API account. Without a key, everything else still works, including .ics timetable import.

## Publishing (GitHub Pages)

The workflow in `.github/workflows/pages.yml` publishes the app every time `main` changes. Before the first run, turn Pages on once: go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.

The app will then be at `https://<your-github-username>.github.io/Uni-Coord/`.

GitHub Pages on a free account only works for public repositories. If this repository stays private, you can still use the app:

- **Locally:** run `python3 -m http.server` in this folder and open `http://localhost:8000`.
- **On another host:** upload the folder to any free static host, such as Netlify or Cloudflare Pages.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app: layout, styles and code |
| `seed.json` | Your starting semester, loaded only when the browser has no saved planner |
| `manifest.webmanifest`, `icons/` | Let the app be installed to a home screen |
| `sw.js` | Keeps the app working offline |
