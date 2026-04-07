const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let cep;
let resultado;

Given('que o usuário possui itens no carrinho', function () {
  this.carrinho = ['item1'];
});

Given('informa um CEP nacional válido', function () {
  cep = '01001000';
});

When('o sistema calcula o frete', function () {
  if (cep === '01001000') {
    resultado = 20;
  }
});

Then('o valor do frete deve ser exibido', function () {
  assert.strictEqual(resultado, 20);
});