//form//
const form = document.getElementById("form");
console.log(form);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.dir(event);
  console.dir(form);
  const name = form[0];
  const email = form[1];
  console.dir(name.value);
  console.dir(email.value);
  const nameValue = name.value;
  const emailValue = email.value;
  alert(nameValue + " - " + emailValue);
});

//rating//
