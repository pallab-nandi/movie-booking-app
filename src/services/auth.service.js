const { userService } = require('./users.service');
const jwt = require('jsonwebtoken');

class AuthService {

  async signUp(user) {
    return await userService
      .addUsers(user)
      .then((data) => {
        if (data.userType && data.userType !== 'CUSTOMER') data.userStatus = 'PENDING'
        return data;
      })
      .catch(err => {
        console.log(err);
        return Promise.reject('Error while registering User')
      })
  }

  async signIn(userId, password) {
    return await userService
      .findOneByUserId(userId)
      .then(async (user) => {
        if (!user) {
          return {
            statusCode: 400,
            status: 'fail',
            message: `User doesn't exist`
          }
        }
        let validate = await user.isValidPass(password);
        if (!validate) {
          return {
            statusCode: 400,
            status: 'fail',
            message: 'Unauthenticate Access'
          }
        }
        const token = await jwt.sign({
          id: user._id,
          userId: user.userId,
          userStatus: user.userStatus,
          userType: user.userType
        }, 'genshin-impact', {
          expiresIn: '86400000'
        })

        return {
          statusCode: 200,
          status: 'success',
          message: 'Authenticate Login Successful',
          data: {
            name: user.name,
            email: user.email,
            type: user.userType,
            status: user.userStatus,
            accessToken: token
          }
        }
      })
  }
}

const authService = new AuthService();

module.exports = { authService }