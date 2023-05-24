
// FUNCTIONS
const LoadItems = (catalog) => {
  catalog.forEach((e) => {
    let card = document.createElement("div");
    card.setAttribute("class", "Item");
    card.innerHTML = `
          
            <img class="index__section__libros__grid__item__imagen"  alt=${e.name} src='${e.img}'/>
            <h4>${e.name}</h4>
            <p>${e.description}</p>
            <h3>$${e.price}</h3>
            <h3 class= 'green'> Stock:${e.stock}</h3> 
            <button class='addbtn' id='${e.id}'><a class='whiteLink'>ADD TO CART</a></button>
        `;
    cardContainer.appendChild(card);
  });
};

const addToCart = (id) => {
  const cartItem = items.find((i) => i.id == id);
  if (cartItem.stock > 0) {
    const item4cart = {
      name: cartItem.name,
      price: cartItem.price,
      stock: cartItem.stock - 1,
      quantity: 1,
    };
    cart.push(item4cart);

    alert(`${item4cart.name} agregado con éxito`);
  } else {
    alert("No hay stock del producto seleccionado");
  }
};

const cartIsEmpty = () => {
  cartContainer.innerHTML = ``;
  let sign = document.createElement("h2");
  sign.innerHTML = `No items in the Cart`;
  cartContainer.appendChild(sign);
};

const itemsInCart = () => {
  cartContainer.innerHTML = ``;
  cart.forEach((e) => {
    let cartItem = document.createElement("div");
    cartItem.innerHTML = `
            <h4>${e.name}</h4>
            <h3>$${e.price}</h3>
            `;
    cartContainer.appendChild(cartItem);
  });
};

const showCart = () => {
  if (cart.length) {
    itemsInCart();
  } else {
    cartIsEmpty();
  }
};

const order = () => {
  let message = "";
  for (let i = 0; i < cart.length; i++) {
    message += `${i + 1} - ${cart[i].name} - $${cart[i].price}\n`;
  }
  return message;
};

const total = () => cart.reduce((acc, val) => acc + val.price, 0);

const checkOutFunction = () => {
  if (cart.length) {
    alert(
      `Su orden:\n${order()}Ha sido generada con éxito. \n\nPrecio total de su orden: $${total()}`
    );
    cart = [];
    showCart();
  } else {
    alert("No hay items en el carrito");
  }
};

// EJECUCION DEL CODIGO

// Genero mis productos y los pusheo a un array
const items = [];

items.push(
  new Item(
    1,
    "Cogonauts Flidas",
    3500,
    "Grindr",
    "Accesories",
    5,
    "./img/cogonauts-flidas-grindr.webp"
  )
);
items.push(
  new Item(
    2,
    "Substrate Eden",
    2500,
    "Substrate - 25L",
    "Growing",
    0,
    "./img/eden-substrate.jpg"
  )
);
items.push(
  new Item(
    3,
    "Sodium Lamp",
    3755,
    "Lamp - 400w",
    "Lighting",
    10,
    "./img/sodium-lamp-400w.jpg"
  )
);

// Determino donde se van a mostrar mi catálogo y carrito
const cardContainer = document.getElementById("cardContainer");
const cartContainer = document.getElementById("cartContainer");

// Cargo mis productos en la página
LoadItems(items);

// Genero un array para el carrito
let cart = [];

// EVENTS

// Agrego eventos a los botones "ADD TOO CART"
const buttons = document.getElementsByClassName("addbtn");
for (let btn of buttons) {
  btn.addEventListener("click", () => addToCart(btn.id));
}

// Agrego eventos al boton "SHOW CART"
const showCartBtn = document.getElementById("showCart");
showCartBtn.addEventListener("click", () => showCart());

// Agrego eventos al boton "CHECKOUT"
const checkOut = document.getElementById("checkOut");
checkOut.addEventListener("click", () => checkOutFunction());
