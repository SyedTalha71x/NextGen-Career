/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [isTransparent, setIsTransparent] = useState(false);
  const [isIconColor, setisIconColor] = useState('bg-purple-600')
  const [isNavbg, setisNavbg] = useState('bg-purple-600')
  
  const setTransparent = () => {
    setIsTransparent(true);
  };

  const setOpaque = () => {
    setIsTransparent(false); 
  };

  return (
    <StateContext.Provider value={{ isTransparent, setTransparent, setOpaque , isIconColor, setisIconColor,
        setisNavbg, isNavbg
    }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateManage = () => useContext(StateContext);
