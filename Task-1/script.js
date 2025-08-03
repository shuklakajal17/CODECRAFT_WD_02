function calculate(operator) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let result = '';

  if (isNaN(num1) || isNaN(num2)) {
    result = 'Please enter valid numbers.';
  } else {
    if (operator === '+') {
      result = num1 + num2;
    } else if (operator === '-') {
      result = num1 - num2;
    } else if (operator === '*') {
      result = num1 * num2;
    } else if (operator === '/') {
      if (num2 === 0) {
        result = 'Cannot divide by zero.';
      } else {
        result = num1 / num2;
      }
    }
  }

  document.getElementById('result').textContent = 'Result: ' + result;
}
