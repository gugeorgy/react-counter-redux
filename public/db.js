// user.js
const { faker } = require('@faker-js/faker');

module.exports = () => {
  var user = [];
  for (var id = 0; id < 5; ++id) {
    var randomName = faker.name.fullName();
    var randomEmail = faker.internet.email();
    var randomPassword = faker.internet.password(8, false, /[A-Z]/);
    var randomAvatar = faker.internet.avatar();
    var token = faker.internet.password(100, false, /[A-Z]/, 'token.');
    user.push({
      id: ++id,
      name: randomName,
      email: randomEmail,
      password: randomPassword,
      avatar: randomAvatar,
      token: token,
    });
  }
  return { users: user };
};
