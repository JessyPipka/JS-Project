import { useState } from 'react';
import styles from './AuthorizationPage.module.css';
import { Link, useNavigate } from 'react-router-dom';
import ErrorMsg from '../../ui/ErrorMsg/ErrorMsg';

const AuthorizationPage = () => {
    const [authorizationData, setAuthorizationData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const updateAuthorizationData = ({ target: { name, value } }) => {
        setAuthorizationData((prevData) => ({ ...prevData, [name]: value }));
    };

    const authorize = (e) => {
        e.preventDefault();
        const form = e.target.closest('form');

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const user = JSON.parse(localStorage.getItem('user'));

        if (!user) {
            setError('Пользователь не найден');
            return;
        }

        if (
            user.email === authorizationData.email &&
            user.password === authorizationData.password
        ) {
            localStorage.setItem('token', 'rejhrwkioideuqwiou1');
            navigate('/');
        } else {
            setError('Электронный адрес или пароль неверны');
        }
    };

    return (
        <div className={styles.container}>
            <h2>Авторизация</h2>
            <ErrorMsg active={error}>{error}</ErrorMsg>
            <form className={styles['auth-form']} onSubmit={authorize}>
                <input
                    className={styles['auth-form__email-inp']}
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={authorizationData.email}
                    onChange={updateAuthorizationData}
                    required
                />
                <input
                    className={styles['auth-form__password-inp']}
                    type="password"
                    placeholder="Пароль"
                    name="password"
                    value={authorizationData.password}
                    onChange={updateAuthorizationData}
                    required
                />
                <button
                    className={styles['auth-form__authorize-btn']}
                    type="submit"
                >
                    Войти
                </button>
                <Link to="/reg">Зарегистрироваться</Link>
            </form>
        </div>
    );
};

export default AuthorizationPage;
