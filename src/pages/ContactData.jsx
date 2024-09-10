import styles from "../app.module.css";
import { ContactItem } from "../components";
import { motion } from "framer-motion";
import { getClickHandler } from "@utils";

const ContactData = ({ items }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          marginTop: "10%",
          padding: "10%",
        }}
        className={styles.rotatedText}
      >
        <motion.div
          initial={{ opacity: 0, y: -1000 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
            rotate: "-5deg",
          }}
          className={styles.rotatedText}
        >
          Si llegaste hasta acá, no lo dudes un segundo:
        </motion.div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
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
                    onClick={getClickHandler(item.contactType)}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactData;
