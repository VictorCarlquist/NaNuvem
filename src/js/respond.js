



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>Respond/respond.js at master · scottjehl/Respond · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="scottjehl/Respond" name="twitter:title" /><meta content="Respond - A fast &amp;amp; lightweight polyfill for min/max-width CSS3 Media Queries (for IE 6-8, and more)" name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/214783?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/214783?v=2&amp;s=400" property="og:image" /><meta content="scottjehl/Respond" property="og:title" /><meta content="https://github.com/scottjehl/Respond" property="og:url" /><meta content="Respond - A fast &amp; lightweight polyfill for min/max-width CSS3 Media Queries (for IE 6-8, and more)" property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="BB4B9AFB:4438:185E575:540F44A4" name="octolytics-dimension-request_id" />
    <meta content="Rails, view, blob#show, " name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="X61CbvVMGsze+xe7MRvBrlXv1DlcfbBqsgNZQxCu7AbSPrqGwdGAFubInMRPW9j/CEi14WSoj1fqq/5n3J7FWA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-67ed77eb3aff525f1fa48b9eaedacf82cdb0e4d7.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-f04550e123c58ba3aa0dcac7455fe2145a03ce70.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="e57da69b34f93e6c9ca9bea12a2c6e6e">

      
  <meta name="description" content="Respond - A fast &amp; lightweight polyfill for min/max-width CSS3 Media Queries (for IE 6-8, and more)">
  <meta name="go-import" content="github.com/scottjehl/Respond git https://github.com/scottjehl/Respond.git">

  <meta content="214783" name="octolytics-dimension-user_id" /><meta content="scottjehl" name="octolytics-dimension-user_login" /><meta content="1337658" name="octolytics-dimension-repository_id" /><meta content="scottjehl/Respond" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1337658" name="octolytics-dimension-repository_network_root_id" /><meta content="scottjehl/Respond" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/scottjehl/Respond/commits/master.atom" rel="alternate" title="Recent Commits to Respond:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" ga-data-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fscottjehl%2FRespond%2Fblob%2Fmaster%2Fsrc%2Frespond.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search">
      <form accept-charset="UTF-8" action="/scottjehl/Respond/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/scottjehl/Respond/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
    </div>

      <ul class="header-nav left">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="(Logged out) Header, go to blog, text:blog">Blog</a>
          </li>
      </ul>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">


  <li>
      <a href="/login?return_to=%2Fscottjehl%2FRespond"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/scottjehl/Respond/stargazers">
      7,637
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fscottjehl%2FRespond"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/scottjehl/Respond/network" class="social-count">
        2,915
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/scottjehl" class="url fn" itemprop="url" rel="author"><span itemprop="title">scottjehl</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/scottjehl/Respond" class="js-current-repository js-repo-home-link">Respond</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/scottjehl/Respond/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/scottjehl/Respond" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /scottjehl/Respond">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/scottjehl/Respond/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /scottjehl/Respond/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/scottjehl/Respond/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /scottjehl/Respond/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/scottjehl/Respond/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /scottjehl/Respond/pulse/weekly">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/scottjehl/Respond/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /scottjehl/Respond/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/scottjehl/Respond.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/scottjehl/Respond.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/scottjehl/Respond" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/scottjehl/Respond" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save scottjehl/Respond to your computer and use it in GitHub Desktop." aria-label="Save scottjehl/Respond to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/scottjehl/Respond/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of scottjehl/Respond as a zip file"
                   title="Download the contents of scottjehl/Respond as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/scottjehl/Respond/blob/6d9b409a80e44438ca78808be26f8602a8a88479/src/respond.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:2e96d62e9eb5d3b10e8e5fb23d704017 -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/blob/cross-domain/src/respond.js"
                 data-name="cross-domain"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="cross-domain">cross-domain</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/blob/em-experimental/src/respond.js"
                 data-name="em-experimental"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="em-experimental">em-experimental</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/blob/em-support/src/respond.js"
                 data-name="em-support"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="em-support">em-support</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/blob/gh-pages/src/respond.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/blob/master/src/respond.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/blob/shorthand-syntax/src/respond.js"
                 data-name="shorthand-syntax"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="shorthand-syntax">shorthand-syntax</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/blob/stevelove-logical-not/src/respond.js"
                 data-name="stevelove-logical-not"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="stevelove-logical-not">stevelove-logical-not</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.4.2/src/respond.js"
                 data-name="1.4.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.4.2">1.4.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.4.1/src/respond.js"
                 data-name="1.4.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.4.1">1.4.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.4.0/src/respond.js"
                 data-name="1.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.4.0">1.4.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.3.0/src/respond.js"
                 data-name="1.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.0">1.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.2.0/src/respond.js"
                 data-name="1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.0">1.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.1.0/src/respond.js"
                 data-name="1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.0">1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.0.1/src/respond.js"
                 data-name="1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.1">1.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.0.0/src/respond.js"
                 data-name="1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.0">1.0.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/scottjehl/Respond/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="src/respond.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/scottjehl/Respond" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Respond</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/scottjehl/Respond/tree/master/src" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator"> / </span><strong class="final-path">respond.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Zach Leatherman" class="avatar" data-user="39355" height="24" src="https://avatars0.githubusercontent.com/u/39355?v=2&amp;s=48" width="24" />
        <span class="author"><a href="/zachleat" rel="contributor">zachleat</a></span>
        <time datetime="2013-12-31T16:59:35-06:00" is="relative-time">December 31, 2013</time>
        <div class="commit-title">
            <a href="/scottjehl/Respond/commit/e735025936a2c617eb7859bc3ccd4900ac03707f" class="message" data-pjax="true" title="Fixes #252. Happy New Year!">Fixes</a> <a href="https://github.com/scottjehl/Respond/issues/252" class="issue-link" title="Version in source file does not match actual package version">#252</a><a href="/scottjehl/Respond/commit/e735025936a2c617eb7859bc3ccd4900ac03707f" class="message" data-pjax="true" title="Fixes #252. Happy New Year!">. Happy New Year!</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>4</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="zachleat" href="/scottjehl/Respond/commits/master/src/respond.js?author=zachleat"><img alt="Zach Leatherman" class="avatar" data-user="39355" height="20" src="https://avatars2.githubusercontent.com/u/39355?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jefflembeck" href="/scottjehl/Respond/commits/master/src/respond.js?author=jefflembeck"><img alt="Jeff Lembeck" class="avatar" data-user="109699" height="20" src="https://avatars2.githubusercontent.com/u/109699?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="tomfuertes" href="/scottjehl/Respond/commits/master/src/respond.js?author=tomfuertes"><img alt="Tom Fuertes" class="avatar" data-user="1503991" height="20" src="https://avatars0.githubusercontent.com/u/1503991?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Coridyn" href="/scottjehl/Respond/commits/master/src/respond.js?author=Coridyn"><img alt="Coridyn" class="avatar" data-user="1791456" height="20" src="https://avatars2.githubusercontent.com/u/1791456?v=2&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Zach Leatherman" data-user="39355" height="24" src="https://avatars0.githubusercontent.com/u/39355?v=2&amp;s=48" width="24" />
            <a href="/zachleat">zachleat</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jeff Lembeck" data-user="109699" height="24" src="https://avatars0.githubusercontent.com/u/109699?v=2&amp;s=48" width="24" />
            <a href="/jefflembeck">jefflembeck</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Tom Fuertes" data-user="1503991" height="24" src="https://avatars2.githubusercontent.com/u/1503991?v=2&amp;s=48" width="24" />
            <a href="/tomfuertes">tomfuertes</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Coridyn" data-user="1791456" height="24" src="https://avatars0.githubusercontent.com/u/1791456?v=2&amp;s=48" width="24" />
            <a href="/Coridyn">Coridyn</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>354 lines (297 sloc)</span>
          <span class="meta-divider"></span>
        <span>10.164 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/scottjehl/Respond/raw/master/src/respond.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/scottjehl/Respond/blame/master/src/respond.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/scottjehl/Respond/commits/master/src/respond.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

            <a class="octicon-button disabled tooltipped tooltipped-w" href="#"
               aria-label="You must be signed in to make or propose changes"><span class="octicon octicon-pencil"></span></a>

          <a class="octicon-button danger disabled tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="cm">/* Respond.js: min/max-width media query polyfill. (c) Scott Jehl. MIT Lic. j.mp/respondjs  */</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">w</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line">	<span class="s2">&quot;use strict&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line">	<span class="c1">//exposed namespace</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line">	<span class="kd">var</span> <span class="nx">respond</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">	<span class="nx">w</span><span class="p">.</span><span class="nx">respond</span> <span class="o">=</span> <span class="nx">respond</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line">	<span class="c1">//define update even in native-mq-supporting browsers, to avoid errors</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">	<span class="nx">respond</span><span class="p">.</span><span class="nx">update</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){};</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">	<span class="c1">//define ajax obj</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">	<span class="kd">var</span> <span class="nx">requestQueue</span> <span class="o">=</span> <span class="p">[],</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">		<span class="nx">xmlHttp</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">			<span class="kd">var</span> <span class="nx">xmlhttpmethod</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">			<span class="k">try</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">				<span class="nx">xmlhttpmethod</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">w</span><span class="p">.</span><span class="nx">XMLHttpRequest</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">			<span class="k">catch</span><span class="p">(</span> <span class="nx">e</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">				<span class="nx">xmlhttpmethod</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">w</span><span class="p">.</span><span class="nx">ActiveXObject</span><span class="p">(</span> <span class="s2">&quot;Microsoft.XMLHTTP&quot;</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">			<span class="k">return</span> <span class="kd">function</span><span class="p">(){</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">				<span class="k">return</span> <span class="nx">xmlhttpmethod</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">			<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">		<span class="p">})(),</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">		<span class="c1">//tweaked Ajax functions from Quirksmode</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">		<span class="nx">ajax</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">callback</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">			<span class="kd">var</span> <span class="nx">req</span> <span class="o">=</span> <span class="nx">xmlHttp</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">req</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">				<span class="k">return</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">			<span class="nx">req</span><span class="p">.</span><span class="nx">open</span><span class="p">(</span> <span class="s2">&quot;GET&quot;</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="kc">true</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">			<span class="nx">req</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">				<span class="k">if</span> <span class="p">(</span> <span class="nx">req</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">!==</span> <span class="mi">4</span> <span class="o">||</span> <span class="nx">req</span><span class="p">.</span><span class="nx">status</span> <span class="o">!==</span> <span class="mi">200</span> <span class="o">&amp;&amp;</span> <span class="nx">req</span><span class="p">.</span><span class="nx">status</span> <span class="o">!==</span> <span class="mi">304</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">					<span class="k">return</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">				<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">				<span class="nx">callback</span><span class="p">(</span> <span class="nx">req</span><span class="p">.</span><span class="nx">responseText</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">			<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">			<span class="k">if</span> <span class="p">(</span> <span class="nx">req</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">===</span> <span class="mi">4</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">				<span class="k">return</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">			<span class="nx">req</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span> <span class="kc">null</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">		<span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">		<span class="nx">isUnsupportedMediaQuery</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">query</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">			<span class="k">return</span> <span class="nx">query</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">minmaxwh</span><span class="p">,</span> <span class="s1">&#39;&#39;</span> <span class="p">).</span><span class="nx">match</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">other</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">		<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">	<span class="c1">//expose for testing</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">	<span class="nx">respond</span><span class="p">.</span><span class="nx">ajax</span> <span class="o">=</span> <span class="nx">ajax</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">	<span class="nx">respond</span><span class="p">.</span><span class="nx">queue</span> <span class="o">=</span> <span class="nx">requestQueue</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">	<span class="nx">respond</span><span class="p">.</span><span class="nx">unsupportedmq</span> <span class="o">=</span> <span class="nx">isUnsupportedMediaQuery</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">	<span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">		<span class="nx">media</span><span class="o">:</span> <span class="sr">/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">		<span class="nx">keyframes</span><span class="o">:</span> <span class="sr">/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">		<span class="nx">comments</span><span class="o">:</span> <span class="sr">/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">		<span class="nx">urls</span><span class="o">:</span> <span class="sr">/(url\()[&#39;&quot;]?([^\/\)&#39;&quot;][^:\)&#39;&quot;]+)[&#39;&quot;]?(\))/g</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">		<span class="nx">findStyles</span><span class="o">:</span> <span class="sr">/@media *([^\{]+)\{([\S\s]+?)$/</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">		<span class="nx">only</span><span class="o">:</span> <span class="sr">/(only\s+)?([a-zA-Z]+)\s?/</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">		<span class="nx">minw</span><span class="o">:</span> <span class="sr">/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">		<span class="nx">maxw</span><span class="o">:</span> <span class="sr">/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">		<span class="nx">minmaxwh</span><span class="o">:</span> <span class="sr">/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">		<span class="nx">other</span><span class="o">:</span> <span class="sr">/\([^\)]*\)/g</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">	<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">	<span class="c1">//expose media query support flag for external use</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">	<span class="nx">respond</span><span class="p">.</span><span class="nx">mediaQueriesSupported</span> <span class="o">=</span> <span class="nx">w</span><span class="p">.</span><span class="nx">matchMedia</span> <span class="o">&amp;&amp;</span> <span class="nx">w</span><span class="p">.</span><span class="nx">matchMedia</span><span class="p">(</span> <span class="s2">&quot;only all&quot;</span> <span class="p">)</span> <span class="o">!==</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">w</span><span class="p">.</span><span class="nx">matchMedia</span><span class="p">(</span> <span class="s2">&quot;only all&quot;</span> <span class="p">).</span><span class="nx">matches</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">	<span class="c1">//if media queries are supported, exit here</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">	<span class="k">if</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">mediaQueriesSupported</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">		<span class="k">return</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">	<span class="c1">//define vars</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">	<span class="kd">var</span> <span class="nx">doc</span> <span class="o">=</span> <span class="nx">w</span><span class="p">.</span><span class="nb">document</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">		<span class="nx">docElem</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">		<span class="nx">mediastyles</span> <span class="o">=</span> <span class="p">[],</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">		<span class="nx">rules</span> <span class="o">=</span> <span class="p">[],</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">		<span class="nx">appendedEls</span> <span class="o">=</span> <span class="p">[],</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">		<span class="nx">parsedSheets</span> <span class="o">=</span> <span class="p">{},</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">		<span class="nx">resizeThrottle</span> <span class="o">=</span> <span class="mi">30</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">		<span class="nx">head</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span> <span class="s2">&quot;head&quot;</span> <span class="p">)[</span><span class="mi">0</span><span class="p">]</span> <span class="o">||</span> <span class="nx">docElem</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">		<span class="nx">base</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span> <span class="s2">&quot;base&quot;</span> <span class="p">)[</span><span class="mi">0</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">		<span class="nx">links</span> <span class="o">=</span> <span class="nx">head</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span> <span class="s2">&quot;link&quot;</span> <span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">		<span class="nx">lastCall</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">		<span class="nx">resizeDefer</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">		<span class="c1">//cached container for 1em value, populated the first time it&#39;s needed</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">		<span class="nx">eminpx</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">		<span class="c1">// returns the value of 1em in pixels</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">		<span class="nx">getEmValue</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">			<span class="kd">var</span> <span class="nx">ret</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">				<span class="nx">div</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">				<span class="nx">body</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">body</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">				<span class="nx">originalHTMLFontSize</span> <span class="o">=</span> <span class="nx">docElem</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">				<span class="nx">originalBodyFontSize</span> <span class="o">=</span> <span class="nx">body</span> <span class="o">&amp;&amp;</span> <span class="nx">body</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">				<span class="nx">fakeUsed</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">			<span class="nx">div</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">cssText</span> <span class="o">=</span> <span class="s2">&quot;position:absolute;font-size:1em;width:1em&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">			<span class="k">if</span><span class="p">(</span> <span class="o">!</span><span class="nx">body</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">				<span class="nx">body</span> <span class="o">=</span> <span class="nx">fakeUsed</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span> <span class="s2">&quot;body&quot;</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">				<span class="nx">body</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">background</span> <span class="o">=</span> <span class="s2">&quot;none&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">			<span class="c1">// 1em in a media query is the value of the default font size of the browser</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">			<span class="c1">// reset docElem and body to ensure the correct value is returned</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">			<span class="nx">docElem</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span> <span class="o">=</span> <span class="s2">&quot;100%&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">			<span class="nx">body</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span> <span class="o">=</span> <span class="s2">&quot;100%&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">			<span class="nx">body</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span> <span class="nx">div</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">			<span class="k">if</span><span class="p">(</span> <span class="nx">fakeUsed</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">				<span class="nx">docElem</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span> <span class="nx">body</span><span class="p">,</span> <span class="nx">docElem</span><span class="p">.</span><span class="nx">firstChild</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">			<span class="nx">ret</span> <span class="o">=</span> <span class="nx">div</span><span class="p">.</span><span class="nx">offsetWidth</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">			<span class="k">if</span><span class="p">(</span> <span class="nx">fakeUsed</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">				<span class="nx">docElem</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span> <span class="nx">body</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">			<span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">				<span class="nx">body</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span> <span class="nx">div</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">			<span class="c1">// restore the original values</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">			<span class="nx">docElem</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span> <span class="o">=</span> <span class="nx">originalHTMLFontSize</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">			<span class="k">if</span><span class="p">(</span> <span class="nx">originalBodyFontSize</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">				<span class="nx">body</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span> <span class="o">=</span> <span class="nx">originalBodyFontSize</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">			<span class="c1">//also update eminpx before returning</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">			<span class="nx">ret</span> <span class="o">=</span> <span class="nx">eminpx</span> <span class="o">=</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">ret</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">			<span class="k">return</span> <span class="nx">ret</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">		<span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">		<span class="c1">//enable/disable styles</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">		<span class="nx">applyMedia</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">fromResize</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">			<span class="kd">var</span> <span class="nx">name</span> <span class="o">=</span> <span class="s2">&quot;clientWidth&quot;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">				<span class="nx">docElemProp</span> <span class="o">=</span> <span class="nx">docElem</span><span class="p">[</span> <span class="nx">name</span> <span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">				<span class="nx">currWidth</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">compatMode</span> <span class="o">===</span> <span class="s2">&quot;CSS1Compat&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">docElemProp</span> <span class="o">||</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">body</span><span class="p">[</span> <span class="nx">name</span> <span class="p">]</span> <span class="o">||</span> <span class="nx">docElemProp</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">				<span class="nx">styleBlocks</span>	<span class="o">=</span> <span class="p">{},</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">				<span class="nx">lastLink</span> <span class="o">=</span> <span class="nx">links</span><span class="p">[</span> <span class="nx">links</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span> <span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">				<span class="nx">now</span> <span class="o">=</span> <span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">()).</span><span class="nx">getTime</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">			<span class="c1">//throttle resize calls</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">			<span class="k">if</span><span class="p">(</span> <span class="nx">fromResize</span> <span class="o">&amp;&amp;</span> <span class="nx">lastCall</span> <span class="o">&amp;&amp;</span> <span class="nx">now</span> <span class="o">-</span> <span class="nx">lastCall</span> <span class="o">&lt;</span> <span class="nx">resizeThrottle</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">				<span class="nx">w</span><span class="p">.</span><span class="nx">clearTimeout</span><span class="p">(</span> <span class="nx">resizeDefer</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">				<span class="nx">resizeDefer</span> <span class="o">=</span> <span class="nx">w</span><span class="p">.</span><span class="nx">setTimeout</span><span class="p">(</span> <span class="nx">applyMedia</span><span class="p">,</span> <span class="nx">resizeThrottle</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">				<span class="k">return</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">			<span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">				<span class="nx">lastCall</span> <span class="o">=</span> <span class="nx">now</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">			<span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">i</span> <span class="k">in</span> <span class="nx">mediastyles</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">				<span class="k">if</span><span class="p">(</span> <span class="nx">mediastyles</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span> <span class="nx">i</span> <span class="p">)</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">					<span class="kd">var</span> <span class="nx">thisstyle</span> <span class="o">=</span> <span class="nx">mediastyles</span><span class="p">[</span> <span class="nx">i</span> <span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">						<span class="nx">min</span> <span class="o">=</span> <span class="nx">thisstyle</span><span class="p">.</span><span class="nx">minw</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">						<span class="nx">max</span> <span class="o">=</span> <span class="nx">thisstyle</span><span class="p">.</span><span class="nx">maxw</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">						<span class="nx">minnull</span> <span class="o">=</span> <span class="nx">min</span> <span class="o">===</span> <span class="kc">null</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">						<span class="nx">maxnull</span> <span class="o">=</span> <span class="nx">max</span> <span class="o">===</span> <span class="kc">null</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">						<span class="nx">em</span> <span class="o">=</span> <span class="s2">&quot;em&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">					<span class="k">if</span><span class="p">(</span> <span class="o">!!</span><span class="nx">min</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">						<span class="nx">min</span> <span class="o">=</span> <span class="nb">parseFloat</span><span class="p">(</span> <span class="nx">min</span> <span class="p">)</span> <span class="o">*</span> <span class="p">(</span> <span class="nx">min</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span> <span class="nx">em</span> <span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span> <span class="o">?</span> <span class="p">(</span> <span class="nx">eminpx</span> <span class="o">||</span> <span class="nx">getEmValue</span><span class="p">()</span> <span class="p">)</span> <span class="o">:</span> <span class="mi">1</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">					<span class="k">if</span><span class="p">(</span> <span class="o">!!</span><span class="nx">max</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">						<span class="nx">max</span> <span class="o">=</span> <span class="nb">parseFloat</span><span class="p">(</span> <span class="nx">max</span> <span class="p">)</span> <span class="o">*</span> <span class="p">(</span> <span class="nx">max</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span> <span class="nx">em</span> <span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span> <span class="o">?</span> <span class="p">(</span> <span class="nx">eminpx</span> <span class="o">||</span> <span class="nx">getEmValue</span><span class="p">()</span> <span class="p">)</span> <span class="o">:</span> <span class="mi">1</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">					<span class="c1">// if there&#39;s no media query at all (the () part), or min or max is not null, and if either is present, they&#39;re true</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">					<span class="k">if</span><span class="p">(</span> <span class="o">!</span><span class="nx">thisstyle</span><span class="p">.</span><span class="nx">hasquery</span> <span class="o">||</span> <span class="p">(</span> <span class="o">!</span><span class="nx">minnull</span> <span class="o">||</span> <span class="o">!</span><span class="nx">maxnull</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">minnull</span> <span class="o">||</span> <span class="nx">currWidth</span> <span class="o">&gt;=</span> <span class="nx">min</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">maxnull</span> <span class="o">||</span> <span class="nx">currWidth</span> <span class="o">&lt;=</span> <span class="nx">max</span> <span class="p">)</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">						<span class="k">if</span><span class="p">(</span> <span class="o">!</span><span class="nx">styleBlocks</span><span class="p">[</span> <span class="nx">thisstyle</span><span class="p">.</span><span class="nx">media</span> <span class="p">]</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">							<span class="nx">styleBlocks</span><span class="p">[</span> <span class="nx">thisstyle</span><span class="p">.</span><span class="nx">media</span> <span class="p">]</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">						<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">						<span class="nx">styleBlocks</span><span class="p">[</span> <span class="nx">thisstyle</span><span class="p">.</span><span class="nx">media</span> <span class="p">].</span><span class="nx">push</span><span class="p">(</span> <span class="nx">rules</span><span class="p">[</span> <span class="nx">thisstyle</span><span class="p">.</span><span class="nx">rules</span> <span class="p">]</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">				<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">			<span class="c1">//remove any existing respond style element(s)</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">			<span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">j</span> <span class="k">in</span> <span class="nx">appendedEls</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">				<span class="k">if</span><span class="p">(</span> <span class="nx">appendedEls</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span> <span class="nx">j</span> <span class="p">)</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">					<span class="k">if</span><span class="p">(</span> <span class="nx">appendedEls</span><span class="p">[</span> <span class="nx">j</span> <span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">appendedEls</span><span class="p">[</span> <span class="nx">j</span> <span class="p">].</span><span class="nx">parentNode</span> <span class="o">===</span> <span class="nx">head</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">						<span class="nx">head</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span> <span class="nx">appendedEls</span><span class="p">[</span> <span class="nx">j</span> <span class="p">]</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">				<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">			<span class="nx">appendedEls</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">			<span class="c1">//inject active styles, grouped by media type</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">			<span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">k</span> <span class="k">in</span> <span class="nx">styleBlocks</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">				<span class="k">if</span><span class="p">(</span> <span class="nx">styleBlocks</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span> <span class="nx">k</span> <span class="p">)</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">					<span class="kd">var</span> <span class="nx">ss</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span> <span class="s2">&quot;style&quot;</span> <span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">						<span class="nx">css</span> <span class="o">=</span> <span class="nx">styleBlocks</span><span class="p">[</span> <span class="nx">k</span> <span class="p">].</span><span class="nx">join</span><span class="p">(</span> <span class="s2">&quot;\n&quot;</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">					<span class="nx">ss</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s2">&quot;text/css&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">					<span class="nx">ss</span><span class="p">.</span><span class="nx">media</span> <span class="o">=</span> <span class="nx">k</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">					<span class="c1">//originally, ss was appended to a documentFragment and sheets were appended in bulk.</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">					<span class="c1">//this caused crashes in IE in a number of circumstances, such as when the HTML element had a bg image set, so appending beforehand seems best. Thanks to @dvelyk for the initial research on this one!</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">					<span class="nx">head</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span> <span class="nx">ss</span><span class="p">,</span> <span class="nx">lastLink</span><span class="p">.</span><span class="nx">nextSibling</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">					<span class="k">if</span> <span class="p">(</span> <span class="nx">ss</span><span class="p">.</span><span class="nx">styleSheet</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">						<span class="nx">ss</span><span class="p">.</span><span class="nx">styleSheet</span><span class="p">.</span><span class="nx">cssText</span> <span class="o">=</span> <span class="nx">css</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">					<span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">						<span class="nx">ss</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">createTextNode</span><span class="p">(</span> <span class="nx">css</span> <span class="p">)</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">					<span class="c1">//push to appendedEls to track for later removal</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">					<span class="nx">appendedEls</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">ss</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">				<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">		<span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">		<span class="c1">//find media blocks in css text, convert to style blocks</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line">		<span class="nx">translate</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">styles</span><span class="p">,</span> <span class="nx">href</span><span class="p">,</span> <span class="nx">media</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line">			<span class="kd">var</span> <span class="nx">qs</span> <span class="o">=</span> <span class="nx">styles</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">comments</span><span class="p">,</span> <span class="s1">&#39;&#39;</span> <span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line">					<span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">keyframes</span><span class="p">,</span> <span class="s1">&#39;&#39;</span> <span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line">					<span class="p">.</span><span class="nx">match</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">media</span> <span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line">				<span class="nx">ql</span> <span class="o">=</span> <span class="nx">qs</span> <span class="o">&amp;&amp;</span> <span class="nx">qs</span><span class="p">.</span><span class="nx">length</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line">			<span class="c1">//try to get CSS path</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">			<span class="nx">href</span> <span class="o">=</span> <span class="nx">href</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">href</span><span class="p">.</span><span class="nx">lastIndexOf</span><span class="p">(</span> <span class="s2">&quot;/&quot;</span> <span class="p">)</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line">			<span class="kd">var</span> <span class="nx">repUrls</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">css</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">					<span class="k">return</span> <span class="nx">css</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">urls</span><span class="p">,</span> <span class="s2">&quot;$1&quot;</span> <span class="o">+</span> <span class="nx">href</span> <span class="o">+</span> <span class="s2">&quot;$2$3&quot;</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">				<span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code js-file-line">				<span class="nx">useMedia</span> <span class="o">=</span> <span class="o">!</span><span class="nx">ql</span> <span class="o">&amp;&amp;</span> <span class="nx">media</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code js-file-line">			<span class="c1">//if path exists, tack on trailing slash</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code js-file-line">			<span class="k">if</span><span class="p">(</span> <span class="nx">href</span><span class="p">.</span><span class="nx">length</span> <span class="p">){</span> <span class="nx">href</span> <span class="o">+=</span> <span class="s2">&quot;/&quot;</span><span class="p">;</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code js-file-line">			<span class="c1">//if no internal queries exist, but media attr does, use that</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code js-file-line">			<span class="c1">//note: this currently lacks support for situations where a media attr is specified on a link AND</span></td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code js-file-line">				<span class="c1">//its associated stylesheet has internal CSS media queries.</span></td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code js-file-line">				<span class="c1">//In those cases, the media attribute will currently be ignored.</span></td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code js-file-line">			<span class="k">if</span><span class="p">(</span> <span class="nx">useMedia</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code js-file-line">				<span class="nx">ql</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code js-file-line">			<span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">ql</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code js-file-line">				<span class="kd">var</span> <span class="nx">fullq</span><span class="p">,</span> <span class="nx">thisq</span><span class="p">,</span> <span class="nx">eachq</span><span class="p">,</span> <span class="nx">eql</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code js-file-line">				<span class="c1">//media attr</span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code js-file-line">				<span class="k">if</span><span class="p">(</span> <span class="nx">useMedia</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code js-file-line">					<span class="nx">fullq</span> <span class="o">=</span> <span class="nx">media</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code js-file-line">					<span class="nx">rules</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">repUrls</span><span class="p">(</span> <span class="nx">styles</span> <span class="p">)</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code js-file-line">				<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code js-file-line">				<span class="c1">//parse for styles</span></td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code js-file-line">				<span class="k">else</span><span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code js-file-line">					<span class="nx">fullq</span> <span class="o">=</span> <span class="nx">qs</span><span class="p">[</span> <span class="nx">i</span> <span class="p">].</span><span class="nx">match</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">findStyles</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code js-file-line">					<span class="nx">rules</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$2</span> <span class="o">&amp;&amp;</span> <span class="nx">repUrls</span><span class="p">(</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$2</span> <span class="p">)</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code js-file-line">				<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code js-file-line">				<span class="nx">eachq</span> <span class="o">=</span> <span class="nx">fullq</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span> <span class="s2">&quot;,&quot;</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code js-file-line">				<span class="nx">eql</span> <span class="o">=</span> <span class="nx">eachq</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code js-file-line">				<span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">eql</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code js-file-line">					<span class="nx">thisq</span> <span class="o">=</span> <span class="nx">eachq</span><span class="p">[</span> <span class="nx">j</span> <span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code js-file-line">					<span class="k">if</span><span class="p">(</span> <span class="nx">isUnsupportedMediaQuery</span><span class="p">(</span> <span class="nx">thisq</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code js-file-line">						<span class="k">continue</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code js-file-line">					<span class="nx">mediastyles</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code js-file-line">						<span class="nx">media</span> <span class="o">:</span> <span class="nx">thisq</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span> <span class="s2">&quot;(&quot;</span> <span class="p">)[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">match</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">only</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$2</span> <span class="o">||</span> <span class="s2">&quot;all&quot;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code js-file-line">						<span class="nx">rules</span> <span class="o">:</span> <span class="nx">rules</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code js-file-line">						<span class="nx">hasquery</span> <span class="o">:</span> <span class="nx">thisq</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;(&quot;</span><span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code js-file-line">						<span class="nx">minw</span> <span class="o">:</span> <span class="nx">thisq</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">minw</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nb">parseFloat</span><span class="p">(</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span> <span class="p">)</span> <span class="o">+</span> <span class="p">(</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$2</span> <span class="o">||</span> <span class="s2">&quot;&quot;</span> <span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code js-file-line">						<span class="nx">maxw</span> <span class="o">:</span> <span class="nx">thisq</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">maxw</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nb">parseFloat</span><span class="p">(</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span> <span class="p">)</span> <span class="o">+</span> <span class="p">(</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$2</span> <span class="o">||</span> <span class="s2">&quot;&quot;</span> <span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code js-file-line">					<span class="p">}</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code js-file-line">				<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code js-file-line">			<span class="nx">applyMedia</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code js-file-line">		<span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code js-file-line">		<span class="c1">//recurse through request queue, get css text</span></td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code js-file-line">		<span class="nx">makeRequests</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code js-file-line">			<span class="k">if</span><span class="p">(</span> <span class="nx">requestQueue</span><span class="p">.</span><span class="nx">length</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code js-file-line">				<span class="kd">var</span> <span class="nx">thisRequest</span> <span class="o">=</span> <span class="nx">requestQueue</span><span class="p">.</span><span class="nx">shift</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code js-file-line">				<span class="nx">ajax</span><span class="p">(</span> <span class="nx">thisRequest</span><span class="p">.</span><span class="nx">href</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">styles</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code js-file-line">					<span class="nx">translate</span><span class="p">(</span> <span class="nx">styles</span><span class="p">,</span> <span class="nx">thisRequest</span><span class="p">.</span><span class="nx">href</span><span class="p">,</span> <span class="nx">thisRequest</span><span class="p">.</span><span class="nx">media</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code js-file-line">					<span class="nx">parsedSheets</span><span class="p">[</span> <span class="nx">thisRequest</span><span class="p">.</span><span class="nx">href</span> <span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code js-file-line">					<span class="c1">// by wrapping recursive function call in setTimeout</span></td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code js-file-line">					<span class="c1">// we prevent &quot;Stack overflow&quot; error in IE7</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code js-file-line">					<span class="nx">w</span><span class="p">.</span><span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span> <span class="nx">makeRequests</span><span class="p">();</span> <span class="p">},</span><span class="mi">0</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code js-file-line">				<span class="p">}</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code js-file-line">		<span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code js-file-line">		<span class="c1">//loop stylesheets, send text content to translate</span></td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code js-file-line">		<span class="nx">ripCSS</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code js-file-line">			<span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">links</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code js-file-line">				<span class="kd">var</span> <span class="nx">sheet</span> <span class="o">=</span> <span class="nx">links</span><span class="p">[</span> <span class="nx">i</span> <span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code js-file-line">				<span class="nx">href</span> <span class="o">=</span> <span class="nx">sheet</span><span class="p">.</span><span class="nx">href</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code js-file-line">				<span class="nx">media</span> <span class="o">=</span> <span class="nx">sheet</span><span class="p">.</span><span class="nx">media</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code js-file-line">				<span class="nx">isCSS</span> <span class="o">=</span> <span class="nx">sheet</span><span class="p">.</span><span class="nx">rel</span> <span class="o">&amp;&amp;</span> <span class="nx">sheet</span><span class="p">.</span><span class="nx">rel</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">===</span> <span class="s2">&quot;stylesheet&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code js-file-line">				<span class="c1">//only links plz and prevent re-parsing</span></td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code js-file-line">				<span class="k">if</span><span class="p">(</span> <span class="o">!!</span><span class="nx">href</span> <span class="o">&amp;&amp;</span> <span class="nx">isCSS</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">parsedSheets</span><span class="p">[</span> <span class="nx">href</span> <span class="p">]</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code js-file-line">					<span class="c1">// selectivizr exposes css through the rawCssText expando</span></td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code js-file-line">					<span class="k">if</span> <span class="p">(</span><span class="nx">sheet</span><span class="p">.</span><span class="nx">styleSheet</span> <span class="o">&amp;&amp;</span> <span class="nx">sheet</span><span class="p">.</span><span class="nx">styleSheet</span><span class="p">.</span><span class="nx">rawCssText</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code js-file-line">						<span class="nx">translate</span><span class="p">(</span> <span class="nx">sheet</span><span class="p">.</span><span class="nx">styleSheet</span><span class="p">.</span><span class="nx">rawCssText</span><span class="p">,</span> <span class="nx">href</span><span class="p">,</span> <span class="nx">media</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code js-file-line">						<span class="nx">parsedSheets</span><span class="p">[</span> <span class="nx">href</span> <span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code js-file-line">					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code js-file-line">						<span class="k">if</span><span class="p">(</span> <span class="p">(</span><span class="o">!</span><span class="sr">/^([a-zA-Z:]*\/\/)/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span> <span class="nx">href</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">base</span><span class="p">)</span> <span class="o">||</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code js-file-line">							<span class="nx">href</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span><span class="p">,</span> <span class="s2">&quot;&quot;</span> <span class="p">).</span><span class="nx">split</span><span class="p">(</span> <span class="s2">&quot;/&quot;</span> <span class="p">)[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="nx">w</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">host</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code js-file-line">							<span class="c1">// IE7 doesn&#39;t handle urls that start with &#39;//&#39; for ajax request</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code js-file-line">							<span class="c1">// manually add in the protocol</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code js-file-line">							<span class="k">if</span> <span class="p">(</span> <span class="nx">href</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">2</span><span class="p">)</span> <span class="o">===</span> <span class="s2">&quot;//&quot;</span> <span class="p">)</span> <span class="p">{</span> <span class="nx">href</span> <span class="o">=</span> <span class="nx">w</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span> <span class="o">+</span> <span class="nx">href</span><span class="p">;</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code js-file-line">							<span class="nx">requestQueue</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code js-file-line">								<span class="nx">href</span><span class="o">:</span> <span class="nx">href</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code js-file-line">								<span class="nx">media</span><span class="o">:</span> <span class="nx">media</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code js-file-line">							<span class="p">}</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code js-file-line">						<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code js-file-line">				<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code js-file-line">			<span class="nx">makeRequests</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code js-file-line">		<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code js-file-line">	<span class="c1">//translate CSS</span></td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code js-file-line">	<span class="nx">ripCSS</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code js-file-line">	<span class="c1">//expose update for re-running respond later on</span></td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code js-file-line">	<span class="nx">respond</span><span class="p">.</span><span class="nx">update</span> <span class="o">=</span> <span class="nx">ripCSS</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code js-file-line">	<span class="c1">//expose getEmValue</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code js-file-line">	<span class="nx">respond</span><span class="p">.</span><span class="nx">getEmValue</span> <span class="o">=</span> <span class="nx">getEmValue</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code js-file-line">	<span class="c1">//adjust on resize</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code js-file-line">	<span class="kd">function</span> <span class="nx">callMedia</span><span class="p">(){</span></td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code js-file-line">		<span class="nx">applyMedia</span><span class="p">(</span> <span class="kc">true</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code js-file-line">	<span class="k">if</span><span class="p">(</span> <span class="nx">w</span><span class="p">.</span><span class="nx">addEventListener</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code js-file-line">		<span class="nx">w</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span> <span class="s2">&quot;resize&quot;</span><span class="p">,</span> <span class="nx">callMedia</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code js-file-line">	<span class="k">else</span> <span class="k">if</span><span class="p">(</span> <span class="nx">w</span><span class="p">.</span><span class="nx">attachEvent</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code js-file-line">		<span class="nx">w</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span> <span class="s2">&quot;onresize&quot;</span><span class="p">,</span> <span class="nx">callMedia</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code js-file-line"><span class="p">})(</span><span class="k">this</span><span class="p">);</span></td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.07379s from github-fe136-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-0c1b00f7935ae85624f5fc5d40d52d60febf92b4.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-ab56366a1dd41e1215ba885001f05ff731197d30.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

