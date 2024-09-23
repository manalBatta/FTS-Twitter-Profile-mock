import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import styles from "./CoverPhoto.module.css";
import { faBell, faEllipsis } from "@fortawesome/free-solid-svg-icons";

export default function CoverPhoto({ coverImageUrl, profileImageUrl }) {
  return (
    <>
      <div
        className={styles.coverImg}
        style={{ backgroundImage: `url(${coverImageUrl})` }}>
        <div
          className={styles.profileImg}
          style={{ backgroundImage: `url(${profileImageUrl})` }}></div>
      </div>
      <div className={styles.followBtn}>
        <Button text="following" className={styles.btn}></Button>
        <Button className={styles.btn}>
          <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
        </Button>{" "}
        <Button className={styles.btn}>
          <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
        </Button>
      </div>
    </>
  );
}
