const indexController = {
  index: (req, res) => {
    res.render('index', { title: 'Express' });
  },
};

module.exports = indexController;