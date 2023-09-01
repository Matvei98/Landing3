import { useState } from 'react';
import './Login.scss';
import './SmLogin.scss';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    if (password.length < 8) {
      alert('Пароль должен содержать минимум 8 символов');
      return;
    }
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('username', username);
    window.location.href = '/profile';
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className='button-modal' >
        <button onClick={handleModalOpen}>Войти</button>
      </div>
      {showModal && (
        <div className='modal-container'>
          <span onClick={handleModalClose}
            className='button_button_close'>×</span>
          <div className='modal_items'>
            <h3>Вход в аккаунт</h3>
            <div className='modal_items_text'>
              <p>Логин</p>
              <input
                type="text"
                placeholder="Логин"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='modal_items_text'>
              <p>Пароль</p>
              <input
                type="password"
                placeholder='Пароль'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleLogin}>Войти</button>
          </div>
        </div>
      )}
    </>
  );
};

