import styles from './UserListItem.module.css';
import blankPhoto from '../../../../assets/img/blank-profile-photo.jpg';
import { Link } from 'react-router-dom';

const UserListItem = ({ user }) => {
    const { avatar, id, first_name, last_name, email } = user;

    return (
        <li className={styles['user-list-item']}>
            <img
                className={styles['user-list-item__img']}
                src={avatar || blankPhoto}
                alt="profile img"
            />
            <div>
                <Link
                    to={`/user/${id}`}
                    className={styles['user-list-item__name']}
                >
                    {first_name} {last_name}
                </Link>
                <p className={styles['user-email']}>{email}</p>
            </div>
        </li>
    );
};

export default UserListItem;
