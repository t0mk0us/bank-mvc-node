const { Address } = require("../model");

exports.getAllAddresses = async (req, res) => {
  const address = await Address.findAll();
  res.json(address);
};

exports.getAddressById = async (req, res) => {
  const address = await Address.findByPk(req.params.id);
  if (!address) return res.status(404).json({ message: "Address not found" });
  res.json(address);
};

exports.createAddress = async (req, res) => {
  try {
    const address = await address.create(req.body);
    res.status(201).json(address);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateAddress = async (req, res) => {
  const address = await User.findByPk(req.params.id);
  if (!address) return res.status(404).json({ message: "Address not found" });

  await address.update(req.body);
  res.json(address);
};

exports.deleteAddress = async (req, res) => {
  const address = await User.findByPk(req.params.id);
  if (!address) return res.status(404).json({ message: "Address not found" });

  await address.destroy();
  res.json({ message: "Address deleted" });
};
