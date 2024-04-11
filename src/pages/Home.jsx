import ProfileCard from "../components/ProfileCard/ProfileCard";
import profilePic from "../assets/images/26170583_10213023271648707_1006969560875683411_o.jpg";
import ContactItem from "../components/ContactItem/ContactItem";
import AnnotationContainer from "../components/AnnotationContainer/AnnotationContainer";
import MainDataContainer from "../components/MainDataContainer/MainDataContainer";
import ContactData from "./ContactData";
import PersonalData from "./PersonalData";

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
  {
    date: "02/2012-07/2012",
    title: "Arquitectura (1er Cuatrimestre)",
    description: "Universidad Nacional de Córdoba",
  },
  {
    date: "02/2012-07/2012",
    title: "Arquitectura (1er Cuatrimestre)",
    description: "Universidad Nacional de Córdoba",
  },
];
const mockContactInfo = [
  { data: "+54 2901 516646" },
  { data: "Kayen 249, 1er piso" },
  { data: "belenpeluffolupiano@gmail.com" },
];
const mockPersonalInfo = [
  { label: "lugar de nacimiento", value: "Ushuaia, Tierra del Fuego" },
  { label: "fecha de nacimiento", value: "17/08/1992" },
  { label: "DNI", value: "36.734.473" },
  { label: "CUIL", value: "27-36.734.473-9" },
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
      <ContactData items={mockContactInfo} />
      <PersonalData items={mockPersonalInfo} />
      <AnnotationContainer
        title={"Qué vamos a hacer?"}
        subtitle={"Ni idea"}
        items={mockAnnItems}
      />
      <MainDataContainer sectionTitle={"Educación"} items={mockMainItems} />
      <MainDataContainer sectionTitle={"Neil"} items={mockMainItems} />
    </div>
  );
};

export default Home;
