function StringBuilder(baseValue) {
  this.value = baseValue;
}
StringBuilder.prototype.getValue = function () {
  return this.value;
};
StringBuilder.prototype.padEnd = function (str) {
  this.value += str;
};
StringBuilder.prototype.padStart = function (str) {
  this.value = str + this.value;
};
StringBuilder.prototype.padBoth = function (str) {
  // this._value = str + this._value + str;
  this.padEnd(str);
  this.padStart(str);
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
