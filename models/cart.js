const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db.config.js');
const Restaurant = require('./restaurant.js');
const Dishes = require('./dishes.js');
const User = require('./user.js');
const userDetails = require('./userDetails.js');
 // Import your Sequelize instance



const Cart = sequelize.define('Cart', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'id',
        },
      },
      userDetailedId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: userDetails,
          key: 'id',
        },
      },
      disheId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Dishes,
          key: 'id',
        },
      },
    //   restaurantId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //       model: Restaurant,
    //       key: 'id',
    //     },
    //   },
//   disheName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     quantity: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     price: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       }
});
Cart.belongsTo(User, { foreignKey: 'userId' });
Cart.belongsTo(userDetails, { foreignKey: 'userDetailedId' });
Cart.belongsTo(Dishes,{foreignKey: 'disheId'});

// Sync the model with the database (create the table)
(async () => {
  try {
    await sequelize.sync();
    console.log('Cart synchronized successfully');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
})();

module.exports = Cart;
