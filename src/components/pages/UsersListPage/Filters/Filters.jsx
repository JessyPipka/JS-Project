import styles from './Filters.module.css';
import FiltersItem from './FiltersItem';

const Filters = ({ usersList, setUsersList, pageData, setPageData }) => {
    const filters = [
        { id: 1, label: 'Имени', userPropertyName: 'first_name' },
        { id: 2, label: 'Фамилии', userPropertyName: 'last_name' },
        { id: 3, label: 'Почте', userPropertyName: 'email' },
    ];

    return (
        <div className={styles.filters}>
            <p className={styles.filters__header}>Сортировать по</p>
            <ul className={styles.filters__list}>
                {filters.map(({ id, label, userPropertyName }) => (
                    <FiltersItem
                        key={id}
                        id={id}
                        usersList={usersList}
                        setUsersList={setUsersList}
                        pageData={pageData}
                        setPageData={setPageData}
                        userPropertyName={userPropertyName}
                    >
                        {label}
                    </FiltersItem>
                ))}
            </ul>
        </div>
    );
};

export default Filters;
