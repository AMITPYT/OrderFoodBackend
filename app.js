const express = require("express");
const userRoutes = require('./modules/user/routes/user.routes');
const userDetailsRoutes = require('./modules/userDetails/routes/userDetails.routes');
const RestaurantRoutes = require('./modules/restaurant/routes/restaurant.routes');
const DishesRoutes = require('./modules/dishes/routes/dishes.routes');
const cartsController = require('./modules/carts/routes/carts.routes');

const app = express();
app.use(express.json());

app.use(userRoutes, userDetailsRoutes, RestaurantRoutes, DishesRoutes, cartsController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));