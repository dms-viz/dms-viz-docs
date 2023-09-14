# What is dms-viz?

Hi there 👋, if you've got some mutation-level data that you want to view on an interactive 3D protein structure, you're in the right place! **`dms-viz`** is a suite of tools that help you take quantitative data associated with mutations to a protein and analyze that data using intutive visual summaries in the context of a 3D protein structure. Visualizations created with **`dms-viz`** are intended to be _flexible_, _customizable_, and _shareable_.

::: tip Ready to use the tool?
You can skip to the [Quickstart](/introduction/getting-started/) to learn how to prepare your own data, or you can see what the visualization tool looks like [here](https://dms-viz.github.io/).
:::

## Purpose

Understanding the repercussions of mutations on a protein's structure, function, and evolutionary trajectory is invaluable, especially in the realm of infectious disease research. The advancement of high-throughput techniques, such as deep-mutational scanning (_the 'DMS' which lends this project its name_), coupled with the expansion of viral surveillance sequencing, has massivley increased our access to data on the impacts of various mutations in proteins across different contexts. Increasingly, studies leverage this pool of data to accomplish a range of objectives, from mapping antibody and serum escape by viral glycoproteins \[[1]()\] to determining the influence of numerous mutations on viral fitness \[[2]()\], inferring viral fitness from extensive phylogenies \[[3]()\], and understanding the fluctuating effects of mutations as a result of epistasis \[[4]()\].

To further facilitate the analysis of mutation-level data, we have developed **`dms-viz`**, envisioned as the successor to the remarkable tool [**`dms-view`**](https://dms-view.github.io/). The latter pioneered the integration of summary visualizations with interactive 3D protein structures, streamlining the workflow for analyzing mutation-level data. Building on the strengths of **`dms-view`**, we aimed to create a tool that was _adaptable_ to various types of input data, offering enhanced _customization_ options through the addition of filters and other manipulations. Furthermore, we preserved the _shareable_ links that were a feature of dms-view, while also incorporating the functionality to utilize privately stored local data, enhancing both accessibility and privacy.

## Why use dms-viz?

- **Flexible Inputs**

  Utilize our command-line tool, `configure-dms-viz`, to streamline data formatting effortlessly. It facilitates the integration of data from varied sources into a singular, universal `.json` specification file. Moreover, this tool makes it easy to incorporate additional datasets from different locations, stipulate custom filters and tooltips, and identify common errors.

- **Customizable Visualizations**

  Experience unparalleled customization with your visualizations. You have the liberty to select the appearance of the protein structure, visualize multiple conditions per dataset, and extend functionalities with custom filters, tooltips, and beyond.

- **Shareable URLs**

  Should your data be hosted online (like in a [GitHub](https://github.com/) repository), sharing becomes a breeze with URLs that can automatically load the visualizations. Moreover, these URLs retain the configuration settings of your visualization, enhancing the sharing experience. However, if you don't want to host your data online, you can still use **`dms-viz`** on your local files.

## Development

**`dms-viz`** has two components:

1. A command line interface (CLI) for formating data that was written in `Python` using the [click](https://click.palletsprojects.com/en/8.1.x/) API.
2. A web-based visualization tool written in 'vanilla' `Javascript` using primarily the libraries [D3.js](https://d3js.org/) for making the visualizations and [NGL.js](https://nglviewer.org/#page-top) for creating interactive molecular structures.

If you're interested in contributing, check out the [Contributing Guide](/project-info/contributing-guide/) for details.

## Citation

If you end up using **`dms-viz`** in your paper, please cite us!

```md
TODO: Add citation here
```
