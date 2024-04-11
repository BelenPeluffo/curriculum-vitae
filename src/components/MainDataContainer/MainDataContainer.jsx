import styles from "../../app.module.css";
import DiagonalLine from "./DiagonalLine";

const MainDataContainer = ({ sectionTitle, items }) => {
  const lineLength = items.length * 65;
  console.log("diagonalLength?", lineLength);
  return (
    <div>
      <div className={styles.sectionTitle}>{sectionTitle.toUpperCase()}</div>
      {items ? (
        <div style={{ width: "60%" }}>
          <DiagonalLine x1={0} y1={0} diagonalDistance={lineLength} />
          <ul>
            {items
              ? items.map((item, index) => (
                  <li
                    key={index}
                    className={styles.itemContainer}
                    // style={{ marginLeft: diagonalSpace*(index+1) }}
                  >
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
        </div>
      ) : null}
    </div>
  );
};

export default MainDataContainer;
