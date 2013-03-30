require.config({
  baseUrl: 'js',
  paths: {
    'jquery': '../components/jquery/jquery',
    'bacon': '../components/bacon/dist/Bacon',
    'handlebars': '../components/handlebars/handlebars',
    'lessjs': '../components/less.js/dist/less-1.3.3',
    'text': '../components/requirejs-text/text'
  }
});

require(['main'], function(App) {
  $("#content").html(App())
});