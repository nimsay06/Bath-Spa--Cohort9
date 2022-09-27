// document.querySelector("#listInput").addEventListener("keydown", (event) => {
//   if (event.key == "Enter") addItems();
// });

// function addItems() {
//   var items = [];
//   let itemValue = document.getElementById("listInput").value;
//   items.push(itemValue);
//   const newItem = document.createElement("li");
//   newItem.textContent = `${addedItem}`;
//   console.log(items);
//   document.querySelector("#listItems").appendChild(addedItem);
// }
// ///add items to list, display items, alert item already added if in lis//
// //push input of input field to items
var items = [];

document.querySelector("#listInput").addEventListener("keydown", (event) => {
  if (event.key == "Enter") addItem();
});

addItem = () => {
  let itemValue = document.getElementById("listInput").value;
  if (items.includes(itemValue)) {
    alert("This item is already on your list");
  } else if (itemValue === "") {
    alert("Enter valid item name");
  } else {
    items.push(itemValue);
    const newItem = document.createElement("h2");
    newItem.textContent = "- " + document.querySelector("#listInput").value;
    document.querySelector("#listItems").appendChild(newItem);
    document.querySelector("#listInput").value = "";
  }
};
