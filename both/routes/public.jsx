//Tässä yksinkertainen esimerkki routingista sovelluksessa.
FlowRouter.route('/example', {
  name: "example",
  action: function(){
    ReactLayout.render( App, {yield: <Progress />});
  }
});

FlowRouter.route('/', {
  name: "home",
  action: function(){
    ReactLayout.render(App, {yield: <Progress />})
  }
});