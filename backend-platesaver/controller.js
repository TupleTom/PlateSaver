const express = require('express');
const router = express.Router();
const model = require('./model');

router.get('/inventory', (req, res) => {
  const items = model.getAllItems();
  res.json(items);
});

router.get('/inventory/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = model.getItemById(id);
  if (!item) {
    res.status(404).send('Item not found');
    return;
  }
  res.json(item);
});

router.post('/inventory', (req, res) => {
  const newItem = model.addItem(req.body);
  res.status(201).json(newItem);
});

router.put('/inventory/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = model.updateItem(id, req.body);
  if (!updatedItem) {
    res.status(404).send('Item not found');
    return;
  }
  res.json(updatedItem);
});

router.delete('/inventory/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const deletedItem = model.deleteItem(id);
  if (!deletedItem) {
    res.status(404).send('Item not found');
    return;
  }
  res.status(204).end();
});

module.exports = router