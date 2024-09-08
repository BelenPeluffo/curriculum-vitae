// import profilePic from "../assets/images/26170583_10213023271648707_1006969560875683411_o.jpg";
import {
  ProfileCard,
  BioContainer,
  AnnotationContainer,
  MainDataContainer,
} from "@components";
import {
  offerItems,
  mockBio,
  mockContactInfo,
  mockHobbies,
  mockLanguages,
  academicItems,
  mockPersonalInfo,
  searchIntems,
  workItems,
} from "@database/personalData";
import { PersonalData, Languages, ContactData } from "@pages";
import RechartsPieChart from "../tryouts/D3PieChart";

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
          title={"Perfil laboral"}
          subtitle={"¿Qué ofrezco?"}
          items={offerItems}
        />
        <AnnotationContainer
          title={"Horizonte laboral"}
          subtitle={"¿Qué busco?"}
          items={searchIntems}
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
        <MainDataContainer sectionTitle={"Trayecto educativo"} items={academicItems} />
        <MainDataContainer
          sectionTitle={"Experiencia laboral"}
          items={workItems}
          alignment="end"
        />
      </div>
      <Languages items={mockLanguages} />
      {/* <HobbiesWheel items={mockHobbies} /> */}
      <RechartsPieChart items={mockHobbies} />
      <ContactData items={mockContactInfo} />
    </div>
  );
};

export default Home;
