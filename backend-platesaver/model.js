let inventory = [
    { id: 1, name: 'Apples', category: 'Fruit', quantity: 50 },
    { id: 2, name: 'Bananas', category: 'Fruit', quantity: 100 },
    { id: 3, name: 'Potatoes', category: 'Vegetables', quantity: 80 },
    // Add more items as required
  ];
  
  function getAllItems() {
    return inventory;
  }
  
  function getItemById(id) {
    return inventory.find(item => item.id === id);
  }
  
  function addItem(item) {
    inventory.push(item);
    return item;
  }
  
  function updateItem(id, updatedItem) {
    const index = inventory.findIndex(item => item.id === id);
    if (index === -1) {
      return null;
    }
  
    inventory[index] = updatedItem;
    return updatedItem;
  }
  
  function deleteItem(id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index === -1) {
      return null;
    }
  
    const deletedItem = inventory.splice(index, 1);
    return deletedItem;
  }
  
  module.exports = {
    getAllItems,
    getItemById,
    addItem,
    updateItem,
    deleteItem,
  };