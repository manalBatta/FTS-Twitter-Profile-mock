import styles from "./Button.module.css";
export default function Button({ text, className, children }) {
  //usually receives an onclick handler function
  return (
    <button className={`${styles.btn} ${className}`}>
      {text}
      {children}
    </button>
  );
}
