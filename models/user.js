// Set up database using Sequelize to take in user info

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    fav1: {
      type: DataTypes.STRING
    },
    fav2: {
      type: DataTypes.STRING
    },
    fav3: {
      type: DataTypes.STRING
    }
  });

  // placeholder data for the database
  sequelize.sync({
    force: true
  }).then(function () {
    User.bulkCreate([{
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@doe.com',
        password: 'john',
        fav1: 'bitcoin',
        fav2: 'ethereum'
      },
      {
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'jane@doe.com',
        password: 'jane',
        fav1: 'ripple'
      }
    ])
  })

  return User;
}
