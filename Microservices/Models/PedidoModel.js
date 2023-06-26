// models/pedidoModels.js

class Pedido {
    constructor(id, cliente, itens, endereco, status) {
      this.id = id;
      this.cliente = cliente;
      this.itens = itens;
      this.endereco = endereco;
      this.status = status;
    }
  }
  
  module.exports = Pedido;