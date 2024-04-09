import styles from "../../app.module.css";

const ContactItem = ({ icon, value }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: "16px" }}
      className={styles.contactItemText}
    >
      <div className={styles.contactItemIcon}>{icon ? icon : "ícono"}</div>
      <div>{value}</div>
    </div>
  );
};

export default ContactItem;
