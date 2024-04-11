import LanguageItem from "../components/LanguageItem/LanguageItem";

const Languages = ({ items }) => {
  return (
    <div>
      <div>Esta creativa maneja varios</div>
      <div>[i.djo.mas]</div>
      <div>
        {items
          ? items.map((item, index) => (
              <LanguageItem
                key={index}
                language={item.language}
                rating={item.rating}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Languages;
