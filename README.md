# Semester Desk

A semester planner for QUT College Summer 2026 (EGD101, EGD102, EGD105, QCD210) that runs on its own in any browser. You don't need Claude open to use it.

It has the same features as the Semester Desk page that was built in Claude:

- **Semester ribbon:** teaching weeks, the mid-semester break, SWOTVAC, exams, and countdowns to the census date and exams.
- **Week planner:** your classes, due dates and study sessions for any week.
- **Weekly work:** a checklist of readings, lecture recordings, and tutorial or lab prep for each week.
- **Assessments:** due dates and hurdles, with stages from *Not started* to *Marked*.
- **Units & results:** weightings, marks, QUT grades (7 to 1, plus result codes like K, S and DA), final results, and estimates of your WAM and GPA.
- **Import:** reads a timetable calendar file (.ics) or a Canvas course download right on your device.
- **Study:** a supplement to your handwritten notes, with a *Next up* list of what to study next, short summaries, a printable formula sheet, an SI units reference, and a weak-areas tracker with a mistake log.

### The Study tab

Your handwritten notes stay your main record. The Study tab holds what's worth having on every device:

- **Next up** ranks what to study next from this week's class work (and anything left over), assessments due in the next three weeks (by weighting and days left), topics you've rated *Not yet* or *Shaky*, and items you add yourself. Each item says why it's there. **Plan it** books a study session in the Week planner, and once a session is booked the item says when and drops down the list. The top few also show on the Overview.
- **Summaries** are short notes per unit and week, written in Markdown with maths between dollar signs: `$v = u + at$` inline, or `$$\int_a^b f(x)\,dx$$` on its own line. Use **+ Note** on any Weekly work item or assessment to start one already filled in.
- **Formula sheet** groups formulas by unit and topic, with what each symbol means and when to use it. **Add them** loads the EGD105 and EGD102 starter formulas (standard maths and physics, so check them against your lecture notes). **Print or save as PDF** gives a two-column sheet.
- **Topics & weak areas** lists each unit's topics (from its Canvas download, or ones you add). Rate each one *Not yet*, *Shaky*, *OK* or *Solid*, and press **Practised today** after working on it. The **Mistake log** records what went wrong, why, and the fix; logging one lowers that topic's rating a level.
- **SI units** has the base and derived units, prefixes and common constants, and you can add your own rows.

An assessment's **Topics this covers** (in its edit window) tells Next up which weak topics to bring forward before it's due. The Desk fills this in from topics named in the assessment's notes, and a final exam covers every topic. Study data is saved, backed up and synced like everything else. Maths and Markdown need a one-time download from jsDelivr, after which they work offline.

Import files (.json) can also carry `formulas` (`code`, `name`, `tex`, `where`, `when`, `topic`) and `notes` (`code`, `week`, `title`, `body`).

### Bringing in a unit from Canvas

1. In the unit's Canvas site, download the course content for offline viewing (the download is a folder with `index.html` and a `viewer` folder).
2. In the Desk, open **Import**, choose `viewer/course-data.js` from that folder, and press **Read it**. No API key is needed.
3. Untick anything you don't want, then press **Add selected**.

The Desk picks up the unit coordinator, the unit content list, useful links, the assessments with weightings and due dates (from the assessment overview table and Canvas due dates), and each week's videos, worksheets and lecture notes from modules named like `W3 …` or `Week 3 …`. Videos link straight to YouTube.

Canvas releases content week by week, so download the course again each week and import it the same way. Only new items are offered, and assessments are only listed again when something about them changed.

## Using it

Open the GitHub Pages address (see *Publishing* below). On a phone, choose **Add to Home Screen** (iPhone) or **Install app** (Android or Chrome). It then opens like a normal app and keeps working offline.

The first time it opens, it loads your current semester from `seed.json`: the four units, your term dates and the weekly study items. After that, every change is saved in that browser, and synced to your other devices if you turn on sync (see below).

### Using it on several devices

Turn on **Sync across devices** and the Desk keeps one copy of your planner in your GitHub account, so your laptop, desktop and phone all show the same thing. Each change syncs a moment after you make it, and the Desk checks for changes from your other devices whenever you open it or switch back to it. If two devices change it at once, the most recent change wins.

**Setting it up (once):**
1. **Make a token.** On GitHub, open [Fine-grained personal access tokens → Generate new token](https://github.com/settings/personal-access-tokens/new).
   - **Name:** Semester Desk sync.
   - **Expiration:** pick a date after your exams (or a year out).
   - **Permissions:** under *Account permissions*, set **Gists** to **Read and write**. Leave everything else as it is.
   - Press **Generate token** and copy it.
2. **Turn on sync on your main device.** In the Desk, open **Settings & backup**, paste the token under **Sync across devices**, and press **Turn on sync**. This makes a secret gist holding your planner.
3. **Add your other devices.** On the main device, press **Copy setup link for another device**. Send the link to yourself (a note or an email to yourself) and open it in each other browser, such as Edge on your laptop or Safari on your phone. That browser picks up your planner and stays in sync.

**Good to know:**
- **Privacy:** a secret gist doesn't show up in searches or on your public profile, but anyone who has its address can read it. The setup link and token work like a password, so keep them to yourself.
- **What isn't synced:** the Claude API key stays in each browser. Your calendar link *is* synced, so the timetable refreshes on every device.
- **If the token expires:** the Desk says so at the bottom of the page. Make a new token, choose **Turn off in this browser**, then paste the new one.
- **Backups:** **Download backup** and **Restore from backup** still work, and a backup now and then is a good safeguard.

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
