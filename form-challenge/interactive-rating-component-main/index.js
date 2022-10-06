const submitBtn = document.getElementById("submitButton");
const form = document.querySelector(".rate_form");
const thankMessage = document.querySelector("#submittedRating");
const submitted = document.querySelector(".submitted");
const mainText = document.querySelector(".main");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const rating = e.target["rating"].value;
  thankMessage.innerHTML = `You selected ${rating} out of 5`;
  form.classList.add("remove");
  submitted.classList.remove("remove");
  mainText.classList.add("remove");
});

