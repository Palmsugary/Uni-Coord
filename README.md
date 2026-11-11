# Semester Desk

A semester planner for QUT College Summer 2026 (EGD101, EGD102, EGD105, QCD210) that runs on its own in any browser. You don't need Claude open to use it.

It has the same features as the Semester Desk page that was built in Claude:

- **Semester ribbon:** teaching weeks, the mid-semester break, SWOTVAC, exams, and countdowns to the census date and exams.
- **Week planner:** your classes, due dates and study sessions for any week.
- **Weekly work:** a checklist of readings, lecture recordings, and tutorial or lab prep for each week.
- **Assessments:** due dates and hurdles, with stages from *Not started* to *Marked*.
- **Units & results:** weightings, marks, QUT grades (7 to 1, plus result codes like K, S and DA), final results, and estimates of your WAM and GPA.
- **Import:** reads a timetable calendar file (.ics) or a Canvas course download right on your device.

### Bringing in a unit from Canvas

1. In the unit's Canvas site, download the course content for offline viewing (the download is a folder with `index.html` and a `viewer` folder).
2. In the Desk, open **Import**, choose `viewer/course-data.js` from that folder, and press **Read it**. No API key is needed.
3. Untick anything you don't want, then press **Add selected**.

The Desk picks up the unit coordinator, the unit content list, useful links, the assessments with weightings and due dates (from the assessment overview table and Canvas due dates), and each week's videos, worksheets and lecture notes from modules named like `W3 …` or `Week 3 …`. Videos link straight to YouTube.

Canvas releases content week by week, so download the course again each week and import it the same way. Only new items are offered, and assessments are only listed again when something about them changed.

## Using it

Open the GitHub Pages address (see *Publishing* below). On a phone, choose **Add to Home Screen** (iPhone) or **Install app** (Android or Chrome). It then opens like a normal app and keeps working offline.

The first time it opens, it loads your current semester from `seed.json`: the four units, your term dates and the weekly study items. After that, every change is saved in that browser on that device.

### Moving between devices

Your data lives only in the browser where you use the app. To move it to another phone or computer, open **Settings & backup**, press **Download backup** on the old device, then press **Restore from backup** on the new one. Downloading a backup now and then is also a good safeguard against a cleared browser.

### Optional Claude features

Three features need Claude: reading pasted unit outlines, reading screenshots on the Import tab, and **Plan my week with Claude**. To turn them on, paste a Claude API key from [console.anthropic.com](https://console.anthropic.com) into **Settings & backup**.

The key is kept in that browser only, and each use is billed to that API account. Without a key, everything else still works, including .ics timetable import.

### Keeping your timetable in sync with Outlook

The Desk can refresh your classes and exams from a calendar link every time it opens. Outlook and QUT calendar links can't be read by a web page directly, so GitHub fetches a copy for you every 6 hours and publishes it with the app at a hidden address.

**Setting it up (once):**
1. **Get your calendar's ICS link.**
   - **If your timetable reaches Outlook as a subscription** (an internet calendar added *from a link*): Outlook won't publish or export it, so use that original link instead. You can find it in two places:
     - **The source:** the place that gave you the link, such as the calendar or subscribe option on your QUT timetable page.
     - **Classic Outlook on Windows:** **File → Account Settings → Account Settings → Internet Calendars**, then select the calendar to see its address.
     - A `webcal://` link works too.
   - **If it's an ordinary Outlook calendar:** in Outlook on the web, go to **Settings → Calendar → Shared calendars → Publish a calendar**. Choose the calendar, pick **Can view all details**, and copy the **ICS** link.
2. **Add two repository secrets.** In this repository, go to **Settings → Secrets and variables → Actions → New repository secret** and add:
   - `ICAL_URL`: the ICS link.
   - `ICAL_FILE`: a long random name made of letters and digits, for example `t7k2p9x4m1q8w3z6`. This is the hidden file name.
3. **Publish the copy.** Under **Actions → Deploy to GitHub Pages → Run workflow**, run the workflow once.
4. **Point the Desk at it.** In the Desk, open **Settings & backup** and paste `cal/<your ICAL_FILE>.ics` into **Timetable calendar link**, for example `cal/t7k2p9x4m1q8w3z6.ics`. Then press **Save link and sync now**.

**How the sync behaves:**
- **Classes:** only events whose title has a unit code (like EGD105) become classes. Each sync replaces the classes that came from the link, and classes you added by hand are kept.
- **Exams and tests:** these become assessments.
- **Privacy:** the published copy is public to anyone who knows its address. Use a long, random `ICAL_FILE`, and change it if you share the address by mistake.
- **Pausing:** GitHub pauses scheduled runs in repositories with no activity for 60 days. If the timetable stops refreshing, re-run the workflow.

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
| `.github/workflows/pages.yml` | Publishes the app, and the timetable copy when its secrets are set |
