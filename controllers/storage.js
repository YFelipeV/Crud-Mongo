const { storagesModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;
//!obtener lista de base datos
const getItems = async (req, res) => {
  const data = await storagesModel.find({});
  res.json(data);
};
const getItem = (req, res) => {};
const createItems = async (req, res) => {
  const { body, file } = req;

  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
  const data = await storagesModel.create(fileData);
  res.json(data);
};
const updateItems = (req, res) => {};
const deleteItems = (req, res) => {};

module.exports = { getItems, createItems, deleteItems, getItem, updateItems };
