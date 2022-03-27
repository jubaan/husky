var express = require('express');
var path = require('path');
var router = express.Router();
const multer = require('multer');
const productsController = require('../controllers/productsController');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images/products'));
  },
  filename: function (req, file, cb) {
    console.log(file);
    const newFilename = `${Date.now()}-${file.originalname.replace(/\s/g, '-')}`;
    cb(null, newFilename);
  },
});

let upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);

      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  },
});

router.get('/', productsController.index);
router.get('/new', productsController.new);
router.post('/create', upload.single('image'), productsController.create);
router.get('/:id', productsController.show);
router.get('/:id/edit', productsController.edit);
router.patch('/:id/edit', productsController.update);
router.delete('/:id/delete', productsController.delete);

module.exports = router;
