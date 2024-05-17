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


const weekdaysArray = [1, 5, 6, 3, 9];

function weekNumbersToWords(array) {
    let weekNames = [];
    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case 1:
                weekNames.push("Monday");
                break;
            case 2:
                weekNames.push("Tuesday");
                break;
            case 3:
                weekNames.push("Wednesday");
                break;
            case 4:
                weekNames.push("Thursday");
                break;
            case 5:
                weekNames.push("Friday");
                break;
            case 6:
                weekNames.push("Saturday");
                break;
            case 0:
                weekNames.push("Sunday");
                break;
            default:
        }
    }
    return weekNames;
}

console.log(weekNumbersToWords(weekdaysArray));
