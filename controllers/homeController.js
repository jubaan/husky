const homeController = {
  home: function(req, res) {
    res.render('home', { title: 'Home' });
  }
}