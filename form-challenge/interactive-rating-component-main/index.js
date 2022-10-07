const submitBtn = document.getElementById("submitButton");
const form = document.querySelector(".rate_form");
const thankMessage = document.querySelector("#submittedRating");
const submitted = document.querySelector(".submitted");
const mainText = document.querySelector(".main");
const ratingBtns = document.querySelectorAll(".formLabel");

// Function for form submission including text change once submitted
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const rating = e.target["rating"].value;
  thankMessage.innerHTML = `You selected ${rating} out of 5`;
  form.classList.add("remove");
  submitted.classList.remove("remove");
  mainText.classList.add("remove");
});

// Function to change background color of button once pressed
ratingBtns.forEach((ratingBtn) => {
  ratingBtn.addEventListener("click", () => {
    ratingBtns.forEach((ratingBtn) => ratingBtn.classList.remove("selected"));
    ratingBtn.classList.add("selected");
  });
});
