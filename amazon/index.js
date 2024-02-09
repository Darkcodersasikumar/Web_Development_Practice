let productHTML = '';

products.forEach((product) => {
    productHTML += `
    <div class="productContainer">
        <div class="productImage">
            <img src="images/productImages/${product.image}.jpg" alt="backpack image" class="productImagePart">
        </div>
        <div class="productName">
            ${product.name}
        </div>
        <div class="productRating">
            <img src="images/rating/rating-${product.stars}.png" alt="rating 3 star" class="productRatingPart">
        </div>
        <div class="productPrice">
            <p class="productPriceInner">₹${(product.price/100).toFixed(2)}</p>
        </div>
        <div class="productQuantity">
            <select name="quantity" id="quantity" class="productQuantitySelect">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
        </div>
        <button class="addToCartButton" data-product-id="${product.id}">
            Add to Cart
        </button>
    </div>`;
});

document.querySelector('.productGrid').innerHTML = productHTML;

document.querySelectorAll('.addToCartButton').forEach((button)=> {
    button.addEventListener('click', ()=>{
        const productId = button.dataset.productId;
        let matchingItem;
        cart.forEach((item) => {
            if(productId === item.productId){
                matchingItem= item;
            }
        });

        const val = button.parentElement.querySelector('.productQuantitySelect');
        
        const quantityValue = parseInt(val.value);

        if(matchingItem){
            matchingItem.quantity+=quantityValue;
        }
        else{
            cart.push({
                productId: productId,
                quantity :quantityValue
            });
        }

        let cartQuantity = 0;
        cart.forEach((item) => {
            cartQuantity += item.quantity;
        });

        document.querySelector('.navBarCartValue').innerHTML = cartQuantity;
    });
});