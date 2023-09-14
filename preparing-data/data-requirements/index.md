# Data Requirements

There are three main types of data that you'll need to use **`dms-viz`**; your [input data](#input-data), a [map of the sites](#sitemap) in your experiment to a reference and/or protein structure, and _optionally_, some [additional data](#join-data) that you want to join with your input data. Below are details of what this data should look like along with examples.

## Input Data

The **Input Data** is the data that you'd like to summarize and visualize on a protein structure. It must contain a column with a quantitative metric that's associated with substitutions in a protein sequence. For example, this data could be a fitness score associated with mutations to a viral protein, or a score that represents how a mutation abrogates antibody binding to a protein. For detailed examples of **`dms-viz`** being used to visualize this kind of data, check out the [Vignettes](/visualizing-data/vignettes/).

::: warning Important!
The input data must be in `.csv` format. If your data is tabular but in another format, please convert it to `.csv`.
:::

The input data must contain the following columns with **exactly** these names:

- ### `site` or `reference_site`

  This column should contain the **site** in the protein at which each measurement was made. This column can be numeric (i.e., `[1, 2, 3, 4]`) or it can contain strings (i.e., `[1, 2, 2a, 2b, 3]`). Additionally, the sites do not need to be continuous (i.e., `[1, 4, 5, 8]`). The numeric order of your sites will be specified in the [Sitemap](#sitemap). The sites in this column will be displayed on the x-axis of summary plots.

- ### `mutant`

  This column should contain the identity of the **mutation** that each measurement is associated with. These mutations should be represented using the [IUPAC single letter codes](https://www.bioinformatics.org/sms/iupac.html) along with symbols for stop codons and gaps (i.e., `R, M, P, *, -`). If you need to extend this alphabet with other symbols, you can do so using the [`--alphabet`](/preparing-data/command-line-api/#alphabet) flag.

- ### `wildtype`

  This column should contain the **wildtype** identity of residues at a given site in the protien. For example, if a Proline (`P`) was mutatated to an Alanine (`A`) at position 120 in the protein (`P120A`), there should be a `P` in the wildtype column for every row where the value of the site column is 120.

---

In addition to these three mandatory columns, you will also need to specify a `metric` column. The identity of this column is specified with [`--metric`](/preparing-data/command-line-api/#metric) flag and it can have any name:

- ### `<metric>`

  This column should contain the **quantitative metric** that you'd like to summarize and view on a protein structure. For example, this column could be called `fitness` and contain a score that reflects how individual mutations alter a protein's function.

---

_Optionally_, depending on the structure of your experiment, you can also include a "_condition column_" that specifies how your data is grouped if there are multiple measurements per mutation:

- ### `condition`

  This column should only be included if there are multiple measurements in the [`<metric>`](/preparing-data/command-line-api/#metric) column for the same `site`/`mutation` combinations. An example of this would be if you have a measurement like antibody escape for multiple 'epitopes' in a protein. This column contains a unique identifier that's used to deliniate between these measurements for each mutation.

## Sitemap

The **Sitemap** is a tabular dataframe that specifies the order of the [`site`](#site-or-reference-site) column in your input data and, _optionally_, how the [`site`](#site-or-reference-site) column corresponds to the site numbering in the [protein structure](/preparing-data/command-line-api/#structure) you provide.

::: warning Important!
The sitemap must be in `.csv` format. If your data is tabular but in another format, please convert it to `.csv`.
:::

- ### `reference_site`

  This column **must** correspond to the `site` or `reference_site` column in your [input data](#input-data). If the [`protein_site`](#protein_site) isn't provided, this column is also assumed to correspond to the identity of the sites in the [protein structure](/preparing-data/command-line-api/#structure).

- ### `sequential_site`

  This column is the sequential order of the reference sites and **must be a numeric column**. This will determine the order of the protein sites in the visualizations.

- ### `protein_site`

  _Optionally_, this column is only necessary if the `reference_site` sites are different from the sites in your provided protein strucutre. If they are different, this column is the position in the protein structure that corresponds to the `reference_site` values in your data.

## Join Data

_Optionally_, you might have some more data that you want to combine with your [Input Data](#input-data). You might want to do this so that you can include columnns from this **Join Data** in the [filters](/preparing-data/command-line-api/#filter-cols) or [tooltips](/preparing-data/command-line-api/#tooltip-cols) of your visualization. This option is to streamline that workflow.

::: warning Important!
The join data must be in `.csv` format. If your data is tabular but in another format, please convert it to `.csv`.
:::

You can specify more than one `.csv` file if there are multiple sources of data that you want to take columns from. Check out the API reference entry on the [`--join-data`](/preparing-data/command-line-api/#join-data) flag for more details.

The **Join Data** must contain a [`site`](#site-or-reference-site), [`wildtype`](#wildtype), and [`mutant`](#mutant) column, as these are used to join your incoming data with the [Input Data](#input-data).
