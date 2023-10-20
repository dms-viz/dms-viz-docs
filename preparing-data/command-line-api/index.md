# Command Line API

## Basic Usage

`configure_dms_viz` is a command-line tool designed to create a `JSON` format specification file for [**`dms-viz`**](https://dms-viz.github.io/). You provide the data that you'd like to visualize along with additional information to customize the analysis. The resulting specification file can be uploaded to **`dms-viz`** for interactive visualization of your data. Below is an overview of the process of using `configure_dms_viz`.

`configure-dms-viz` has two commands; `format` and `join`. To format your data, you execute the `configure-dms-viz format` command with the required and optional arguments as needed:

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

This creates a single dataset that can be loaded into **`dms-viz`**. However, in some cases, you might want to visualize multiple datasets simultaneously. To do this, you use the `configure-dms-viz join` command. The `join` command takes a list of formatted `.json` files and combines them into a single `.json` specification file containing each dataset. Optionally, you can also provide a description of the file by specifying the path to a `.md` file with your desired description:

```bash
configure-dms-viz join \
    --input <input_jsons> \
    --output <output_json> \
    --description <markdown_description>
```

## `configure-dms-viz format`

_This subcommand formats your data for **`dms-viz`**. Below is a description of each arguement._

- ### `--input`

  `<string>`

  Path to a `.csv` file with site- and mutation-level data to visualize on a protein structure. [See details here](/preparing-data/data-requirements/) for required columns and format.

- ### `--name`

  `<string>`

  Name of the experiment/selection for the tool. For example, the antibody name or serum ID. This property is necessary for combining multiple experiments into a single file.

- ### `--sitemap`

  `<string>`

  Path to a `.csv` file containing a map between reference sites in the experiment and sequential sites. [See details here](/preparing-data/data-requirements/) for required columns and format.

- ### `--metric`

  `<string>`

  Name of the column that contains the value to visualize on the protein structure. This tells the tool which column you want to visualize on a protein strucutre.

- ### `--structure`

  `<string>`

  Either an RSCB PDB ID if using a structure that can be fetched directly from the PDB (i.e. `"6xr8"`). Or, a path to a locally downloaded PDB file (i.e. `./pdb/my_custom_structure.pdb`).

- ### `--output`

  `<string>`

  Path to save the `\*.json` file containing the data for the visualization tool.

- ### `--condition`

  `<string>`

  If there are multiple measurements per mutation, the name of the column that contains that condition distinguishing these measurements.

- ### `--metric-name`

  `<string>`

  The name that will show up for your metric in the plot. This let's you customize the names of your columns in your visualization. For example, if your metric column is called `escape_mean` you can rename it to `Escape` for the visualization.

- ### `--conditon_name`

  `<string>`

  The name that will show up for your condition column in the title of the plot legend. For example, if your condition column is 'epitope', you might rename it to be capilized as 'Epitope' in the legend title.

- ### `--join-data`

  `<list>`

  A comma separated list of `.csv` file with data to join to the visualization data. This data can then be used in the visualization tooltips or filters. [See details here](/preparing-data/data-requirements/) for formatting requirements.

- ### `--tooltip-cols`

  `<dict>`

  A dictionary that establishes the columns that you want to show up in the tooltip in the visualization (i.e. `"{'times_seen': '# Obsv', 'effect': 'Func Eff.'}"`).

- ### `--filter-cols`

  `<dict>`

  A dictionary that establishes the columns that you want to use as filters in the visualization (i.e. `"{'effect': 'Functional Effect', 'times_seen': 'Times Seen'}"`).

- ### `--filter-limits`

  `<dict>`

  A dictionary that establishes the range for each filter (i.e. `"{'effect': [min, max], 'times_seen': [min, max]}"`).

- ### `--included-chains`

  `<string>`

  A space-delimited string of chain names that correspond to the chains in your PDB structure that correspond to the reference sites in your data (i.e., `'C F M G J P'`). This is only necesary if your PDB structure contains chains that you do not have site- and mutation-level measurements for.

- ### `--excluded-chains`

  `<string>`

  A space-delimited string of chain names that should not be shown on the protein structure (i.e., `'B L R'`).

- ### `--alphabet`

  `<string>`

  A string with no spaces containing all the amino acids in your experiment and their desired order (i.e. `"RKHDEQNSTYWFAILMVGPC-*"`).

- ### `--colors`

  `<list>`

  A comma separated list (with no spaces) of HEX format colors for representing different conditions, i.e. `"#0072B2,#CC79A7,#4C3549,#009E73"`.

- ### `--negative-colors`

  `<list>`

  A comma separated list (with no spaces) of HEX format colors for representing the negative end of the scale for different conditions, i.e. `"#0072B2,#CC79A7,#4C3549,#009E73"`. If not provided, the inverse of each color is automatically calculated.

- ### `--check-pdb`

  `<bool>`

  Whether to perform checks on the provided pdb structure including checking if the 'included chains' are present, what % of data sites are missing, and what % of wildtype residues in the data match at corresponding sites in the structure.

- ### `--exclude-amino-acids`

  `<list>`

  A comma separated list of amino acids that shouldn't be used to calculate the summary statistics (i.e. `"\*, -"`)

- ### `--description`

  `<string>`

  A short description of the dataset that will show up in the tool if the user clicks a button for more information.

- ### `--title`

  `<string>`

  A short title to appear above the plot.

## `configure-dms-viz join`

_This subcommand joins multiple formatted `.json` datasets into one that you can then visualize with **`dms-viz`**. Below is a description of each arguement._

- ### `--input`

  `<list>`

  A comma separated list of paths to the `.json` visualization files created by `configure-dms-viz format`. I.e. `--input path/to/my/specification_1.json, path/to/my/specification_2.json, path/to/my/specification_3.json`

- ### `--output`

  `<string>`

  Path to save the joined `\*.json` file for the visualization tool.


- ### `--description`
  
  `<string>`

  Path to a `markdown` file describing your dataset.
