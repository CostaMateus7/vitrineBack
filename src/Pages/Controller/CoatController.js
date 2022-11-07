const CoatRepository = require('../Repositories/CoatRepository');

class CoatController {
  index(req, res) {
    const coat = CoatRepository.findAll();
    res.json(coat);
  }
}
module.exports = new CoatController();
