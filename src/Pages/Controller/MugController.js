const MugRepository = require('../Repositories/MugRepository');

class MugController {
  index(req, res) {
    const mug = MugRepository.findAll();
    res.json(mug);
  }
}
module.exports = new MugController();
