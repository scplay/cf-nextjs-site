
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

 [How to deploy a static nextjs site to Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)

## Next.js Static Export 

[Next.js Static Export Guide Doc](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

Next.js enables starting as a static site or Single-Page Application (SPA), then later optionally upgrading to use features that require a server.

When running `next build`, Next.js generates an HTML file per route. By breaking a strict SPA into individual HTML files, Next.js can avoid loading unnecessary JavaScript code on the client-side, reducing the bundle size and enabling faster page loads.

# Static Files

Image Upload to SM.MS  
[manage dashboard](https://smms.app/home/picture)

# Fixed Issues

- [x] make tailwind v4 works, wtf it not work at all
  - need import root css file in `layout.tsx` rather than `app/page.tsx`