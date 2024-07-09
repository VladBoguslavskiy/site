import React, { createContext, useState } from "react";
import all_product from "../Components//Assets/all_product";

export const ShopContext = createContext(null);

//Корзина
const getDefaultCart = () =>{
	let cart = {};
	for (let index = 0; index < all_product.length+1; index++) {
		cart[index] = 0;		
	}
	return cart;
}

const ShopContextProvider = (props) => {
  //Отримуємо пусту карту
	const [cartItems, setCartItems] = useState(getDefaultCart())

	//Функція добавлення товару в корзину
	const addToCart = (itemId) => {
		setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
	}

	//Функція удалення товару з корзину
	const removeFromCart = (itemId) => {
		setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
	}
	//Функція для отримання загальної сумми в корзині

	const getTotalCartAmount = () =>{
		let totalAmount = 0;
		for (const item in cartItems){
			if(cartItems[item]>0)
			{
				let itemInfo = all_product.find((product)=>product.id===Number(item))
				totalAmount += itemInfo.new_price * cartItems[item]
			}
		}			
		return totalAmount
	}

	//Функція для отримання загальної кількості товарів в іконкі корзини

	const getTotalCartItems = () =>{
		let totalItem = 0;
		for (const item in cartItems){
			if(cartItems[item]>0){
				totalItem += cartItems[item]
			}
		}
		return totalItem;
	}

	const contextValue = {getTotalCartItems,getTotalCartAmount, all_product,cartItems,addToCart,removeFromCart};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
