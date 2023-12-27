import refsAPI from './js/refs.js';
import { drawDiscount, discountOnClick } from './js/discount.js';
import { onCardClick, productsList, renderCards } from './js/renderProductList.js';

// Test RenderProuctList


//draw discount products
drawDiscount();

//get DOM tree
const frontEnd = new refsAPI();

//add event listener for discount products
frontEnd.discountList.addEventListener('click', discountOnClick);



// Render Cards
renderCards()

// Add event listener 
productsList.addEventListener('click', onCardClick);