require.config({
  baseUrl: 'js',
  paths: {
    $: '../components/jquery/jquery',
    Bacon: '../components/bacon/dist/Bacon',
    Handlebars: '../components/handlebars/handlebars',
    _: '../components/lodash/dist/lodash',
    text: '../components/requirejs-text/text',
    hbs: 'require-handlebars'
  },
  shim: {
    '$': {
      exports: '$'
    },
    'Handlebars': {
      exports: 'Handlebars'
    },
    'Bacon': {
      exports: 'Bacon'
    }
  }
});

require(['main', 'Bacon', '$', 'Handlebars', '_'], function(Main) {
  Main()
});