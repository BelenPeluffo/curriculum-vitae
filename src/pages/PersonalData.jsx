import ContactItem from "../components/ContactItem/ContactItem";

const PersonalData = ({ items }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {items
        ? items.map((item, index) => (
            <ContactItem key={index} label={item.label} value={item.value} />
          ))
        : null}
    </div>
  );
};

export default PersonalData;
