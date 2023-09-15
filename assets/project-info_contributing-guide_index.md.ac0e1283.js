import{_ as e,o,c as a,Q as t}from"./chunks/framework.9ad6f510.js";const y=JSON.parse('{"title":"Contributing Guide","description":"","frontmatter":{},"headers":[],"relativePath":"project-info/contributing-guide/index.md","filePath":"project-info/contributing-guide/index.md"}'),n={name:"project-info/contributing-guide/index.md"},s=t('<h1 id="contributing-guide" tabindex="-1">Contributing Guide <a class="header-anchor" href="#contributing-guide" aria-label="Permalink to &quot;Contributing Guide&quot;">​</a></h1><p>Welcome to the <code>dms-viz</code> project! <a href="https://dms-viz.github.io/" target="_blank" rel="noreferrer">dms-viz</a> is an interactive tool for visualizing mutation-level data in the context of a 3D protein structure. The tool consists of two parts:</p><ol><li>A <a href="https://github.com/dms-viz/configure_dms_viz" target="_blank" rel="noreferrer">Command Line Interface (CLI)</a> written in Python used to format data into a <code>.json</code> file that can be uploaded to</li><li>An <a href="https://github.com/dms-viz/dms-viz.github.io" target="_blank" rel="noreferrer">interactive web-based visualization</a> tool written with Javascript, <a href="https://d3js.org/" target="_blank" rel="noreferrer">D3.js</a>, and <a href="https://nglviewer.org/" target="_blank" rel="noreferrer">NGL.js</a>.</li></ol><p>Because this project is built in two separate components, each in their own repositories, this contributing/developing guide is split into two parts.</p><p>If you&#39;re intersted in contributing to this project, please reach out on <a href="https://github.com/dms-viz" target="_blank" rel="noreferrer">GitHub</a>!</p><h2 id="contributing-to-configure-dms-viz" tabindex="-1">Contributing to <code>configure_dms_viz</code> <a class="header-anchor" href="#contributing-to-configure-dms-viz" aria-label="Permalink to &quot;Contributing to `configure_dms_viz`&quot;">​</a></h2><p>Thank you for your interest in contributing to <code>configure_dms_viz</code>! Here is guide on how to develop this package as well as some guidelines for contributing.</p><h3 id="developing" tabindex="-1">Developing <a class="header-anchor" href="#developing" aria-label="Permalink to &quot;Developing&quot;">​</a></h3><br><h4 id="_1-set-up-your-environment" tabindex="-1">1. Set Up Your Environment: <a class="header-anchor" href="#_1-set-up-your-environment" aria-label="Permalink to &quot;1. Set Up Your Environment:&quot;">​</a></h4><p>We use <a href="https://python-poetry.org/" target="_blank" rel="noreferrer"><code>Poetry</code></a> for dependency management and packaging. If you don&#39;t have it installed, get it <a href="https://python-poetry.org/docs/#installation" target="_blank" rel="noreferrer">here</a>.</p><h4 id="_2-fork-the-repository" tabindex="-1">2. Fork the Repository: <a class="header-anchor" href="#_2-fork-the-repository" aria-label="Permalink to &quot;2. Fork the Repository:&quot;">​</a></h4><p>Before you start making changes, fork the repository to your own GitHub account.</p><h4 id="_3-clone-your-fork" tabindex="-1">3. Clone Your Fork: <a class="header-anchor" href="#_3-clone-your-fork" aria-label="Permalink to &quot;3. Clone Your Fork:&quot;">​</a></h4><p>Clone your forked repository to your local machine.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/dms-viz/configure_dms_viz.git</span></span>\n<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">configure_dms_viz</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/dms-viz/configure_dms_viz.git</span></span>\n<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">configure_dms_viz</span></span></code></pre></div><h4 id="_4-install-dependencies" tabindex="-1">4. Install Dependencies: <a class="header-anchor" href="#_4-install-dependencies" aria-label="Permalink to &quot;4. Install Dependencies:&quot;">​</a></h4><p>With <code>Poetry</code>, setting up the project environment and installing dependencies is easy:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">poetry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">poetry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div><h3 id="contributing-guidelines" tabindex="-1">Contributing Guidelines: <a class="header-anchor" href="#contributing-guidelines" aria-label="Permalink to &quot;Contributing Guidelines:&quot;">​</a></h3><br><h4 id="_1-work-on-a-new-branch" tabindex="-1">1. Work on a New Branch: <a class="header-anchor" href="#_1-work-on-a-new-branch" aria-label="Permalink to &quot;1. Work on a New Branch:&quot;">​</a></h4><p>Don&#39;t work directly on the main branch. Create a new branch for your feature or bug fix.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">your-new-feature-or-fix</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> </span><span style="color:#032F62;">your-new-feature-or-fix</span></span></code></pre></div><h4 id="_2-document-your-changes" tabindex="-1">2. Document Your Changes: <a class="header-anchor" href="#_2-document-your-changes" aria-label="Permalink to &quot;2. Document Your Changes:&quot;">​</a></h4><p>Make sure to comment your code appropriately. If you&#39;re introducing a new feature or making significant changes, update the README.md file as necessary.</p><h4 id="_3-commit-your-changes" tabindex="-1">3. Commit Your Changes: <a class="header-anchor" href="#_3-commit-your-changes" aria-label="Permalink to &quot;3. Commit Your Changes:&quot;">​</a></h4><p>Make granular commits with meaningful commit messages. This makes it easier to review your contributions.</p><h4 id="_4-push-to-your-fork" tabindex="-1">4. Push to Your Fork: <a class="header-anchor" href="#_4-push-to-your-fork" aria-label="Permalink to &quot;4. Push to Your Fork:&quot;">​</a></h4><p>Push the changes to your forked repository.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">your-new-feature-or-fix</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">your-new-feature-or-fix</span></span></code></pre></div><h4 id="_5-create-a-pull-request" tabindex="-1">5. Create a Pull Request: <a class="header-anchor" href="#_5-create-a-pull-request" aria-label="Permalink to &quot;5. Create a Pull Request:&quot;">​</a></h4><p>Once you&#39;re done with your changes and you think it&#39;s ready for review, create a pull request from your forked repository to the original repository.</p><h3 id="code-formatting" tabindex="-1">Code Formatting <a class="header-anchor" href="#code-formatting" aria-label="Permalink to &quot;Code Formatting&quot;">​</a></h3><p>The code is formatted using <code>Black</code>, which will be installed as a development dependence by <code>Poetry</code>. Linting is handled by <code>Ruff</code>, which will also be installed by <code>Poetry</code>.</p><h2 id="contributing-to-dms-viz-github-io" tabindex="-1">Contributing to <code>dms-viz.github.io</code> <a class="header-anchor" href="#contributing-to-dms-viz-github-io" aria-label="Permalink to &quot;Contributing to `dms-viz.github.io`&quot;">​</a></h2><p>Thanks for your interest into contributing to the visualization component of <strong><code>dms-viz</code></strong>! Below is a quick guide for developing the website along with some guidelines for contributing.</p><h3 id="developing-1" tabindex="-1">Developing <a class="header-anchor" href="#developing-1" aria-label="Permalink to &quot;Developing&quot;">​</a></h3><br><h4 id="environment-setup" tabindex="-1">Environment Setup <a class="header-anchor" href="#environment-setup" aria-label="Permalink to &quot;Environment Setup&quot;">​</a></h4><p>The development of dms-viz utilizes <code>npm</code>, the JavaScript package manager, and <a href="https://vitejs.dev/" target="_blank" rel="noreferrer"><code>Vite</code></a>, the build tool.</p><p>To begin contributing, follow these steps:</p><ol><li><p>Clone the repository to your local machine.</p></li><li><p>Install the necessary dependencies specified in the package.json file by running the command:</p></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div><h4 id="interactive-server" tabindex="-1">Interactive Server <a class="header-anchor" href="#interactive-server" aria-label="Permalink to &quot;Interactive Server&quot;">​</a></h4><p>To start development, you&#39;ll need to run the local server using Vite. This can be done with the command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span></span></code></pre></div><p>This command will start a local development server and open up a browser window. Most changes are reflected live without having to restart the server.</p><h3 id="how-to-contribute" tabindex="-1">How to Contribute <a class="header-anchor" href="#how-to-contribute" aria-label="Permalink to &quot;How to Contribute&quot;">​</a></h3><p>Contributions are made through the Fork and Pull Request workflow. If you&#39;re unfamiliar with this workflow, here&#39;s a simplified overview:</p><p>First, you&#39;ll need to create a fork of the dms-viz repository on your own GitHub account. Make your changes in your forked repository.</p><p>Once you&#39;re done with your changes, create a pull request to propose your changes to the dms-viz main repository.</p><p>Your pull request will then be reviewed and, if everything looks good, your changes will be merged into the main repository.</p><p>Remember to fetch the latest changes from the main repository before you start working on new features or fixes.</p><h3 id="code-guidelines" tabindex="-1">Code Guidelines <a class="header-anchor" href="#code-guidelines" aria-label="Permalink to &quot;Code Guidelines&quot;">​</a></h3><p>We aim for clean and consistent code across the entire project. To this end, we use <code>ESLint</code> for linting and <code>Prettier</code> for code formatting. Make sure to install these extensions to your code editor. Before making a Pull Request, ensure your code adheres to these formatting guidelines.</p>',56),r=[s];function i(l,p,c,d,h,u){return o(),a("div",null,r)}const b=e(n,[["render",i]]);export{y as __pageData,b as default};