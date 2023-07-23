// self invoking function
(function () {
    alert("This is a self involking alert box ")
  })();

//   Aynonmus function
let cube = function(x) {
    return x ** 3;
  };
  let result=cube(3)
  console.log(result)
  
  // function to convert farheinheit to degree
  function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;

  }
  
  let fahrenheitValue = 75;
  let celsiusValue = fahrenheitToCelsius(fahrenheitValue);
  console.log(celsiusValue);  // Output: 26.666666666666668
