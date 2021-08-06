//商品項目
let products = [
	{
		name: 'Way(喂) 短袖T-shirt',
		price: 890,
		inCart: 0
	},
	{
		name: '雞爪吃炒麵 手工渲染長袖棉T',
		price: 1200,
		inCart: 0
	},
	{
		name: '雞爪吃炒麵 素色長袖棉T',
		price: 1000,
		inCart: 0
	},	
	{
		name: '火焰造型嘻哈短鏈',
		price: 400,
		inCart: 0
	},
	{
		name: '壓克力滑板',
		price: 12900,
		inCart: 0
	}
]
//新增至購物車方法
function addcart0(){
	alert("已新增至購物車");
	cartNumbers(products[0]);
	totalCost(products[0]);
}
function addcart1(){
	alert("已新增至購物車");
	cartNumbers(products[1]);
	totalCost(products[1]);
}
function addcart2(){
	alert("已新增至購物車");
	cartNumbers(products[2]);
	totalCost(products[2]);
}
function addcart3(){
	alert("已新增至購物車");
	cartNumbers(products[3]);
	totalCost(products[3]);
}
function addcart4(){
	alert("已新增至購物車");
	cartNumbers(products[4]);
	totalCost(products[4]);
}
//購物車商品數量
function cartNumbers(product, action){
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers); 
	
	if(action){
		localStorage.setItem('cartNumbers',productNumbers - 1);
		// document.querySelector('span').textContent = productNumbers - 1;
	}else if(productNumbers){
		localStorage.setItem('cartNumbers',productNumbers + 1);
		// document.querySelector('span').textContent = productNumbers + 1;
	}else{
		localStorage.setItem('cartNumbers', 1);
		// document.querySelector('span').textContent = 1;
	}
	setItems(product);
}


function setItems(product){
	let cartItem = localStorage.getItem('productsInCart');
	cartItem = JSON.parse(cartItem);
	
	if(cartItem != null){
		let currentProduct = product.name;
		
		if(cartItem[currentProduct] == undefined){
		   	cartItem = {
				...cartItem,
				[currentProduct]:product
			}
		}
		cartItem[currentProduct].inCart += 1;
	}else{
		product.inCart = 1;
		cartItem = {
			[product.name]: product
		}
	}
	
	localStorage.setItem("productsInCart", JSON.stringify(cartItem));
}


//計算總花費
function totalCost(product, action){
	let cart = localStorage.getItem('totalCost');
	
	
	if(action){
			cart = parseInt(cart);	
			
			localStorage.setItem("totalCost", cart - product.price);
	   }else if(cart != null){
			cart = parseInt(cart);
		   
			localStorage.setItem("totalCost", cart + product.price);
	   }else{
			localStorage.setItem("totalCost", product.price);
	   }
}


//顯示購物車頁面
function displayCart(){
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	
	let cart = localStorage.getItem('totalCost');
	cart = parseInt(cart);
	
	let productContainer = document.querySelector(".products");
	
	console.log(cartItems);
	
	if( cartItems && productContainer ){
		productContainer.innerHTML = '';
		Object.values(cartItems).map(item => {
			productContainer.innerHTML += `
			<div class="product">
				<ion-icon name="close-circle"></ion-icon>
				<span>${item.name}</span>	
			
			<div class="C-price">${item.price}</div>
			<div class="C-quantity">
				<ion-icon class="decrease" name="caret-back-circle"></ion-icon>
				<span>${item.inCart}</span>
				<ion-icon class="increase" name="caret-forward-circle-sharp"></ion-icon>
			</div>
			<div class="C-total">
				${item.inCart * item.price}
			</div>
			</div>
			`
		});
		
		productContainer.innerHTML += `
			<div class="basketTotalContainer">
				<h4 class="basketTotalTitle">
					Basket Total
				</h4>
				<h4 class="basketTotal">
					$${cart}
				</h4>
		`
		
		
		deleteButtons();
        manageQuantity();
	}
}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    for(let i=0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            if( cartItems[currentProduct].inCart > 1 ) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        });
    }
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productName;
    console.log(cartItems);

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'').trim();
           
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            
        })
    }
}


displayCart();