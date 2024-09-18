import styles from "./SidebarItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Correct import
export default function SidebarItem({ icon, headline }) {
  return (
    <div className={styles.divContainer}>
      <FontAwesomeIcon icon={icon} />
      <h4 className={styles.headline}>{headline}</h4>
    </div>
  );
}
