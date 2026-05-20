# Hexo Blog Template

This repository is a reusable Hexo blog template based on the `Butterfly` theme.

Detailed Chinese guide for beginners:

- `Hexo+Butterfly使用说明（详尽版）.md`

## What is included

- Hexo project source
- Butterfly theme in `themes/butterfly`
- Existing page structure: home, about, tags, categories, link, friends, music, movies
- Custom visual polish in `source/css/site-polish.css`

## What is intentionally removed

- Personal posts
- Drafts
- Personal domain binding
- Personal deployment repository
- Personal social links and comment repository

## Quick start

1. Install `Node.js` and `Git`
2. Clone this repository
3. Install dependencies

```bash
npm install
```

4. Run locally

```bash
npx hexo clean
npx hexo generate
npx hexo server
```

Default preview address: `http://localhost:4000`

## Files to edit first

- `_config.yml`
  - `title`
  - `description`
  - `keywords`
  - `author`
  - `url`
  - `deploy.repository`
- `_config.butterfly.yml`
  - `social`
  - homepage `subtitle`
  - `card_author.description`
  - `card_announcement.content`
  - comment system config if you want comments
- `source/about/index.md`
- `source/_data/link.yml`

## Comment system

Comments are disabled by default in this template.

If you want to use `Giscus`, fill in these fields in `_config.butterfly.yml`:

- `comments.use`
- `giscus.repo`
- `giscus.repo_id`
- `giscus.category_id`

## Deployment

For GitHub Pages, set `_config.yml`:

```yml
url: https://yourname.github.io
deploy:
  type: git
  repository: git@github.com:yourname/yourname.github.io.git
  branch: main
```

Then deploy with:

```bash
npx hexo clean
npx hexo generate
npx hexo deploy
```
