define(['Handlebars'], function (Handlebars) {

  var loadResource = function (templateFile, parentRequire, onload) {
    parentRequire([("text!" + templateFile)], function (templateFileContent) {
        var templateScripts = $(templateFileContent).filter('script')
        var templates = {}
        var templetesAndPartials = _.groupBy(templateScripts, 'type')
        _.each(templetesAndPartials['text/x-handlebars-partial-template'], function(partial) {
          Handlebars.registerPartial(partial.id, partial.text.trim())
        })
        _.each(templetesAndPartials['text/x-handlebars-template'], function(template) {
          templates[template.id] = Handlebars.compile(template.text.trim())
        })
        onload({
          render: function(id, data) {
            return templates[id](data)
          }
        })
      }
    )
  }

  return {
    load: loadResource
  };
});