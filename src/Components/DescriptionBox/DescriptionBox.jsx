import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
	 <div className='descriptionbox'>
		<div className="descriptionbox-navigator">
			<div className="descriptionbox-nav-box">Опис</div>
			<div className="descriptionbox-nav-box fade">Відгуки (122)</div>
		</div>
		<div className="descriptionbox-description">
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, impedit voluptate eius accusamus aliquid maiores!</p>
			<p>
				Lorem ipsum dolor sit amet.
			</p>
		</div>
	 </div>
  )
}

export default DescriptionBox
