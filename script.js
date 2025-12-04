/* Product data */
const products = [
  {id:1, name:"Shirt", price:500, img:"https://picsum.photos/200?1"},
  {id:2, name:"Watch", price:1200, img:"https://picsum.photos/200?2"},
  {id:3, name:"Shoes", price:900, img:"https://picsum.photos/200?3"},
];

/* Display products */
if (document.getElementById("product-list")) {
  let html = "";
  products.forEach(p => {
    html += `
      <div class="product">
        <img src="${p.img}" width="100%">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button class="btn" onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
  document.getElementById("product-list").innerHTML = html;
}

/* Cart */
let cart = JSON.parse(localStorage.getItem("cart")) || {};

function addToCart(id){
  cart[id] = (cart[id] || 0) + 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

function showCart() {
  const container = document.getElementById("cart-items");
  let html = "";
  let total = 0;

  for (let id in cart) {
    const p = products.find(x => x.id == id);
    total += p.price * cart[id];

    html += `
      <p>${p.name} x ${cart[id]} — ₹${p.price * cart[id]}</p>
    `;
  }

  container.innerHTML = html;
  document.getElementById("cart-total").textContent = total;
}

if (document.getElementById("cart-items")) showCart();

function checkout(){
  alert("Checkout complete!");
  localStorage.clear();
  location.reload();
}
