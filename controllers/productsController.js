const fs = require('fs');

const productsController = {
  index: (req, res) => {
    res.render('products/models', { title: 'Models' });
  },
  show: (req, res) => {
    let modelId = req.params.id;

    res.render('products/modelDetails', { title: 'Express' });
  },
  create: (req, res) => {
    // let models = JSON.parse(fs.readFyleSync('models.json', 'utf-8'));

    res.render('products/create', { title: 'Create' });
  },
  save: (req, res) => {
    let models = JSON.parse(fs.readFileSync('models.json', 'utf-8'));
    let model = JSON.stringify(req.body);
 
    fs.appendFileSync('models.json', model);
    res.redirect('/models');
  },
  update: (req, res) => {
    res.render('products/edit', { title: 'Update' });
  },
  edit: (req, res) => {},
  update: (req, res) => {},
  delete: (req, res) => {
    let modelId = req.params.id;

    res.redirect('/models', { title: 'Express' });
  },
};

module.exports = productsController;
