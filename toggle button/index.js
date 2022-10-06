// add a class to body when click toggle button
// this class will change body colors- to dark mode/light mode
// first need to create function that adds or removes class
// need tp
function toggleMode() {
  const body = document.getElementById("custom-body");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
  } else {
    body.classList.add("dark-mode");
  }
}
