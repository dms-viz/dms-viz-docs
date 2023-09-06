# What is dms-viz?

Hi there 👋, if you've got some mutation-level data that you want to view on an interactive 3D protein structure, you're in the right place! **dms-viz** is a suite of tools that help you take quantitative data associated with mutations to a protein and analyze that data using intutive visual summaries in the context of a 3D protein structure. Visualizations created with **dms-viz** are intended to be _flexible_, _customizable_, and _shareable_.

::: tip Ready to use the tool?
You can skip to the [Quickstart](/getting-started.md) to learn how to prepare your own data, or you can see what the visualization tool looks like [here](https://dms-viz.github.io/).
:::

## Purpose

We believe that understanding the effects of mutations on a protein's structre, function, and evolutionary trajectory are an invaluable resource. This is particurly true in the field of infectious disease research. As high-throughput techniques like deep-mutational scanning (the 'dms' that gives this project it's name) and the volume of seqeucning surveillance have inceased, so has the wealth of information about the effects of mutations in proteins in a variety of contexts. More and more studies are using this kind of data to do everything from map escape from antibodies and serum on viral glycoprotiein, measure the effects of libraries of mutations on viral fitness, infer viral fitness from huge phylogenies, and learn how the effects of mutations change with epistasis.

We created **dms-viz** to be the sucessor of the awesome tool **dms-view**, which was the first of it's kind to streamline the workflow for mutation-level data by integrating summary statistics with 3D protein models. We wanted to update **dms-view** to make it more flexible to different kinds of input data, add customization in the form of filters and other maniputaions, and maintain the sharable links that made **dms-view** awesome, while additionally allowing you to use data private locally stored data.

## Why dms-viz?

- **Flexible Inputs**

Our command line tool makes it easy to format data from different sources into a single universal specification file. It also allows you to join in data from other locations, specify custom filters and tooltips, and checks for common mistakes.

- **Customizable Visualizations**

The visualization is highly customizable. Choose how to represent the protein structure. Include mutltiple conditions.

- **Shareable URLs**

If you data is hosted online (for example, in a GitHub repository), you can share a link that will automatically load up the view. The URL will also keep track of how you've configured the visualization.

## Development

This tool has two parts:

1. A command line interface (CLI) for formating data that was written in Python and is packaged and distributed with PyPI.
2. A Javascript web-based visualization tool created primarily with the libaries D3.js for making the visualizations and NGL.js for visualizing interactive molecular structures with WebGL.

## Citation
