import styles from "./DiscoverSide.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Suggestions from "../Suggestions/Suggestions";
import Trends from "../Trends/Trends";

const props = [
  {
    postsNum: "27.9k ",
    title: "#VALORANTChampions💢",
    cat: "Gaming Trending",
    isRtl: false,
  },
  {
    postsNum: "1,411 ",
    title: "الانستا",
    isRtl: true,
  },
  {
    postsNum: "14.1k ",
    title: "Mako",
    cat: "Gaming Trending",
    isRtl: false,
  },
  {
    postsNum: "22.3k ",
    title: "#رساله_اليوم",
    isRtl: true,
  },
  {
    postsNum: "77.2k ",
    title: "#Messi(",
    isRtl: false,
  },
  {
    postsNum: "27.6k ",
    title: "#جامعه_طيبه",
    isRtl: true,
  },
  {
    postsNum: "8,748 ",
    title: "fnatic",
    cat: "Gaming Trending",
    isRtl: false,
  },
  {
    postsNum: "68.4k ",
    title: "#InterMiamiCF",
    isRtl: false,
  },
];
export default function DiscoverSide() {
  return (
    <div className={styles.discoverContainer}>
      <SearchBar></SearchBar>
      <Suggestions></Suggestions>
      <Trends props={props}></Trends>
      <footer className={styles.footer}>
        Terms of Service Privacy Policy Cookie Policy Accessibility Ads info
        More. @2023 X Corp.
      </footer>
    </div>
  );
}
