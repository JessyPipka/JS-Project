import { useMemo } from 'react';
import PaginatorButton from './PaginatorButton';
import styles from '../UserListPage.module.css';

const Paginator = ({ pageData, setPageData }) => {
    const { totalPages, currentPage } = pageData;

    const pagesArray = useMemo(() => {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }, [totalPages]);

    return (
        <div className={styles.paginator}>
            {pagesArray.map((page) => (
                <PaginatorButton
                    key={page}
                    active={currentPage === page}
                    pageData={pageData}
                    setPageData={setPageData}
                >
                    {page}
                </PaginatorButton>
            ))}
        </div>
    );
};

export default Paginator;
