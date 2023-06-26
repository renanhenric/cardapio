const CardapioRepository = require('../Repositories/CardapioRepositories');

// Obtém todos os itens do cardápio
function getAllItems() {
  return CardapioRepository.getAllItems();
}

// Obtém um item do cardápio pelo ID
function getItemById(id) {
  return CardapioRepository.getItemById(id);
}


function addItem(item) {
  // Realiza validações, lógica de negócio ou outras operações antes de chamar o repositório
  return CardapioRepository.addItem(item);
}


function updateItem(item) {
  // Realiza validações, lógica de negócio ou outras operações antes de chamar o repositório
  return CardapioRepository.updateItem(item);
}


function removeItem(id) {
  return CardapioRepository.removeItem(id);
}

module.exports = {
  getAllItems,
  getItemById,
  addItem,
  updateItem,
  removeItem
};