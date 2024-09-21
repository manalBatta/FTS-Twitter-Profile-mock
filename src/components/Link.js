export default function Link({ text }) {
  const styles = {
    margin: "15px",
    marginLeft: "5px",
    color: "rgb(47, 106, 151)",
    textDecoration: "none",
    fontSize: "0.9rem",
  };

  return (
    <a href={text} style={styles}>
      {text}
    </a>
  );
}
