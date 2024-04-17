import styles from "../../app.module.css";

const ProfileCard = ({ name, title }) => {
  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "5%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="profile-card"
    >
      <div className={styles.profilePic} />
      <div className={styles.cardName}>{name.toUpperCase()}</div>
      <div className={styles.cardTitle}>{title}</div>
    </div>
  );
};

export default ProfileCard;
