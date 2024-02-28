import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sum(): Buyable[] {
      let sum: number;
      this._items.forEach(i => sum += i.price)
      return sum
      // return this._items.reduce((sum: number, prod: Buyable[]) => {sum + prod.price}, 0);
    }
}