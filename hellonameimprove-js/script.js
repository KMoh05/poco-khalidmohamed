function helloNameImprove() {
  let userName = prompt("Enter your name");
  if (userName === "" || userName == null) {
    window.alert("Hello stranger!");
  } else {
    window.alert("Hello " + userName);
  }
}

helloNameImprove();