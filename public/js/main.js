define(['hbs!../html/templates.html'], function(templates) {
  return function() {
    var teams = Bacon.fromPromise($.ajax({
      url: 'rest/teams',
      type:'get',
      dataType: 'json'
    })).toProperty()
    teams.onValue(function(data) {
      $("header").html(templates.render('nav', data))
    })
    teams.onError(function(data) {
      console.log(data)
    })
  }
});