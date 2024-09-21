import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Trends.module.css";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Link from "./Link";

export default function Trends({ props }) {
  const trends = props.map((prop) => (
    <div className={styles.trend}>
      {prop.cat && <h4 className={styles.note}>{prop.cat}</h4>}
      {!prop.isRtl && (
        <FontAwesomeIcon
          icon={faEllipsis}
          style={{ float: "right" }}></FontAwesomeIcon>
      )}
      <h4
        className={styles.title}
        style={{ direction: prop.isRtl ? "rtl" : "ltr" }}>
        {prop.title}
      </h4>
      <h4 className={styles.note}> {prop.postsNum}posts</h4>
    </div>
  ));
  return (
    <div className={styles.trendsContainer}>
      <h4 className={styles.head}>Trend for you</h4>
      {trends}
      <Link text={"Show more"}></Link>
    </div>
  );
}
