# AeroIntel Atlas

AeroIntel Atlas is a static website for exploring open-source air power
inventories of NATO and BRICS countries on an interactive world map. It offers
Turkish and English interfaces, country and aircraft detail panels, munition
profiles, user accounts, and AI-assisted comparison.

## Run Locally

1. Open the project folder.
2. Open `index.html` in Chrome, Edge, or Firefox.
3. No installation, database, or server is required.

The core application files and images are bundled locally. Source and image
credit links open external websites.

## Features

- Zoomable world map with NATO countries in blue and BRICS members in red.
- Country air power profiles and scrollable aircraft inventories.
- Aircraft detail panels with specifications, capability profiles, source
  information, and image credits.
- Clickable munition profiles with images and descriptions.
- Turkish and English language selection.
- Prototype registration, sign-in, password reset, profile, and settings.
- Favorites, aircraft and country comparisons, and profile-based AI analysis.
- A control menu with account details and sources.

## Academic Documents

The reports for the course submission are stored locally in `docs/`. This
folder contains personal information and is excluded from the GitHub repository.

## Files for the Course Submission

Copy these files and folders to the USB drive:

- `index.html`
- `styles.css`
- `app.js`
- `assets/`
- `docs/`
- `README.md`

The local `tools/` folder contains scripts for rebuilding reports and image
catalogs. It is not needed to run the website and is excluded from the GitHub
repository. Include it separately only if the complete development source is
required for the course submission.

## Technical Notes

Accounts and AI analysis are browser-side prototypes. Account data is stored
in localStorage, and the password reset flow does not send email. A production
version would need a backend, database, and email verification.
