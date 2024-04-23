let userNumber = prompt("Enter a number between 0 and 10");
if (userNumber > 10 || userNumber < 0) {
    alert("Please enter a number between 0 and 10");
    
} else {
    alert("The result is " + userNumber * 9);
}