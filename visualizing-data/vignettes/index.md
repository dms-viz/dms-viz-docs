# Vignettes

## 1. Mapping the neutralization profile of antibodies and sera against HIV envelope

The [Bloom lab](https://research.fredhutch.org/bloom/en.html) has developed a [psuedotyping-based deep mutational scanning platform](https://doi.org/10.1016%2Fj.cell.2023.02.001) that makes it possible to assess the effects of thousands of mutations on properties like antibody neutalization for a diverse array of viral glycoproteins. [Radford et. al.,](https://doi.org/10.1016/j.chom.2023.05.025) used this platform to map the neutralization proflies of polyclonal serum samples that are able to neutralize diverse strains of HIV. By characterizing the specificity of these clinically important serum samples agains the HIV envelope (Env), they provide a great resource for assessing anti-HIV immune responses and informing prevention strategies.

Structural context is an important component of interpreting this kind of data. By mapping the neutralization profile of various serum samples or antibodies onto a structure of HIV Env, it's possible to visualize a 3D footprint of antibody binding. This type of visualize can help determine if multiple antibodies or serum samples are targeting the same structural epitopes on HIV Env, and therefore can help identifiy regions of importance for eliciting a broadly neutralizing immune response. Additionaly, [Radford et. al.,](https://doi.org/10.1016/j.chom.2023.05.025) was able to deconvolute the contribution of multiple epitopes to neutralization by individual polyclonal sera.

**`dms-viz`** is a great tool for analyzing this type of experiment. It integrates the ability to explore the totality of your data through summary metrics and detailed plots, while also showing a representation of this data on the structure of HIV Env. It's trivial to visualize the contribution of multiple epitopes to neutralization using the [`--condition`](/preparing-data/command-line-api/#condition) feature of **`dms-viz`**.

To check out the data and code for this study, [click here](https://github.com/dms-vep/HIV_Envelope_BF520_DMS_CD4bs_sera). To see how to prepare this kind of data and explore the results of [Radford et. al.,](https://doi.org/10.1016/j.chom.2023.05.025) yourself, check out the tutorial below.

### Using **`dms-viz`**

You can find the original antibody escape data for this study [here](https://github.com/dms-vep/HIV_Envelope_BF520_DMS_CD4bs_sera/tree/main/results/antibody_escape). The data on the functional constraints of mutations on HIV Env is [here](https://github.com/dms-vep/HIV_Envelope_BF520_DMS_CD4bs_sera/blob/main/results/func_scores/functional_selections.csv). I've organized this data if you want to follow along [here](https://github.com/dms-viz/configure_dms_viz/tree/main/tests/HIV-Envelope-BF520-DMS).

[`configure-dms-viz`](/preparing-data/command-line-api/) is designed to prepare a single dataset at a time. For each of the 7 datasets in this study, the values for each of the [command line arguments](/preparing-data/command-line-api/) is described in this [`datasets.csv`](https://github.com/dms-viz/configure_dms_viz/blob/main/tests/HIV-Envelope-BF520-DMS/datasets.csv) file. Here is an example of a single command for the serum sample `IDC508`:

```bash
configure-dms-viz
  --input tests/HIV-Envelope-BF520-DMS/input/IDC508_avg.csv
  --sitemap tests/HIV-Envelope-BF520-DMS/sitemap/sitemap.csv
  --output tests/HIV-Envelope-BF520-DMS/output/IDC508.json
  --name "IDC508"
  --metric "escape_mean"
  --metric-name "Escape"
  --condition "epitope"
  --condition-name "Epitope"
  --join-data tests/HIV-Envelope-BF520-DMS/join-data/functional_effects.csv
  --structure "6UDJ"
  --included-chains "C F M G J P"
  --excluded-chains "B L R A Q K"
  --tooltip-cols "{'times_seen': '# Obsv', 'effect': 'Func Eff.'}"
  --filter-cols "{'effect': 'Functional Effect', 'times_seen': 'Times Seen'}"
  --title "IDC508"
```

This results in an output `.json` file that can be visualized in the **`dms-viz`** right away. However, if you want to visualize all 7 experiments together, it's possible to combine them together into a single `.json` file using some simple python code:

```python
def combine_jsons(input_files, output_file):
    """
    Combines multiple JSON files into a single file.

    Parameters
    ----------
    input_files : list of str
        List of paths to the input JSON files.
    output_file : str
        Path where the combined JSON should be saved.

    Returns
    -------
    None
        Writes combined data to a JSON file.
    """

    combined_data = {}
    for input_file in input_files:
        with open(input_file) as f:
            data = json.load(f)
            combined_data.update(data)
    with open(output_file, "w") as f:
        json.dump(combined_data, f)
```

Which results in the `.json` specification located [here](https://github.com/dms-viz/configure_dms_viz/blob/main/tests/HIV-Envelope-BF520-DMS/output/HIV-Envelope-BF520-DMS.json). You can visualize this with **`dms-viz`** below, or you can [click here](https://dms-viz.github.io/v0/?data=https%3A%2F%2Fraw.githubusercontent.com%2Fdms-viz%2Fconfigure_dms_viz%2Fmain%2Ftests%2FHIV-Envelope-BF520-DMS%2Foutput%2FHIV-Envelope-BF520-DMS.json&markdown=https%3A%2F%2Fraw.githubusercontent.com%2Fdms-viz%2Fconfigure_dms_viz%2Fmain%2Ftests%2FHIV-Envelope-BF520-DMS%2FREADME.md&e=IDC508&ce=%255B%25221%2522%252C%25222%2522%255D) to see the visualization on a separate page.

<div style="text-align: center;">

<iframe 
  src="https://dms-viz.github.io/v0/?data=https%3A%2F%2Fraw.githubusercontent.com%2Fdms-viz%2Fconfigure_dms_viz%2Fmain%2Ftests%2FHIV-Envelope-BF520-DMS%2Foutput%2FHIV-Envelope-BF520-DMS.json&markdown=https%3A%2F%2Fraw.githubusercontent.com%2Fdms-viz%2Fconfigure_dms_viz%2Fmain%2Ftests%2FHIV-Envelope-BF520-DMS%2FREADME.md&e=IDC508&ce=%255B%25221%2522%252C%25222%2522%255D" 
  width="100%" 
  height="600px" 
  style="border:0; margin: 0 auto; display: block; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
</iframe>

</div>

## 2. Inferring the fitness landscape of the SARS-CoV-2 proteome from pyhlogenetic data

The scale of genomic sequencing surveillance of SARS-CoV-2 has led to the public avaliability of millions of SARS-CoV-2 sequences. [Bloom and Neher](https://doi.org/10.1101/2023.01.30.526314) developed an approach that leverages this massive amount of sequencing data to estimate the fitness effects of mutations in all SARS-CoV-2 proteins. Their approach works by computing the expected count of each mutation under neutral selection and comparing this count to the observed count of mutations along the [phylogeny](https://genome.ucsc.edu/cgi-bin/hgPhyloPlace). The result is an estimate of fitness that is very helpful for understanding the evolutionary contraint on the SARS-CoV-2 proteome. This kind of data is particularly useful for assessing the constraint on possible therapuetic targets that are untractable targets for deep mutational scanning.

Structure-guided design of anti-viral therapuetics is a promising approach to developing effective drugs against SARS-CoV-2. It's a major goal of consortiums like the [ASAP Discovery Consortium](https://asapdiscovery.org/) to incorporate evolutionary contraint into the design of therapeutic ligands. The data from [Bloom and Neher](https://doi.org/10.1101/2023.01.30.526314) can be combined with a structural representation of each viral targets to show the propensity of the virus to escape in the binding pockets being targeted by medical chemists doing structure-aided design. **`dms-viz`** offers a convient way to visually assess this for a wide range of structure-ligand pairs.

To check out the data and code for this study, [click here](https://github.com/jbloomlab/SARS2-mut-fitness). To see how to prepare this kind of data and explore the results of [Bloom and Neher](https://doi.org/10.1101/2023.01.30.526314) yourself, check out the tutorial below.

### Using **`dms-viz`**

You can find the original mutation fitness data for this study [here](https://github.com/jbloomlab/SARS2-mut-fitness). I've organized this data if you want to follow along [here](https://github.com/dms-viz/configure_dms_viz/tree/main/tests/SARS2-Mutation-Fitness).

[`configure-dms-viz`](/preparing-data/command-line-api/) is designed to prepare a single dataset at a time. For each of the 23 SARS-CoV-2 proteins in this study, the values for each of the [command line arguments](/preparing-data/command-line-api/) is described in this [`datasets.csv`](https://github.com/dms-viz/configure_dms_viz/blob/main/tests/SARS2-Mutation-Fitness/datasets.csv) file. Here is an example of a single command for the Spike protein:

```bash
configure-dms-viz
  --input tests/SARS2-Mutation-Fitness/input/S_fitness.csv
  --sitemap tests/SARS2-Mutation-Fitness/sitemap/S_sitemap.csv
  --output tests/SARS2-Mutation-Fitness/sitemap/S.json
  --name "S"
  --metric "fitness"
  --metric-name "Fitness"
  --structure "6VYB"
  --included-chains "polymer"
  --tooltip-cols "{'expected_count': 'Expected Count'}"
  --filter-cols "{'expected_count': 'Expected Count'}"
  --filter-limits "{'expected_count': [0, 100]}"
  --title "S"
  --alphabet "RKHDEQNSTYWFAILMVGPC*"
  --exclude-amino-acids "*"
  --description "The Spike Glycoprotein. The Structure is has one RBD in the up position. [Structure: 6VYB]"
```

This results in an output `.json` file that can be visualized in the **`dms-viz`** right away. However, if you want to visualize all 23 experiments together, it's possible to combine them together into a single `.json` file using the `combine_jsons()` command described in the [example above](#_1-mapping-the-neutralization-profile-of-antibodies-and-sera-against-hiv-envelope). This results in the `.json` specification located [here](https://github.com/dms-viz/configure_dms_viz/blob/main/tests/SARS2-Mutation-Fitness/output/SARS2-Mutation-Fitness.json). You can visualize this with **`dms-viz`** below, or you can [click here](https://dms-viz.github.io/v0/?data=https%3A%2F%2Fraw.githubusercontent.com%2Fdms-viz%2Fconfigure_dms_viz%2Fmain%2Ftests%2FSARS2-Mutation-Fitness%2Foutput%2FSARS2-Mutation-Fitness.json&markdown=https%3A%2F%2Fraw.githubusercontent.com%2Fdms-viz%2Fconfigure_dms_viz%2Fmain%2Ftests%2FSARS2-Mutation-Fitness%2FREADME.md&s=mean&fi=%257B%2522expected_count%2522%253A10.060741%257D) to see the visualization on a separate page.

<div style="text-align: center;">

<iframe 
  src="https://dms-viz.github.io/v0/?data=https%3A%2F%2Fraw.githubusercontent.com%2Fdms-viz%2Fconfigure_dms_viz%2Fmain%2Ftests%2FSARS2-Mutation-Fitness%2Foutput%2FSARS2-Mutation-Fitness.json&markdown=https%3A%2F%2Fraw.githubusercontent.com%2Fdms-viz%2Fconfigure_dms_viz%2Fmain%2Ftests%2FSARS2-Mutation-Fitness%2FREADME.md&s=mean&fi=%257B%2522expected_count%2522%253A10.060741%257D" 
  width="100%" 
  height="600px" 
  style="border:0; margin: 0 auto; display: block; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
</iframe>

</div>

## 3. Exploring the functional constraint and evolutionary potential of the influenza A polymerase PB1 subunit

The influenza RNA-dependent RNA polymerase (RdRp) is a key determinant of zoonosis for novel influenza viruses. However, little is known about the evolutionary potential and effect of mutations on influenza RdRp function. [Li et. al.,](https://doi.org/10.1101/2023.08.27.554986) set out to change this by measuring the effect of thousands of mutations on the replicative fitness of influenza RdRp by performing deep mutational scanning on the PB1 subunit of the A/WSN/1933(H1N1) strain. [Li et. al.,](https://doi.org/10.1101/2023.08.27.554986) provide a comprehensive map of PB1 mutation fitness that serves as a helpful resource for those interested in understanding influenza replication.

**`dms-viz`** provides a great platform to share deep mutational scanning data as a resource. It offers stable links that contains information about the parameters selected in the visualization, making it possible to highlight and share specific findings. Also, since the influenza RdRp is a heterotrimer of which PB1 is only a single subunit, **`dms-viz`** provides a flexible way to represent a highlight specific subunits of the structure.

To see how to prepare this kind of data and explore the results of [Li et. al.,](https://doi.org/10.1101/2023.08.27.554986) yourself, check out the tutorial below.

### Using **`dms-viz`**

You can find the original mutation fitness data for this study [here](https://www.biorxiv.org/content/biorxiv/early/2023/08/27/2023.08.27.554986/DC8/embed/media-8.csv?download=true). I've organized this data if you want to follow along [here](https://github.com/dms-viz/configure_dms_viz/blob/main/tests/IAV-PB1-DMS/input/pb1_fitness.csv). I did a little bit of pre-processing on this data in python to meet the [data requirements](/preparing-data/data-requirements/):

```python
# Import and format the data from the supplement
fitness_df = pd.read_csv("../data/supplemental-data.csv")
# Drop the amplicon column
fitness_df.drop('amplicon', axis=1, inplace=True)
# Replace the three letter code with one letter code
fitness_df['wildtype'] = fitness_df['wildtype'].replace(AA_DICT)
fitness_df['substitution'] = fitness_df['substitution'].replace(AA_DICT)
# Rename the columns
fitness_df.rename(columns={'substitution': 'mutant'}, inplace=True)
# Save the output data
fitness_df.to_csv("../data/fitness.csv", index=False)
```

The values for each of the [command line arguments](/preparing-data/command-line-api/) is described in this [`datasets.csv`](https://github.com/dms-viz/configure_dms_viz/blob/main/tests/SARS2-Mutation-Fitness/datasets.csv) file. Here is the resulting command:

```bash
configure-dms-viz
  --input tests/IAV-PB1-DMS/input/pb1_fitness.csv
  --sitemap tests/IAV-PB1-DMS/sitemap/sitemap.csv
  --output tests/IAV-PB1-DMS/sitemap/pb1.json
  --name "IAV PB1"
  --metric "fitness"
  --metric-name "Replicative Fitness"
  --structure "7NHX"
  --included-chains "B"
  --title "IAV PB1 Deep Mutational Scan"
  --description "Deep mutational scan of influenza virus A/WSN/1933(H1N1) PB1 RdRp subunit"
```

This results in an output `.json` file that can be visualized in the **`dms-viz`** right away. You can visualize this with **`dms-viz`** below, or you can [click here](https://dms-viz.github.io/v0/?data=https%3A%2F%2Fraw.githubusercontent.com%2Fdms-viz%2Fconfigure_dms_viz%2Fmain%2Ftests%2FIAV-PB1-DMS%2Foutput%2FIAV-PB1-DMS.json&markdown=https%3A%2F%2Fraw.githubusercontent.com%2Fdms-viz%2Fconfigure_dms_viz%2Fmain%2Ftests%2FIAV-PB1-DMS%2FREADME.md&n=true&s=mean) to see the visualization on a separate page.

<div style="text-align: center;">

<iframe 
  src="https://dms-viz.github.io/v0/?data=https%3A%2F%2Fraw.githubusercontent.com%2Fdms-viz%2Fconfigure_dms_viz%2Fmain%2Ftests%2FIAV-PB1-DMS%2Foutput%2FIAV-PB1-DMS.json&markdown=https%3A%2F%2Fraw.githubusercontent.com%2Fdms-viz%2Fconfigure_dms_viz%2Fmain%2Ftests%2FIAV-PB1-DMS%2FREADME.md&n=true&s=mean" 
  width="100%" 
  height="600px" 
  style="border:0; margin: 0 auto; display: block; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
</iframe>

</div>
