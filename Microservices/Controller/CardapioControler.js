const express = require('express');
const router = express.Router();

const cardapioService = require('../Services/CardapioServices');

// Rota para obter o cardápio
router.get('/View/cardapio', (req, res) => {
  try {
    const cardapio = cardapioService.getAllItems();
    res.json(cardapio);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter o cardápio' });
  }
});

// Rota para adicionar um item ao cardápio
router.post('/View/cardapio', (req, res) => {
  try {
    const novoItem = req.body;
    const itemAdicionado = cardapioService.addItem(novoItem);
    res.json(itemAdicionado);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar item ao cardápio' });
  }
});

// Rota para atualizar um item do cardápio
router.put('/View/cardapio/:itemId', (req, res) => {
  try {
    const itemId = req.params.itemId;
    const dadosAtualizados = req.body;
    
    const itemAtualizado = cardapioService.updateItem(itemId, dadosAtualizados);
    
    res.json(itemAtualizado);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar item do cardápio' });
  }
});

// Rota para excluir um item do cardápio
router.delete('/View/cardapio/:itemId', (req, res) => {
  try {
    const itemId = req.params.itemId;
    cardapioService.excluirItem(itemId);
    res.json({ message: 'Item excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir item do cardápio' });
  }
});

module.exports = router;
