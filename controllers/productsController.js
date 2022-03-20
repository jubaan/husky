const productsController = {
  index: (req, res) => {
    res.render('products/models', { title: 'Models' });
  },
  show: (req, res) => {
    let modelId = req.params.id;

    res.render('products/modelDetails', { title: 'Express' });
  },
  create: (req, res) => {
    res.render('products/create', { title: 'Create' });
  },
  update: (req, res) => {
    res.render('products/edit', { title: 'Update' });
  },
  delete: (req, res) => {},
  delete: (req, res) => {
    res.render('models', { title: 'Express' });
  },
};

module.exports = productsController;
