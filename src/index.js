const evaluate = require('./evaluate.js');
class SmartCalculator {
  constructor(initialValue) {
	this.value = initialValue;
	this.str = initialValue + '';
  }
  
 toString() {
	this.value = evaluate(this.str.match(/\d+|\+|-|\*|\/|\^/g));
    return this.value;
  }

  add(number) {
	this.str += '+' + number;
	return this;
  }
  
  subtract(number) {
	this.str += '-' + number;
	return this;
  }

  multiply(number) {
	this.str += '*' + number;
	return this;
	}

  devide(number) {
	this.str += '/' + number;
	return this;
  }

  pow(number) {
	this.str += '^' + number;
	return this;
  }
} 

module.exports = SmartCalculator;
