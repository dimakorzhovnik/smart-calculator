class SmartCalculator {
  constructor(initialValue) {
    this.tempValue = initialValue.toString();
  }
  
  add(number) {
    this.tempValue += '+' + number;
    return this;
  }
  
  subtract(number) {
    this.tempValue += '-' + number;
    return this;
  }

  multiply(number) {
    this.tempValue += '*' + number;
    return this;
  }

  devide(number) {
    this.tempValue += '/' + number;
    return this;
  }

  pow(number) {
    this.tempValue+= '**' + number;
    return this;
  }
  valueOf(){
    return eval(this.tempValue);
  }
}

module.exports = SmartCalculator;

