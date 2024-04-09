import styles from "../../app.module.css";

const ProfileCard = ({ photo, name, title }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={photo}
        alt={`La cara de ${name}`}
        className={styles.profilePic}
      />
      <div className={styles.cardName}>{name.toUpperCase()}</div>
      <div className={styles.cardTitle}>{title}</div>
    </div>
  );
};

export default ProfileCard;
