import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i <= 3; i++) {
    const name = faker.commerce.productName();
  
    products += `<p>${name}</p>`;
  }

  el.innerHTML = products;
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  // Assume that this id is specific for local index, not index from container
  if (el) {
    mount(el);
  }
}

export { mount };