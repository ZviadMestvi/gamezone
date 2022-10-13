import React, { useState } from 'react';

const AppContext = React.createContext({
  mobileNavVis: false,
  toggleNavVis: () => {},
});

export const AppContextProvider = props => {
  const [mobileNavVis, setMobileNavVis] = useState(false);

  const toggleNavVis = () => {
    setMobileNavVis(!mobileNavVis);
  };

  const contextValue = {
    mobileNavVis,
    toggleNavVis,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
