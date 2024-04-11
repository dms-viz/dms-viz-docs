import{_ as s,a}from"./chunks/remote-upload-example.8b681ca5.js";import{_ as e,o,c as n,Q as t}from"./chunks/framework.9ad6f510.js";const f=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"introduction/getting-started/index.md","filePath":"introduction/getting-started/index.md"}'),l={name:"introduction/getting-started/index.md"},p=t(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p><strong><code>dms-viz</code></strong> requires two steps:</p><ol><li><p>First, using a command line tool called <a href="https://pypi.org/project/configure-dms-viz/" target="_blank" rel="noreferrer"><code>configure-dms-viz</code></a>, you specify information about your dataset to generate a <code>.json</code> specification file.</p></li><li><p>Second, you open up the <a href="https://dms-viz.github.io/" target="_blank" rel="noreferrer">web tool</a> and upload your <code>.json</code> specification file to generate an interactive visualization. Below are some instructions to get you oriented.</p></li></ol><div class="tip custom-block"><p class="custom-block-title">Want to Skip Ahead?</p><p>If you&#39;re interested in the detailed command line API, check out the reference <a href="/dms-viz-docs/preparing-data/command-line-api/">here</a>. If you&#39;ve already formatted your data and you&#39;re ready to start visualizing it, check out the instructions for that <a href="/dms-viz-docs/visualizing-data/web-tool-api/">here</a>.</p></div><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>To use <strong><code>dms-viz</code></strong> with your data, you&#39;ll need to install the command line tool <a href="https://pypi.org/project/configure-dms-viz/" target="_blank" rel="noreferrer"><code>configure-dms-viz</code></a>. To use <code>configure-dms-viz</code>, you must ensure that you have the correct version of Python (3.9 or later) installed on your system.</p><p>If you are unsure whether the correct version of Python is installed, open a terminal window (Command Prompt in Windows, Terminal in macOS, or a terminal emulator in Linux) and run the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">python</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">python</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--version</span></span></code></pre></div><p>Check the version number that is displayed. It should be 3.9.x or later. If the command isn&#39;t recognized or the version is earlier than 3.9, you will need to install or update Python.</p><p>To install <code>configure-dms-viz</code>, you&#39;ll also need the package manager <code>pip</code>. Here&#39;s how to check if <code>pip</code> is installed and how to install it if it isn&#39;t. In the terminal window, run the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--version</span></span></code></pre></div><p>If <code>pip</code> is installed, the version number will be displayed. If it is not installed, you will see an error message. If <code>pip</code> isn&#39;t installed, follow <a href="https://pip.pypa.io/en/stable/installation/" target="_blank" rel="noreferrer">these</a> instructions to install it.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>Currently, <code>configure-dms-viz</code> is distributed on <a href="https://pypi.org/" target="_blank" rel="noreferrer">PyPI</a>, allowing you to install <code>configure-dms-viz</code> using <code>pip</code>. To install the latest version of <code>configure-dms-viz</code>, run the following command in the terminal:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">configure-dms-viz</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">configure-dms-viz</span></span></code></pre></div><p>Now, <code>configure-dms-viz</code> should be installed. You can double-check that the installation worked by running the following command in the terminal:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">configure-dms-viz</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--help</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">configure-dms-viz</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--help</span></span></code></pre></div><p>You should see the help message for the tool printed to the terminal&#39;s output.</p><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h2><p><code>configure_dms_viz</code> is a command-line tool designed to create a <code>.json</code> format specification file for <strong><code>dms-viz</code></strong>. You provide the data that you&#39;d like to visualize along with additional information to customize the visualization. The resulting specification file is then uploaded to <a href="https://dms-viz.github.io/" target="_blank" rel="noreferrer"><strong><code>dms-viz</code></strong></a> to create the visualization of your data. Below is an overview of the process of using <code>configure_dms_viz</code>.</p><div class="tip custom-block"><p class="custom-block-title">Looking for more details?</p><p>This example only covers the <em>basic</em> use case. You can augment <code>dms-viz</code> with custom tooltips, filters, and more. For a detailed explanation of these features, check out the reference <a href="/dms-viz-docs/preparing-data/command-line-api/">here</a>.</p></div><p><code>configure-dms-viz</code> has two commands, <code>format</code> and <code>join</code>. To format a single dataset for <strong><code>dms-viz</code></strong>, you execute the <code>configure-dms-viz format</code> command with the required and optional arguments as needed:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">configure-dms-viz</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">format</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--name</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">experiment_nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--input</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">input_cs</span><span style="color:#E1E4E8;">v</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--metric</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">metric_colum</span><span style="color:#E1E4E8;">n</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--structure</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">pdb_structur</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--output</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">output_jso</span><span style="color:#E1E4E8;">n</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    [optional_arguments]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">configure-dms-viz</span><span style="color:#24292E;"> </span><span style="color:#032F62;">format</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--name</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">experiment_nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--input</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">input_cs</span><span style="color:#24292E;">v</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--metric</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">metric_colum</span><span style="color:#24292E;">n</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--structure</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">pdb_structur</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--output</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">output_jso</span><span style="color:#24292E;">n</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    [optional_arguments]</span></span></code></pre></div><p>The <strong>required</strong> arguments are:</p><ol><li><code>--name</code>: The <a href="/dms-viz-docs/preparing-data/command-line-api/#name">name of your dataset</a> as you&#39;d like it to appear in the visualization.</li><li><code>--input</code>: The file path to your <a href="/dms-viz-docs/preparing-data/command-line-api/#input">input data</a>.</li><li><code>--metric</code>: The name of the column that contains <a href="/dms-viz-docs/preparing-data/command-line-api/#metric">the metric</a> you want to visualize.</li><li><code>--structure</code>: The <a href="/dms-viz-docs/preparing-data/command-line-api/#structure">protein structure</a> that you want to use as a model.</li><li><code>--output</code>: The file path of <a href="/dms-viz-docs/preparing-data/command-line-api/#output">the output</a> <code>.json</code> file.</li></ol><p>The remaining arguments are all <em>optional</em> and configure the structure, appearance, and interaction of your final visualization. For more details on the individual arguments, check out the <a href="/dms-viz-docs/preparing-data/command-line-api/">API reference</a>.</p><div class="warning custom-block"><p class="custom-block-title">Before going any further</p><p>If you plan to use <code>configure-dms-viz</code>, it&#39;s <em>crucial</em> that you familiarize yourself with the input data requirements. Please check out what these requirements are <a href="/dms-viz-docs/preparing-data/data-requirements/">here</a>.</p></div><p>Now, let&#39;s use <code>configure-dms-viz</code> with a minimal example. This data is included in the <a href="https://github.com/dms-viz/configure_dms_viz/tree/main" target="_blank" rel="noreferrer">GitHub repository</a>. If you want to follow along, clone the repository and run <code>configure-dms-viz</code> from the top of the directory.</p><h3 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">configure-dms-viz</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">format</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">--name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;REGN mAb Cocktail&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">--input</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tests/SARS2-RBD-REGN-DMS/input/REGN_escape.csv</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">--sitemap</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tests/SARS2-RBD-REGN-DMS/sitemap/sitemap.csv</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">--metric</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;mut_escape&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">--metric-name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Escape&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">--structure</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;6XDG&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">--included-chains</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;E&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">--condition</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;condition&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">--condition-name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Antibody&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">--output</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./REGN_escape.json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">configure-dms-viz</span><span style="color:#24292E;"> </span><span style="color:#032F62;">format</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">--name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;REGN mAb Cocktail&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">--input</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tests/SARS2-RBD-REGN-DMS/input/REGN_escape.csv</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">--sitemap</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tests/SARS2-RBD-REGN-DMS/sitemap/sitemap.csv</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">--metric</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;mut_escape&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">--metric-name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Escape&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">--structure</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;6XDG&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">--included-chains</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;E&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">--condition</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;condition&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">--condition-name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Antibody&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">--output</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./REGN_escape.json</span></span></code></pre></div><p>Here, we&#39;ve specified that we want the dataset to be called <code>REGN mAb Cocktail</code> (named after the Regeneron Antibody cocktail against SARS-CoV-2) and we&#39;ve pointed to the <a href="https://github.com/dms-viz/configure_dms_viz/blob/main/tests/SARS2-RBD-REGN-DMS/input/REGN_escape.csv" target="_blank" rel="noreferrer">input data</a> containing scores detailing the degree of antibody escape from the <code>REGN mAb Cocktail</code>. We&#39;ve also specified a <a href="https://github.com/dms-viz/configure_dms_viz/blob/main/tests/SARS2-RBD-REGN-DMS/sitemap/sitemap.csv" target="_blank" rel="noreferrer">sitemap</a> that tells the tool how sites in your data correspond to the sites in the protein structure. Then, we specified that we wanted to use the protein structure <code>6XDG</code> from the <a href="https://www.rcsb.org/" target="_blank" rel="noreferrer">RSCB PDB</a> website and only display our data on chain <code>E</code> of that structure. The column in the input data that contains our data is called <code>mut_escape</code>, and we have different values of <code>mut_escape</code> for the same mutations depending on the <code>condition</code> (in this case, the condition refers to escape from each antibody in the cocktail).</p><p>The result of this command should be a message printed to the terminal that looks like this:</p><h3 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;Output&quot;">​</a></h3><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Formatting data for visualization using the &#39;mut_escape&#39; column from &#39;tests/SARS2-RBD-REGN-DMS/input/REGN_escape.csv&#39;...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Using sitemap from &#39;tests/SARS2-RBD-REGN-DMS/sitemap/sitemap.csv&#39;.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&#39;protein_site&#39; column is not present in the sitemap. Assuming that the reference sites correspond to protein sites.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">About 95.98% of the wildtype residues in the data match the corresponding residues in the structure.</span></span>
<span class="line"><span style="color:#E1E4E8;">About 4.02% of the data sites are missing from the structure.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Success! The visualization JSON was written to &#39;./REGN_escape.json&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Formatting data for visualization using the &#39;mut_escape&#39; column from &#39;tests/SARS2-RBD-REGN-DMS/input/REGN_escape.csv&#39;...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Using sitemap from &#39;tests/SARS2-RBD-REGN-DMS/sitemap/sitemap.csv&#39;.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&#39;protein_site&#39; column is not present in the sitemap. Assuming that the reference sites correspond to protein sites.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">About 95.98% of the wildtype residues in the data match the corresponding residues in the structure.</span></span>
<span class="line"><span style="color:#24292E;">About 4.02% of the data sites are missing from the structure.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Success! The visualization JSON was written to &#39;./REGN_escape.json&#39;</span></span></code></pre></div><p>This message provides some information from the <code>configure-dms-viz format</code> command for your dataset. In addition to this message, there will be a <code>.json</code> file located where you specified the output path.</p><p>This is how you use <code>configure-dms-viz</code> to format a single dataset. You can optionally combine multiple datasets into a single <code>.json</code> specification file using the <code>configure-dms-viz join</code> command which takes a list of <code>.json</code> files as arguments along with an optional description of the datasets. For more details on combining datasets, check out the <a href="/dms-viz-docs/preparing-data/command-line-api/">API</a>.</p><p>For now, since we&#39;re only visualizing a single dataset, we can skip this step. In the next section, you&#39;ll take this <code>.json</code> visualization file and visualize your data with <a href="https://dms-viz.github.io/" target="_blank" rel="noreferrer"><strong><code>dms-viz</code></strong></a>.</p><h2 id="visualizing" tabindex="-1">Visualizing <a class="header-anchor" href="#visualizing" aria-label="Permalink to &quot;Visualizing&quot;">​</a></h2><p>There are two ways to upload data into <strong><code>dms-viz</code></strong>. You can either upload a <strong>local</strong> specification file from your computer, or you can provide a link to a <strong>remote</strong> specification file hosted somewhere like <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>.</p><h3 id="local" tabindex="-1">Local <a class="header-anchor" href="#local" aria-label="Permalink to &quot;Local&quot;">​</a></h3><p>To upload a local file, you simply click on the <code>Upload Data</code> section and choose a file from your machine.</p><div align="center"><img src="`+s+'" alt="Local Upload"></div><p>Since the <code>.json</code> file created above should now be stored locally on your machine, you can upload this file using this approach.</p><h3 id="remote" tabindex="-1">Remote <a class="header-anchor" href="#remote" aria-label="Permalink to &quot;Remote&quot;">​</a></h3><p>Alternatively, if your <code>.json</code> specification file is hosted somewhere online – like on GitHub, for example – you can provide the link to this file by clicking on the <code>Remote</code> button under the <code>Upload Data</code> section.</p><div align="center"><img src="'+a+'" alt="Remote Upload"></div><p>You can try it yourself by pasting the following link into the URL text box:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">https://raw.githubusercontent.com/dms-viz/configure_dms_viz/main/tests/SARS2-RBD-REGN-DMS/output/SARS2-RBD-REGN-DMS.json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">https://raw.githubusercontent.com/dms-viz/configure_dms_viz/main/tests/SARS2-RBD-REGN-DMS/output/SARS2-RBD-REGN-DMS.json</span></span></code></pre></div><p>This approach has some advantages. <strong><code>dms-viz</code></strong> includes the link to your remotely stored specification in the URL, allowing you to share your visualization with the data pre-loaded. Another advantage of this approach is that changes made to the appearance of <strong><code>dms-viz</code></strong> are saved in the URL as well.</p><p>For more details on using the web-based interface of <strong><code>dms-viz</code></strong> including hosting, interacting, and sharing your files, check out the <a href="/dms-viz-docs/visualizing-data/web-tool-api/">interaction reference</a>.</p>',51),i=[p];function c(r,d,u,h,y,m){return o(),n("div",null,i)}const v=e(l,[["render",c]]);export{f as __pageData,v as default};