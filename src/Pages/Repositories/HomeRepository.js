const { v4 } = require('uuid');

const home = [
  {
    id: v4(),
    name: 'Meia Cinza',
    avatar: 'http://localhost:8080/files/meia/meia_hello.jpg',
    description: 'Meia cinza hello',
    Price: '29,90',
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
    name: 'Boné Node',
    avatar: 'http://localhost:8080/files/bone/bone_node.jpg',
    description: 'Boné Node preto',
    Price: '59,90',
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
    name: 'Caneca linux',
    avatar: 'http://localhost:8080/files/caneca/caneca_linux.jpg',
    description: 'Caneca Linux preta',
    Price: '49,90',
  },
  {
    id: v4(),
    name: 'Camisa React',
    avatar: 'http://localhost:8080/files/shirts/camisa_react.jpg',
    description: 'Camisa React Branca',
    Price: '59,90',
  },
];

class HomeRepository {
  findAll() {
    return (home);
  }
}

module.exports = new HomeRepository();
