import faker from 'faker';

let cartMessage = `<p>You have ${faker.random.number()} items in your cart</p>`;

document.querySelector('#dev-cart').innerHTML = cartMessage;