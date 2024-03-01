import{_ as e,a as o}from"./chunks/remote-upload-example.8b681ca5.js";import{_ as t,o as a,c as i,Q as n}from"./chunks/framework.9ad6f510.js";const s="/dms-viz-docs/assets/markdown-description.da4210f1.png",r="/dms-viz-docs/assets/chart-options.d0c3f030.png",d="/dms-viz-docs/assets/protein-options.e3d53086.png",c="/dms-viz-docs/assets/zoom-on-lineplot.69fc84b3.mp4",l="/dms-viz-docs/assets/select-on-heatmap.79d739a9.mp4",h="/dms-viz-docs/assets/select-on-protein.bdf7f75e.mp4",p="/dms-viz-docs/assets/deselect-sites-on-protein.6ae00580.mp4",u="/dms-viz-docs/assets/select-conditions-on-protein.00ea21a8.mp4",m="/dms-viz-docs/assets/select-conditions-on-chart.4ae2ddf5.mp4",g="/dms-viz-docs/assets/protein-interaction.9d52c810.mp4",f="/dms-viz-docs/assets/download-options.bd83f56f.png",D=JSON.parse('{"title":"Web Tool API","description":"","frontmatter":{},"headers":[],"relativePath":"visualizing-data/web-tool-api/index.md","filePath":"visualizing-data/web-tool-api/index.md"}'),b={name:"visualizing-data/web-tool-api/index.md"},v=n('<h1 id="web-tool-api" tabindex="-1">Web Tool API <a class="header-anchor" href="#web-tool-api" aria-label="Permalink to &quot;Web Tool API&quot;">​</a></h1><h2 id="uploading-data" tabindex="-1">Uploading Data <a class="header-anchor" href="#uploading-data" aria-label="Permalink to &quot;Uploading Data&quot;">​</a></h2><p>There are two ways to upload data into <strong><code>dms-viz</code></strong>. You can either upload a <strong>local</strong> specification file from your computer, or you can provide a link to a <strong>remote</strong> specification file hosted somewhere like <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>. You&#39;ll find the options for uploading data under the <code>Upload Data</code> section of the side menu.</p><h3 id="local" tabindex="-1">Local <a class="header-anchor" href="#local" aria-label="Permalink to &quot;Local&quot;">​</a></h3><p>To upload a local file, you simply click on the <code>Upload Data</code> section and choose a file from your machine.</p><div align="center"><img src="'+e+'" alt="Local Upload"></div><h3 id="remote" tabindex="-1">Remote <a class="header-anchor" href="#remote" aria-label="Permalink to &quot;Remote&quot;">​</a></h3><p>Alternatively, if your raw <code>.json</code> file is hosted somewhere online – like on GitHub, for example – you can provide the link to this file by clicking on the <code>Remote</code> button under the <code>Upload Data</code> section.</p><div align="center"><img src="'+o+'" alt="Remote Upload"></div><p>You can try it yourself by pasting the following link into the URL text box:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">https://raw.githubusercontent.com/dms-viz/configure_dms_viz/main/tests/sars2/output/sars2.json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">https://raw.githubusercontent.com/dms-viz/configure_dms_viz/main/tests/sars2/output/sars2.json</span></span></code></pre></div><p>This approach has some advantages. For example, after providing a link to your data, this link is saved in the URL, allowing you to share a view of <strong><code>dms-viz</code></strong> with the data pre-loaded and ready to view. Also, this approach allows you to provide a markdown description (also hosted remotely) of the datasets.</p><h4 id="providing-a-description" tabindex="-1">Providing A Description <a class="header-anchor" href="#providing-a-description" aria-label="Permalink to &quot;Providing A Description&quot;">​</a></h4><p>If you&#39;ve uploaded data that&#39;s stored on a server like GitHub by following the <a href="#remote">Remote instructions</a>, you can <em>optionally</em> provide a link to a markdown (<code>.md</code>) file that will be displayed below the main visualization in a collapsible container.</p><div align="center"><img src="'+s+'" alt="Markdown Description"></div><p>Just like the remote <code>.json</code> specification, the link to the markdown is saved in the URL path and the description will load automatically when someone accesses the updated URL.</p><h2 id="chart-configuration" tabindex="-1">Chart Configuration <a class="header-anchor" href="#chart-configuration" aria-label="Permalink to &quot;Chart Configuration&quot;">​</a></h2><p><strong><code>dms-viz</code></strong> provides a handful of ways to navigate and customize the visualization. You can find these options under the <code>Chart Options</code> tab in the side menu.</p><div align="center"><img src="'+r+'" alt="Chart Options"></div><ul><li><h3 id="dataset" tabindex="-1"><code>Dataset</code> <a class="header-anchor" href="#dataset" aria-label="Permalink to &quot;`Dataset`&quot;">​</a></h3><p>Although <code>configure-dms-viz</code> will return only a single <code>.json</code> specification, it is possible to combine multiple <code>.json</code> specifications in a single file to visualize. If there are multiple datasets in the <code>.json</code> file, you can navigate between these using the <code>Dataset</code> dropdown menu. The name that appears in the dropdown for each dataset depends on the <a href="/dms-viz-docs/preparing-data/command-line-api/#name"><code>--name</code></a> flag.</p><p>Additionally, next to the <code>Dataset</code> dropdown menu there is an information icon ⓘ. By clicking on this icon, a short description of the dataset appears above the top plot. The description can be specified using the <a href="/dms-viz-docs/preparing-data/command-line-api/#description"><code>--description</code></a> flag.</p></li><li><h3 id="condition" tabindex="-1"><code>Condition</code> <a class="header-anchor" href="#condition" aria-label="Permalink to &quot;`Condition`&quot;">​</a></h3><p>If your input data has multiple measurements for each mutation/site combination that are distinguished by some <em>condition</em> (specified by the <a href="/dms-viz-docs/preparing-data/command-line-api/#condition"><code>--condition</code></a> flag), an interactive legend appears under <code>Chart Options</code>.</p><p>Although the default label that appears above the legend is <code>Condition</code>, you can specify the label using the <a href="/dms-viz-docs/preparing-data/command-line-api/#condition_name"><code>--condition_name</code></a> flag.</p></li><li><h3 id="summary-metric" tabindex="-1"><code>Summary Metric</code> <a class="header-anchor" href="#summary-metric" aria-label="Permalink to &quot;`Summary Metric`&quot;">​</a></h3><p>Use the <code>Summary Metric</code> dropdown menu to choose how to summarize the <code>metric</code> across every mutation at each site. Choose between the <code>mean</code>, <code>min</code>, <code>max</code>, and <code>sum</code>. The resulting summary is displayed in the line plot and on the protein structure.</p></li><li><h3 id="floor" tabindex="-1"><code>Floor</code> <a class="header-anchor" href="#floor" aria-label="Permalink to &quot;`Floor`&quot;">​</a></h3><p>Use the <code>Floor</code> checkbox to choose whether the data should be floored at 0.</p></li><li><h3 id="display-mutation-count" tabindex="-1"><code>Display Mutation Count</code> <a class="header-anchor" href="#display-mutation-count" aria-label="Permalink to &quot;`Display Mutation Count`&quot;">​</a></h3><p>Use the <code>Display Mutation Count</code> checkbox to replace the summary plot above the line plot with a density plot showing the number of mutations that have been sampled at each site. For example, if four mutants have been observed at site 10 in the protein (<code>A</code>, <code>T</code>, <code>Q</code>, and <code>M</code>), the height at that site will be four.</p></li></ul><h2 id="protein-configuration" tabindex="-1">Protein Configuration <a class="header-anchor" href="#protein-configuration" aria-label="Permalink to &quot;Protein Configuration&quot;">​</a></h2><p><strong><code>dms-viz</code></strong> provides a handful of ways to navigate and customize the 3D protein structure. You can find these options under the <code>Protein Configuration</code> tab in the side menu.</p><div align="center"><img src="'+d+'" alt="Protein Options"></div><p>There are <em>four</em> components of the protein structure whose appearances can be controlled separately. For each of these separate components, you can alter the color, representation, and opacity.</p><table><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody><tr><td><code>Protein</code></td><td>All &#39;polymer&#39; chains in the protein structure that have corresponding data (included in the <a href="/dms-viz-docs/preparing-data/command-line-api/#included-chains"><code>--included-chains</code></a> flag).</td></tr><tr><td><code>Selection</code></td><td>The residues in <code>Protein</code> that have been selected by the user.</td></tr><tr><td><code>Peripheral</code></td><td>The chains that are aren&#39;t excluded (by the <a href="/dms-viz-docs/preparing-data/command-line-api/#exclude-chains"><code>--exclude-chains</code></a> flag) but don&#39;t have corresponding data (aren&#39;t included in the <a href="/dms-viz-docs/preparing-data/command-line-api/#included-chains"><code>--included-chainss</code></a>).</td></tr><tr><td><code>Ligand</code></td><td>If <code>Show Ligands</code> is checked, the ligands (i.e. glycans, small molecules, etc...) in the structure.</td></tr></tbody></table><p>For each of these separate components, there are options to change the following:</p><ul><li><h3 id="representation" tabindex="-1"><code>Representation</code> <a class="header-anchor" href="#representation" aria-label="Permalink to &quot;`Representation`&quot;">​</a></h3><p>How the structure is represented (i.e. <code>surface</code>, <code>ball and stick</code>, etc...).</p></li><li><h3 id="color" tabindex="-1"><code>Color</code> <a class="header-anchor" href="#color" aria-label="Permalink to &quot;`Color`&quot;">​</a></h3><p>The color of the molecules. All of the molecules for a given component will be the same color, however, ligands can be colored by element.</p></li><li><h3 id="opacity" tabindex="-1"><code>Opacity</code> <a class="header-anchor" href="#opacity" aria-label="Permalink to &quot;`Opacity`&quot;">​</a></h3><p>The opacity of the component. This can help illustrate the molecular structure with the <code>metric</code> superimposed on the surface of the protein.</p></li></ul><h2 id="interaction" tabindex="-1">Interaction <a class="header-anchor" href="#interaction" aria-label="Permalink to &quot;Interaction&quot;">​</a></h2><p>There are a multitude of ways to interact with <strong><code>dms-viz</code></strong>. Below, you&#39;ll find some examples of what this interaction can look like.</p><h3 id="chart" tabindex="-1">Chart <a class="header-anchor" href="#chart" aria-label="Permalink to &quot;Chart&quot;">​</a></h3><p>You can <strong>zoom</strong> in and out of regions of your data by <strong>brushing</strong> (<em>click and drag</em>) over the area plot.</p><video controls="controls" name="Zoom Example"><source src="'+c+'"></video><p>You can <strong>mouse over</strong> sites on the line/point and mutations on the heatmap to see details in a pop-up <strong>tooltip</strong> and you can <strong>select sites</strong> to see in the <strong>heatmap</strong> by <strong>clicking</strong> on points in the line/point plot.</p><video controls="controls" name="Heatmap Example"><source src="'+l+'"></video><p>You can <strong>select sites on the protein</strong> structure by <strong>brushing</strong> (<em>click and drag</em>) over points in the line/point plot.</p><video controls="controls" name="Selection Example"><source src="'+h+'"></video><p>To <strong>deselect sites</strong>, you can either <strong>double-click</strong> on the line/point plot or <strong>hold down the option key ⌥ and brush</strong> over the sites that you want to deselect.</p><video controls="controls" name="Deselection Example"><source src="'+p+'"></video><p>If there is more than one condition in your data, an interactive legend will appear in the <code>Chart Options</code> You can <strong>select a condition</strong> to color the protein structure with by <strong>clicking</strong> on a condition in the legend.</p><video controls="controls" name="Protein Condition Example"><source src="'+u+'"></video><p>Finally, you can <strong>remove or add conditions</strong> to the line/point plot by <strong>holding down the option key ⌥ while clicking</strong>.</p><video controls="controls" name="Chart Condition Example"><source src="'+m+'"></video><h3 id="protein" tabindex="-1">Protein <a class="header-anchor" href="#protein" aria-label="Permalink to &quot;Protein&quot;">​</a></h3><p>You can <strong>reorient and zoom</strong> into the protein structure by <strong>clicking and dragging</strong> it around the window. You can also <strong>reset the protein structure</strong> to its original orientation by pressing the <strong><code>R</code> button</strong> on your keyboard.</p><video controls="controls" name="Protein Interaction"><source src="'+g+'"></video><h2 id="sharing" tabindex="-1">Sharing <a class="header-anchor" href="#sharing" aria-label="Permalink to &quot;Sharing&quot;">​</a></h2><p>The visualizations that you create with <strong><code>dms-viz</code></strong> can be shared with collaborators and in manuscripts. There are three ways to go about this:</p><h3 id="_1-share-the-json-file" tabindex="-1">1. Share the <code>.json</code> file <a class="header-anchor" href="#_1-share-the-json-file" aria-label="Permalink to &quot;1. Share the `.json` file&quot;">​</a></h3><p>You can simply share the <code>.json</code> specifications that you create with <code>configure-dms-viz</code>.</p><h3 id="_2-share-static-images" tabindex="-1">2. Share static images <a class="header-anchor" href="#_2-share-static-images" aria-label="Permalink to &quot;2. Share static images&quot;">​</a></h3><p>If you&#39;re only interested in a particular plot or protein, you can save and download <code>.png</code> images. Under the <code>Download Session</code> tab in the side menu, you&#39;ll see buttons to download an image of both the plot and the protein.</p><div align="center"><img src="'+f+'" alt="Download Options"></div><h3 id="_3-share-the-url-links" tabindex="-1">3. Share the URL links <a class="header-anchor" href="#_3-share-the-url-links" aria-label="Permalink to &quot;3. Share the URL links&quot;">​</a></h3><p>If your data is hosted on a remote server like <code>GitHub</code>, you can copy the link from your session. This link keeps track of your data, an <em>optional</em> description, and all of the configuration options that you&#39;ve selected.</p>',54),y=[v];function k(w,_,x,q,z,P){return a(),i("div",null,y)}const S=t(b,[["render",k]]);export{D as __pageData,S as default};
