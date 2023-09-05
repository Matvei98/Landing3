import { Login } from '../Login/Login';
import { Cards } from './Cards';
import { Link } from 'react-router-dom';
import Logo from './Images/logo.png';
import Arrow from './Images/arrow2.png';
import '../Home/LgHome.scss';
import '../Home/MdHome.scss';
import '../Home/SmHome.scss';


export const Home = () => {
	const handleContacts = () => {
		window.location.href = '/contacts';
	};
	return (
		<>
			<div className='navBar-home'>
				<div className='image'>
					<a href='/'>
						<img src={Logo} alt='picture' />
					</a>
				</div>
				<div className='navBar-home_item'>
					<Link to='/contacts' className='navBar-home_link'>
						<p>Контакты</p>
					</Link>
					<Login />
				</div>
			</div>
			<img src={Arrow} alt='picture' className='arrow'/>
			<div className='main-container'>
				<h1 className='main-headline'>Место для получения медицинской помощи</h1>
				<div className='main_item_buttons'>
					<button className='main_item_button'>Войти</button>
					<button className='main_item_button_right' onClick={handleContacts}>Kонтакты</button>
				</div>
			<Cards />
			</div>
			
		</>
	);
};