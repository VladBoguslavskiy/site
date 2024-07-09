import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
	 <div className='newsletter'>
		<h1>Отримувати Екзклюзиви Через Почту</h1>
		<p>Підписатись на розсилку</p>
		<div>
			<input type="email" placeholder='Ваша електрона почта'/>
			<button>Підписатись</button>
		</div>
	 </div>
  )
}

export default NewsLetter
