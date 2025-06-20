<?php
/**
 * Plugin Name:       Magic Text Block
 * Description:       Enhance your Gutenberg editor with advanced Rich Text formatting options directly in the toolbar.
 * Requires at least: 6.5
 * Requires PHP:      7.4
 * Version:           1.6.0
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

$dro_magic_text_block_version = get_file_data(
	__FILE__,
	array(
		'Version' => 'Version',
	)
);
define( 'DRO_MAGIC_TEXT_BLOCK_VERSION', $dro_magic_text_block_version['Version'] );

/**
 * Load available translations.
 *
 * @return void
 */
function dro_magic_text_block_block_init() {

	wp_set_script_translations( 'magic-text-block-editor-script-js', 'magic-text-block' );
}
add_action( 'init', 'dro_magic_text_block_block_init' );



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
 * Enqueues the plugin's custom editor script and styles.
 *
 * This function loads the compiled JavaScript (`index.js`) and the corresponding CSS (`index.css`)
 * into the block editor (only). It also handles translation loading and dynamically resolves
 * dependencies and version from the `index.asset.php` file.
 *
 * Hook: `enqueue_block_editor_assets`
 * Runs only in the WordPress block editor context.
 *
 * @return void
 */
function dro_magic_text_enqueue_editor_script() {
	
	wp_enqueue_style(
		'dro-magic-text-formats-editor-style',
		plugin_dir_url( __FILE__ ) . 'build/style-index.css',
		array(),
		DRO_MAGIC_TEXT_BLOCK_VERSION
	);

	$script_path = plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
	$asset       = file_exists( $script_path )
		? include $script_path
		: array(
			'dependencies' => array(),
			'version'      => DRO_MAGIC_TEXT_BLOCK_VERSION,
		);


	wp_enqueue_script(
		'dro-magic-text-formats',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset['dependencies'],
		$asset['version'],
		false
	);

	wp_set_script_translations( 'dro-magic-text-formats', 'magic-text-block' );
}
add_action( 'enqueue_block_assets', 'dro_magic_text_enqueue_editor_script' );



/**
 * Enqueue the theme CSS file if a custom theme is selected.
 *
 * @return void
 */
function dro_magic_text_enqueue_theme_css() {
	if ( ! is_singular() ) {
		return;
	}

	wp_enqueue_style(
		'dro-magic-text-formats-style',
		plugin_dir_url( __FILE__ ) . 'build/style-index.css',
		array(),
		DRO_MAGIC_TEXT_BLOCK_VERSION,
	);

	$post_id     = get_queried_object_id();
	$saved_theme = get_post_meta( $post_id, 'dro_magic_text_theme_meta', true );

	if ( $saved_theme && $saved_theme !== 'default' ) {
		$theme_css_url = plugin_dir_url( __FILE__ ) . 'build/index.css';
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
