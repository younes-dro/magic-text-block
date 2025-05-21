<?php
/**
 * Plugin Name:       Magic Text Block
 * Description:       Enhance your Gutenberg editor with advanced Rich Text formatting options directly in the toolbar.
 * Requires at least: 6.5
 * Requires PHP:      7.4
 * Version:           1.0.0
 * Author:            Younes DRO
 * Author URI:        https://github.com/younes-dro/
 * Plugin URI:        https://github.com/younes-dro/magic-text-block
 * License:           GPLv3 or later
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       magic-text-block
 *
 * @package DroBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'DRO_MAGIC_TEXT_BLOCK_VERSION', '1.0.0' );

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function dro_magic_text_block_block_init() {
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	} else {
		if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
			wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		}
		$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
		foreach ( array_keys( $manifest_data ) as $block_type ) {
			register_block_type( __DIR__ . "/build/{$block_type}" );
		}
	}

	// Load available translations.
	wp_set_script_translations( 'magic-text-block-editor-script-js', 'magic-text-block' );
}
add_action( 'init', 'dro_magic_text_block_block_init' );

function dro_magic_text_block_enqueue_block_assets() {
	wp_enqueue_style(
		'dro-magic-text-formats-style',
		plugins_url( 'build/magic-text-block/style-index.css', __FILE__ ),
		array(),
		'0.1.0'
	);
}
add_action( 'wp_enqueue_scripts', 'dro_magic_text_block_enqueue_block_assets' );

/**
 * Registers a custom post meta field 'dro_magic_text_theme_meta'.
 *
 * This function registers a meta field called 'dro_magic_text_theme_meta' for all post types.
 * The meta field is of type string, is a single value, and is accessible via the REST API.
 * Only users with the 'edit_posts' capability can modify this meta field.
 *
 * @since 1.0.0
 *
 * @return void
 */
function dro_magic_text_register_post_meta() {

	register_post_meta(
		'',
		'dro_magic_text_theme_meta',
		array(
			'show_in_rest'  => true,
			'single'        => true,
			'type'          => 'string',
			'auth_callback' => function () {
				return current_user_can( 'edit_posts' );
			},
		)
	);
}
add_action( 'init', 'dro_magic_text_register_post_meta' );

/**
 * Enqueue the theme CSS file if a custom theme is selected.
 *
 * @return void
 */
function dro_magic_text_enqueue_theme_css() {
	if ( ! is_singular() ) {
		return;
	}

	$post_id     = get_queried_object_id();
	$saved_theme = get_post_meta( $post_id, 'dro_magic_text_theme_meta', true );

	if ( $saved_theme && $saved_theme !== 'default' ) {
		$theme_css_url = plugin_dir_url( __FILE__ ) . 'build/magic-text-block/index.css';
		wp_enqueue_style( 'magic-text-theme-css', $theme_css_url, array(), DRO_MAGIC_TEXT_BLOCK_VERSION );
	}
}
add_action( 'wp_enqueue_scripts', 'dro_magic_text_enqueue_theme_css' );

/**
 * Add custom body class if a custom theme is selected.
 *
 * @param array $classes Existing body classes.
 * @return array Modified body classes.
 */
function dro_magic_text_add_body_class( $classes ) {
	if ( is_singular() ) {
		$post_id     = get_queried_object_id();
		$saved_theme = get_post_meta( $post_id, 'dro_magic_text_theme_meta', true );

		if ( $saved_theme && $saved_theme !== 'default' ) {
			$classes[] = 'theme-' . sanitize_html_class( $saved_theme );
		}
	}

	return $classes;
}
add_filter( 'body_class', 'dro_magic_text_add_body_class' );
