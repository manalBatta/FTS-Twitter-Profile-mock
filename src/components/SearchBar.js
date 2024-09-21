import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SearchBar.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function SearchBar() {
  return (
    <>
      <div className={styles.searchContainer}>
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        <input type="text" value={"Search"} />
      </div>
    </>
  );
}
