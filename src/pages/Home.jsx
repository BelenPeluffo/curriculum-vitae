import ProfileCard from "../components/ProfileCard/ProfileCard";
import profilePic from '../assets/images/26170583_10213023271648707_1006969560875683411_o.jpg';
import ContactItem from "../components/ContactItem/ContactItem";

const Home = () => {
  //   const { data } = useContext(AppContext);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ProfileCard
          name={"Belén Peluffo"}
          title={"CREATIVA"}
          photo={profilePic}
        />
        <ContactItem value="ítem cualquiera" />
        <ContactItem value="ítem cualquiera" label={"etiqueta"}/>
    </div>
  );
};

export default Home;
