const ShirtRepository = require('../Repositories/ShirtRepository');

class ShirtController {
  index(req, res) {
    const shirt = ShirtRepository.findAll();
    res.json(shirt);
  }
}
module.exports = new ShirtController();
