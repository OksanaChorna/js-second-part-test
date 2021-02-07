const StringBuilder = function (baseValue) {
  this.value = baseValue;

  this.getValue = function () {
    return this.value;
  };
  this.padEnd = function (str) {
    this.value += str;
  };
  this.padStart = function (str) {
    this.value = str + this.value;
  };
  this.padBoth = function (str) {
    // this._value = str + this._value + str;
    this.padEnd(str);
    this.padStart(str);
  };
};

// Пиши код выше этой строки
const builder = new StringBuilder(".");
console.log(builder.getValue()); // '.'
builder.padStart("^");
console.log(builder.getValue()); // '^.'
builder.padEnd("^");
console.log(builder.getValue()); // '^.^'
builder.padBoth("=");
console.log(builder.getValue()); // '=^.^='
