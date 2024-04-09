import ProfileCard from "../components/ProfileCard/ProfileCard";

const Home = () => {
//   const { data } = useContext(AppContext);

  return (
    <div>
      <div>This is HOME</div>
      <div>
        <ProfileCard name={"Belén Peluffo"} title={"CREATIVA"} />
      </div>
    </div>
  );
};

export default Home;
