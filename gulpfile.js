var elixir = require('laravel-elixir');
require('laravel-elixir-livereload');
//gulp --production

elixir.config.assetsPath = 'assets/';
elixir.config.publicPath = '/';
elixir.config.css.outputFolder = './';

elixir(function(mix){

    mix.styles([
        'bootstrap.min.css',
        'iranian-font.css',
        'style.css'
    ],
        'assets/css/all.css');
        mix.scripts([
            'jquery.min.js',
            'bootstrap.min.js',
            'custom.js'
            ], 'assets/js/app.js');
})
