import styles from "../../app.module.css";

const MainDataContainer = ({ sectionTitle, items }) => {
  return (
    <div>
      <div className={styles.sectionTitle}>{sectionTitle}</div>
      {items ? (
        <ul>
          {items
            ? items.map((item, index) => (
                <li key={index} className={styles.itemContainer}>
                  {/* <div className={styles.itemContainer}> */}
                    <div>{item.date}</div>
                    <div className={styles.contactItemTextBold}>
                      {item.title}
                    </div>
                    <div className={styles.itemDescription}>
                      {item.description}
                    </div>
                  {/* </div> */}
                </li>
              ))
            : null}
        </ul>
      ) : null}
    </div>
  );
};

export default MainDataContainer;
