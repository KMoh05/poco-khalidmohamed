let userQuote = prompt("Enter a quote");
let userauthor = prompt("Enter the name of the author");
if (userQuote === "" || userauthor === "") {
  window.alert("Please enter a valid quote and author.");
} else {
  window.alert(userauthor + " says, " +  userQuote);
}
