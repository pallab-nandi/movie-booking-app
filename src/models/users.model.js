const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: [
      'ADMIN',
      'CLIENT',
      'CUSTOMER'
    ],
    default: "CUSTOMER"
  },
  userStatus: {
    type: String,
    enum: [
      'APPROVED',
      'PENDING',
      'REJECTED'
    ],
    default: "APPROVED"
  },
  createdAt: {
    // I want to default to a new date
    type: Date,
    immutable: true,  // This will ensure the createdAt column is never updated but once in the start
    default: () => {
      return Date.now();
    }
  },
  updatedAt: {
    type: Date,
    default: () => {
      return Date.now();
    }
  }
})

userSchema.pre('save', async (next) => {
  this.password = await bcrypt.hash(this.password, 8);
  next();
})

userSchema.methods.isValidPass = (pass) => {
  return bcrypt.compare(pass, this.password);
}

const userModel = mongoose.model('users', userSchema);

module.exports = { userModel }