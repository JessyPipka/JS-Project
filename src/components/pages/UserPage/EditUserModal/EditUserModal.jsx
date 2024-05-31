import styles from './EditUserModal.module.css';
import { useEffect, useState } from 'react';

const EditUserModal = ({ user, setUser, modalRef }) => {
    const [userChanges, setUserChanges] = useState({ ...user });

    useEffect(() => {
        setUserChanges({ ...user });
    }, [user]);

    const updateUserChanges = ({ target: { name, value } }) => {
        setUserChanges((prevChanges) => ({
            ...prevChanges,
            [name]: value,
        }));
    };

    const saveChanges = (e) => {
        e.preventDefault();
        setUser(userChanges);
        closeModal();
    };

    const closeModal = () => {
        modalRef.current.close();
        setUserChanges({ ...user });
    };

    return (
        <dialog className={styles['user-edit__modal']} ref={modalRef}>
            <form
                className={styles['user-edit__modal__form']}
                onSubmit={saveChanges}
            >
                <div className="user-editmodalform__input-container">
                    <label htmlFor="first_name">Имя</label>
                    <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        placeholder="Имя"
                        value={userChanges.first_name || ''}
                        onChange={updateUserChanges}
                    />
                </div>
                <div className="user-editmodalform__input-container">
                    <label htmlFor="last_name">Фамилия</label>
                    <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        placeholder="Фамилия"
                        value={userChanges.last_name || ''}
                        onChange={updateUserChanges}
                    />
                </div>
                <div className="user-editmodalform__input-container">
                    <label htmlFor="avatar">Фотография профиля</label>
                    <input
                        type="text"
                        name="avatar"
                        id="avatar"
                        placeholder="Ссылка на фотографию профиля"
                        value={userChanges.avatar || ''}
                        onChange={updateUserChanges}
                    />
                </div>
                <div className="user-editmodalform__input-container">
                    <label htmlFor="email">Почта</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="email"
                        value={userChanges.email || ''}
                        onChange={updateUserChanges}
                    />
                </div>
                <div className={styles['user-edit__modal__form__btns']}>
                    <button
                        type="button"
                        className={styles['user-editmodalform__close-btn']}
                        onClick={closeModal}
                    >
                        Закрыть
                    </button>
                    <button
                        className={styles['user-editmodalform__confirm-btn']}
                        type="submit"
                    >
                        Сохранить
                    </button>
                </div>
            </form>
        </dialog>
    );
};

export default EditUserModal;
