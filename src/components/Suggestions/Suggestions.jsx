import AvatarAndName from "../AvatarAndName/AvatarAndName ";
import Link from "../Link/Link";
import styles from "./Suggestions.module.css";

const props = [
  {
    avatarSrc: "IMG_3284.png",
    userName: "freeCodeCamp.org",
    description: "freeCodeCamp",
    follow: true,
    verified: true,
  },
  {
    avatarSrc: "IMG_3284.png",
    userName: "freeCodeCamp.org",
    description: "freeCodeCamp",
    follow: true,
    verified: true,
  },
  {
    avatarSrc: "IMG_3284.png",
    userName: "freeCodeCamp.org",
    description: "freeCodeCamp",
    follow: true,
    verified: true,
  },
];
export default function Suggestions() {
  return (
    <div className={styles.suggestContainer}>
      <h4>You might like</h4>
      {props.map((prop) => (
        <AvatarAndName {...prop} key={Math.random()}></AvatarAndName> //temporary key to handle warning
      ))}
      <Link text={"Show more"}></Link>
    </div>
  );
}
