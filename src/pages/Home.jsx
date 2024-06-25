// import profilePic from "../assets/images/26170583_10213023271648707_1006969560875683411_o.jpg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import {
  AnnotationContainer,
  BioContainer,
  HobbiesWheel,
  MainDataContainer,
  ProfileCard,
} from "../components";
import { PersonalData, ContactData, Languages } from "./index";

const mockAnnItems = ["ganas de agarrar la pala", "inteligencia infravalorada"];
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
  { data: "+54 2901 516646", icon: <WhatsAppIcon /> },
  { data: "belenpeluffolupiano@gmail.com", icon: <AlternateEmailIcon /> },
];
const mockPersonalInfo = [
  { label: "lugar de nacimiento", value: "Ushuaia, Tierra del Fuego" },
  { label: "fecha de nacimiento", value: "17/08/1992" },
  { label: "DNI", value: "36.734.473" },
  { label: "CUIL", value: "27-36.734.473-9" },
];
const mockBio = {
  title: "React frontend developer",
  subtitle: "con interés por el diseño",
};
const mockLanguages = [
  { language: "español", rating: "c2" },
  { language: "inglés", rating: "c1" },
  { language: "español", rating: "c2" },
  { language: "inglés", rating: "c1" },
  { language: "español", rating: "c2" },
  { language: "inglés", rating: "c1" },
  { language: "español", rating: "c2" },
  { language: "inglés", rating: "c1" },
];
const mockHobbies = [
  { label: "Idiomas", value: 100, description: "Me gustan los idiomas" },
  { label: "Cocinar", value: 100, description: "Me encanta cocinar" },
];

const Home = () => {
  return (
    <div style={{ width: "100%", height: "100%" }} className="app-container">
      <ProfileCard
        name={"Belén Peluffo"}
        title={"CREATIVA"}
        // photo={profilePic}
      />
      <BioContainer bio={mockBio} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          justifyContent: "space-around",
          alignItems: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
          marginTop: "10%",
        }}
        className="annotations"
      >
        <PersonalData items={mockPersonalInfo} />
        <AnnotationContainer
          title={"Qué vamos a hacer?"}
          subtitle={"Ni idea"}
          items={mockAnnItems}
        />
        <AnnotationContainer
          title={"Qué vamos a hacer?"}
          subtitle={"Ni idea"}
          items={mockAnnItems}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          width: "100%",
          justifyContent: "space-around",
          marginTop: "10%",
        }}
      >
        <MainDataContainer sectionTitle={"Educación"} items={mockMainItems} />
        <MainDataContainer
          sectionTitle={"Neil"}
          items={mockMainItems}
          alignment="end"
        />
      </div>
      <Languages items={mockLanguages} />
      <HobbiesWheel items={mockHobbies} />
      <ContactData items={mockContactInfo} />
    </div>
  );
};

export default Home;
