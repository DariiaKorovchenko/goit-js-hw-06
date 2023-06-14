const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const makeIngredientsItems = ingredientsList => {
  return ingredientsList.map(ingredient => {
  const newItem = document.createElement('li');
  newItem.textContent = ingredient;
  newItem.classList.add('item');

  return newItem;
})};

const ingredientsItemsEl = makeIngredientsItems(ingredients);

ingredientsEl.append(...ingredientsItemsEl);