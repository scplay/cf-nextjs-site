
# TODO


- [ ] Add Deploy flow guide note
- [ ] Upgrade nextjs to v15

# Dev 

`npm run dev`

# Local Build

```
npm run build
npm run start
```

# Production Deploy

## Cloudflare StaticSite

[Doc - How to deploy a static nextjs site to Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)
[Dashboard - Mange Worker & Pages](https://dash.cloudflare.com/09251128f232cccce012a5c89f080e09/pages/view/cf-nextjs-site)

## Next.js Static Export 

[Doc - Next.js Static Export Guide ](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

Next.js enables starting as a static site or Single-Page Application (SPA), then later optionally upgrading to use features that require a server.

When running `next build`, Next.js generates an HTML file per route. By breaking a strict SPA into individual HTML files, Next.js can avoid loading unnecessary JavaScript code on the client-side, reducing the bundle size and enabling faster page loads.

# Static Files

Image Upload to SM.MS  
[Dashboard - manage static files](https://smms.app/home/picture)

# Fixed Issues

- [x] make tailwind v4 works, wtf it not work at all
  - need import root css file in `layout.tsx` rather than `app/page.tsx`