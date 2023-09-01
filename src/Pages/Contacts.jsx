import Logo from '../components/Home/Images/logo.png';
import Arrow from '../components/Home/Images/arrow2.png';
import '../Pages/Contacts.scss';
import '../Pages/SmContacts.scss';

export const Contacts = () => {
	const handleBackProfile = () => {
		window.location.href = '/profile';
	};
	return (
		<>
			<div className='navBar-contacts'>
				<div className='image-contacts'>
					<a href='/'>
						<img src={Logo} alt='picture' />
					</a>
				</div>
				<div className='navBar-contacts_item'>
					<a href='#'>
						Контакты
					</a>
					<button className='buttons' onClick={handleBackProfile}>
						Выйти
					</button>
				</div>
			</div>
			<img src={Arrow} alt='picture' />
			<h1 className='headline'>Контакты</h1>
		</>
	);
};
