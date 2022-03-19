const productsController = {
  index: (req, res) => {
    res.render('models', { title: 'Express' });
  },
  show: (req, res) => {
    let modelId = req.params.id;

    res.render('modelDetails', { title: 'Express' });
  },
  create: (req, res) => {},
  update: (req, res) => {},
  delete: (req, res) => {},
  delete: (req, res) => {
    res.render('models', { title: 'Express' });
  },
};

module.exports = productsController;
