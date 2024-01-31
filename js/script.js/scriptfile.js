const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{
  cart.classList.add('cart-active');
});

btnClose.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
  });

  document.addEventListener('DOMContentLoaded',loadfood);
  function loadfood(){
      loadcontent();
  }
function loadcontent(){
    let btnRemove=document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeItem);
    });

    let qtyElements=document.querySelectorAll('.cart-quantity');
    qtyElements.forEach((input)=>{
        input.addEventListener('change',changeQty);
    });

    let cartBtns=document.querySelectorAll('.add-cart');
    cartBtns.forEach((btn)=>{
        btn.addEventListener('click',addcart);
    });
}

function removeItem(){
    if(confirm('Are you sure to remove?')){
    this.parentElement.remove();
}
}
function changeQty(){
    if((this.value<1)){
        this.value=1;
    }
}
function addcart(){
    let food=this.parentElement;
    let title=food.querySelector('.food-title').
    innerHTML;
    let price=food.querySelector('.food-price').
    innerHTML;
    let imgsrc=food.querySelector('.food-img').src; 
}