const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
let modelsPath = path.join(__dirname, '../models.json');
let modelsFile = fs.readFileSync(modelsPath, { encoding: 'utf-8' });
let models;

if (modelsFile === '') {
  models = [];
} else {
  models = JSON.parse(modelsFile);
}

const productsController = {
  index: (req, res) => {
    models = JSON.parse(modelsFile);
    console.log(models[0].image.filename);
    res.render('products/models', { title: 'Models', models: models });
  },
  show: (req, res) => {
    let modelId = req.params.id;
    let model = models.find((model) => model.id === modelId);

    res.render('products/modelDetails', { title: model.name, model: model });
  },
  new: (req, res) => {
    res.render('products/new', { title: 'New' });
  },
  create: (req, res, next) => {
    const file = req.file;
    // res.send(req.body);

    // if (!file) {
    //   const error = new Error('Please provide a file');
    //   error.httpStatusCode = 400;
    //   return next(error);
    // }

    let model = {
      id: uuidv4(),
      name: req.body.name,
      description: req.body.description,
      model: req.body.model,
      type: req.body.type,
      // image: file,
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
    let model = models.find((model) => model.id === modelId);

    res.render('products/edit', { title: 'Edit', model: model, types: types });
  },
  update: (req, res, next) => {
    let modelId = req.params.id;
    const file = req.file;
    if (!file) {
      const error = new Error('Please provide a file');
      error.httpStatusCode = 400;
      return next(error);
    }
    models.map((motorbike) => {
      if (motorbike.id === modelId) {
        motorbike.name = req.body.name;
        motorbike.description = req.body.description;
        motorbike.model = req.body.model;
        motorbike.type = req.body.type;
        motorbike.image = file;
        motorbike.price = req.body.price;
      }
    });

    let motorbikesJSON = JSON.stringify(models);

    fs.writeFileSync(modelsPath, motorbikesJSON);
    res.redirect(`/model/${modelId}/edit`);
  },
  delete: (req, res) => {
    let modelId = req.params.id;

    models = JSON.parse(modelsFile);
    models.map((model) => {
      if (model.id === modelId) {
        models.splice(model, 1);
      }
    });
    res.redirect('/models', { title: 'Express' });
  },
};

module.exports = productsController;
