# EzeFone Landing Page - Deployment Guide

## Quick Overview

The EzeFone landing page is a **completely static site** (no server-side code needed). The build process generates plain HTML, CSS, and JavaScript files in the `/out` directory that can be deployed anywhere.

## Local Development

```bash
# Install dependencies
npm install

# Run development server (with hot reload)
npm run dev

# Open http://localhost:3000 in your browser
```

## Building for Production

```bash
# Create static build in /out directory
npm run build

# The /out directory contains the complete static site
```

## Deployment Options

### Option 1: Laravel Forge (Recommended)

1. **Create new site in Forge:**
   - Domain: `ezefone.app` (or your chosen domain)
   - Root path: `/out` (point to the build output)
   - No need to specify PHP version or runtime

2. **Connect GitHub:**
   - Go to your Forge site settings
   - Link GitHub repo: `ezefone-web`
   - Set deploy script to:
     ```bash
     npm install
     npm run build
     ```

3. **Deploy:**
   - Forge will automatically run `npm install` and `npm run build`
   - Site serves static files from `/out`
   - No server runtime needed

### Option 2: Static Host (Vercel, Netlify, etc.)

If using Vercel or Netlify:

1. **Connect GitHub repo**
2. **Set build command:** `npm run build`
3. **Set publish directory:** `out`
4. **Deploy**

### Option 3: Manual Static Upload

```bash
# Build the site
npm run build

# Upload the contents of /out to your web server
# (via FTP, SCP, or Forge's file manager)
```

## File Structure After Build

The `/out` directory contains:

```
out/
├── index.html          # Main page
├── 404.html           # Error page
├── _next/             # JavaScript bundles
│   ├── static/
│   └── chunks/
└── [other assets]
```

## Key Points

- ✅ No Node.js runtime needed on server
- ✅ No database required
- ✅ Fully static - just HTML/CSS/JS
- ✅ Can be cached aggressively
- ✅ Rebuilds take ~2 minutes
- ✅ Build output: ~1.5 MB

## Common Tasks

### Update Content

1. Edit components in `/components/`
2. Commit to GitHub: `git push`
3. Forge auto-deploys (if webhook configured)
4. Or manually run `npm run build` and upload `/out/`

### Add New Page

1. Create `/app/new-page/page.tsx`
2. Build and deploy

### Update Brand Colors

1. Edit `/tailwind.config.ts`
2. Rebuild and deploy

## Environment Variables

**No environment variables needed.** This is a completely static site with no secrets or configuration.

## Troubleshooting

**Site shows old content?**
- Clear browser cache
- Clear Forge cache (if applicable)
- Verify `/out/` was updated with latest build

**Build fails locally?**
```bash
# Clean and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

**Need to update email or links?**
- Search for the value in all files
- Update in components
- Rebuild and deploy

## Monitoring

- Monitor Forge logs for deployment status
- Check site performance with Lighthouse
- Monitor Google Analytics (add tracking code when ready)

## Next Steps

1. Push GitHub repo to remote
2. Create new site in Laravel Forge
3. Configure GitHub deployment webhook
4. Deploy!

---

**Questions?** This site has no backend, no database, no secrets. Just deploy the `/out` folder and you're done!
