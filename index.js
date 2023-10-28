let addtobtn = document.getElementsByClassName('addto');
for (var i = 0; i < addtobtn.length; i++) {
    var button = addtobtn[i];
    button.addEventListener('click', addtocart);
}

let cart = document.querySelector('#ancart');
let flag = 0;

console.log(cart);
cart.addEventListener('click', function() {
    setTimeout(function () {
        cross.style.transform = "translatex(-0px)";
        cartdiv.style.transform = "translatex(-400px)";
        cartdiv.style.opacity=1;
        console.log("clicked");
    },)
    // console.log("clicked");
})

cart.addEventListener("click",()=>
{
    console.log("hii");
})

let cross = document.querySelector('#cross');
let cartdiv = document.querySelector('#cartdiv');

cross.addEventListener('click', function () {
    cross.style.transform = "translatex(400px)";
    cartdiv.style.transform = "translatex(400px)";
    cartdiv.style.opacity=1;
})

function addtocart(event){
    var button = event.target;
    var item = button.parentElement;
    let title = item.getElementsByClassName('ptitle')[0].innerText;
    let pprice = item.getElementsByClassName('pprice')[0].innerText;
    console.log('hii');
    let name = document.createElement('h4');
    let price = document.createElement('h4');

    name.innerText = title;
    price.innerText = pprice;

    cartdiv.appendChild(name);
    cartdiv.appendChild(price);
}
