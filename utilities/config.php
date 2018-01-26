<?php

	ini_set( "display_errors", true );
	date_default_timezone_set( "America/New_York" );

	// define( "CLASS_PATH", "classes" );
	define( "TEMPLATE_PATH", "templates" );

	function handleException( $exception )
	{
		echo "Sorry, a problem occurred. Please try later.";
		error_log( $exception->getMessage() );
	}
	set_exception_handler( 'handleException' );
?>
