# dms-viz-docs

This repo contains the code for the website hosting the documentation for [dms-viz.github.io](dms-viz.github.io), both the configuration tool and the main visualization tool.

## Developing

These docs were created with [`VitePress`](https://vitepress.dev/). To develop the docs, follow the instructions below:

1. Clone the repository

```bash
git clone git@github.com:dms-viz/dms-viz-docs.git
cd dms-viz-docs
```

2. Install node packages

```bash
npm install
```

3. Start the development server

```bash
npx vitepress dev
```

Now, you should be able to see the website built locally. Changes to the website should be automatically reflected on the page. For details on the routing structure and how to develop a `VitePress` site, go to the [documentation for VitePress](https://vitepress.dev/guide/getting-started).

## Deploying

The docs is hosted on GitHub pages via a specific `gh-pages` branch and builds are automated using a GitHub Actions via [this deployment script](/.github/workflows/deploy.yml). The website will build on `pull requests` and `pushes` to the `main` branch.
