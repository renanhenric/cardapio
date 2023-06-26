const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cardapioRoutes = require('./Microservices/Controller/CardapioControler');
const pedidoRoutes = require('./Microservices/Controller/PedidoControler');

dotenv.config({ path: './Microservices/Shared/Config/server.config' });

app.use(express.json());
app.use('/View/cardapio.html', cardapioRoutes);
app.use('/View/pedido.html', pedidoRoutes);
app.use(express.static(__dirname + '/Microservices/View'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

    // Exibir as configurações
    console.log('Configurations:');
    console.log('PORT:', process.env.PORT);
    console.log('DB_HOST:', process.env.DB_HOST);
    console.log('DB_PORT:', process.env.DB_PORT);
    console.log('DB_USERNAME:', process.env.DB_USERNAME);
    console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

});