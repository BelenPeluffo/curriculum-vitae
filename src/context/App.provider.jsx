import { AppContext } from "./App.context";

const AppProvider = ({ children }) => {
  const returnPropierties = {};
  return (
    <AppContext.Provider value={returnPropierties}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
