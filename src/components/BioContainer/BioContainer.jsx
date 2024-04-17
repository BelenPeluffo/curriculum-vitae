import styles from "../../app.module.css";

const BioContainer = ({ bio }) => {
  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "var(--brand-orange)",
        margin: "32px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "101%"
      }}
      className={styles.rotatedText}
    >
      {Array(4).fill(
        <div style={{ minWidth: "40%" }}>
          <div className={styles.bioText}>{bio.title}</div>
          <div className={styles.bioSubtitle}>{bio.subtitle}</div>
        </div>
      ).map((item) => item)}
    </div>
  );
};

export default BioContainer;
