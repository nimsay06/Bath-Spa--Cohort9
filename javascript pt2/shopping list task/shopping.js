//create item array
var items = [];
//event listener if enter button was clicked which starts function
document.querySelector("#listInput").addEventListener("keydown", (event) => {
  if (event.key == "Enter") addItem();
});
//function to add items to list/check if item already there/if item name is valid
addItem = () => {
  let itemValue = document.getElementById("listInput").value;
  if (items.includes(itemValue)) {
    alert("This item is already on your list");
  } else if (itemValue === "") {
    alert("Enter valid item name");
  } else {
    items.push(itemValue);
    const newItem = document.createElement("h3");
    newItem.textContent = "- " + document.querySelector("#listInput").value;
    document.querySelector("#listItems").appendChild(newItem);
    document.querySelector("#listInput").value = "";
  }
};
