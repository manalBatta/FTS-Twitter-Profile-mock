import styles from "./AvatarAndName.module.css";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
export default function AvatarAndName({
  avatarSrc,
  userName,
  description,
  headline,
  follow,
  others,
  verified,
}) {
  return (
    <>
      {others && (
        <>
          <h4 className={styles.user}>
            <FontAwesomeIcon
              icon={faUser}
              style={{ marginRight: "10px" }}></FontAwesomeIcon>{" "}
            {others}
          </h4>
        </>
      )}
      <div className={styles.divContainer}>
        {avatarSrc && (
          <img src={`/${avatarSrc}`} alt="logo" className={styles.avatar} />
        )}
        <h2 className={styles.h2}>
          {userName}
          {verified && (
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#1d9bf0", marginLeft: "2px" }}
            />
          )}
        </h2>
        <h5 className={styles.description}>@{description}</h5>
        {headline && <p className={styles.headline}>{headline}</p>}
        {follow && <Button text="follow" className={styles.btn}></Button>}
      </div>
    </>
  );
}
