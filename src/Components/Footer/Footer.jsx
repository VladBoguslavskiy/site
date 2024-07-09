import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
	 <div className='footer'>
		<div className="footer-logo">
			<img src={footer_logo} alt="" />
			<p>DNKA</p>
		</div>
		<ul className="footer-links">
			<li>Компанія</li>
			<li>Продукти</li>
			<li>Офіс</li>
			<li>Про нас</li>
			<li>Контакти</li>
		</ul>
		<div className="footer-social-icon">
			<div className="footer-icons-container">
				<img src={instagram_icon} alt="" />
			</div>
			<div className="footer-icons-container">
				<img src={pintester_icon} alt="" />
			</div>
			<div className="footer-icons-container">
				<img src={whatsapp_icon} alt="" />
			</div>
		</div>
		<div className="footer-copyright">
			<hr />
			<p>© 2024 DNKA. Всі права захищені</p>
		</div>
	 </div>
  )
}

export default Footer
