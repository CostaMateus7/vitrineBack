const { v4 } = require('uuid');

const coat = [
  {
    id: v4(),
    name: 'Moletom Feminino',
    avatar: 'http://localhost:8080/files/moletom/moleton_fem.jpg',
    description: 'Moletom feminino preto ',
    Price: '119,90',
  },
  {
    id: v4(),
    name: 'Moletom JS',
    avatar: 'http://localhost:8080/files/moletom/moleton_js.jpg',
    description: 'Moletom Javascript Branco',
    Price: '119,90',
  },
  {
    id: v4(),
    name: 'Moletom Linux',
    avatar: 'http://localhost:8080/files/moletom/moleton_linux.jpg',
    description: 'Moletom Linux Preto',
    Price: '119,90',
  },
  {
    id: v4(),
    name: 'Moletom Phyton',
    avatar: 'http://localhost:8080/files/moletom/moleton_phyton.jpg',
    description: 'Moletom phyton preto',
    Price: '119,90',
  },
  {
    id: v4(),
    name: 'Moletom Rosa',
    avatar: 'http://localhost:8080/files/moletom/moleton_pink.jpg',
    description: 'Moletom feminino rosa',
    Price: '119,90',
  },
  {
    id: v4(),
    name: 'Moletom Programador',
    avatar: 'http://localhost:8080/files/moletom/moleton_white.jpg',
    description: 'Moletom branco programador',
    Price: '119,90',
  },
];

class CoatRepository {
  findAll() {
    return (coat);
  }
}

module.exports = new CoatRepository();
