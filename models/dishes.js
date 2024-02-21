const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db.config.js');
const Restaurant = require('./restaurant.js');
 // Import your Sequelize instance



const Dishes = sequelize.define('Dishes', {
    restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Restaurant,
          key: 'id',
        },
    },
  disheName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '1',
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
      }
});
Dishes.belongsTo(Restaurant, { foreignKey: 'restaurantId' });


// Sync the model with the database (create the table)
(async () => {
  try {
    await sequelize.sync();
    console.log('Dishes synchronized successfully');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
})();

module.exports = Dishes;
