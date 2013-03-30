define(['text!../html/templates.html', '$', 'bacon', 'handlebars', 'lessjs'], function(html) {
  return function() {
    var template = Handlebars.compile(html)
    return template()
  }
});