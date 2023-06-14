const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const ingredientsItemsEl = ingredients.map(ingredient => {
  const newItem = document.createElement('li');
  newItem.textContent = ingredient;
  newItem.classList.add('item');

  return newItem;
});

ingredientsEl.append(...ingredientsItemsEl);