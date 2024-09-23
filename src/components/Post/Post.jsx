import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Post.module.css";
import {
  faEllipsis,
  faHeart,
  faMessage,
  faArrowUpFromBracket,
  faChartSimple,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";

export default function Post({
  postStatus,
  avatarSrc,
  userName,
  linkAndDate,
  headline,
}) {
  return (
    <>
      <h5>
        <FontAwesomeIcon icon={faRetweet} style={{ margin: "1px 20px" }} />
        React {postStatus}
      </h5>
      <div className={styles.divContainer}>
        {avatarSrc && (
          <img src={`/${avatarSrc}`} alt="logo" className={styles.avatar} />
        )}
        <div className={styles.head}>
          {userName} <h5 className={styles.note}>@{linkAndDate}</h5>
        </div>
        {headline && <p className={styles.headline}>{headline}</p>}
      </div>
      <FontAwesomeIcon
        icon={faEllipsis}
        className={styles.dotes}></FontAwesomeIcon>
      <table className={styles.analysis}>
        <tbody>
          <tr>
            <td>
              <FontAwesomeIcon
                icon={faMessage}
                style={{ marginRight: "5px" }}></FontAwesomeIcon>
              46
            </td>
            <td>
              <FontAwesomeIcon
                icon={faRetweet}
                style={{ marginRight: "5px" }}></FontAwesomeIcon>
              675
            </td>
            <td>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ marginRight: "5px" }}></FontAwesomeIcon>
              3,701
            </td>
            <td>
              <FontAwesomeIcon
                icon={faChartSimple}
                style={{ marginRight: "5px" }}
              />
              1.1M
            </td>
            <td>
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
