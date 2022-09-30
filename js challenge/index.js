//Variables for function - changes image + text+ other css

let btnNext = document.querySelector("#fashionButton");
let bckgrndImage = document.querySelector("#mainImage");
let content = document.querySelector("#semiBold");
let collectionsButton = document.querySelector("#collections");
//Function - on click will change image/css
btnNext.addEventListener("click", () => {
  bckgrndImage.style.cssText =
    "background-image: url(./images/mensBackground.png);width:650px; height:700px; right:0px;";
  content.innerHTML = "You should always <br/>feel your best";
  collectionsButton.style.background =
    "linear-gradient(45deg, rgba(80,199,236,1) 0%, rgba(8,26,237,1) 72%)";
});
// Reverts page back to original
let btnBack = document.getElementById("backButton");

btnBack.addEventListener("click", () => {
  location.reload();
});
