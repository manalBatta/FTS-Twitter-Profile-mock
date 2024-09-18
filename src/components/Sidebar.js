import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faMagnifyingGlass,
  faBell,
  faEnvelope,
  faRectangleList,
  faBookmark,
  faUserGroup,
  faUser,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons"; // Icons you need
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Sidebar() {
  const iconsList = [
    { id: 1, icon: faHouseUser, headline: "home" },
    { id: 2, icon: faMagnifyingGlass, headline: "explore" },
    { id: 3, icon: faBell, headline: "notifications" },
    { id: 4, icon: faEnvelope, headline: "messages" },
    { id: 5, icon: faRectangleList, headline: "lists" },
    { id: 6, icon: faBookmark, headline: "bookmarks" },
    { id: 7, icon: faUserGroup, headline: "communities" },
    { id: 8, icon: faUser, headline: "profile" },
    { id: 9, icon: faEllipsis, headline: "more" },
  ];

  const sidebarItems = iconsList.map((item) => (
    <SidebarItem
      icon={item.icon}
      headline={item.headline}
      key={item.id}></SidebarItem>
  ));
  return (
    <div className={styles.divContainer}>
      <FontAwesomeIcon icon={faXTwitter} size="lg" /> {sidebarItems}
      <button className={styles.postBtn}>post</button>
    </div>
  );
}
