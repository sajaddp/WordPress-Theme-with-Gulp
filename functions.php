<?php

//	// Enable thumbnails
add_theme_support( 'post-thumbnails' );
add_image_size( 'single-thumbnail', 800, 370, FALSE );

if ( function_exists( 'register_sidebar' ) ) {
	register_sidebar( [
		'name'          => 'گوشه',
		'id'            => 'publication',
		'before_widget' => '',
		'after_widget'  => '',
		'before_title'  => '',
		'after_title'   => '',
	] );
}

//remove widget title
add_filter( 'widget_title', 'remove_widget_title' );
function remove_widget_title( $widget_title ) {
	
	return;
}