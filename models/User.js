const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const User = {
  fileName: 'data/users.json',
  getAll: () => {
    let usersFile = fs.readFileSync(User.fileName, { encoding: 'utf-8' });
    let users;

    if (usersFile === '') {
      users = [];
    } else {
      users = JSON.parse(usersFile);
    }

    return users;
  },
  getData: function () {
    return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
  },
  generateId: function () {
    let id = uuidv4();
    return id;
  },
  findAll: function () {
    return this.getData();
  },
  findByPk: function (id) {
    let users = this.findAll();
    let user = users.find((user) => user.id === id);
    return user;
  },
  findByEmail: function (field, text) {
    let users = this.findAll();
    let user = users.find((user) => user[field] === text);
    return user;
  },
  create: function (userData) {
    let users = this.findAll();
    let newUser = {
      id: uuidv4(),
      ...userData,
    };
    users.push(newUser);
    fs.writeFileSync(this.fileName, JSON.stringify(users, null, ' '));
    return newUser;
  },
  delete: function (id) {
    let users = this.getData();
    let user = users.find((user) => user.id === id);
    let index = users.indexOf(user);
    users.splice(index, 1);
    fs.writeFileSync(this.fileName, JSON.stringify(users, null, ' '));
  }
};

module.exports = User;