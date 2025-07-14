const express = require("express");
const router = express.Router();
const controller = require("../controller/accountController");

router.get("/account/", controller.getAllAccounts);
router.get("/account/:id", controller.getAccountById);
router.post("/account/", controller.createAccount);
router.put("/account/:id", controller.updateAccount);
router.delete("/account/:id", controller.deleteAccount);

module.exports = router;
