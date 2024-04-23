let userAge = +prompt("What is your age?");

/* if (isNaN(userAge)) {
  alert("Please enter a valid age.");
} else if (userAge > 17) {
  alert("Sorry, you are not old enough to view this content.");
} else if (userAge === 17) {
  alert("You will be able to view this content next year.");
} else if (userAge <= 18) {
  alert("You are old enough to view this content.");
}
 */

switch (userAge) {
    case 17:
        alert("Sorry, you are not old enough to view this content.");
    default:
        break;
}