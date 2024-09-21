import styles from "./DiscoverSide.module.css";
import SearchBar from "./SearchBar";
import Suggestions from "./Suggestions";

export default function DiscoverSide(params) {
  return (
    <div className={styles.discoverContainer}>
      <SearchBar></SearchBar>
      <Suggestions></Suggestions>
    </div>
  );
}
