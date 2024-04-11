# Contributing Guide

Welcome to the `dms-viz` project! [`dms-viz`](https://dms-viz.github.io/) is an interactive tool for visualizing mutation-level data in the context of a 3D protein structure. The tool consists of two parts:

1. A [Command Line Interface (CLI)](https://github.com/dms-viz/configure_dms_viz) written in Python is used to format data into a `.json` file that can be uploaded
   to
2. An [interactive web-based visualization](https://github.com/dms-viz/dms-viz.github.io) tool written with Javascript, [D3.js](https://d3js.org/), and [NGL.js](https://nglviewer.org/).

In addition to these two components, there is also the documentation that you're reading. The documentation is built using [`VitePress`](https://vitepress.dev/).

Because this project contains multiple components, each in its repository, this contributing/developing guide is split into several parts:

1. [Contributing to the Command Line Interface (CLI)](#contributing-to-configure_dms_viz)
2. [Contributing to the Interactive Web Application](#contributing-to-dms-vizgithubio)
3. [Contributing to the Documentation](#contributing-to-the-documentation)

If you're interested in contributing to this project, please reach out on [GitHub](https://github.com/dms-viz)!

## Contributing to `configure_dms_viz`

Thank you for your interest in contributing to `configure_dms_viz`! Here is a guide on how to develop this package as well as some guidelines for contributing.

### Developing

<br>

#### 1. Set Up Your Environment

We use [`Poetry`](https://python-poetry.org/) for dependency management and packaging. If you don't have it installed, get it [here](https://python-poetry.org/docs/#installation).

#### 2. Fork the Repository

Before you start making changes, fork the repository to your own GitHub account.

#### 3. Clone Your Fork

Clone your forked repository to your local machine.

```bash
git clone https://github.com/dms-viz/configure_dms_viz.git
cd configure_dms_viz
```

#### 4. Install Dependencies

With `Poetry`, setting up the project environment and installing dependencies is easy:

```bash
poetry install
```

### Contributing Guidelines

<br>

#### 1. Work on a New Branch

Don't work directly on the main branch. Create a new branch for your feature or bug fix.

```bash
git checkout -b your-new-feature-or-fix
```

#### 2. Document Your Changes

Make sure to add comments to your code appropriately. If you're introducing a new feature or making significant changes, update the README.md file as necessary.

#### 3. Commit Your Changes

Make granular commits with meaningful commit messages. This makes it easier to review your contributions.

#### 4. Versioning

Versioning follows semantic versioning (i.e. `X.Y.Z.`) where each component represents:

1. Major version (`X`): This number is incremented when there are breaking changes that require updates to the web tool API.

2. Minor version (`Y`): This number is incremented when new features are added in a backward-compatible manner.

3. Patch version (`Z`): This number is incremented when backward-compatible bug fixes are introduced.

::: warning Important!
Make sure that the version is incremented in the `pyproject.toml`, otherwise publishing to PyPI will fail. Also, make sure to update the `CHANGELOG` to document your changes.
:::

#### 4. Push to Your Fork

Push the changes to your forked repository.

```bash
git push origin your-new-feature-or-fix
```

#### 5. Create a Pull Request

Once you're done with your changes and you think it's ready for review, create a pull request from your forked repository to the original repository.

### Code Formatting

The code is formatted using `Black`, which will be installed as a development dependence by `Poetry`. Linting is handled by `Ruff`, which will also be installed by `Poetry`.

## Contributing to `dms-viz.github.io`

Thanks for your interest in contributing to the visualization component of **`dms-viz`**! Below is a quick guide for developing the website along with some guidelines for contributing.

### Developing

<br>

#### Environment Setup

The development of dms-viz utilizes `npm`, the JavaScript package manager, and [`Vite`](https://vitejs.dev/), the build tool.

To begin contributing, follow these steps:

1. Clone the repository to your local machine.

2. Install the necessary dependencies specified in the package.json file by running the command:

```bash
npm install
```

#### Interactive Server

To start development, you'll need to run the local server using Vite. This can be done with the command:

```bash
npm run dev
```

This command will start a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### How to Contribute

Contributions are made through the Fork and Pull Request workflow. If you're unfamiliar with this workflow, here's a simplified overview:

1. Create a fork of the [**`dms-viz`** repository](https://github.com/dms-viz/dms-viz.github.io) on your own GitHub account.

2. Make your changes in your forked repository.

3. Once you're done with your changes, create a pull request to propose your changes to **`dms-viz`**.

4. Your pull request will then be reviewed and, if everything looks good, your changes will be merged into the main repository.

::: tip
Remember to fetch the latest changes from the main repository before you start working on new features or fixes.
:::

### Code Guidelines

We aim for clean and consistent code across the entire project. To this end, we use `ESLint` for linting and `Prettier` for code formatting. Make sure to install these extensions in your code editor. Before making a Pull Request, ensure your code adheres to these formatting guidelines.

### Versioning

To ensure backward compatibility with older versions of specifications generated by `configure_dms-viz`, our web-based visualization tool employs a systematic versioning strategy. Whenever there are major updates or modifications to the tool, that might affect the existing JSON specifications or the overall behavior of the visualization, we introduce a new version. Here's how the versioning system works:

#### Version Routes

Each version of the tool is accessible through separate routes. If there are multiple major versions with breaking changes, the route is designated as `Vx/`, where `x` is the version (i.e., `V1/`, `V2/`, and so on). This approach allows us to introduce new features and updates without affecting the existing links to views created with earlier versions of the tool. Users can continue to access and interact with their existing plots through the respective versioned routes.

#### Sharing URLs

This means that if you put a URL link in a paper, this link will automatically contain the version route, ensuring that the visualization will remain accessible and function correctly even after newer versions are released. For instance, a plot created with the `version 0` pre-release of the tool will have a URL structure like: https://dms-viz.github.io/V0/<unique_plot_identifier>.

## Contributing to the documentation

The repository for the documentation is located under the `dms-viz` GitHub organization [here](https://github.com/dms-viz/dms-viz-docs).

### Developing

The docs are created with [`VitePress`](https://vitepress.dev/). To develop the docs, follow the instructions below:

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

### Deploying

The docs are hosted on GitHub pages via a specific `gh-pages` branch and builds are automated using GitHub Actions via [this deployment script](/.github/workflows/deploy.yml). The website will build on `pull requests` and `pushes` to the `main` branch.
