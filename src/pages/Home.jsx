import ProfileCard from "../components/ProfileCard/ProfileCard";
import profilePic from '../assets/images/26170583_10213023271648707_1006969560875683411_o.jpg';

const Home = () => {
  //   const { data } = useContext(AppContext);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <ProfileCard
          name={"Belén Peluffo"}
          title={"CREATIVA"}
          photo={profilePic}
        />
      </div>
    </div>
  );
};

export default Home;
