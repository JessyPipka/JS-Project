import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './RegistrationPage.module.css';
import ErrorMsg from '../../ui/ErrorMsg/ErrorMsg';

const RegistrationPage = () => {
    const [registrationData, setRegistrationData] = useState({
        first_name: '',
        last_name: '',
        avatar: '',
        email: '',
        password: '',
    });
    const [error] = useState('');
    const navigate = useNavigate();

    const updateRegData = ({ target: { name, value } }) => {
        setRegistrationData((prevData) => ({ ...prevData, [name]: value }));
    };

    const register = (e) => {
        e.preventDefault();

        const form = e.target.closest('form');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        localStorage.setItem('user', JSON.stringify(registrationData));
        localStorage.setItem('token', 'rejhrwkioideuqwiou1');
        navigate('/');
    };

    return (
        <div className={styles.container}>
            <h2>Регистрация</h2>
            <ErrorMsg active={error}>{error}</ErrorMsg>
            <form className={styles['reg-form']} onSubmit={register}>
                <div className={styles['reg-form__inp-container']}>
                    <label htmlFor="first_name">Имя*</label>
                    <input
                        className={styles['reg-form__inp']}
                        type="text"
                        id="first_name"
                        placeholder="Иван"
                        name="first_name"
                        value={registrationData.first_name}
                        onChange={updateRegData}
                        required
                    />
                </div>
                <div className={styles['reg-form__inp-container']}>
                    <label htmlFor="last_name">Фамилия</label>
                    <input
                        className={styles['reg-form__inp']}
                        type="text"
                        id="last_name"
                        placeholder="Иванович"
                        name="last_name"
                        value={registrationData.last_name}
                        onChange={updateRegData}
                    />
                </div>
                <div className={styles['reg-form__inp-container']}>
                    <label htmlFor="avatar">Ссылка фотографии профиля</label>
                    <input
                        className={styles['reg-form__inp']}
                        type="text"
                        id="avatar"
                        placeholder="ссылка фотографии"
                        name="avatar"
                        value={registrationData.avatar}
                        onChange={updateRegData}
                    />
                </div>
                <div className={styles['reg-form__inp-container']}>
                    <label htmlFor="email">Электронная почта*</label>
                    <input
                        className={styles['reg-form__inp']}
                        type="email"
                        id="email"
                        placeholder="Email"
                        name="email"
                        value={registrationData.email}
                        onChange={updateRegData}
                        required
                    />
                </div>
                <div className={styles['reg-form__inp-container']}>
                    <label htmlFor="password">Пароль*</label>
                    <input
                        className={styles['reg-form__inp']}
                        type="password"
                        id="password"
                        placeholder="Password"
                        name="password"
                        value={registrationData.password}
                        onChange={updateRegData}
                        required
                    />
                </div>
                <button className={styles['reg-form__reg-btn']} type="submit">
                    Зарегистрироваться
                </button>
                <Link to="/auth">Уже есть аккаунт?</Link>
            </form>
        </div>
    );
};

export default RegistrationPage;
