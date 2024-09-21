import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./WhoToFollow.module.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import AvatarAndName from "./AvatarAndName ";
import Link from "./Link";

export default function WhoToFollow(params) {
  const usersProps = [
    {
      avatarSrc: "IMG_3284.png", // Placeholder avatar image path
      userName: "freeCodeCamp.org",
      description: "freeCodeCamp",
      headline: (
        <>
          We're a community of millions of people who are building new skills
          and getting new jobs together. A 501(c)(3) public charity. Tweets by
          <br />
          <Link text={"@abbeyrenn"}></Link>
        </>
      ),
      follow: true,
      others: "Node.js and 9 others follow",
      verified: true,
    },
    {
      avatarSrc: "IMG_3284.png", // Placeholder avatar image path
      userName: "TypeScript",
      description: "typescript",
      headline: (
        <>
          TypeScript is a language for application-scale JavaScript development.
          It's a typed superset of JavaScript that compiles to plain JavaScript.
        </>
      ),
      follow: true,
      others: "Node.js and 5 others follow",
    },
    {
      avatarSrc: "IMG_3284.png", // Placeholder avatar image path
      userName: "Tailwind CSS",
      description: "tailwindcss",
      headline: (
        <>
          The utility-first CSS framework. Rapidly build modern websites,
          without ever leaving your HTML.
        </>
      ),
      follow: true,
      others: "Yazeed Obaid and 3 others follow",
      verified: true,
    },
  ];

  const users = usersProps.map((user) => (
    <AvatarAndName {...user} key={user.userName}></AvatarAndName>
  ));
  return (
    <>
      <h3 className={styles.head}>Who to follow</h3>
      {users}
      <div style={{ margin: "0px 2px 5px 2px" }}>
        <Link text={"Show more"}></Link>
      </div>
    </>
  );
}
