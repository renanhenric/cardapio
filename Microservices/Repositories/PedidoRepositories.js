// repositories/pedidoRepository.js

const Pedido = require('../models/pedidoModel');

class PedidoRepository {
  constructor() {
    this.pedidos = [];
    this.nextId = 1;
  }

  criarPedido(cliente, itens, endereco) {
    const novoPedido = new Pedido(this.nextId++, cliente, itens, endereco, 'pendente');
    this.pedidos.push(novoPedido);
    return novoPedido;
  }

  obterPedidoPorId(id) {
    return this.pedidos.find(pedido => pedido.id === id);
  }

  atualizarStatusPedido(id, novoStatus) {
    const pedido = this.obterPedidoPorId(id);
    if (pedido) {
      pedido.status = novoStatus;
      return pedido;
    }
    return null;
  }

  cancelarPedido(id) {
    const index = this.pedidos.findIndex(pedido => pedido.id === id);
    if (index !== -1) {
      const pedidoCancelado = this.pedidos[index];
      this.pedidos.splice(index, 1);
      return pedidoCancelado;
    }
    return null;
  }
}

module.exports = PedidoRepository;