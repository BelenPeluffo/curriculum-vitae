import styles from "../../app.module.css";

const LanguageItem = ({ language, rating }) => {
  const ratingArray = Array(rating).fill("⭐️");
  const xPadding = 8;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: xPadding,
        paddingRight: xPadding,
      }}
    >
      <div className={styles.languageItem}>{language}</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {ratingArray.map((item) => item)}
      </div>
    </div>
  );
};

export default LanguageItem;
