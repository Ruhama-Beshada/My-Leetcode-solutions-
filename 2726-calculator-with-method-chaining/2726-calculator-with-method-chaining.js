class Calculator {
  constructor(value) {
    this._validateNumber(value);
    this.result = value;
  }

  _validateNumber(value) {
    if (typeof value !== "number" || Number.isNaN(value)) {
      throw new Error("Invalid number input");
    }
  }

  add(value) {
    this._validateNumber(value);
    this.result += value;
    return this;
  }

  subtract(value) {
    this._validateNumber(value);
    this.result -= value;
    return this;
  }

  multiply(value) {
    this._validateNumber(value);
    this.result *= value;
    return this;
  }

  divide(value) {
    this._validateNumber(value);
    if (value === 0) throw new Error("Division by zero is not allowed");
    this.result /= value;
    return this;
  }

  power(value) {
    this._validateNumber(value);
    this.result **= value;
    return this;
  }

  getResult() {
    return this.result;
  }
}
