// tests/pedidoController.test.js

const PedidoController = require('../Controller/PedidoControler');

describe('PedidoController', () => {
  let pedidoController;

  beforeEach(() => {
    // Configuração inicial antes de cada teste
    pedidoController = new PedidoController();
  });

  afterEach(() => {
    // Limpar estado após teste
  });

  it('Criar um novo pedido', () => {
    const req = {
      body: {
        cliente: 'Dylon',
        itens: ['Pizza', 'Coca-Cola'],
        endereco: 'Artesão, 1440'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    // Execução
    pedidoController.criarPedido(req, res);

    // Verificação
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalled();
  });

  it('Obter um pedido por ID', () => {
    const req = {
      params: {
        id: 1
      }
    };
    const res = {
      json: jest.fn()
    };

    pedidoController.obterPedidoPorId(req, res);

    expect(res.json).toHaveBeenCalled();
  });

});