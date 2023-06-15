const categoriesEl = document.querySelectorAll("li.item");
const numberOfCategories = categoriesEl.length;
console.log("Number of categories: ", numberOfCategories);

let numberOfItems = 0;
categoriesEl.forEach((element) => {
  console.log("Category: ", element.firstElementChild.textContent);
  numberOfItems = element.children[1].children.length;
  console.log("Elements: ", numberOfItems);
});
