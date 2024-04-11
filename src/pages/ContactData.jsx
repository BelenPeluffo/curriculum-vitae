import ContactItem from "../components/ContactItem/ContactItem";

const ContactData = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "32px",
        marginBottom: "32px",
      }}
    >
      {items
        ? items.map((item, index) => (
            <ContactItem key={index} value={item.data} />
          ))
        : null}
    </div>
  );
};

export default ContactData;
