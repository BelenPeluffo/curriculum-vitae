import LanguageItem from "../components/LanguageItem/LanguageItem";
import styles from "../app.module.css";

const Languages = ({ items }) => {
  return (
    <div
      className="language-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "4px dashed var(--brand-orange)",
        borderRadius: "8px",
        marginLeft: "20%",
        marginRight: "20%",
        padding: 16,
      }}
    >
      <div style={{ fontSize: "var(--small-size)", marginBottom: 0 }}>
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
    </div>
  );
};

export default Languages;
