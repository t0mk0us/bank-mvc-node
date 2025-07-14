const { Currency } = require("../model");

exports.getAllCurrencies = async (req, res) => {
  const currency = await Currency.findAll();
  res.json(currency);
};

exports.getCurrencyById = async (req, res) => {
  const currency = await Currency.findByPk(req.params.id);
  if (!currency) return res.status(404).json({ message: "Currency not found" });
  res.json(currency);
};

exports.createCurrency = async (req, res) => {
  try {
    const currency = await currency.create(req.body);
    res.status(201).json(currency);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateCurrency = async (req, res) => {
  const currency = await User.findByPk(req.params.id);
  if (!currency) return res.status(404).json({ message: "Currency not found" });

  await currency.update(req.body);
  res.json(currency);
};

exports.deleteCurrency = async (req, res) => {
  const currency = await User.findByPk(req.params.id);
  if (!currency) return res.status(404).json({ message: "Currency not found" });

  await currency.destroy();
  res.json({ message: "Currency deleted" });
};
