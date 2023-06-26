// shared/utils/helpers.js

function formatCurrency(value) {
    return `R$ ${value.toFixed(2)}`;
  }
  
  function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
  }
  
  module.exports = {
    formatCurrency,
    formatDate
  };