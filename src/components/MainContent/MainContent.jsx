import BackArrow from "../BackArrow/BackArrow";
import CoverPhoto from "../CoverPhoto/CoverPhoto";
import Link from "../Link/Link";
import styles from "./MainContent.module.css";
import Post from "../Post/Post";
import TabPanel from "../TabPanel/TabPanel";
import UserInfo from "../UserInfo/UserInfo";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
// calculations to pass the join date to twitter
const today = new Date();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
//tabs names array
const tabs = ["Posts", "Replies", "Media", "Likes"];
const monthName = monthNames[today.getMonth()];

const postProps = {
  postStatus: "reposted",
  avatarSrc: "IMG_3284.png",
  userName: "dandbramov.bsky.social",
  linkAndDate: `dan_abramov ${monthName} ${today.getDate()}`,
  headline: (
    <>
      happy 10th birthday to<Link text={"@reactjs"}></Link>!🎂
    </>
  ),
};
export default function MainContent() {
  return (
    <div className={styles.mainContainer}>
      <BackArrow userName="React" numberOfPosts="2,116"></BackArrow>
      <CoverPhoto
        coverImageUrl="/logo512.png"
        profileImageUrl="/logo512.png"></CoverPhoto>
      <UserInfo
        websiteLink="react.dev"
        followingNumber="267"
        followersNumber="708.1k"
        joinDate={`${monthName}  ${today.getFullYear()}`}></UserInfo>
      <TabPanel tabs={tabs}></TabPanel>
      <Post {...postProps}></Post>
      <WhoToFollow></WhoToFollow>
    </div>
  );
}
