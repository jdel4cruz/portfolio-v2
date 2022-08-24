import { createContext, useContext, useState } from "react";

export const ViewContext = createContext();

export const useViewContext = () => {
  return useContext(ViewContext);
};

function ViewProvider({ children }) {
  const [isInView, setIsInView] = useState(0);

  return (
    <ViewContext.Provider value={{ isInView, setIsInView }}>
      {children}
    </ViewContext.Provider>
  );
}

export default ViewProvider;
