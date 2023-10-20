# Getting Started

## Overview

Using **`dms-viz`** involves two steps. First, using a command line tool called [`configure-dms-viz`](https://pypi.org/project/configure-dms-viz/), you specifcy some information about your dataset to generate a `.json` format specification file. Second, you open up the [web-based tool](https://dms-viz.github.io/) and upload your specification file to generate an interactive visualization. Below are some quickstart instructions to get you oriented.

::: tip Want to Skip Ahead?
If you're insterested in the detailed command line API, check out the reference [here](/preparing-data/command-line-api/). If you've already formatted your data and you're ready to start visualizing it, check out the instructions for that [here](/visualizing-data/web-tool-api/).
:::

## Prerequsites

To start using **`dms-viz`** with your own data, you'll need to install the command line tool [`configure-dms-viz`](https://pypi.org/project/configure-dms-viz/). To use `configure-dms-viz`, you must ensure that you have the correct version of Python (3.9 or later) installed on your system.

If you are unsure whether you have the correct version of Python installed, open a terminal window (Command Prompt in Windows, Terminal in macOS, or a terminal emulator in Linux) and type the following command and press Enter:

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

Now, `configure-dms-viz` should have been installed and you shouldn't see any error messages. You can double-check that the installation worked correctly typing the following into the terminal:

```bash
configure-dms-viz --help
```

You should see the help message for the tool printed to the terminal.

## Basic Usage

`configure_dms_viz` is a command-line tool designed to create a `JSON` format specification file for **`dms-viz`**. You provide the data that you'd like to visualize along with additional information to customize the analysis. The resulting specification file can be uploaded to [**`dms-viz`**](https://dms-viz.github.io/) for interactive visualization of your data. Below is an overview of the process of using `configure_dms_viz`.

::: tip Looking for more details?
For a detailed explaination of the features of `configure_dms_viz` check out the reference [here](/preparing-data/command-line-api/).
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

Now, let's use `configure-dms-viz` on some example data. This data is included in the [GitHub repository](https://github.com/dms-viz/configure_dms_viz/tree/main). If you want to follow along, clone the repository and run `configure-dms-viz` from the top of the directory.

**Input**

```bash
configure-dms-viz format \
   --name LyCoV-1404 \
   --input tests/sars2/escape/LyCoV-1404_avg.csv \
   --sitemap tests/sars2/site_numbering_map.csv \
   --metric escape_mean \
   --structure 6xr8 \
   --output tests/sars2/output/LyCoV-1404.json \
   --metric-name Escape \
   --join-data tests/sars2/muteffects_observed.csv \
   --filter-cols "{'effect': 'Functional Effect', 'times_seen': 'Times Seen'}" \
   --tooltip-cols "{'times_seen': '# Obsv', 'effect': 'Func Eff.'}"
```

Here, we've specified that we want the dataset to be called `LyCoV-1404` and we've pointed to file location of the [input data](https://github.com/dms-viz/configure_dms_viz/blob/main/tests/sars2/escape/LyCoV-1404_avg.csv) and [sitemap](https://github.com/dms-viz/configure_dms_viz/blob/main/tests/sars2/site_numbering_map.csv). In addition, we've specified that we want to use the protein structure `6xr8` from the [RSCB PDB](https://www.rcsb.org/) and that we want to visualize the `escape_mean` column of the input dataset. We've also specified some _optional_ arguments including [additional data](/preparing-data/command-line-api/#join-data), [filters](/preparing-data/command-line-api/#filter-cols), [tooltips](/preparing-data/command-line-api/#tooltip-cols), and the [name](/preparing-data/command-line-api/#name) we want to show up for the metric we're visualizing.

The result of this command should be a message printed to the terminal that looks like this:

**Output**

```md
Formatting data for visualization using the 'escape_mean' column from 'tests/sars2/escape/LyCoV-1404_avg.csv'...

Joining data from 1 dataframe.

Using sitemap from 'tests/sars2/site_numbering_map.csv'.

'protein_site' column is not present in the sitemap. Assuming that the reference sites correspond to protein sites.

Warning: duplicate column names exist between mutation dataframe and join dataframe. Dropping ['times_seen'] from join data.

About 85.76% of the wildtype residues in the data match the corresponding residues in the structure.
About 11.96% of the data sites are missing from the structure.

Success! The visualization json was written to 'tests/sars2/output/LyCoV-1404.json'
```

This message provides some information about the `configure-dms-viz format` run on your dataset. In addition to this message, there should be a `.json` file located where you specified the output path ([`tests/sars2/output/LyCoV-1404.json`](https://github.com/dms-viz/configure_dms_viz/blob/main/tests/sars2/output/LyCoV-1404.json)).

This is how you can use `configure-dms-viz` to format a single dataset. You can optionally combine multiple datasets into a single `.json` specification file using the `configure-dms-viz join` command. this command takes a list of `.json` files as an arguments along with an optional description of the datasets. For more details on combining datasets, check out the [API](/preparing-data/command-line-api/).

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

Alternativley, if your raw `.json` file is hosted somewhere online – like on GitHub, for example – you can provide the link to this file by clicking on the `Remote` button under the `Upload Data` section.

<div align="center">
  <img src="/assets/remote-upload-example.png" alt="Remote Upload" />
</div>

You can try yourself by pasting the following link into the URL text box:

```md
https://raw.githubusercontent.com/dms-viz/configure_dms_viz/main/tests/sars2/output/sars2.json
```

This approach has some advantages. For example, after providing a link to your data, this link is saved in the URL, allowing you to share a view of **`dms-viz`** with the data pre-loaded and ready to view. For more details on using the web-based interface of **`dms-viz`** including hosting, interacting, and sharing your files, check out the [interaction reference](/visualizing-data/web-tool-api/).
