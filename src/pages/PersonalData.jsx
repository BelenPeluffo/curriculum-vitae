import ContactItem from "../components/ContactItem/ContactItem";
import styles from "../app.module.css";

const PersonalData = ({ items }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "start" }}
      className={styles.rotatedText}
    >
      {items
        ? items.map((item, index) => (
            <ContactItem
              key={index}
              label={item.label}
              value={item.value}
              type="personal"
            />
          ))
        : null}
    </div>
  );
};

export default PersonalData;
