import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export default function BackArrow({ userName, numberOfPosts }) {
  return (
    <>
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={{ color: "#ffffff", marginLeft: "10px" }}
      />
      <h3 style={{ display: "inline", marginLeft: "20px", fontSize: "1rem" }}>
        {userName}
        <span
          style={{
            display: "block",
            fontSize: "0.8rem",
            fontWeight: "500",
            color: "gray",
            marginLeft: "44px",
            marginBottom: "2px",
          }}>
          {numberOfPosts} posts
        </span>
      </h3>
    </>
  );
}
