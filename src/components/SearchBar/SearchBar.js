
import styles from './SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    return (
        <div className={styles.searchContainer}>
            <input type="text" placeholder="جستجو ..." />
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
        </div>
    )
}

export default SearchBar;