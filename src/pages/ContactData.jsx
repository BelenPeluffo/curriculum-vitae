import styles from "../app.module.css";
import { ContactItem } from "../components";

const ContactData = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: "10%",
        padding: "10%",
      }}
      className={styles.rotatedText}
    >
      <div
        style={{
          width: "50%",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className={styles.contactTagLine}
      >
        Entremos en contacto!
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "32px",
          marginBottom: "32px",
          width: "50%",
        }}
      >
        {items
          ? items.map((item, index) => (
              <ContactItem
                key={index}
                value={item.data}
                icon={item.icon}
                type="contact"
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default ContactData;
