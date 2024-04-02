# Getting Started

## Overview

Using **`dms-viz`** involves two steps. First, using a command line tool called [`configure-dms-viz`](https://pypi.org/project/configure-dms-viz/), you specify some information about your dataset to generate a `.json` format specification file. Second, you open up the [web-based tool](https://dms-viz.github.io/) and upload your specification file to generate an interactive visualization. Below are some quickstart instructions to get you oriented.

::: tip Want to Skip Ahead?
If you're interested in the detailed command line API, check out the reference [here](/preparing-data/command-line-api/). If you've already formatted your data and you're ready to start visualizing it, check out the instructions for that [here](/visualizing-data/web-tool-api/).
:::
Prerequisites

To start using **`dms-viz`** with your own data, you'll need to install the command line tool [`configure-dms-viz`](https://pypi.org/project/configure-dms-viz/). To use `configure-dms-viz`, you must ensure that you have the correct version of Python (3.9 or later) installed on your system.

If you are unsure whether you have the correct version of Python installed, open a terminal window (Command Prompt in Windows, Terminal in macOS, or a terminal emulator in Linux) type the following command and press Enter:

```bash
python --version
```

Check the version number that is displayed. It should be 3.9.x or later. If the command isn't recognized or the version is earlier than 3.9, you will need to install or update Python.

To install `configure-dms-viz`, you'll also need the package manager `pip`. Here's how to check if `pip` is installed and how to install it if it isn't. In the terminal window, type the following command and press Enter:

```bash
pip --version
```

If `pip` is installed, the version number will be displayed. If it is not installed, you will see an error message. If `pip` isn't installed, follow [these](https://pip.pypa.io/en/stable/installation/) instructions to install it.

## Installation

Currently, `configure-dms-viz` is distributed on [PyPI](https://pypi.org/), allowing you to install `configure-dms-viz` using `pip`. To install the latest version of `configure-dms-viz`, type the following command into the terminal:

```bash
pip install configure-dms-viz
```

Now, `configure-dms-viz` should have been installed and you shouldn't see any error messages. You can double-check that the installation worked correctly by typing the following into the terminal:

```bash
configure-dms-viz --help
```

You should see the help message for the tool printed to the terminal.

## Basic Usage

`configure_dms_viz` is a command-line tool designed to create a `JSON` format specification file for **`dms-viz`**. You provide the data that you'd like to visualize along with additional information to customize the analysis. The resulting specification file can be uploaded to [**`dms-viz`**](https://dms-viz.github.io/) for interactive visualization of your data. Below is an overview of the process of using `configure_dms_viz`.

::: tip Looking for more details?
For a detailed explanation of the features of `configure_dms_viz` check out the reference [here](/preparing-data/command-line-api/).
:::

`configure-dms-viz` has two commands, `format` and `join`. To format a single dataset for **`dms-viz`**, you execute the `configure-dms-viz format` command with the required and optional arguments as needed:

```bash
configure-dms-viz format \
    --name <experiment_name> \
    --input <input_csv> \
    --metric <metric_column> \
    --structure <pdb_structure> \
    --sitemap <sitemap_csv> \
    --output <output_json> \
    [optional_arguments]
```

The information that is required to make a visualization file for **`dms-viz`** is as follows:

1. `--name`: The [name of your dataset](/preparing-data/command-line-api/#name) as you'd like it to appear in the visualization.
2. `--input`: The file path to your [input data](/preparing-data/command-line-api/#input).
3. `--metric`: The name of the column that contains [the metric](/preparing-data/command-line-api/#metric) you want to visualize.
4. `--structure`: The [protein structure](/preparing-data/command-line-api/#structure) that you want to use as a model.
5. `--sitemap`: [A map of the sites](/preparing-data/command-line-api/#sitemap) in your data to the sites in the reference and protein.
6. `--output`: The file path of [the output](/preparing-data/command-line-api/#output) `.json` file.

The remaining arguments are all _optional_ and configure the look and interaction of your final visualization. For more details on the individual arguments, check out the [API reference](/preparing-data/command-line-api/).

::: warning Before going any further
If you plan to use `configure-dms-viz` right away, it's crucial to make sure that your data meets some initial requirements. Please check out what these requirements are [here](/preparing-data/data-requirements/).
:::

Now, let's use `configure-dms-viz` with a minimal example. This data is included in the [GitHub repository](https://github.com/dms-viz/configure_dms_viz/tree/main). If you want to follow along, clone the repository and run `configure-dms-viz` from the top of the directory.

**Input**

```bash
configure-dms-viz format \
   --name "REGN mAb Cocktail" \
   --input tests/SARS2-RBD-REGN-DMS/input/REGN_escape.csv \
   --sitemap tests/SARS2-RBD-REGN-DMS/sitemap/sitemap.csv \
   --metric "mut_escape" \
   --metric-name "Escape" \
   --structure "6XDG" \
   --included-chains "E" \
   --condition "condition" \
   --condition-name "Antibody" \
   --output ./REGN_escape.json
```

Here, we've specified that we want the dataset to be called `REGN mAb Cocktail` (named after the Regeneron Antibody cocktail against SARS-CoV-2) and we've pointed to the [input data](https://github.com/dms-viz/configure_dms_viz/blob/main/tests/SARS2-RBD-REGN-DMS/input/REGN_escape.csv) containing scores detailing the degree of antibody escape from the `REGN mAb Cocktail`. We've also specified a [sitemap](https://github.com/dms-viz/configure_dms_viz/blob/main/tests/SARS2-RBD-REGN-DMS/sitemap/sitemap.csv) that tells the tool how sites in your data correspond to the sites in the protein structure. Then, we specified that we wanted to use the protein structure `6XDG` from the [RSCB PDB](https://www.rcsb.org/) and only show our data on chain `E` of that structure. The column in the input data that contains our data is called `mut_escape`, and we have different values of `mut_escape` for the same mutations depending on the `condition` (in this case, the condition refers to escape from each antibody in the cocktail).

The result of this command should be a message printed to the terminal that looks like this:

**Output**

```md
Formatting data for visualization using the 'mut_escape' column from 'tests/SARS2-RBD-REGN-DMS/input/REGN_escape.csv'...

Using sitemap from 'tests/SARS2-RBD-REGN-DMS/sitemap/sitemap.csv'.

'protein_site' column is not present in the sitemap. Assuming that the reference sites correspond to protein sites.

About 95.98% of the wildtype residues in the data match the corresponding residues in the structure.
About 4.02% of the data sites are missing from the structure.

Success! The visualization JSON was written to './REGN_escape.json'
```

This message provides some information from the `configure-dms-viz format` command for your dataset. In addition to this message, there will be a `.json` file located where you specified the output path.

This is how you use `configure-dms-viz` to format a single dataset. You can optionally combine multiple datasets into a single `.json` specification file using the `configure-dms-viz join` command which takes a list of `.json` files as arguments along with an optional description of the datasets. For more details on combining datasets, check out the [API](/preparing-data/command-line-api/).

For now, since we're only visualizing a single dataset, we can skip this step. In the next section, you'll take this `.json` visualization file and visualize your data with [**`dms-viz`**](https://dms-viz.github.io/).

## Visualizing

There are two ways to upload data into **`dms-viz`**. You can either upload a **local** specification file from your computer, or you can provide a link to a **remote** specification file hosted somewhere like [GitHub](https://github.com/).

### Local

To upload a local file, you simply click on the `Upload Data` section and choose a file from your machine.

<div align="center">
  <img src="/assets//local-upload-example.png" alt="Local Upload" />
</div>

Since the `.json` file created above should now be stored locally on your machine, you can upload this file using this approach.

### Remote
Alternatively, if your raw `.json` file is hosted somewhere online – like on GitHub, for example – you can provide the link to this file by clicking on the `Remote` button under the `Upload Data` section.

<div align="center">
  <img src="/assets/remote-upload-example.png" alt="Remote Upload" />
</div>

You can try it yourself by pasting the following link into the URL text box:

```md
https://raw.githubusercontent.com/dms-viz/configure_dms_viz/main/tests/SARS2-RBD-REGN-DMS/output/SARS2-RBD-REGN-DMS.json
```

This approach has some advantages. For example, after providing a link to your data, this link is saved in the URL, allowing you to share a view of **`dms-viz`** with the data pre-loaded and ready to view. For more details on using the web-based interface of **`dms-viz`** including hosting, interacting, and sharing your files, check out the [interaction reference](/visualizing-data/web-tool-api/).
