const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db.config.js');
 // Import your Sequelize instance



const Restaurant = sequelize.define('Restaurant', {
    restaurantName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
});



// Sync the model with the database (create the table)
(async () => {
  try {
    await sequelize.sync();
    console.log('Restaurant synchronized successfully');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
})();

module.exports = Restaurant;
