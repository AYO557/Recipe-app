import { createContext, useState } from "react";
import PropTypes from "prop-types";

// initialize context
export const FavItemContext = createContext();

// create provider / wrapper component

export const addItem = (favItems, setFavItems, item) => {
  if (favItems.includes(item.title)) return;
  setFavItems([...favItems, item.title]);
};
const FavItemProvider = ({ children }) => {
  const [favItems, setFavItems] = useState([]);

  return (
    <FavItemContext.Provider value={{ favItems, setFavItems }}>
      {children}
    </FavItemContext.Provider>
  );
};

FavItemProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FavItemProvider;
