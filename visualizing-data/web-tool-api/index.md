# Web Tool API

## Uploading Data

There are two ways to upload data into **`dms-viz`**. You can either upload a **local** specification file from your computer, or you can provide a link to a **remote** specification file hosted somewhere like [GitHub](https://github.com/). You'll find the options for uploading data under the `Upload Data` section of the side menu.

### Local

To upload a local file, you simply click on the `Upload Data` section and choose a file from your machine.

<div align="center">
  <img src="/assets/local-upload-example.png" alt="Local Upload" />
</div>

### Remote

Alternatively, if your raw `.json` file is hosted somewhere online – like on GitHub, for example – you can provide the link to this file by clicking on the `Remote` button under the `Upload Data` section.

<div align="center">
  <img src="/assets/remote-upload-example.png" alt="Remote Upload" />
</div>

You can try it yourself by pasting the following link into the URL text box:

```md
https://raw.githubusercontent.com/dms-viz/configure_dms_viz/main/tests/sars2/output/sars2.json
```

This approach has some advantages. For example, after providing a link to your data, this link is saved in the URL, allowing you to share a view of **`dms-viz`** with the data pre-loaded and ready to view. Also, this approach allows you to provide a markdown description (also hosted remotely) of the datasets.

#### Providing A Description

If you've uploaded data that's stored on a server like GitHub by following the [Remote instructions](#remote), you can _optionally_ provide a link to a markdown (`.md`) file that will be displayed below the main visualization in a collapsible container.

<div align="center">
  <img src="/assets/markdown-description.png" alt="Markdown Description" />
</div>

Just like the remote `.json` specification, the link to the markdown is saved in the URL path and the description will load automatically when someone accesses the updated URL.

## Chart Configuration

**`dms-viz`** provides a handful of ways to navigate and customize the visualization. You can find these options under the `Chart Options` tab in the side menu.

<div align="center">
  <img src="/assets/chart-options.png" alt="Chart Options" />
</div>

- ### `Dataset`

  Although `configure-dms-viz` will return only a single `.json` specification, it is possible to combine multiple `.json` specifications in a single file to visualize. If there are multiple datasets in the `.json` file, you can navigate between these using the `Dataset` dropdown menu. The name that appears in the dropdown for each dataset depends on the [`--name`](/preparing-data/command-line-api/#name) flag.

  Additionally, next to the `Dataset` dropdown menu there is an information icon ⓘ. By clicking on this icon, a short description of the dataset appears above the top plot. The description can be specified using the [`--description`](/preparing-data/command-line-api/#description) flag.

- ### `Condition`

  If your input data has multiple measurements for each mutation/site combination that are distinguished by some _condition_ (specified by the [`--condition`](/preparing-data/command-line-api/#condition) flag), an interactive legend appears under `Chart Options`.

  Although the default label that appears above the legend is `Condition`, you can specify the label using the [`--condition_name`](/preparing-data/command-line-api/#condition_name) flag.

- ### `Summary Metric`

  Use the `Summary Metric` dropdown menu to choose how to summarize the `metric` across every mutation at each site. Choose between the `mean`, `min`, `max`, and `sum`. The resulting summary is displayed in the line plot and on the protein structure.

- ### `Floor`

  Use the `Floor` checkbox to choose whether the data should be floored at 0.

- ### `Display Mutation Count`

  Use the `Display Mutation Count` checkbox to replace the summary plot above the line plot with a density plot showing the number of mutations that have been sampled at each site. For example, if four mutants have been observed at site 10 in the protein (`A`, `T`, `Q`, and `M`), the height at that site will be four.

## Protein Configuration

**`dms-viz`** provides a handful of ways to navigate and customize the 3D protein structure. You can find these options under the `Protein Configuration` tab in the side menu.

<div align="center">
  <img src="/assets/protein-options.png" alt="Protein Options" />
</div>

There are _four_ components of the protein structure whose appearances can be controlled separately. For each of these separate components, you can alter the color, representation, and opacity.

| Component    | Description                                                                                                                                                                                                                                                    |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Protein`    | All 'polymer' chains in the protein structure that have corresponding data (included in the [`--included-chains`](/preparing-data/command-line-api/#included-chains) flag).                                                                                    |
| `Selection`  | The residues in `Protein` that have been selected by the user.                                                                                                                                                                                                 |
| `Peripheral` | The chains that are aren't excluded (by the [`--exclude-chains`](/preparing-data/command-line-api/#exclude-chains) flag) but don't have corresponding data (aren't included in the [`--included-chainss`](/preparing-data/command-line-api/#included-chains)). |
| `Ligand`     | If `Show Ligands` is checked, the ligands (i.e. glycans, small molecules, etc...) in the structure.                                                                                                                                                            |

For each of these separate components, there are options to change the following:

- ### `Representation`

  How the structure is represented (i.e. `surface`, `ball and stick`, etc...).

- ### `Color`

  The color of the molecules. All of the molecules for a given component will be the same color, however, ligands can be colored by element.

- ### `Opacity`

  The opacity of the component. This can help illustrate the molecular structure with the `metric` superimposed on the surface of the protein.

## Interaction

There are a multitude of ways to interact with **`dms-viz`**. Below, you'll find some examples of what this interaction can look like.

### Chart

You can **zoom** in and out of regions of your data by **brushing** (_click and drag_) over the area plot.

<video controls="controls" name="Zoom Example">
  <source src="/assets/zoom-on-lineplot.mp4">
</video>

You can **mouse over** sites on the line/point and mutations on the heatmap to see details in a pop-up **tooltip** and you can **select sites** to see in the **heatmap** by **clicking** on points in the line/point plot.

<video controls="controls" name="Heatmap Example">
  <source src="/assets/select-on-heatmap.mp4">
</video>

You can **select sites on the protein** structure by **brushing** (_click and drag_) over points in the line/point plot.

<video controls="controls" name="Selection Example">
  <source src="/assets/select-on-protein.mp4">
</video>

To **deselect sites**, you can either **double-click** on the line/point plot or **hold down the option key ⌥ and brush** over the sites that you want to deselect.

<video controls="controls" name="Deselection Example">
  <source src="/assets/deselect-sites-on-protein.mp4">
</video>

If there is more than one condition in your data, an interactive legend will appear in the `Chart Options` You can **select a condition** to color the protein structure with by **clicking** on a condition in the legend.

<video controls="controls" name="Protein Condition Example">
  <source src="/assets/select-conditions-on-protein.mp4">
</video>

Finally, you can **remove or add conditions** to the line/point plot by **holding down the option key ⌥ while clicking**.

<video controls="controls" name="Chart Condition Example">
  <source src="/assets/select-conditions-on-chart.mp4">
</video>

### Protein

You can **reorient and zoom** into the protein structure by **clicking and dragging** it around the window. You can also **reset the protein structure** to its original orientation by pressing the **`R` button** on your keyboard.

<video controls="controls" name="Protein Interaction">
  <source src="/assets/protein-interaction.mp4">
</video>

## Sharing

The visualizations that you create with **`dms-viz`** can be shared with collaborators and in manuscripts. There are three ways to go about this:

### 1. Share the `.json` file

You can simply share the `.json` specifications that you create with `configure-dms-viz`.

### 2. Share static images

If you're only interested in a particular plot or protein, you can save and download `.png` images. Under the `Download Session` tab in the side menu, you'll see buttons to download an image of both the plot and the protein.

<div align="center">
  <img src="/assets/download-options.png" alt="Download Options" />
</div>

### 3. Share the URL links

If your data is hosted on a remote server like `GitHub`, you can copy the link from your session. This link keeps track of your data, an _optional_ description, and all of the configuration options that you've selected.
