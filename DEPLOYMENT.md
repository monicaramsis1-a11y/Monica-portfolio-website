# Deployment Guide

This portfolio is ready for static hosting. Recommended host: Netlify (works with the contact form without a backend).

## Option A: Netlify (recommended)

1. Push this project to a GitHub repository.
2. Go to Netlify and choose Add new site -> Import an existing project.
3. Connect your GitHub account and select the repository.
4. Build settings:
   - Build command: leave empty
   - Publish directory: `.`
5. Deploy the site.
6. In Netlify dashboard, open Forms and verify a `contact` form is detected.
7. Submit the live contact form once and confirm the submission appears in Netlify Forms.
8. Optional: configure email notifications under Forms -> Settings.

## Option B: GitHub Pages

1. Push project to GitHub.
2. In repository settings, open Pages.
3. Deploy from branch: `main` and folder `/ (root)`.
4. Wait for deployment and open the generated Pages URL.

Note: GitHub Pages does not process Netlify form submissions. For a fully functional contact form without backend code, use Netlify hosting.

## Post-Deployment Checks

1. Verify pages load over HTTPS.
2. Check navigation links on all pages.
3. Test the contact form validation and successful submission.
4. Test on mobile widths (360px, 390px, 768px) and desktop.
