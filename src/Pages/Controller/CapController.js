const CapRepository = require('../Repositories/CapRepository');

class CapController {
  index(req, res) {
    const cap = CapRepository.findAll();
    res.json(cap);
  }
}
module.exports = new CapController();
