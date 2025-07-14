const express = require("express");
const app = express();
const sequelize = require("./config/db");
const customerRoutes = require("./routes/customerRoutes");
const accountRoutes = require("./routes/customerRoutes");
const addressRoutes = require("./routes/customerRoutes");
const currencyRoutes = require("./routes/customerRoutes");



app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for form submission
app.set("view engine", "ejs");

app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  console.log("Database synced");
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
