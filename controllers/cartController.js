const cartController = {
  index: (req, res) => {
    res.render('cart', { title: 'Express' });
  },
};

module.exports = cartController;
