import ContactItem from "../components/ContactItem/ContactItem";

const PersonalData = ({ items }) => {
  return (
    <div>
      {items
        ? items.map((item, index) => (
            <ContactItem key={index} label={item.label} value={item.value} />
          ))
        : null}
    </div>
  );
};

export default PersonalData;
