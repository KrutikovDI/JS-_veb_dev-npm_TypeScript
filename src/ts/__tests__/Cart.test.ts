import Cart from '../service/Cart';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toEqual(0);
})
 
test('Добавим объекты в массив', () => {
  const cart = new Cart();
  cart.add({id: 1, name: 'Apple', price: 100});
  cart.add({id: 2, name: 'Banana', price: 200});
  cart.add({id: 3, name: 'Mango', price: 300});
  const correct = {id: 2, name: 'Banana', price: 200};
  expect(cart.items[1]).toEqual(correct);
})
 
test('Найдем сумму всех товаров', () => {
  const cart = new Cart();
  cart.add({id: 1, name: 'Apple', price: 100});
  cart.add({id: 2, name: 'Banana', price: 200});
  cart.add({id: 3, name: 'Mango', price: 300});
  expect(cart.sum()).toBe(600); 
})
 
test ('Найдем сумму всех товаров со скидкой', ()=> {
  const cart = new Cart();
  cart.add({id: 1, name: 'Apple', price: 100});
  cart.add({id: 2, name: 'Banana', price: 200});
  cart.add({id: 3, name: 'Mango', price: 300});
  expect (cart.sumWithDiscount(20)).toBe(540);
})
 
test ('Удалим товар из списка', () => {
  const cart = new Cart();
  cart.add({id: 1, name: 'Apple', price: 100});
  cart.add({id: 2, name: 'Banana', price: 200});
  cart.add({id: 3, name: 'Mango', price: 300});
  cart.removeProduct(2)
  expect(cart.items.length).toBe(2);
})
