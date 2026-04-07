function calcularFrete(cep) {
  if (!cep) throw new Error("CEP vazio");
  if (!/^\d{8}$/.test(cep)) throw new Error("Formato inválido");
  if (cep === "00000000") throw new Error("CEP inexistente");

  return 20;
}

module.exports = { calcularFrete };



const { calcularFrete } = require('../../src/services/frete.service');

test('frete válido', () => {
  expect(calcularFrete('01001000')).toBe(20);
});

test('cep inválido', () => {
  expect(() => calcularFrete('abc')).toThrow();
});