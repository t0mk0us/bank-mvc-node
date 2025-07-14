const express = require("express");
const router = express.Router();
const controller = require("../controller/currencyController");

router.get("/currency/", controller.getAllCurrencies);
router.get("/currency/:id", controller.getCurrencyById);
router.post("/currency/", controller.createCurrency);
router.put("/currency/:id", controller.updateCurrency);
router.delete("currency/:id", controller.deleteCurrency);

module.exports = router;
