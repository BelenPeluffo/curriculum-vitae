import ProfileCard from "../components/ProfileCard/ProfileCard";
import profilePic from "../assets/images/26170583_10213023271648707_1006969560875683411_o.jpg";
import ContactItem from "../components/ContactItem/ContactItem";
import AnnotationContainer from "../components/AnnotationContainer/AnnotationContainer";
import MainDataContainer from "../components/MainDataContainer/MainDataContainer";

const mockAnnItems = ["ganas de agarrar la pala", "iteligencia infravalorada"];
const mockMainItems = [
  {
    date: "2004-2010",
    title: "Economía y Gestión de las Organizaciones",
    description: "Colegio Integral de Educación Ushuaia",
  },
  {
    date: "02/2012-07/2012",
    title: "Arquitectura (1er Cuatrimestre)",
    description: "Universidad Nacional de Córdoba",
  },
];

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
      <ContactItem value="ítem cualquiera" label={"etiqueta"} />
      <AnnotationContainer
        title={"Qué vamos a hacer?"}
        subtitle={"Ni idea"}
        items={mockAnnItems}
      />
      <MainDataContainer sectionTitle={"Educación"} items={mockMainItems} />
    </div>
  );
};

export default Home;
