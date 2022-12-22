import faker from 'faker';

const mount = (el) => {
  let cartMessage = `<p>You have ${faker.random.number()} items in your cart</p>`;

  el.innerHTML = cartMessage;
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');

  // Assume that this id is specific for local index, not index from container
  if (el) {
    mount(el);
  }
}

export { mount };
