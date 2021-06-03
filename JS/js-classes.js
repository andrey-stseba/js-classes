// 1) Переписать функцию-конструктор MyArray на классы. *Переписать методы unshift, push для неограниченного числа аргументов.

class MyArray {
  constructor(length = 0) {
    this.length = length;
  }
  pop() {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  }
  push(item) {
    this[this.length] = item;
    return ++this.length;
  }
  shift() {
    if (this.length === 0) {
      return;
    }
    const fistItem = this[0];
    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    delete this[--this.length];
    return fistItem;
  }
}

const myArr = new MyArray();
myArr.push(1);
myArr.push(2);
myArr.push(3);
myArr.pop();

//console.log("myArr :>> ", myArr);

// 2) Реализовать класс RangeValidator(Валидатор диапазона), со следующими свойствами:
// ■ from (number);
// ■ to (number);
class RangeValidator {
  constructor(value1, value2) {
    if (value1 >= value2) {
      throw new RangeError("value1 cannot be >= value2");
    }
    this.from = value1;
    this.to = value2;
  }
  // Реализовать getter'ы и setter'ы для обоих свойств
  set from(value) {
    if (typeof value !== "number") {
      throw new TypeError("value1 must be a number");
    }
    if (value < 0 || value === Infinity || Number.isNaN(value)) {
      throw new RangeError("value1 cannot be < 0 or Infinity, NaN");
    }
    this._from = value;
  }
  set to(value) {
    if (typeof value !== "number") {
      throw new TypeError("value2 must be a number");
    }
    if (value < 0 || Number.isNaN(value)) {
      throw new RangeError("value2 cannot be < 0 or NaN");
    }
    this._to = value;
  }
  get from() {
    return this._from;
  }
  get to() {
    return this._to;
  }
  // Реализовать getter range, который будет возвращать массив с двумя числами диапазона

  get range() {
    return [this.from, this.to];
  }
  // Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон.
  getValidate(n) {
    return n >= this.from && n <= this.to;
  }
}

try {
  const range1 = new RangeValidator(1, 3);
  console.log("range1 >> ", range1);
  range1.to = 3;
  console.log("range1.to :>> ", range1.to);
  console.log("Входит ли число в указанный диапазон ", range1.getValidate(2));
  console.log(range1.range);
} catch (e) {
  console.error(e);
}
