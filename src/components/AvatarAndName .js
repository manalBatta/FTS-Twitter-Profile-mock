import styles from "./AvatarAndName.module.css";
export default function AvatarAndName({ avatarSrc, userName }) {
  return (
    <div className={styles.divContainer}>
      <img src="/IMG_3284.png" alt="logo" className={styles.avatar} />
      <h2 className={styles.h2}>React</h2>
      <h5 className={styles.description}>description for me</h5>
    </div>
  );
}
