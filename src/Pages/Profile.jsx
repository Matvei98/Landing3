import { Link } from 'react-router-dom';
import Logo from '../components/Home/Images/logo.png';
import Arrow from '../components/Home/Images/arrow2.png';
import '../Pages/Profile.scss';
import '../Pages/SmProfile.scss';
export const Profile = () => {
	const handleLogout = () => {
		localStorage.removeItem('isLoggedIn');
		localStorage.removeItem('username');
		window.location.href = '/';
	};

	const handleContacts = () => {
		window.location.href = '/contacts';
	};

	const username = localStorage.getItem('username');
	return (
		<>
			<div className='navBar_profile'>
				<div className='image'>
					<a href='/'>
						<img src={Logo} alt='picture' />
					</a>
				</div>
				<div className='navBar_item'>
					<Link to='/contacts' className='navBar_link'>
						<p>Контакты</p>
					</Link>
					<button className='button_item' onClick={handleLogout}>Выйти</button>
				</div>
			</div>
			<img src={Arrow} alt='picture' />
			<div className='profile-container'>
				<p>Привет, {username}</p>
				<div className='profile_container_buttons'>
					<button onClick={handleLogout}>Выйти из аккаунта</button>
					<button onClick={handleContacts}>Перейти в контакты</button>
				</div>
			</div>
		</>
	);
};
