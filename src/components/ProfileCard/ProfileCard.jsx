import styles from "../../app.module.css";

const ProfileCard = ({ photo, name, title }) => {
  return (
    <div>
      <img
        src={photo}
        alt={`La cara de ${name}`}
        className={styles.profilePic}
      />
      <div className={styles.rotation}>{name}</div>
      <div className={styles.rotation}>{title}</div>
    </div>
  );
};

export default ProfileCard;
