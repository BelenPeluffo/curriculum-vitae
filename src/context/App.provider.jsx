import { useEffect, useState } from "react";
import { AppContext } from "./App.context";
import { getPersonalData } from "../services/App.service";

const AppProvider = ({ children }) => {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const personalData = getPersonalData();
    console.log('personalData?', personalData);
    setData(personalData);
  }

  const returnPropierties = {data};

  return (
    <AppContext.Provider value={returnPropierties}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
