<?php session_start();

    // JSON ERROR HANDLING
    function errorJson($msg)
    {
        print json_encode(array('error'=>$msg));
        exit();
    }

    // LOAD THE FILE CONTAINING THE DATABASE CONNNECTION INFO ETC.
    require( "utilities/config.php" );
    // require( "templates/ChromePhp.php" );

    // GRAB THE REQUEST ACTION -- USE THIS TO DIRECT TO THE CORRECT FUNCTION
    $action = isset( $_GET['action'] ) ? $_GET['action'] : '';

    switch ( $action )
    {

        case 'home':
            home();
            break;

        case 'details':
            details();
            break;

        case 'about':
            about();
            break;
        default:
            home();
    }


    /******************* SERVER FUNCTIONS *******************/
    function home()
    {
        $results['title'] =  'Home | Snippets';
        $results['description'] = 'A snippet conversion and migration. Moving to a new code editor? Convert your code snippets quickly and easily! Atom, Brackets, Sublime Text 3, Visual Studio snippet generation and migration.';

        require(TEMPLATE_PATH . '/home.php');
    }

    function details()
    {
        $results['title'] =  'Details | Snippets';
        $results['description'] = 'Need more details on how to use our easy-to-use snippet converter? All your questions are answered here! Proper formatting for your favorite code editors. Atom, Brackets, Sublime Text 3, Visual Studio snippet generation and migration.';

        require(TEMPLATE_PATH . '/details.php');
    }

    function about()
    {
        $results['title'] =  'About | Snippets';
        $results['description'] = 'Meet Brandon Tindle the creator of Snippets! Who is this fellow? What is reimagin8d?';

        require(TEMPLATE_PATH . '/about.php');
    }
?>
