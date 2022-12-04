const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsItemsElements = ingredients.map(ingredient => {
  const itemElement = document.createElement('li');
  itemElement.textContent = ingredient;
  itemElement.classList.add('item');
  return itemElement;
});

const ingredientsListElement = document.querySelector('#ingredients');
ingredientsListElement.append(...ingredientsItemsElements);
