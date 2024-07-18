const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/javasripts')
   .react()
   .postCss('resources/css/app.css', 'public/css', [
       //
   ]);
