import styles from "../../app.module.css";

const BioContainer = ({ bio }) => {
  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "var(--brand-orange)",
        margin: "32px 64px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
      className={styles.rotatedText}
    >
      {Array(3).fill(
        <div style={{ minWidth: "50%" }}>
          <div className={styles.bioText}>{bio.title}</div>
          <div className={styles.bioSubtitle}>{bio.subtitle}</div>
        </div>
      ).map((item) => item)}
    </div>
  );
};

export default BioContainer;
