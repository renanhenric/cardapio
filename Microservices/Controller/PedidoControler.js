// controllers/pedidoController.js
const express = require('express');
const router = express.Router();

const PedidoService = require('../Services/PedidoService');

class PedidoController {
  constructor() {
    this.pedidoService = new PedidoService();
  }

  criarPedido(req, res) {
    const { cliente, itens, endereco } = req.body;
    const novoPedido = this.pedidoService.criarPedido(cliente, itens, endereco);
    res.status(201).json(novoPedido);
  }

  obterPedidoPorId(req, res) {
    const idPedido = parseInt(req.params.id);
    const pedido = this.pedidoService.obterPedidoPorId(idPedido);
    if (pedido) {
      res.json(pedido);
    } else {
      res.status(404).json({ error: 'Pedido não encontrado' });
    }
  }

  atualizarStatusPedido(req, res) {
    const idPedido = parseInt(req.params.id);
    const { status } = req.body;
    const pedidoAtualizado = this.pedidoService.atualizarStatusPedido(idPedido, status);
    if (pedidoAtualizado) {
      res.json(pedidoAtualizado);
    } else {
      res.status(404).json({ error: 'Pedido não encontrado' });
    }
  }

  cancelarPedido(req, res) {
    const idPedido = parseInt(req.params.id);
    const pedidoCancelado = this.pedidoService.cancelarPedido(idPedido);
    if (pedidoCancelado) {
      res.json(pedidoCancelado);
    } else {
      res.status(404).json({ error: 'Pedido não encontrado' });
    }
}
}

module.exports = router;