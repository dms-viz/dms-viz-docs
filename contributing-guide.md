# Contributing Guide

Welcome to the `dms-viz` project! [dms-viz](https://dms-viz.github.io/) is an interactive tool for visualizing mutation-level data in the context of a 3D protein structure. The tool consists of two parts:

1. A [Command Line Interface (CLI)]() written in Python used to format data into a `.json` file that can be uploaded
   to
2. An [interactive web-based visualization]() tool written with Javascript, [D3.js](), and [NGL.js]().

Because this project is broken into two separate components, each in their own repositories, this contributing/developing guide is split into two parts.

If you're intersted in contributing to this project, please reach out on [GitHub](https://github.com/dms-viz)!

## Contributing to `configure_dms_viz`

Thank you for your interest in contributing to `configure_dms_viz`! Here is guide on how to develop this package as well as some guidelines for contributing.

### Developing

<br>

#### 1. Set Up Your Environment:

We use [`Poetry`](https://python-poetry.org/) for dependency management and packaging. If you don't have it installed, get it [here](https://python-poetry.org/docs/#installation).

#### 2. Fork the Repository:

Before you start making changes, fork the repository to your own GitHub account.

#### 3. Clone Your Fork:

Clone your forked repository to your local machine.

```bash
git clone https://github.com/dms-viz/configure_dms_viz.git
cd configure_dms_viz
```

#### 4. Install Dependencies:

With `Poetry`, setting up the project environment and installing dependencies is easy:

```bash
poetry install
```

### Contributing Guidelines:

<br>

#### 1. Work on a New Branch:

Don't work directly on the main branch. Create a new branch for your feature or bug fix.

```bash
git checkout -b your-new-feature-or-fix
```

#### 2. Document Your Changes:

Make sure to comment your code appropriately. If you're introducing a new feature or making significant changes, update the README.md file as necessary.

#### 3. Commit Your Changes:

Make granular commits with meaningful commit messages. This makes it easier to review your contributions.

#### 4. Push to Your Fork:

Push the changes to your forked repository.

```bash
git push origin your-new-feature-or-fix
```

#### 5. Create a Pull Request:

Once you're done with your changes and you think it's ready for review, create a pull request from your forked repository to the original repository.

### Code Formatting

The code is formatted using `Black`, which will be installed as a development dependence by `Poetry`. Linting is handled by `Ruff`, which will also be installed by `Poetry`.

## Contributing to `dms-viz.github.io`

Thanks for your interest into contributing to the visualization component of **`dms-viz`**! Below is a quick guide for developing the website along with some guidelines for contributing.

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

First, you'll need to create a fork of the dms-viz repository on your own GitHub account.
Make your changes in your forked repository.

Once you're done with your changes, create a pull request to propose your changes to the dms-viz main repository.

Your pull request will then be reviewed and, if everything looks good, your changes will be merged into the main repository.

Remember to fetch the latest changes from the main repository before you start working on new features or fixes.

### Code Guidelines

We aim for clean and consistent code across the entire project. To this end, we use `ESLint` for linting and `Prettier` for code formatting. Make sure to install these extensions to your code editor. Before making a Pull Request, ensure your code adheres to these formatting guidelines.
