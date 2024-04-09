const ProfileCard = ({ photo, name, title }) => {
  return (
    <div>
      <img src={photo} alt={`La cara de ${name}`} />
      <div>{name}</div>
      <div>{title}</div>
    </div>
  );
};

export default ProfileCard;
