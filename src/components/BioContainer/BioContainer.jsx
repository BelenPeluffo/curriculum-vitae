import styles from "../../app.module.css";

const BioContainer = ({ bio }) => {
  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "var(--brand-orange)",
        margin: "32px 64px",
      }}
      className={styles.rotatedText}
    >
      <div className={styles.bioText}>{bio.title}</div>
      <div className={styles.bioSubtitle}>{bio.subtitle}</div>
    </div>
  );
};

export default BioContainer;
