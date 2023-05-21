const fs = require("fs/promises");
const path = require("path");

const dataFilePath = path.resolve(
  __dirname,
  "backend-platesaver/inventory.json"
);

async function getAllItems() {
  try {
    const data = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading inventory data file", error);
    throw error;
  }
}

async function getItemById(id) {
  try {
    const data = await fs.readFile(dataFilePath, "utf-8");
    const items = JSON.parse(data);
    return items.find((item) => item.id === id);
  } catch (error) {
    console.error("Error reading inventory data file", error);
    throw error;
  }
}

async function addItem(item) {
  try {
    let items = [];

    // Read the existing data from inventory.json
    const data = await fs.readFile(dataFilePath, "utf-8");
    if (data) {
      items = JSON.parse(data);
    }

    const newItem = { id: Date.now(), ...item };
    items.push(newItem);

    // Write the updated data back to inventory.json
    await fs.writeFile(dataFilePath, JSON.stringify(items, null, 2), "utf-8");

    return newItem;
  } catch (error) {
    console.error("Error adding item", error);
    throw error;
  }
}

async function updateItem(id, updatedItem) {
  try {
    const data = await fs.readFile(dataFilePath, "utf-8");
    let items = JSON.parse(data);
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) {
      return null;
    }
    items[index] = { id, ...updatedItem };
    await fs.writeFile(dataFilePath, JSON.stringify(items, null, 2), "utf-8");
    return items[index];
  } catch (error) {
    console.error("Error updating item", error);
    throw error;
  }
}

async function deleteItem(id) {
  try {
    const data = await fs.readFile(dataFilePath, "utf-8");
    let items = JSON.parse(data);
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) {
      return null;
    }
    const deletedItem = items.splice(index, 1)[0];
    await fs.writeFile(dataFilePath, JSON.stringify(items, null, 2), "utf-8");
    return deletedItem;
  } catch (error) {
    console.error("Error deleting item", error);
    throw error;
  }
}

module.exports = {
  getAllItems,
  getItemById,
  addItem,
  updateItem,
  deleteItem,
};
