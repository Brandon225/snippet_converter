<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
    <head>
        <?php include('includes/head.php') ?>

        <style>
            body
            {
                padding-top: 50px;
                padding-bottom: 20px;
            }
        </style>

    </head>

    <body data-spy="scroll" data-target="#sidebar-content">

        <?php include('includes/navbar.php') ?>

        <div id="details-container" class="container page-container">
            <!-- <h1>Details</h1> -->
            <div class="row">
                <div id="details-content" class="col-md-8">
                    <div id="atom" class="card mb-5">
                        <div class="card-body">
                            <h2 class="card-title">Atom</h2>
                            <p class="card-subtitle mb-2 text-muted">Atom snippets should be formatted using CoffeeScript.</p>
                            <p class="card-text">There is a text file in your ~/.atom directory called snippets.cson that contains all your custom snippets that are loaded when you launch Atom. You can also easily open up that file by selecting the Atom > Snippets menu.</p>
                            <div class="card mb-3">
                                <div class="card-header">Example</div>
                                <div class="card-body">
                                    <pre class="text-green">
'.source.js':
    'console.log':
        'prefix': 'log'
        'body': 'console.log($1);$2'</pre>
                                </div>
                            </div>
                            <a href="http://flight-manual.atom.io/using-atom/sections/snippets/" target="_blank" class="btn btn-primary">more info</a>
                        </div>
                    </div>

                    <div id="brackets" class="card mb-5">
                        <div class="card-body">
                            <h2 class="card-title">Brackets</h2>
                            <p class="card-subtitle mb-2 text-muted">This is formatting information for the Brackets <a class="text-yellow hover-ltgrey"href="https://github.com/jrowny/brackets-snippets" target="_blank">Snippets</a> extension.</p>
                            <p class="card-text">In Brackets each .json file corresponds to a set of snippets. You can use whatever names you would like, but it makes sense to follow Jonathan’s lead and name your files based on the category of snippet used. If you open up one of the files you can see it is a JSON-structured array of objects.</p>

                            <div class="card mb-3">
                                <div class="card-header">Example</div>
                                <div class="card-body">
                                    <pre class="text-green">
[
{
    "name":"Log to the Console",
    "trigger":"log",
    "usage":"source.js",
    "description":"Log to the Console",
    "template":"\nconsole.log('$1: ', $2);\n"
}
]</pre>
                                </div>
                            </div>

                            <a href="http://blog.brackets.io/2012/12/19/snippets-brackets-extension/?lang=en" target="_blank" class="btn btn-primary">more info</a>
                        </div>
                    </div>

                    <div id="sublime" class="card mb-5">
                        <div class="card-body">
                            <h2 class="card-title">Sublime Text</h2>
                            <p class="card-text">To create a new snippet, select Tools | New Snippet…. Sublime Text will present you with an skeleton for a new snippet.</p>
                            <p class="card-text">Snippets can be stored under any package’s folder, but to keep it simple while you’re learning, you can save them to your Packages/User folder.</p>
                            <div class="card mb-3">
                                <div class="card-header">Example</div>
                                <div class="card-body">
                                    <pre class="text-green">
&lt;snippet&gt;
    &lt;content&gt;&lt;![CDATA[console.log('$1: ', $2)]]&gt;&lt;/content&gt;
    &lt;tabTrigger&gt;log&lt;/tabTrigger&gt;
    &lt;scope&gt;source.js&lt;/scope&gt;
    &lt;description&gt;Log to the Console&lt;/description&gt;
&lt;/snippet&gt;</pre>
                                </div>
                            </div>
                            <a href="http://sublimetext.info/docs/en/extensibility/snippets.html" target="_blank" class="btn btn-primary">more info</a>
                        </div>
                    </div>

                    <div id="viscode" class="card mb-5">
                        <div class="card-body">
                            <h2 class="card-title">Visual Studio Code</h2>
                            <p class="card-text">Snippets are defined in a JSON format and stored in a per user (languageId).json file. For example, Markdown snippets go in a markdown.json file.</p>
                            <p class="card-text">You can define your own snippets for specific languages. To open up a snippet file for editing, open User Snippets under File > Preferences (Code > Preferences on Mac) and select the language for which the snippets should appear.</p>
                            <div class="card mb-3">
                                <div class="card-header">Example</div>
                                <div class="card-body">
                                    <pre class="text-green">
{
    "Console Log": {
        "prefix": "log",
        "body": [
            "console.log('$1: ', $2)"
        ],
        "description": "Log to console"
    }
}</pre>
                                </div>
                            </div>
                            <a href="https://code.visualstudio.com/docs/editor/userdefinedsnippets" target="_blank" class="btn btn-primary">more info</a>
                        </div>
                    </div>
                </div>

                <div id="sidebar" class="col d-none d-sm-block">
                    <ul id="sidebar-content" class="nav flex-column sticky-top">
                        <li id="nav-atom" class="nav-item"><a class="nav-link active" href="#atom" data-scroll>Atom</a></li>
                        <li id="nav-brackets" class="nav-item"><a class="nav-link" href="#brackets" data-scroll>Brackets</a></li>
                        <li id="nav-sublime" class="nav-item"><a class="nav-link" href="#sublime" data-scroll>Sublime Text</a></li>
                        <li id="nav-viscode" class="nav-item"><a class="nav-link" href="#viscode" data-scroll>Visual Studio Code</a></li>
                    </ul>
                </div>
            </div>

            <?php include('includes/footer.php') ?>

        </div>
    </body>

    <?php include('includes/scripts.php') ?>

    <script>

        $('#nav-details').addClass('active');

        /*Scroll Spy*/
        $('body').scrollspy({ target: '#sidebar', offset:80});

        $(document).ready(function()
        {
            var hash = window.location.hash;

            if (hash)
            {
                smoothScroll(hash);
            }
            console.log('hash? ', hash);
        });
    </script>
</html>
