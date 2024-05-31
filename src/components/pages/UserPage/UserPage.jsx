import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import styles from './UserPage.module.css';
import blankPhoto from '../../../assets/img/blank-profile-photo.jpg';
import EditUserModal from './EditUserModal/EditUserModal';
import { UPDATE_USER } from '../../../store';

const UserPage = ({ user: givenUser }) => {
    const { id } = useParams();
    const [user, setUser] = useState(givenUser || {});
    const modalRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!givenUser) {
            axios
                .get(`https://reqres.in/api/users/${id}`)
                .then(({ data }) => setUser(data.data))
                .catch((err) => console.error('Error fetching user:', err));
        }
    }, [givenUser, id]);

    useEffect(() => {
        if (givenUser) {
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({ type: UPDATE_USER, payload: user });
        }
    }, [user, givenUser, dispatch]);

    return (
        <div className={styles.container}>
            <button className={styles['back-btn']} onClick={() => navigate(-1)}>
                Назад
            </button>
            <div className={styles.user}>
                <img
                    className={styles['user__img']}
                    src={user.avatar || blankPhoto}
                    alt="user profile"
                />
                <div className={styles['user__info']}>
                    <h2 className={styles['user__name']}>
                        {user.first_name} {user.last_name}
                    </h2>
                    <a
                        className={styles['user__email']}
                        href={`mailto:${user.email}`}
                    >
                        {user.email}
                    </a>
                </div>
                <button
                    className={styles['user__edit-btn']}
                    onClick={() => modalRef.current.showModal()}
                >
                    Редактировать
                </button>
            </div>
            <EditUserModal
                user={user}
                setUser={setUser}
                modalRef={modalRef}
                open
            />
        </div>
    );
};

export default UserPage;
