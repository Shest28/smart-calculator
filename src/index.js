class SmartCalculator {
  constructor(initialValue) {
	this.value = initialValue;
	//this.prevValue = 1;
	this.prev = null;
	this.operator = '';
	this.number = null;
  }
  
  toString() {
        return this.value;
    }

  add(number) {
    this.value = this.value + number;	
	this.operator = '+';
	this.number = number;
	this.prev = this;
	return this;
  }
  
  subtract(number) {
	this.prev = this;
    this.value = this.value - number;
	this.operator = '-';
	return this;
  }

  multiply(number) {
	if (this.operator == '+') {	
		let temp = this.prev.value - this.prev.number;
		this.value = temp + this.prev.number * number;	
		this.operator = '*';
		this.number = number;
		this.prev = this;
		return this;
	}
	if (this.operator == '-') {
		let temp = this.prev.value + this.prev.number;	    
		this.value = temp - this.prev.number * number;
		this.operator = '*';
		this.number = number;
		this.prev = this;
		return this;
	}
    this.value = this.value * number;
	this.operator = '*';
		this.number = number;
		this.prev = this;
		return this;
  }

  devide(number) {
	if (this.operator == '+') {
		let temp = this.prev.value - this.prev.number;	
		this.value = temp + this.prev.number / number;
		this.operator = '/';
		this.number = number;
		this.prev = this;
		return this;
	}
	if (this.operator == '-') {
		let temp = this.prev.value + this.prev.number;	    
		this.value = temp - this.prev.number / number;
		this.operator = '/';
		this.number = number;
		this.prev = this;
		return this;
	}
    this.value = this.prev.value / number;
	this.operator = '/';
	this.number = number;
	this.prev = this;
	return this;
  }

  pow(number) {
	if (!this.prev) {
		this.value = Math.pow(this.value, number);
		this.operator = '^';
		this.number = number;
		this.prev = this;
		return this;
	}
	
	if (this.operator == '+') {
		let temp = this.prev.value - this.prev.number;
		this.value = temp + Math.pow(this.prev.number, number);
		this.operator = '^';
		this.number = number;
		this.prev = this;
		return this;
	}
	if (this.operator == '-') {
		let temp = this.prev.value + this.prev.number;
		this.value = temp - Math.pow(this.prev.number, number);
		this.operator = '^';
		this.number = number;
		this.prev = this;
		return this;
	}
	/*if (this.prev.operator == '^') {
		if (this.prev.prev.operator == '+') {
			let temp = this.prev.prev.value - Math.pow(this.prev.prev.number, this.prev.number);
			this.value = temp + Math.pow(this.prev.prev.number, number * this.prev.number);
			this.prev.operator = '^';
			this.number = number;
			this.prev = this;
			return this;
		}
		if (this.prev.prev.operator == '-') {
			let temp = this.prev.prev.value + Math.pow(this.prev.prev.number, this.prev.number);
			this.value = temp - Math.pow(this.prev.prev.number, number * this.prev.number);
			this.prev.operator = '^';
			this.number = number;
			this.prev = this;
			return this;
		}
		
		let temp = this.prev.pow(this.prev.number) value Math.pow(this.prev.value, this.prev.number);
		
		this.value = temp + this.prev.pow(number, number);	
		
		this.value = this.prev.value Math.pow(this.value, 1 / this.prevValue);
		this.value = Math.pow(this.value, number * this.prevValue);
		this.prevValue = number + prevValue;
		return this;
	}		*/
	
    this.value = Math.pow(this.value, number);
	this.operator = '^';
	this.number = number;
	this.prev = this;
	return this;
  }
}

module.exports = SmartCalculator;
