import styles from "../app.module.css";
import PropTypes from "prop-types";
import { LanguageItem } from "../components";
import { motion } from "framer-motion";

const Languages = ({ items }) => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      transition={{ duration: 0.5 }}
      className="language-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "4px dashed var(--brand-orange)",
        borderRadius: "8px",
        margin: "10% 20%",
        padding: 16,
      }}
    >
      <div style={{ fontSize: "var(--small-size)", marginBottom: "-0.5rem" }}>
        Esta creativa maneja varios
      </div>
      <div className={styles.languageTitle}>[i.djo.mas]</div>
      <div
        className="language-items"
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {items
          ? items.map((item, index) => (
              <LanguageItem
                key={index}
                language={item.language}
                rating={item.rating}
              />
            ))
          : null}
      </div>
    </motion.div>
  );
};

Languages.propTypes = {
  items: PropTypes.array,
};

export default Languages;
