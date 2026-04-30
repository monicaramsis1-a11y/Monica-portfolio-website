# Deployment Guide

This portfolio is ready for static hosting with a Web3Forms-powered contact form.

## Before Deploying

1. Create a free Web3Forms account and get an access key for `monica.ramsis1@gmail.com`.
2. In `contact.html`, replace `YOUR_WEB3FORMS_ACCESS_KEY` with your real key.
3. Commit and push the change.

## Option A: Netlify

1. Push this project to a GitHub repository.
2. In Netlify, choose Add new site -> Import an existing project.
3. Connect GitHub and select the repository.
4. Build settings:
   - Build command: leave empty
   - Publish directory: `.`
5. Deploy the site.

## Option B: GitHub Pages

1. Push project to GitHub.
2. In repository settings, open Pages.
3. Deploy from branch: `main` and folder `/ (root)`.
4. Wait for deployment and open the generated Pages URL.

## Post-Deployment Checks

1. Verify pages load over HTTPS.
2. Check navigation links on all pages.
3. Submit the contact form and confirm the message arrives at `monica.ramsis1@gmail.com`.
4. Test validation on invalid inputs and mobile widths (360px, 390px, 768px).
