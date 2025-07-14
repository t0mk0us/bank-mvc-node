const express = require("express");
const router = express.Router();
const controller = require("../controller/customerController");

router.get("/customer/", controller.getAllCustomers);
router.get("/customer/:id", controller.getCustomerById);
router.post("customer/", controller.createCustomer);
router.put("/customer/:id", controller.updateCustomer);
router.delete("/customer/:id", controller.deleteCustomer);

module.exports = router;
