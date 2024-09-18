import styles from "./AvatarAndName.module.css";
export default function AvatarAndName({ avatarSrc, userName, description }) {
  return (
    <div className={styles.divContainer}>
      <img src={`/${avatarSrc}`} alt="logo" className={styles.avatar} />
      <h2 className={styles.h2}>{userName}</h2>
      <h5 className={styles.description}>@{description}</h5>
    </div>
  );
}
