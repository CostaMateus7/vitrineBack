const HomeRepository = require('../Repositories/HomeRepository');

class HomeController {
  index(req, res) {
    const products = HomeRepository.findAll();
    res.json(products);
  }
}
module.exports = new HomeController();
