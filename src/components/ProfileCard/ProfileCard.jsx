import styles from "../../app.module.css";
import PropTypes from "prop-types";

const COMMON_STYLES = {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const ProfileCard = ({ name, title }) => {
  const windowWidth = window.innerWidth;
  return (
    <div
      style={
        windowWidth > 600
          ? {
              ...COMMON_STYLES,
              paddingTop: "5%",
            }
          : {
              ...COMMON_STYLES,
              height: window.innerHeight,
            }
      }
      className="profile-card"
    >
      <div className={styles.profilePic} />
      <div className={styles.cardName}>{name.toUpperCase()}</div>
      <div className={styles.cardTitle}>{title}</div>
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProfileCard;
