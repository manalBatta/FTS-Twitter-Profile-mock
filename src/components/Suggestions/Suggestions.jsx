import AvatarAndName from "../AvatarAndName/AvatarAndName ";
import Link from "../Link/Link";
import styles from "./Suggestions.module.css";

export default function Suggestions() {
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
  const suggestions = props.map((prop) => (
    <AvatarAndName {...prop} key={prop.userName}></AvatarAndName>
  ));
  return (
    <div className={styles.suggestContainer}>
      <h4>You might like</h4>
      {suggestions}
      <Link text={"Show more"}></Link>
    </div>
  );
}
