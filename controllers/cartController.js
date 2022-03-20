const cartController = {
  index: (req, res) => {
    res.render('cart', { title: 'Cart' });
  },
};

module.exports = cartController;
