import styles from "./Button.module.css";
export default function Button({ text }) {
  //usually receives an onclick handler function
  return <button className={styles.btn}>{text}</button>;
}
