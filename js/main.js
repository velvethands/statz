define(['text!../html/templates.html', 'jquery', 'bacon', 'handlebars', 'lessjs'], function(html) {
  return function() {
    var template = Handlebars.compile(html)
    return template()
  }
});