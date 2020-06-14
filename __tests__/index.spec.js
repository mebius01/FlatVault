const {
  sum,
  minus
} = require('../src/js/sum')

describe("Тест файла sum.js", () => {
  it("Сумма двух чисел", () => {
    expect(sum(2, 3)).toBe(5);
  })

  it("Не равно нуль", () => {
    expect(sum(4, 2)).not.toBe(0);
  })
});


test('plus!', () => {
  expect(sum(1, 2)).toBe(3);
});

test('minus!', () => {
  expect(minus(3, 1)).toBe(2);
});