function userInput() {
  let bill = +prompt("What is the total bill amount?");
  if (bill <= 0 || isNaN(bill)) {
    alert("Please enter a valid bill amount.");
    return;
  }
  let tipPercentage = +prompt("What percentage would you like to tip?");
  if (tipPercentage <= 0 || isNaN(tipPercentage)) {
    alert("Please enter a valid tip percentage.");
    return;
  }
  let tipAmount = bill * (tipPercentage / 100);
  alert(`The tip amount is ${tipAmount}`);
}

userInput();
