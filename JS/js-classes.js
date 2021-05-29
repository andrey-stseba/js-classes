// 1) Переписать функцию-конструктор MyArray на классы. *Переписать методы unshift, push для неограниченного числа аргументов.

class MyArray {
  constructor() {
    this.arguments = arguments;
  }
  getLengthArray() {
    return `${this.arguments.length}`;
  }
}

const arr1 = new MyArray(2, 3, 4, 5, 6, 8);
// console.log(arr1.getLengthArray());
// console.dir(arr1);

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
    const arrayRange = [this.from, this.to];
    return arrayRange;
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
