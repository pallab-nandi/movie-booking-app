const { db } = require('../models/index.model');

class UserService {
  schema;
  constructor() {
    this.schema = db.users;
  }

  getAllUsers(queryObj) {
    return this
      .schema
      .find(queryObj);
  }

  getUsersById(id) {
    return this
      .schema
      .findOne({ _id: id });
  }

  addUsers(user) {
    return this
      .schema
      .create(user);
  }

  updateUser(id, update) {
    return this
      .schema
      .findOneAndUpdate({ _id: id }, update);
  }

  deleteUsers(id) {
    return this
      .schema
      .deleteOne({ _id: id })
  }

  findOneByUserId(userId) {
    return this
      .schema
      .findOne({ userId })
  }
}

const userService = new UserService();

module.exports = { userService }