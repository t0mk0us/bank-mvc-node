const express = require("express");
const app = express();
const sequelize = require("./config/db");
const customerRoutes = require("./routes/customerRoutes");
const accountRoutes = require("./routes/accountRoutes");
const addressRoutes = require("./routes/addressRoutes");
const currencyRoutes = require("./routes/currencyRoutes");



app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for form submission
app.set("view engine", "ejs");

app.use("/customers", customerRoutes);
app.use("/accounts", accountRoutes);
app.use("/addresses", addressRoutes);
app.use("/currencies", currencyRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  console.log("Database synced");
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
