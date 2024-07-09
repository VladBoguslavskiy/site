import React from 'react'
import './Ofers.css'
import exclucive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
	 <div className='offers'>
		<div className="offers-left">
			<h1>Ексклюзив</h1>
			<h1>Для тебе</h1>
			<p>Тільки кращі продукти</p>
			<button>Подивись прямо зараз</button>
		</div>
		<div className="offers-right">
			<img src={exclucive_image} alt="" />
		</div>
	 </div>
  )
}

export default Offers
