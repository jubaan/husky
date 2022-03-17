const productController = {
  index: (req, res) => {
    res.render('models', { title: 'Express' });
  },
  show: (req, res) => {
    let modelId = req.params.id;

    res.render('modelDetails', { title: 'Express' });
  },
};

module.exports = productController;
