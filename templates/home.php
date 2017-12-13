<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
    <head>
        <?php include('includes/head.php') ?>
        <link rel="canonical" href="http://snippets.reimagin8d.com">

        <style>
            body {
                padding-top: 50px;
                padding-bottom: 20px;
                background-color: #222;
            }
        </style>
    </head>
    <body class="mb-4">
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <?php include('includes/navbar.php') ?>

        <div class="container page-container text-center">
            <div class="btn-group mx-auto" data-toggle="buttons">
                <label class="btn btn-primary btn-brblue active">
                    <input id="conversion-btn"  type="radio" name="options" id="conversion" data-type="conversion" autocomplete="off" checked> Conversion
                </label>
                <label id="migration-btn" class="btn btn-primary btn-brblue">
                    <input type="radio" name="options" id="migration" data-type="migration" autocomplete="off"> Migration
                </label>
            </div>
        </div>

        <!-- CONVERSION CONTAINER -->
        <div id="conversion-container" class="container mt-4">

            <h4 class="lead text-white text-center my-5">Convert your code into snippets formatted for your code editor!</h4>
            <hr>
            <form id="code-form" class="row">

                <div class="col-sm">
                    <!-- Allow user to select From text editor -->
                    <div class="form-group">
                        <label for="code_editor" class="text-white">Editor</label>
                        <select id="code-editor" name="code_editor"  class="form-control custom-select" required>
                            <option value=""></option>
                            <option value="atom">Atom</option>
                            <option value="brackets">Brackets</option>
                            <option value="sublime" selected>Sublime Text</option>
                            <option value="visual_code">Visual Studio Code</option>
                        </select>
                    </div>

                    <!-- List of scopes to apply to snippet -->
                    <div class="form-group scope-select">
                        <label class="text-white" for="code_scope">Scope/Source</label>
                        <select id="code-scope" name="code_scope" class="form-control custom-select" required>
                            <option value=""></option>
                            <option value="source.actionscript.2">ActionScript: source.actionscript.2</option>
                            <option value="source.applescript">AppleScript: source.applescript</option>
                            <option value="source.asp">ASP: source.asp</option>
                            <option value="source.dosbatch">Batch FIle: source.dosbatch</option>
                            <option value="source.cs">C#: source.cs</option>
                            <option value="source.c++">C++: source.c++</option>
                            <option value="source.clojure">Clojure: source.clojure</option>
                            <option value="source.coffee">CoffeeScript: source.coffee</option>
                            <option value="source.css">CSS: source.css</option>
                            <option value="source.d">D: source.d</option>
                            <option value="source.diff">Diff: source.diff</option>
                            <option value="source.erlang">Erlang: source.erlang</option>
                            <option value="source.go">Go: source.go</option>
                            <option value="source.dot">GraphViz: source.dot</option>
                            <option value="source.groovy">Groovy: source.groovy</option>
                            <option value="source.haskell">Haskell: source.haskell</option>
                            <option value="text.html">HTML: text.html</option>
                            <option value="text.html.jsp">JSP: text.html.jsp</option>
                            <option value="source.java">Java: source.java</option>
                            <option value="source.java-props">Java Properties: source.java-props</option>
                            <option value="text.html.javadoc">Java Doc: text.html.javadoc</option>
                            <option value="source.json">JSON: source.json</option>
                            <option value="source.js" selected>Javascript: source.js</option>
                            <option value="source.bibtex">BibTex: source.bibtex</option>
                            <option value="text.log.latex">Latex Log: text.log.latex</option>
                            <option value="text.tex.latex.memoir">Latex Memoir: text.tex.latex.memoir</option>
                            <option value="text.tex.latex">Latex: text.tex.latex</option>
                            <option value="source.css.less">LESS: source.css.less</option>
                            <option value="text.tex">TeX: text.tex</option>
                            <option value="source.lisp">Lisp: source.lisp</option>
                            <option value="source.lua">Lua: source.lua</option>
                            <option value="source.makefile">MakeFile: source.makefile</option>
                            <option value="text.html.markdown">Markdown: text.html.markdown</option>
                            <option value="text.html.markdown.multimarkdown">Multi Markdown: text.html.markdown.multimarkdown</option>
                            <option value="source.matlab">Matlab: source.matlab</option>
                            <option value="source.objc">Objective-C: source.objc</option>
                            <option value="source.objc++">Objective-C++: source.objc++</option>
                            <option value="source.camlp4.ocaml">OCaml campl4: source.camlp4.ocaml</option>
                            <option value="source.ocaml">OCaml: source.ocaml</option>
                            <option value="source.ocamllex">OCamllex: source.ocamllex</option>
                            <option value="source.perl">Perl: source.perl</option>
                            <option value="source.php">PHP: source.php</option>
                            <option value="source.regexp.python">Regular Expression(python): source.regexp.python</option>
                            <option value="source.python">Python: source.python</option>
                            <option value="source.r-console">R Console: source.r-console</option>
                            <option value="source.r">R: source.r</option>
                            <option value="source.ruby.rails">Ruby on Rails: source.ruby.rails</option>
                            <option value="text.haml">Ruby HAML: text.haml</option>
                            <option value="source.sql.ruby">SQL(Ruby): source.sql.ruby</option>
                            <option value="source.regexp">Regular Expression: source.regexp</option>
                            <option value="text.restructuredtext">RestructuredText: text.restructuredtext</option>
                            <option value="source.ruby">Ruby: source.ruby</option>
                            <option value="source.sass">SASS: source.sass</option>
                            <option value="source.scala">Scala: source.scala</option>
                            <option value="source.shell">Shell Script: source.shell</option>
                            <option value="source.sql">SQL: source.sql</option>
                            <option value="source.stylus">Stylus: source.stylus</option>
                            <option value="source.tcl">TCL: source.tcl</option>
                            <option value="text.html.tcl">HTML(TCL): text.html.tcl</option>
                            <option value="text.plain">Plain text: text.plain</option>
                            <option value="text.html.textile">Textile: text.html.textile</option>
                            <option value="text.xml">XML: text.xml</option>
                            <option value="text.xml.xsl">XSL: text.xml.xsl</option>
                            <option value="source.yaml">YAML: source.yaml</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="code_description" class="text-white">Description</label>
                        <textarea id="code-description" name="code_description" rows="2" class="text-yellow" required></textarea>
                    </div>

                    <div class="form-group">
                        <label for="code_trigger" class="text-white">Trigger <em>(a keyword to trigger the snippet)</em></label>
                        <input type="text" id="code-trigger" name="code_trigger" class="text-yellow custom-input" required>
                    </div>

                    <!-- Allow user to select To text editor -->
                    <div id="code-content-fg" class="form-group">
                        <label for="code_content" class="text-white">Code</label>
                        <textarea id="code-content" name="code_content" rows="5" class="text-yellow" required></textarea>
                    </div>
                </div>

                <div class='col-sm'>
                    <!-- Allow user to select To text editor -->
                    <div class="form-group">
                        <label for="snippet_output" class="title text-green">snippet</label>
                        <textarea id="snippet-output" name="snippet_output" rows="20" class="text-green"></textarea>
                    </div>
                </div>

                <div class="col-sm-12">
                    <!-- Submit button -->
                    <button type="submit" class="btn btn-success btn-block">Convert</button>
                </div>
            </form>
        </div>


        <!-- MIGRATION CONTAINER -->
        <div id="migration-container" class="container mt-4r">

            <h4 class="lead text-white text-center my-5">Migrate code snippets from your old code editor to your new code editor!</h4>
            <hr>
            <form id="converter-form" class="row">

                <div class="col-sm">
                    <!-- Allow user to select From text editor -->
                    <div class="form-group">
                        <label for="convert_from" class="title text-green">from</label>
                        <select id="convert-from" class="form-control custom-select" name="convert_from" required>
                            <option value=""></option>
                            <option value="atom">Atom</option>
                            <option value="brackets">Brackets</option>
                            <option value="sublime" selected>Sublime Text</option>
                            <option value="visual_code">Visual Studio Code</option>
                        </select>
                    </div>

                    <!-- List of scopes to apply to snippet -->
                    <div class="form-group scope-select">
                        <label class="text-white" for="scope_from">Scope/Source</label>
                        <select class="form-control custom-select" name="scope_from">
                            <option value=""></option>
                            <option value="source.actionscript.2">ActionScript: source.actionscript.2</option>
                            <option value="source.applescript">AppleScript: source.applescript</option>
                            <option value="source.asp">ASP: source.asp</option>
                            <option value="source.dosbatch">Batch FIle: source.dosbatch</option>
                            <option value="source.cs">C#: source.cs</option>
                            <option value="source.c++">C++: source.c++</option>
                            <option value="source.clojure">Clojure: source.clojure</option>
                            <option value="source.coffee">CoffeeScript: source.coffee</option>
                            <option value="source.css">CSS: source.css</option>
                            <option value="source.d">D: source.d</option>
                            <option value="source.diff">Diff: source.diff</option>
                            <option value="source.erlang">Erlang: source.erlang</option>
                            <option value="source.go">Go: source.go</option>
                            <option value="source.dot">GraphViz: source.dot</option>
                            <option value="source.groovy">Groovy: source.groovy</option>
                            <option value="source.haskell">Haskell: source.haskell</option>
                            <option value="text.html">HTML: text.html</option>
                            <option value="text.html.jsp">JSP: text.html.jsp</option>
                            <option value="source.java">Java: source.java</option>
                            <option value="source.java-props">Java Properties: source.java-props</option>
                            <option value="text.html.javadoc">Java Doc: text.html.javadoc</option>
                            <option value="source.json">JSON: source.json</option>
                            <option value="source.js">Javascript: source.js</option>
                            <option value="source.bibtex">BibTex: source.bibtex</option>
                            <option value="text.log.latex">Latex Log: text.log.latex</option>
                            <option value="text.tex.latex.memoir">Latex Memoir: text.tex.latex.memoir</option>
                            <option value="text.tex.latex">Latex: text.tex.latex</option>
                            <option value="source.css.less">LESS: source.css.less</option>
                            <option value="text.tex">TeX: text.tex</option>
                            <option value="source.lisp">Lisp: source.lisp</option>
                            <option value="source.lua">Lua: source.lua</option>
                            <option value="source.makefile">MakeFile: source.makefile</option>
                            <option value="text.html.markdown">Markdown: text.html.markdown</option>
                            <option value="text.html.markdown.multimarkdown">Multi Markdown: text.html.markdown.multimarkdown</option>
                            <option value="source.matlab">Matlab: source.matlab</option>
                            <option value="source.objc">Objective-C: source.objc</option>
                            <option value="source.objc++">Objective-C++: source.objc++</option>
                            <option value="source.camlp4.ocaml">OCaml campl4: source.camlp4.ocaml</option>
                            <option value="source.ocaml">OCaml: source.ocaml</option>
                            <option value="source.ocamllex">OCamllex: source.ocamllex</option>
                            <option value="source.perl">Perl: source.perl</option>
                            <option value="source.php">PHP: source.php</option>
                            <option value="source.regexp.python">Regular Expression(python): source.regexp.python</option>
                            <option value="source.python">Python: source.python</option>
                            <option value="source.r-console">R Console: source.r-console</option>
                            <option value="source.r">R: source.r</option>
                            <option value="source.ruby.rails">Ruby on Rails: source.ruby.rails</option>
                            <option value="text.haml">Ruby HAML: text.haml</option>
                            <option value="source.sql.ruby">SQL(Ruby): source.sql.ruby</option>
                            <option value="source.regexp">Regular Expression: source.regexp</option>
                            <option value="text.restructuredtext">RestructuredText: text.restructuredtext</option>
                            <option value="source.ruby">Ruby: source.ruby</option>
                            <option value="source.sass">SASS: source.sass</option>
                            <option value="source.scala">Scala: source.scala</option>
                            <option value="source.shell">Shell Script: source.shell</option>
                            <option value="source.sql">SQL: source.sql</option>
                            <option value="source.stylus">Stylus: source.stylus</option>
                            <option value="source.tcl">TCL: source.tcl</option>
                            <option value="text.html.tcl">HTML(TCL): text.html.tcl</option>
                            <option value="text.plain">Plain text: text.plain</option>
                            <option value="text.html.textile">Textile: text.html.textile</option>
                            <option value="text.xml">XML: text.xml</option>
                            <option value="text.xml.xsl">XSL: text.xml.xsl</option>
                            <option value="source.yaml">YAML: source.yaml</option>
                        </select>
                    </div>


                    <!-- Allow user to select To text editor -->
                    <div id="from-fg" class="form-group">

                        <textarea id="convert-from-text" name="convert_from_text" rows="10" aria-describedby="from-error" class="text-green"><snippet>
	<content><![CDATA[
console.log('$1: ', $2);
]]></content>
	<tabTrigger>log</tabTrigger>
	<scope>source.js</scope>
	<description>Log to the Console</description>
</snippet></textarea>
                    <span id="from-error" class="error-block text-red">Invalid format for selected editor. <a id="error-link" class="text-ltgrey hover-red" href="/details/" target="_blank"><u>For more info on formatting.</u></a></span></div>
                </div>

                <div class='col-sm'>
                    <!-- Allow user to select To text editor -->
                    <div id="from-fg" class="form-group">
                        <label for="convert_to" class="text-yellow title">to</label>
                        <select id="convert-to" class="form-control custom-select" name="convert_to" required>
                            <option value=""></option>
                            <option value="atom">Atom</option>
                            <option value="brackets">Brackets</option>
                            <option value="sublime" disabled>Sublime Text</option>
                            <option value="visual_code">Visual Studio Code</option>
                        </select>
                    </div>

                    <!-- Allow user to select To text editor -->
                    <div class="form-group">
                        <textarea name="convert_to_text" rows="10" class="text-yellow"></textarea>
                    </div>
                </div>

                <div class="col-sm-12">
                    <!-- Submit button -->
                    <button id="submit-btn" type="submit" class="btn btn-success btn-block">Convert</button>
                </div>
            </form>

        </div> <!-- /container -->

        <?php include('includes/footer.php') ?>
        <!-- <div class="share-overlay">
            <div class="container page-container">
                <div class="row">
                    <div class='col-sm-4'>
                        <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="large" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a></div>
                    </div>
                    <div class='col-sm-4'>
                        <a class="twitter-share-button"
                        href="https://twitter.com/intent/tweet?text=Convert%20your%20code%20editor%20snippets%20with%20Snippets%20by%20reimagin8d"
                        target="_blank"
                        data-size="large">
                      Tweet</a>
                    </div>

                    <div class='col-sm-4'>
                        <a href="#">Pintrest</a>
                    </div>
                </div>

                <div class="row">
                    <div class='col-xs-12' style="margin-top: 15px">
                        <a class="dismiss-share btn btn-success" href="#">Close</a>
                    </div>
                </div>
            </div>
        </div> -->

        <!-- <script src="js/vendor/jquery-1.11.2.min.js"></script> -->

        <!-- <script src="js/vendor/bootstrap.min.js"></script> -->
        <?php include('includes/scripts.php') ?>

        <script>
            $('#nav-home').addClass('active');

            $('input[name="options"]').on('change', function()
            {
                //console.log('HA radio changed! ', $(this).attr('data-type'));

                switch ($(this).attr('data-type'))
                {
                    case 'conversion':
                        //console.log('conversion clicked! ', $(this).attr('name'));
                        $('#conversion-container').toggle();
                        $('#migration-container').toggle();
                        break;

                    case 'migration':
                        //console.log('migration clicked! ', $(this).attr('name'));
                        $('#conversion-container').toggle();
                        $('#migration-container').toggle();
                        break;
                }
            });

            $('#code-form').submit(function(event)
            {
                event.preventDefault();

                //console.log('code-form submitted!');

                var editor = $('#code-editor').val();
                var content = $('#code-content').val();
                var trigger = $('#code-trigger').val();
                var scope = $('#code-scope').val();
                var desc = $('#code-description').val();

                //console.log('editor: ' + editor + ' scope: ' + scope + ' desc: ' + desc + ' trigger: ' + trigger + ' content: ' + content);

                switch (editor)
                {
                    case 'atom':
                        populateToText('#snippet-output', createAtom(content, trigger, scope, desc));
                        break;
                    case 'brackets':
                        populateToText('#snippet-output', createBrackets(content, trigger, scope, desc));
                        break;
                    case 'sublime':
                        populateToText('#snippet-output', createSublime(content, trigger, scope, desc));
                        break;
                    case 'visual_code':
                        populateToText('#snippet-output', createVisualCode(content, trigger, scope, desc));
                        break;
                    default:

                }
            });
        </script>

        <!-- Facebook share button script -->
        <!-- <div id="fb-root"></div> -->
        <!-- <script>(function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=228144774384276";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script> -->
    </body>
</html>
