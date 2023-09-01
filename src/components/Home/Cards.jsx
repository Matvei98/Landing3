import Card1 from '../Home/Images/card1.png';
import Card2 from '../Home/Images/card2.png';
import Card3 from '../Home/Images/card3.png';
import Arrow from '../Home/Images/arrow.png';
import '../Home/Home.scss';
import '../Home/SmHome.scss';
export const Cards = () => {
	return (
		<>
			<div className='card-container'>
				<div className='card1'>
					<img src={Card1} alt='card1'
						className='card1_img' />
					<h5>Онлайн-прием</h5>
					<img src={Arrow} alt='arrow' />
					<p>Рыба текст</p>
				</div>
				<div className='card2'>
					<img src={Card2} alt='card1' className='card2_img'/>
					<h5>Экстренный Случай</h5>
					<img src={Arrow} alt='arrow' />
					<p>Рыба текст</p>
				</div>
				<div className='card3'>
					<img src={Card3} alt='card1' className='card3_img'/>
					<h5>Лечение рака</h5>
					<img src={Arrow} alt='arrow' />
					<p>Рыба текст</p>
				</div>
			</div>
		</>
	)
}