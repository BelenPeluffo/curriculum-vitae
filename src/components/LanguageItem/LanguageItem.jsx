import styles from "../../app.module.css";
import PropTypes from "prop-types";

const LanguageItem = ({ language, rating }) => {
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
      <div
        style={{ fontSize: "var(--subtitle-size)", color: "var(--brand-orange)" }}
      >
        {rating.toUpperCase()}
      </div>
      <div className={styles.languageItem}>{language}</div>
    </div>
  );
};

LanguageItem.propTypes = {
  language: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default LanguageItem;
