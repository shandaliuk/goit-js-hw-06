const itemElements = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemElements.length}`);
itemElements.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelector('ul').children.length}`);
});
