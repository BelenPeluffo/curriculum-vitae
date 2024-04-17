import styles from "../../app.module.css";
import OrangeCircle from "../../assets/images/circle1.svg";

const LanguageItem = ({ language, rating }) => {
  const ratingArray = Array(rating).fill(
    <img src={OrangeCircle} width={16} style={{ paddingRight: 4 }} />
  );
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
