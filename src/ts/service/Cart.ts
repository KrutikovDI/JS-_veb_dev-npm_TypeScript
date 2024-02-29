import Buyable from '../domain/Buyable';
 
export default class Cart {
  private _items: Buyable[] = [];
 
  add(item: Buyable): void {
      this._items.push(item);
  }
 
  get items(): Buyable[] {
      return [...this._items];
  }
 
  sum(): number {
    return this._items.reduce((sum: number, prod: Buyable) => sum + prod.price, 0);
  }
 
  sumWithDiscount(discount: number): number {
    return this._items.reduce((sum: number, prod: Buyable) => sum + (prod.price - discount), 0);
  }
 
  removeProduct(id: number): void {
    let index: number = this._items.findIndex(i => i.id === id)
    if (index == -1) {
      console.log("Элемент с таким id не найден")
    } else {this._items.splice(index, 1)}
  }
}
