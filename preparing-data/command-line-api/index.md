# Command Line API

You'll need to use the command line tool `configure-dms-viz` to prepare your data for **`dms-viz`**. Follow the instructions in [Getting Started](/introduction/getting-started/) to install `configure-dms-viz` on your operating system.

## Basic Usage

`configure-dms-viz` is a command-line tool designed to create a `.json` format specification file for [**`dms-viz`**](https://dms-viz.github.io/). You provide the data that you'd like to visualize along with additional information to customize the analysis. The resulting specification file can be uploaded to **`dms-viz`** for interactive visualization of your data. Below is an overview of the process of using `configure-dms-viz`.

`configure-dms-viz` has two commands; `format` and `join`. To format your data, you execute the `configure-dms-viz format` command with the required and optional arguments as needed:

```bash
configure-dms-viz format \
    --name <experiment_name> \
    --input <input_csv> \
    --metric <metric_column> \
    --structure <pdb_structure> \
    --output <output_json> \
    [optional_arguments]
```

This creates a single dataset that can be loaded into **`dms-viz`**. However, in some cases, you might want to visualize multiple datasets simultaneously. To do this, you use the `configure-dms-viz join` command. The `join` command takes a list of formatted `.json` files and combines them into a single `.json` specification file containing each dataset. Optionally, you can add a markdown description of your joined datasets by specifying the path to a `.md` file with your desired description:

```bash
configure-dms-viz join \
    --input <input_jsons> \
    --output <output_json> \
    --description <markdown_description>
```

## Advanced Usage

This is the most basic usage of `configure-dms-viz`; however, `configure-dms-viz` is a flexible formatting tool that provides many options for customizing your analysis. In addition to the description of the command line API below, we'll detail some highlights of the customization available through `configure-dms-viz`.

### Custom Filters

`configure-dms-viz` allows you to specify *quantitative* columns in your [input data](/preparing-data/data-requirements/#input-data) to use as dynamic filters in **`dms-viz`**. The columns you specify will populate sliders in the sidebar under "`Filters`". By dragging the slider, you filter out the mutations or sites in the visualization with values less than the selected value for the column you specify.

To add filters with `configure-dms-viz`, specify *quantitative* columns using the `--filter-cols` flag by providing a dictionary that establishes your chosen columns and the name that will appear in the visualization (i.e. `"{'effect': 'Functional Effect', 'times_seen': 'Times Seen'}"`). In this example, the columns that are used as filters are `effect` and `times_seen` in the input data, and the names that will label the filters are `Functional Effect` and `Times Seen`.

In addition to specifying filters, you can set their default value and limits with the `--filter-limits` flag by providing a dictionary formatted like so: `"{'effect': [min, value, max], 'times_seen': [min, value, max]}"`. You can *only* specify the min and max (i.e. `[min, max]`), but it's **highly** recommended that you set a default value for the filter that makes sense for your data.

Check out vignette #2 in the [Vignettes](/visualizing-data/vignettes/) for an example visualization that uses filters.

### Custom Tooltips

In a similar process to adding custom filters, `configure-dms-viz` allows you to specify columns to include as tooltips. Tooltips are shown for each *mutation* in your dataset and will appear when you center your mouse over a mutation in the heatmap plot on the left of the visualization.

Use the `--tooltip-cols` flag to specify columns that should provide information through tooltips by providing a dictionary like so: `"{'times_seen': '# Obsv', 'effect': 'Func Eff.'}"`, where the key is the column's name and the value is the label as it should appear in the tooltip.

## `configure-dms-viz format`

_This subcommand formats your data for **`dms-viz`**. Below is a description of each argument._

- ### `--input`

  `<string>`

  Path to a `.csv` file with site- and mutation-level data to visualize with a protein structure. [See details here](/preparing-data/data-requirements/) for the required columns and format.

- ### `--name`

  `<string>`

  Name of the experiment/selection for the tool. For example, the antibody name or serum ID. This property is necessary for combining multiple experiments into a single file.

- ### `--sitemap`

  `<string>`

  Path to a `.csv` file containing a map between reference sites in the experiment and sequential sites. [See details here](/preparing-data/data-requirements/) for the required columns and format.

- ### `--metric`

  `<string>`

  Name of the column that contains the value to visualize with the protein structure. This tells the tool which column you want to visualize on a protein structure.

- ### `--structure`

  `<string>`

  Either an RSCB PDB ID if using a structure that can be fetched directly from the PDB (i.e. `"6xr8"`). Or, a path to a locally downloaded PDB file (i.e. `./pdb/my_custom_structure.pdb`).

- ### `--output`

  `<string>`

  Path to save the `\*.json` file containing the data for the visualization tool.

- ### `--condition`

  `<string>`

  If there are multiple measurements for each mutation, the name of the column that contains the condition distinguishing these measurements.

- ### `--metric-name`

  `<string>`

  The name that will show up for your metric in the plot. This lets you customize the names of your columns in your visualization. For example, if your metric column is called `escape_mean` you can rename it to `Escape` for the visualization.

- ### `--condition_name`

  `<string>`

  The name that will show up for your condition column in the title of the plot legend. For example, if your condition column is 'epitope', you might rename it to be capitalized as 'Epitope' in the legend title.

- ### `--join-data`

  `<list>`

  A comma-separated list of `.csv` files with data to join to the visualization data. This data can then be used in the visualization tooltips or filters. [See details here](/preparing-data/data-requirements/) for formatting requirements.

- ### `--tooltip-cols`

  `<dict>`

  A dictionary that establishes the columns that you want to show up in the tooltip in the visualization (i.e. `"{'times_seen': '# Obsv', 'effect': 'Func Eff.'}"`).

- ### `--filter-cols`

  `<dict>`

  A dictionary that establishes the columns that you want to use as filters in the visualization (i.e. `"{'effect': 'Functional Effect', 'times_seen': 'Times Seen'}"`).

- ### `--filter-limits`

  `<dict>`

  A dictionary that establishes the range and default value for each filter (i.e. `"{'effect': [min, value, max], 'times_seen': [min, value, max]}"`). _Optionally_, you can only specify the min and max (i.e. `[min, max]`), but it's **highly** recommended that if you have a filter, you should set a default value that's interpretable.

- ### `--heatmap-limits`

  `<list>`

  A list that is either 1, 2, or 3 values long that sets either the center, the minimum and maximum, or the minimum, center and maximum of the heatmap's color scale depending on the number of values provided. The format of the list is a string where each of the values is separated by a comma (i.e. `-1, 0, 1`). If only a single value is provided, the center of the heatmap color scale is set based on the provided value. If two values are provided, the range of the scale is set based on the values. If three values are provided, the range and center of the scale are set. **Importantly**, the values set here **only** affect the heatmap's color scale, **not** the protein's color scale; the color scale of the protein will remain symmetric around 0.

- ### `--included-chains`

  `<string>`

  A space-delimited string of chain names that correspond to the chains in your PDB structure that correspond to the reference sites in your data (i.e., `'C F M G J P'`). This is only necessary if your PDB structure contains chains that lack site- and mutation-level measurements.

- ### `--excluded-chains`

  `<string>`

  A space-delimited string of chain names that should not be shown on the protein structure (i.e., `'B L R'`).

- ### `--alphabet`

  `<string>`

  A string with no spaces containing all the amino acids in your experiment and their desired order (i.e. `"RKHDEQNSTYWFAILMVGPC-*"`).

- ### `--colors`

  `<list>`

  A comma-separated list (with no spaces) of HEX format colors for representing different conditions, i.e. `"#0072B2,#CC79A7,#4C3549,#009E73"`.

- ### `--negative-colors`

  `<list>`

  A comma-separated list (with no spaces) of HEX format colors for representing the negative end of the scale for different conditions, i.e. `"#0072B2,#CC79A7,#4C3549,#009E73"`. If not provided, the inverse of each color is automatically calculated.

- ### `--check-pdb`

  `<bool>`

  Whether to perform checks on the provided PDB structure including checking if the 'included chains' are present, what % of data sites are missing, and what % of wildtype residues in the data match at corresponding sites in the structure.

- ### `--exclude-amino-acids`

  `<list>`

  A comma-separated list of amino acids that shouldn't be used to calculate the summary statistics (i.e. `"\*, -"`)

- ### `--description`

  `<string>`

  A short description of the dataset that shows up in the tool if the user clicks a button for more information.

- ### `--title`

  `<string>`

  A short title to appear above the plot.

- ### `--floor`

  `<bool>`

  Set the default of whether the data will be floored at 0. Takes a boolean, either `True` or `False`.

- ### `--summary-stat`

  `<string>`

  Set the default summary statistic to either `min`, `max`, `mean`, `median`, or `sum`.

## `configure-dms-viz join`

_This subcommand joins multiple formatted `.json` datasets into one that you can then visualize with **`dms-viz`**. Below is a description of each argument._

:::warning
Make sure that you're joining files with unique values for the dataset [name](/preparing-data/command-line-api/#name).
:::

- ### `--input`

  `<list>`

  A comma-separated list of paths to the `.json` visualization files created by `configure-dms-viz format`. I.e. `--input path/to/my/specification_1.json, path/to/my/specification_2.json, path/to/my/specification_3.json`

- ### `--output`

  `<string>`

  Path to save the joined `\*.json` file for the visualization tool.


- ### `--description`
  
  `<string>`

  Path to a `markdown` file describing your dataset.

## JSON Schema

The output of the command line tool is a JSON specification file. The schema of the specification file is detailed below.

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "mut_metric_df": {
      "type": "array",
      "items": {
        "type": "object"
      }
    },
    "sitemap": {
      "type": "object"
    },
    "metric_col": {
      "type": "string"
    },
    "condition_col": {
      "type": ["string", "null"]
    },
    "conditions": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "condition_colors": {
      "type": "object"
    },
    "negative_condition_colors": {
      "type": ["object", "null"]
    },
    "alphabet": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "pdb": {
      "type": "string"
    },
    "dataChains": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "excludeChains": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "filter_cols": {
      "type": ["object", "null"]
    },
    "filter_limits": {
      "type": ["object", "null"]
    },
    "heatmap_limits": {
      "type": ["array", "null"],
      "items": {
        "type": "number"
      }
    },
    "tooltip_cols": {
      "type": ["object", "null"]
    },
    "excludedAminoAcids": {
      "type": ["array", "null"],
      "items": {
        "type": "string"
      }
    },
    "description": {
      "type": ["string", "null"]
    },
    "title": {
      "type": ["string", "null"]
    },
    "floor": {
      "type": ["boolean", "null"]
    },
    "summary_stat": {
      "type": ["string", "null"],
      "enum": ["sum", "mean", "median", "max", "min"]
    }
  },
  "required": ["mut_metric_df", "sitemap", "metric_col", "conditions", "condition_colors", "alphabet", "pdb", "dataChains", "excludeChains"]
}
```
