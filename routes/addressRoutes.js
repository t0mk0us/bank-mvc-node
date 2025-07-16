const express = require("express");
const router = express.Router();
const controller = require("../controller/addressController");

router.get("/address/", controller.getAllAddresses);
router.get("/address/:id", controller.getAddressById);
router.post("/address/", controller.createAddress);
router.put("/address/:id", controller.updateAddress);
router.delete("/address/:id", controller.deleteAddress);

module.exports = router;
