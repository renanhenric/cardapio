// models/CardapioModels.js

class CardapioItem {
  constructor(id, nome, descricao, preco) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
  }
}

module.exports = CardapioItem;