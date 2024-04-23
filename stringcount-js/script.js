let userWord = prompt("Enter a word");
let wordLength = userWord.length;

if (userWord === "" || !userWord == "") {
  window.alert("You have not entered a word.");
} else {
  window.alert("The word " + userWord + "has the length of " + wordLength);
}
