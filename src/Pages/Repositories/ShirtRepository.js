const { v4 } = require('uuid');

const shirt = [
  {
    id: v4(),
    name: 'Camisa back',
    avatar: 'http://localhost:8080/files/shirts/camisa_backend.jpg',
    description: 'Camisa Back-end Preta',
    Price: '59,90',
  },
  {
    id: v4(),
    name: 'Camisa Fragment',
    avatar: 'http://localhost:8080/files/shirts/camisa_fragment.jpg',
    description: 'Camisa Cinza </>',
    Price: '49,90',
  },
  {
    id: v4(),
    name: 'Camisa Github',
    avatar: 'http://localhost:8080/files/shirts/camisa_github.jpg',
    description: 'Camisa Github Preta',
    Price: '79,90',
  },
  {
    id: v4(),
    name: 'Camisa NodeJs',
    avatar: 'http://localhost:8080/files/shirts/camisa_node.jpg',
    description: 'Camisa Node Preta',
    Price: '59,90',
  },
  {
    id: v4(),
    name: 'Camisa PC',
    avatar: 'http://localhost:8080/files/shirts/camisa_pc.jpg',
    description: 'Camisa Computador',
    Price: '79,90',
  },
  {
    id: v4(),
    name: 'Camisa React',
    avatar: 'http://localhost:8080/files/shirts/camisa_react.jpg',
    description: 'Camisa React Branca',
    Price: '59,90',
  },
];

class ShirtRepository {
  findAll() {
    return (shirt);
  }
}

module.exports = new ShirtRepository();
