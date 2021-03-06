require('dotenv').config();
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(
  `postgres://${process.env.USERNAME}:${process.env.PASSWORD}@localhost:5433/nyc_jobs`
);
//const sequelize = new Sequelize('nyc_jobs', process.env.USERNAME, process.env.PASSWORD)

// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

sequelize
  .authenticate()
  .then(() => {
    console.log('athenticated!!');
  })
  .catch((err) => {
    console.log('err: ', err);
  });

class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },

    email: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'user', // We need to choose the model name
  },
  {
    indexes: [
      // Create a unique index on email
      {
        unique: true,
        fields: ['email'],
      },
    ],
  }
);

// the defined model is the class itself
console.log(User === sequelize.models.User); // true

module.exports = { User };
