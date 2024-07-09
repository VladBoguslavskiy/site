import React, { useContext } from "react";
import "./CartItems.css";
import {ShopContext} from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {

	const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext)
	

  return <div className="cartitems">
	<div className="cartitems-format-main">
		<p>Продукти</p>
		<p>Заголовок</p>
		<p>Ціна</p>
		<p>Кількість</p>
		<p>Загальна кількість</p>
		<p>Удалити</p>
	</div>
	<hr />
	{all_product.map((e)=>{
		if (cartItems[e.id] > 0)
		{
			return <div>
			<div className="cartitems-format cartitems-format-main ">
				<img src={e.image} alt="" className="carticon-product-icon"/>
				<p>{e.name}</p>
				<p>{e.new_price} грн.</p>
				<button className="cartitems-quantity">{cartItems[e.id]}</button>
				<p>{e.new_price*cartItems[e.id]} грн.</p>
				<img className="cartitems-remove-icon" src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
			</div>
			<hr />
		</div>
		}
		return null;
	})}
	<div className="cartitems-down">
		<div className="cartitems-total">
			<h1>Загальна кількість</h1>
			<div>
				<div className="cartitems-total-item">
					<p></p>
					<p>{getTotalCartAmount()} грн.</p>
				</div>
				<hr />
				<div className="cartitems-total-item">
					<p>Вартість доставки</p>
					<p>Бесплатно</p>
				</div>
				<hr />
				<div className="cartitems-total-item">
					<h3>Загальна</h3>
					<h3>{getTotalCartAmount()} грн.</h3>
				</div>
			</div>
			<button>Оформити заказ</button>
		</div>
		<div className="cartitems-promocode">
			<p>Якщо у вас є промокод введіть його тут</p>
			<div className="cartitems-promobox">
				<input type="text" placeholder="Промокод" />
				<button>Відправити</button>
			</div>
		</div>
	</div>
  </div>;
};

export default CartItems;
