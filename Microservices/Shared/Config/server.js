const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Verifica o caminho da requisição
  if (req.url === '/') {
    // Define o caminho do arquivo HTML
    const filePath = path.join(__dirname, '/View/cardapio.html');

    // Lê o conteúdo do arquivo HTML
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        // Se ocorrer um erro ao ler o arquivo, retorna um erro 500
        res.writeHead(500);
        res.end('Erro interno do servidor');
      } else {
        // Define o cabeçalho da resposta
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // Retorna o conteúdo do arquivo HTML
        res.end(content);
      }
    });
  } else {
    // Retorna um erro 404 para qualquer outro caminho
    res.writeHead(404);
    res.end('Página não encontrada');
  }
});

// Inicia o servidor na porta 3000
server.listen(3000, () => {
  console.log('Servidor está rodando em http://localhost:3000');
});