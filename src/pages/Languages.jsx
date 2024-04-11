import LanguageItem from "../components/LanguageItem/LanguageItem";
import styles from "../app.module.css";

const Languages = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "4px dashed var(--brand-orange)",
        borderRadius: "8px",
        marginLeft: "20%",
        marginRight: "20%",
        // borderColor: "var(--brand-orange)",
      }}
    >
      <div
        className={styles.rotatedText}
        style={{ fontSize: "var(--small-size)" }}
      >
        Esta creativa maneja varios
      </div>
      <div className={styles.languageTitle}>[i.djo.mas]</div>
      <div>
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
    </div>
  );
};

export default Languages;
