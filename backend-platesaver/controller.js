const express = require("express");
const router = express.Router();
const model = require("./model");
const cors = require("cors");

router.use(cors());

router.get("/", async (req, res) => {
  try {
    const items = await model.getAllItems();
    res.json(items);
  } catch (error) {
    console.error("Error fetching inventory", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const item = await model.getItemById(id);
    if (!item) {
      res.status(404).send("Item not found");
      return;
    }
    res.json(item);
  } catch (error) {
    console.error("Error fetching item", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, quantity, price, expiryDate } = req.body;

    if (!name || !quantity || !price || !expiryDate) {
      res.status(400).send("Bad request: All item fields must be filled");
      return;
    }

    const newItem = await model.addItem({ name, quantity, price, expiryDate });
    res.status(201).json(newItem);
  } catch (error) {
    console.error("Error adding item to inventory", error);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, quantity, price, expiryDate } = req.body;

    if (!name || !quantity || !price || !expiryDate) {
      res.status(400).send("Bad request: All item fields must be filled");
      return;
    }

    const updatedItem = await model.updateItem(id, {
      name,
      quantity,
      price,
      expiryDate,
    });
    if (!updatedItem) {
      res.status(404).send("Item not found");
      return;
    }
    res.json(updatedItem);
  } catch (error) {
    console.error("Error updating item", error);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deletedItem = await model.deleteItem(id);
    if (!deletedItem) {
      res.status(404).send("Item not found");
      return;
    }
    res.status(204).end();
  } catch (error) {
    console.error("Error deleting item", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
