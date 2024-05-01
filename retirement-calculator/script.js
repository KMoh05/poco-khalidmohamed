let userAge = +prompt("What is your age?");
if (userAge <= 0 || isNaN(userAge)) {
  alert("Please enter a valid age.");
}

let retirementAge = +prompt("At what age would you like to retire?");
if (retirementAge <= userAge || isNaN(retirementAge)) {
  alert("Please enter a valid retirement age.");
}
let yearsToRetirement = retirementAge - userAge;
alert("You have " + yearsToRetirement + " years left until you can retire.");
