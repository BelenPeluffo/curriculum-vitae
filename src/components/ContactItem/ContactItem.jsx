import styles from "../../app.module.css";

const ContactItem = ({ icon, value, label }) => {
  console.log("label?", label);
  console.log("icon?", icon);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        justifyContent: "center",
      }}
      className={styles.contactItemText}
    >
      {!label ? (
        <div className={styles.contactItemIcon}>{icon ? icon : "ícono"}</div>
      ) : null}
      {label ? (
        <div className={styles.contactItemTextBold}>{label}:</div>
      ) : null}
      <div>{value}</div>
    </div>
  );
};

export default ContactItem;
