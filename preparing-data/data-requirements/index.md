# Data Requirements

There are only two pieces of information you need for **`dms-viz`**:

1. You'll need [input data](#input-data). Your data should have a quantitative metric associated with mutations to a protein sequence.
2. You'll need a 3D structure for your protein. The structure can be associated with an [RCSB ID](https://www.rcsb.org/) or provided in a custom `.pdb` file.

Everything beyond these two requirements is __optional__.

There are certain cases where you will need to provide additional information. For example, if the reference positions in your input data don't match the reference positions in your `.pdb` file, you'll need to specify a [`sitemap`](/preparing-data/data-requirements/#sitemap). Also, if you have data from another dataset that you wish to include in filters or tooltips, you can provide [`join data`](/preparing-data/data-requirements/#join-data) to merge with the input data.

The formatting requirements for the input data and optional data are explained below in detail.

## Input Data

The **Input Data** is the mutation-based data that you'd like to summarize and visualize on an interactive protein structure. It must contain a column with a quantitative metric that's associated with mutations in a protein sequence. For example, this data could be a fitness score associated with mutations to a protein, or a score that represents how a mutation changes antibody binding to an antigen. For detailed examples of use cases for **`dms-viz`**, check out these [Vignettes](/visualizing-data/vignettes/).

::: warning Important!
The input data must be in `.csv` format. If your data is tabular but in another format, please convert it to `.csv`.
:::

The input data must contain the following columns with **exactly** these names:

- ### `site` or `reference_site`

  This column should contain the **site** in the protein at which each measurement was made. This column can be numeric (i.e., `[1, 2, 3, 4]`) or it can contain strings (i.e., `[1, 2, 2a, 2b, 3]`). Additionally, the sites do not need to be continuous (i.e., `[1, 4, 5, 8]`). The order of your sites is assumed to be their order in the data unless it is specified in the [Sitemap](#sitemap) using the `sequential_site` column. These __reference__ sites will label the x-axis of all summary plots in **`dms-viz`**. In addition, the `site` or `reference_site` in the input data is assumed to match the position in the provided protein structure. If the sites are numbered differently between your data and protein structure, you must specify the correct mapping in the `protein_site` column of the [Sitemap](#sitemap).
  
  For more details on what we mean by 'reference_site', check out the [description of the sitemap file](/preparing-data/data-requirements/#reference-site).

- ### `mutant`

  This column should contain the identity of the **mutation** that each measurement is associated with. These mutations should be represented using the [IUPAC single-letter codes](https://www.bioinformatics.org/sms/iupac.html) along with symbols for stop codons and gaps (i.e., `R, M, P, *, -`). If you need to extend or shrink this alphabet, you can do so using the [`--alphabet`](/preparing-data/command-line-api/#alphabet) flag of `configure-dms-viz`.

- ### `wildtype`

  This column should contain the **wildtype** identity of residues at a given site in the protein. For example, if a Proline (`P`) was mutated to an Alanine (`A`) at position 120 in the protein (`P120A`), there should be a `P` in the wildtype column for every row where the value of the site column is 120. This column will also be used to check how well the sequence of the protein structure you provided matches your data. Significant discrepancies can indicate that you're `reference`, `sequential`, and `protein` sites are misaligned.

---

In addition to these three mandatory columns, you will also need to specify a `metric` column. The identity of this column is specified with the [`--metric`](/preparing-data/command-line-api/#metric) flag of `configure-dms-viz`, and it can have any name:

- ### `<metric>`

  This column should contain the **quantitative metric** that you'd like to summarize and view on a protein structure. For example, this column could be called `fitness` and contain a score that reflects how individual mutations alter a protein's fitness.

---

_Optionally_, depending on the design of your experiment, you can also include a "_condition column_" that specifies how your data is grouped if there are multiple conditions. In other words, you are required to specify this column if there are multiple measurements for the same mutations.

- ### `condition`

  This column should only be included if there are multiple measurements in the [`<metric>`](/preparing-data/command-line-api/#metric) column for the same `site`/`mutation` combinations. For example, you'll need a condition column if your data contains a measurement like an antibody's escape for multiple 'epitopes' in an antigen. This column contains a unique identifier that's used to delineate between these measurements for each mutation. This 'identifier' will show up in an interactive legend next to the visualization.

## Sitemap

The **Sitemap** is a tabular `.csv` file that specifies the order of the [`site`](/preparing-data/data-requirements/#site-or-reference-site) (`reference_site`) column in your input data and, _optionally_, how the [`site`](/preparing-data/data-requirements/#site-or-reference-site) column corresponds to the numbering in the [protein structure](/preparing-data/command-line-api/#structure) you provide.

::: warning Important!
The sitemap must be in `.csv` format. If your data is tabular but in another format, please convert it to `.csv`.
:::

- ### `reference_site`

  This column **must** correspond to the `site` or `reference_site` column in your [input data](#input-data). If the [`protein_site`](/preparing-data/data-requirements/#protein-site) isn't provided, this column is also assumed to correspond to the identity of the sites in the [protein structure](/preparing-data/command-line-api/#structure)
  
  The `reference_site` refers to the identity of the sites that are mutated in your dataset. These sites will ultimately label the x-axis of the visualization. These '_reference_' sites can sometimes differ from the `sequential_site` ([described below](/preparing-data/data-requirements/#sequential-site)); for example, the current SARS-CoV-2 Spike protein variants have insertions and deletions that cause the widely used Wuhan-Hu-1 'reference' numbering to differ from the sequential, numeric order of the data.

- ### `sequential_site`

  This column is the sequential order of the reference sites and **must be a numeric column**. This will determine the order of the protein sites in the visualizations.

- ### `protein_site`

  _Optionally_, this column is only necessary if the `reference_site` sites are different from the sites (residue numbering) in your provided protein structure. If they are different, this column is the position in the protein structure that corresponds to the `reference_site` values in your data.

- ### `chains`

_Optionally_, this column is only necessary if you've provided the `protein_site` column and there are multiple `reference_site` sites for the same value of `protein_site`. This might be the case if your data corresponds to _discontinuous chains_ in the protein structure. For example, if your data is measured over two separate chains with overlapping numbering schemes. For example, Influenza HA protein structures usually have separate chains with overlapping numbering for the stalk and the head. So the reference sites 102 and 30(HA) might both correspond to the residue number 102 in the PDB file. In that case, the only way to distinguish between them on the structure is with the identity of the chain (i.e. A vs. B). This column should have chains in the same format as the chains provided to [`--included-chains`](/preparing-data/command-line-api/#included-chains) (i.e. a space-separated string of chains: "A B C D").

## Join Data

_Optionally_, you might have some additional data that you want to combine with your [Input Data](#input-data). You do this so you can include columns from this **Join Data** in the [filters](/preparing-data/command-line-api/#filter-cols) or [tooltips](/preparing-data/command-line-api/#tooltip-cols) of your visualization. This option helps streamline that workflow.

::: warning Important!
The join data must be in `.csv` format. If your data is tabular but in another format, please convert it to `.csv`.
:::

You can specify more than one `.csv` file if there are multiple sources of data that you want to take columns from. Check out the API reference entry on the [`--join-data`](/preparing-data/command-line-api/#join-data) flag for more details.

The **Join Data** must contain a [`site`](/preparing-data/data-requirements/#site-or-reference-site), [`wildtype`](#wildtype), and [`mutant`](#mutant) column, as these are used to join your incoming data with the [Input Data](#input-data).
