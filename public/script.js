document.addEventListener('DOMContentLoaded', async () => {
  const productList = document.getElementById('product-grid');
  const products = await fetch('/api/products').then(res => res.json());
  
  products.forEach(product => {
    const productCard = createProductCard(product);
    productList.appendChild(productCard);
  });
});

// function createProductCard(product) {
//   const card = document.createElement('div');
//   card.className = 'max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white';

//   const img = document.createElement('img');
//   img.className = 'h-40 bg-cover bg-center';
//   img.src = 'images/' + product.images[0]; // Assuming the first image is the main one.
//   img.alt = product.name;

//   const cardBody = document.createElement('div');
//   cardBody.className = 'px-6 py-4';

//   const productName = document.createElement('div');
//   productName.className = 'font-bold text-xl mb-2';
//   productName.textContent = product.name;

//   const productDescription = document.createElement('p');
//   productDescription.className = 'text-gray-700 text-base';
//   productDescription.textContent = product.description;

//   cardBody.appendChild(productName);
//   cardBody.appendChild(productDescription);

//   product.variants.forEach(option => {
//     const button = document.createElement('button');
//     button.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1';
//     button.textContent = `${option.size} - $${option.price}`;
//     cardBody.appendChild(button);
//   });

//   card.appendChild(img);
//   card.appendChild(cardBody);
  
//   return card;
// }z
function createProductCard(product) {
  // Create the main product card container
  const card = document.createElement('div');
  card.className = 'border p-4';

  // Create the image container
  const imgContainer = document.createElement('div');
  imgContainer.className = 'bg-gray-200 p-4';
  card.appendChild(imgContainer);

  // Create the image div and set background image
  const imgDiv = document.createElement('div');
  imgDiv.className = 'h-40 bg-cover bg-center';
  imgDiv.style.backgroundImage = `url('images/${product.images[0]}')`; // Assuming the first image is the main one.
  imgContainer.appendChild(imgDiv);

  // Create container for text content
  const textContent = document.createElement('div');
  textContent.className = 'mt-2';
  card.appendChild(textContent);

  // Add product name
  const productName = document.createElement('p');
  productName.className = 'text-sm text-gray-600';
  productName.textContent = product.name;
  textContent.appendChild(productName);

  // Add product price
  product.variants.forEach(option => {
    const button = document.createElement('button');
    button.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1';
    button.textContent = `${option.size} - $${option.price}`;
    card.appendChild(button);
  });

  // const productPrice = document.createElement('p');
  // productPrice.className = 'text-lg font-bold';
  // productPrice.innerHTML = `xxx $${product.price} <span class="text-sm line-through text-gray-500">${product.originalPrice}</span>`;
  // textContent.appendChild(productPrice);

  return card;
}