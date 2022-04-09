const indexController = {
  index: (req, res) => {
    res.render('index', { title: 'Huskqvarna Motorcycles' });
  },
};

module.exports = indexController;
