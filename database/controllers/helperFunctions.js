const { User } = require('../index.js')

module.exports = {

  addUser: (params, callback) => {

    const newUser = User.build({
      firstName: params.firstName, // params.firstName
      lastName: params.lastName, // params.lastName
    })

    newUser.save().then((saved) => {
      console.log('saved!!!! ', saved)
      callback(null, 'saved')
    })
    .catch((err) => {
      console.log('error in helper functions addUser')
      callback(err);
    })
  }

}