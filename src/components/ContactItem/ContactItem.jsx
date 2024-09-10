import styles from "../../app.module.css";
import PropTypes from "prop-types";

const ContactItem = ({ icon, value, label, type, onClick }) => {
  console.log("type?", type);
  return (
    <div
      style={{
        display: "flex",
        alignItems: type == "personal" ? "start" : "center",
        gap: type == "personal" ? "0" : "16px",
        justifyContent: "center",
        flexDirection: type == "personal" ? "column" : "row",
        cursor: 'pointer'
      }}
      onclick={onClick}
      className={styles.contactItemText}
    >
      {!label ? (
        <div className={styles.contactItemIcon}>{icon ? icon : "ícono"}</div>
      ) : null}
      {label ? (
        <div
          className={styles.contactItemTextBold}
          style={{ marginTop: "8px" }}
        >
          {label}
        </div>
      ) : null}
      <div>{value}</div>
    </div>
  );
};

ContactItem.propTypes = {
  icon: PropTypes.node,
  value: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(["contact", "personal"]),
};

export default ContactItem;
