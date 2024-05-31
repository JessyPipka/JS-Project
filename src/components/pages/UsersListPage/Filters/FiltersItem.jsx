import classNames from 'classnames';
import styles from './Filters.module.css';

const FiltersItem = ({
    children,
    id,
    usersList,
    setUsersList,
    pageData,
    setPageData,
    userPropertyName,
}) => {
    const filterFunc = () => {
        const isActive = pageData.filter.activeId === id;
        const isReverse = isActive && !pageData.filter.reverse;

        setPageData({
            ...pageData,
            filter: {
                activeId: id,
                reverse: isReverse,
            },
        });

        const sortedUsersList = [...usersList].sort((a, b) => {
            const comparison = a[userPropertyName].localeCompare(
                b[userPropertyName]
            );
            return isReverse ? -comparison : comparison;
        });

        setUsersList(sortedUsersList);
    };

    return (
        <li className={styles.filters__item}>
            <button
                className={classNames(styles.filters__item__btn, {
                    [styles['filters__item__btn-active']]:
                        pageData.filter.activeId === id,
                    [styles['filters__item__btn-reverse']]:
                        pageData.filter.activeId === id &&
                        pageData.filter.reverse,
                })}
                onClick={filterFunc}
            >
                {children}
            </button>
        </li>
    );
};

export default FiltersItem;
