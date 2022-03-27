const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

let modelsPath = path.join(__dirname, '../models.json');
let modelsFile = fs.readFileSync(modelsPath, { encoding: 'utf-8' });
let models;

const productsController = {
  index: (req, res) => {
    models = JSON.parse(modelsFile);

    res.render('products/models', { title: 'Models', models: models });
  },
  show: (req, res) => {
    let modelId = req.params.id;

    models = JSON.parse(modelsFile);

    let model = models.find((model) => model.id === modelId);

    res.render('products/modelDetails', { title: model.name, model: model });
  },
  new: (req, res) => {
    res.render('products/new', { title: 'New' });
  },
  create: (req, res) => {
    if (modelsFile === '') {
      models = [];
    } else {
      models = JSON.parse(modelsFile);
    }

    let model = {
      id: uuidv4(),
      name: req.body.name,
      description: req.body.description,
      model: req.body.model,
      type: req.body.type,
      imageFile: req.file,
      price: req.body.price,
    };

    models.push(model);
    modelsJSON = JSON.stringify(models);

    fs.writeFileSync(modelsPath, modelsJSON);
    res.redirect('/models');
  },
  edit: (req, res) => {
    let modelId = req.params.id;

    let types = ['electric', 'enduro', 'travel', 'naked', 'supermoto'];

    if (modelsFile === '') {
      models = [];
    } else {
      models = JSON.parse(modelsFile);
    }

    let model = models.find((model) => model.id === modelId);

    res.render('products/edit', { title: 'Edit', model: model, types: types });
  },
  update: (req, res) => {
    let modelId = req.params.id;

    if (modelsFile === '') {
      models = [];
    } else {
      models = JSON.parse(modelsFile);
    }

    let model = models.find((model) => model.id === modelId);

    model = {
      id: uuidv4(),
      name: req.body.name,
      description: req.body.description,
      model: req.body.model,
      type: req.body.type,
      price: req.body.price,
    };

    models.push(model);
    modelsJSON = JSON.stringify(models);

    fs.writeFileSync(modelsPath, modelsJSON);

    res.render('products/edit', { title: 'Edit', model: model });
  },
  delete: (req, res) => {
    let modelId = req.params.id;

    res.redirect('/models', { title: 'Express' });
  },
};

module.exports = productsController;
