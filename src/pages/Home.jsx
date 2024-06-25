// import profilePic from "../assets/images/26170583_10213023271648707_1006969560875683411_o.jpg";
import {
  ProfileCard,
  HobbiesWheel,
  BioContainer,
  AnnotationContainer,
  MainDataContainer,
} from "@components";
import { mockAnnItems, mockBio, mockContactInfo, mockHobbies, mockLanguages, mockMainItems, mockPersonalInfo } from "@database/personalData";
import { PersonalData, Languages, ContactData } from "@pages";

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
