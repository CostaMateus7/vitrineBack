const SockRepository = require('../Repositories/SockRepository');

class SockController {
  index(req, res) {
    const Sock = SockRepository.findAll();
    res.json(Sock);
  }
}
module.exports = new SockController();
