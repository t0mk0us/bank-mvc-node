const { Customer } = require("../model");

exports.getAllCustomers = async (req, res) => {
  const customers = await Customer.findAll();
  res.json(customers);
};

exports.getCustomerById = async (req, res) => {
  const customer = await Customer.findByPk(req.params.id);
  if (!customer) return res.status(404).json({ message: "Customer not found" });
  res.json(customer);
};

exports.createCustomer = async (req, res) => {
  try {
    const customer = await customer.create(req.body);
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateCustomer = async (req, res) => {
  const customer = await User.findByPk(req.params.id);
  if (!customer) return res.status(404).json({ message: "Customer not found" });

  await customer.update(req.body);
  res.json(customer);
};

exports.deleteCustomer = async (req, res) => {
  const customer = await User.findByPk(req.params.id);
  if (!customer) return res.status(404).json({ message: "Customer not found" });

  await customer.destroy();
  res.json({ message: "Customer deleted" });
};
