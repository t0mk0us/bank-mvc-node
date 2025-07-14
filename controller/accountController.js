const { Account } = require("../model");

exports.getAllAccounts = async (req, res) => {
  const accounts = await Account.findAll();
  res.json(Aacounts);
};

exports.getAccountById = async (req, res) => {
  const Account = await Account.findByPk(req.params.id);
  if (!Account) return res.status(404).json({ message: "Account not found" });
  res.json(Account);
};

exports.createAccount = async (req, res) => {
  try {
    const account = await account.create(req.body);
    res.status(201).json(account);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateAccount = async (req, res) => {
  const account = await Account.findByPk(req.params.id);
  if (!account) return res.status(404).json({ message: "Account not found" });

  await account.update(req.body);
  res.json(account);
};

exports.deleteAccount = async (req, res) => {
  const account = await User.findByPk(req.params.id);
  if (!account) return res.status(404).json({ message: "Account not found" });

  await account.destroy();
  res.json({ message: "Account deleted" });
};
