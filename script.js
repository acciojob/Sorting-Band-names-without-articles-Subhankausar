// Suppose you have an array of band names
let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'Aerosmith'];

// Function to remove articles ('a', 'an', 'the') from band names
function removeArticles(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort the band names without articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Get a reference to the ul element in your HTML
const ul = document.querySelector('#bands');

// Loop through the sorted band names and add them as list items to the ul
bandNames.forEach((name) => {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});
