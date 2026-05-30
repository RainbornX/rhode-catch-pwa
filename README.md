# Rhode Catch PWA

This version works on iPhone without a Mac, Xcode, or the App Store.

## Use on iPhone

1. Put the `pwa` folder on any HTTPS web host, such as GitHub Pages, Netlify, Vercel, Cloudflare Pages, or your own server.
2. Open the hosted URL in Safari on iPhone.
3. Tap Share, then tap Add to Home Screen.

The app can then launch from the iPhone home screen. Location sorting, weather, and tide data need internet access.

## Local preview on Windows

From this folder:

```powershell
powershell -ExecutionPolicy Bypass -File .\dev-server.ps1 -Port 4173
```

Open:

```text
http://localhost:4173/
```

## Data sources

- Weather: https://open-meteo.com/en/docs
- Tides: https://api.tidesandcurrents.noaa.gov/api/prod/
- Regulations: https://dem.ri.gov/natural-resources-bureau/marine-fisheries

Before keeping fish, check the current Rhode Island DEM recreational rules, size limits, seasons, and license requirements.
