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
const ratingItemsList = document.querySelectorAll(".rating__item");
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach((item) =>
  item.addEventListener(
    "click",
    () => (item.parentNode.dataset.totalValue = item.dataset.itemValue)
  )
);
