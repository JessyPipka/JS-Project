import classNames from 'classnames';
import styles from '../UserListPage.module.css';

const PaginatorButton = ({ children, active, pageData, setPageData }) => {
    const handleClick = () => {
        setPageData({ ...pageData, currentPage: children });
    };

    return (
        <button
            className={classNames(styles.paginator__btn, {
                [styles.paginator__btn_active]: active,
            })}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default PaginatorButton;
