import styles from "../../app.module.css";

const AnnotationContainer = ({ title, subtitle, items }) => {
  return (
    <div className={styles.rotatedText}>
      <div className={styles.annotationTitle}>{title.toUpperCase()}</div>
      {subtitle ? (
        <div className={styles.annotationSubtitle}>{subtitle}</div>
      ) : null}
      {items ? (
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default AnnotationContainer;
