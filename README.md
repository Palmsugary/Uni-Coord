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

### Weekly study blocks

Press **Weekly study template** in the Week planner. The Desk builds a week of study blocks around your classes: two 2-hour deep-work blocks a day from Monday to Saturday (each unit three times a week, 24 hours in all), a 1-hour light block most evenings, and a 2-hour **catch-up** block on Friday. Sunday stays free for your weekly review. The **Mid-semester break** template is about 5 hours a day of consolidation. Change any block, then press **Save and fill my planner** to place the blocks from today to the end of term. A block that would clash with a class moves to the nearest free time that day. Christmas Day is always left free, and you can add other days off.

Re-saving the template replaces future template sessions you haven't touched. Sessions you've edited, ticked off or added yourself are kept.

**Missed sessions:** a study session from an earlier day that isn't ticked off moves into the next Friday catch-up block, never onto the next day. If the catch-up block is full, the planner says how much didn't fit, which is the cue to make next week's template lighter. Tick sessions off as you finish them, from the Overview's *Today* list or by opening them in the planner.

**On your phone and in Outlook:** with sync turned on, open **Settings & backup → Study sessions in your phone or Outlook calendar** and press **Make my calendar link**. Subscribe to that link once in Outlook (*Add calendar → Subscribe from web*), on iPhone (*Settings → Calendar → Accounts → Add Subscribed Calendar*) or in Google Calendar (*From URL*). Each study session then appears with a reminder 10 minutes before it, and the link updates whenever the Desk syncs. Calendars refresh subscriptions every hour or few. The link is a second secret gist that holds only your study sessions. Keep it private.

### The Study tab

Your handwritten notebooks (one per unit) are the record. The Study tab holds what's worth having on every device, filled in during a 10-minute wrap-up each study day:

- **Sunday review** is where *Next up* lives. It suggests what deserves next week's study blocks: class work left over, assessments due in the next three weeks, topics rated *Not yet* or *Shaky*, and anything you add. Choose a block from **Put into a block…** and that block takes the suggestion as its focus. During the week, just follow the schedule. On weekends the Overview shows a *Weekly review* button.
- **Lecture index**: one line per lecture with what it covered and the notebook page. **+ Note** on a Weekly work item starts one.
- **Unit pages**: each unit's target grade (6 by default) and how its marks compare. If a unit is below target after two marks, the page suggests moving one weekly block to it from your safest unit. Each page also has lists suited to the unit:
  - **EGD105:** methods and its formula sheet.
  - **EGD102:** its formula sheet, a lab tracker and a problem-solving checklist.
  - **EGD101:** a design decision log and team actions.
  - **QCD210:** a source library, a referencing checklist (APA 7) and a GenAI use log.
- **Formula sheet**: add each formula the first time you meet it, with what every symbol means and its SI unit. **Print or save as PDF** gives a two-column sheet.
- **Topics & mistakes**: rate each topic *Not yet*, *Shaky*, *OK* or *Solid*, and log mistakes (what went wrong, why, the fix). A unit without a Canvas content list takes its topics from Weekly work items titled "Topic: …".
- **SI units**: base and derived units, prefixes and constants, plus your own rows.

**Assessments** also get **Marking criteria**: copy in the rubric lines, tick each as your work meets it, and the assessment row shows how many are met. You can also add a **Released** date and the **Topics this covers**.

**Behind:** a unit shows as *Behind* (on the Overview, its unit card and its unit page) when either of these happens:
- Weekly work from an earlier week is still unticked. This week's items count from Saturday, after Friday's catch-up.
- An assessment misses a checkpoint: started by the end of its release week (two weeks before it's due if no release date is set), and a draft done (*Final checks*) five days before it's due. Exam units also need every topic rated *OK* or better by SWOTVAC, or a week before exams.

While a unit is behind, the Desk books a 5th deep hour for it on Saturday. The hour disappears once it's cleared.

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
