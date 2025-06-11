=== Magic Text Block - Effects & Styling Toolkit - Gradients, Tooltips, Backgrounds & Custom Themes ===
Contributors:      vanbom
Donate link: https://paypal.me/younesdro
Tags:              block, gutenberg, rich text, typography
Requires at least: 6.5
Tested up to:      6.8
Requires PHP:      7.4
Stable tag:        1.4.1
License: GPLv3 or later
License URI: https://www.gnu.org/licenses/gpl-3.0.html

Enhance your Gutenberg editor with advanced text formatting options.

== Description ==

**Magic Text Block** enhances your WordPress Gutenberg editor with powerful text formatting options that go beyond the standard capabilities. This plugin brings creative typography and styling directly to your content creation workflow.

= Key Features: =

* **Gradient Stroke Text**: Apply beautiful gradient borders to your text that catch the eye and make headlines pop.
* **Gradient Text Color**: Transform ordinary text with vibrant gradient color fills that flow smoothly from one color to another.
* **Post Theme Selector**: Apply custom themes (Dark, Light, Milkshake, Popsicle) to individual posts or pages, creating unique visual experiences for different content.
* **Text Background Image**: Select images from your media library to apply as backgrounds behind specific portions of text, creating striking visual effects.
* **Underline Effects**: Apply decorative curved underline effects with customizable colors to highlight important text.
* **Tooltip Text**: Add customizable tooltip bubbles to text with your own message, background color, and text color—great for inline explanations or quick hints.

Perfect for bloggers, designers, and content creators looking to make their content stand out without requiring any coding knowledge. Simply select your text and apply the formatting options from the text toolbar.
Compatible with all WordPress themes and works seamlessly with the Gutenberg block editor.

This plugin's code is [available on GitHub](https://github.com/younes-dro/magic-text-block). Please feel free to fork the repository and send a pull request. If you find a bug in the plugin, open an issue.

== Video Tutorial ==

Watch our step-by-step guide on how to apply Magic Text Block formatting in WordPress! Learn how to enhance your text with gradient effects, background images, and stylish underlines.

📺 **Watch the tutorial here**: 
https://www.youtube.com/watch?v=dPYiz_a6-6A

== Installation ==

= Installation from within WordPress =

1. Visit **Plugins > Add New**.
2. Search for **Magic Text Block**.
3. Install and activate the plugin.

= Manual installation =

1. Upload the plugin files to the `/wp-content/plugins/` directory.
2. Activate the plugin through the **Plugins** screen in WordPress.
3. Use the Gutenberg editor to access the Magic Text Block formatting options.

== Frequently Asked Questions ==

= How do I use the Magic Text Block? =
Simply highlight the text you want to style in the Gutenberg editor, and choose the Magic Text Block options from the toolbar.

= Where can I find the source JavaScript files? =
The source code for this plugin, including the original JavaScript files used to build the block, is available in the GitHub repository:
https://github.com/younes-dro/magic-text-block/tree/main/src/magic-text-block
These files are not included in the plugin ZIP but are available in the public repository for transparency and contribution.

= Can I customize the gradient colors? =
Yes, the gradient colors are fully customizable through the editor interface.


== Screenshots ==

1. Gradient Stroke – Apply unique strokes to text using gradients.
2. Gradient Text Color – Enhance text appearance with gradient colors.
3. Text Background Image – Add visual depth with background images.
4. Underline Effect – Improve text with custom underline styles.
5. Post Theme Selector – Easily adjust text styling per post/page.
6. Tooltip Text - customizable tooltip. 

== Changelog ==

= 1.4.1 =
* Fixed React DOM warnings by converting SVG attributes to proper JSX format
* Improved console output by eliminating invalid DOM property warnings

= 1.4.0 =
* Added custom SVG icons for all rich text format types
* New icons include: Tooltip, Text Background Image, Underline Effect, Gradient Text Color, and Gradient Stroke

= 1.3.1 =
Improve gradient color picker UI.

= 1.3.0 =
* Enhanced **Tooltip Position** options: added 4 new diagonal positions (top-left, top-right, bottom-left, bottom-right) for more precise tooltip placement.

= 1.2.0 =
* Added **Tooltip Position** options: choose from top, bottom, left, right, and diagonal positions.
* Added **Gradient Background** support: create beautiful gradient tooltips with customizable colors and directions.
* Improved UI: replaced radio controls with select menus for better space utilization.

= 1.1.0 =
* Added new **Tooltip Text** component: allows you to display a customizable tooltip on hover, with configurable text, background color, and text color.
* Updated the components to use a `<span>` tag to respect proper text-level semantics.

= 1.0.0 =
* Initial release 🎉
