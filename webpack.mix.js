const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/guest.js', 'public/js')
    .js('resources/js/helpers/index.js', 'public/js/helper.js')
    .js('resources/js/helpers/css.js', 'public/js/css.helper.js')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/guest.scss', 'public/css')
    .styles(['resources/css/shared.css'], 'public/css/shared.css');
    //.version();

