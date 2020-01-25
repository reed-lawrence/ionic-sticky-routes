export interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}

export class Product implements IProduct {
  id: number = 0;
  name: string = '';
  price: number = 0;
  category: string = '';
  description: string = ''

  constructor(init?: Partial<IProduct>) {
    if (init) {
      if (init.category) { this.category = init.category; }
      if (init.name) { this.name = init.name; }
      if (init.price) { this.price = init.price; }
      if (init.id) { this.id = init.id; }
      if (init.description) { this.description = init.description; }
    }
  }

  get priceString() {
    let output = '$';
    if (this.price < 0) {
      output = '($';
    }
    const absAmt = Math.abs(this.price);
    const amountStr = absAmt.toString();
    if (absAmt < 100) {
      output += '0.';
      if (absAmt < 10) {
        output += '0' + amountStr;
      } else {
        output += amountStr;
      }
    } else {
      const dollarStr = amountStr.substr(0, amountStr.length - 2);
      const centsStr = amountStr.substr(amountStr.length - 2, amountStr.length);
      output += dollarStr + '.' + centsStr;
    }

    if (this.price < 0) {
      output += ')';
    }

    return output;
  }

  calculateDiscount(discountAmt: number) {
    return this.price * discountAmt;
  }

}
