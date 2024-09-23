import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./UserInfo.module.css";
import { faCalendar, faLink } from "@fortawesome/free-solid-svg-icons";
import AvatarAndName from "../AvatarAndName/AvatarAndName ";
import Link from "../Link/Link";

export default function UserInfo({
  websiteLink,
  followingNumber,
  followersNumber,
  joinDate,
}) {
  return (
    <div className={styles.main}>
      <div className={styles.user}>
        <AvatarAndName
          userName={"React"}
          description={"reactjs"}
          headline="The library for web and native user interfaces"></AvatarAndName>
      </div>
      <div className={styles.infoContainer}>
        <FontAwesomeIcon
          icon={faLink}
          style={{ fontSize: "0.8rem" }}></FontAwesomeIcon>

        <Link text={websiteLink}></Link>
        <FontAwesomeIcon
          icon={faCalendar}
          style={{ fontSize: "0.8rem" }}></FontAwesomeIcon>
        <span className={styles.note}> Joined {joinDate}</span>

        <h5>
          <strong>{followingNumber}</strong>
          <span className={styles.note}> Following</span>
          <strong style={{ marginLeft: "10px" }}>{followersNumber}</strong>
          <span className={styles.note}>Followers</span>
          <br />

          <img
            src="/IMG_3284.png"
            alt="common followers"
            className={styles.avatar}
          />
          <p className={styles.note}>
            Flollowed by Mohamad kukhan,Yazan Alsade 💫.and14 others you follow
          </p>
        </h5>
      </div>
    </div>
  );
}
