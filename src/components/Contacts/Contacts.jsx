import Logo from '../Home/Images/logo.png';
import Arrow from '../Home/Images/arrow2.png';
import '../Contacts/LgContacts.scss';
import '../Contacts/MdContacts.scss';
import '../Contacts/SmContacts.scss';

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
			<img src={Arrow} alt='picture' className='arrow'/>
			<h1 className='headline'>Контакты</h1>
		</>
	);
};
