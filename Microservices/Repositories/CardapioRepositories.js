const CardapioItem = require('../Models/CardapioModels');

const cardapioItems = [];


function getAllItems() {
  return cardapioItems;
}



function getItemById(id) {
  return cardapioItems.find(item => item.id === id);
}


function addItem(item) {
  cardapioItems.push(item);
}


function updateItem(item) {
  const index = cardapioItems.findIndex(existingItem => existingItem.id === item.id);
  if (index !== -1) {
    cardapioItems[index] = item;
  }
}



function removeItem(id) {
  const index = cardapioItems.findIndex(item => item.id === id);
  if (index !== -1) {
    cardapioItems.splice(index, 1);
  }
}

module.exports = {
  getAllItems,
  getItemById,
  addItem,
  updateItem,
  removeItem
};