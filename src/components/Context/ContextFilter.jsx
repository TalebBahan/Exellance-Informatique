import React, { createContext, useReducer } from "react";
import allProducts from "../../Data";

const initialFilterState = {
  filteredItems: [...allProducts],
  searchKey: ""
};

const filterItemsHandler = (key) => {
  const filteredItems = allProducts.filter((product) => {
    return product.category === key;
  });

  return { filteredItems };
};

const filterReduce = (state, action) => {
  switch (action.type) {
    case "SEARCH_KEYWORD":
      state.searchKey = action.payload;
      return {
        ...state
      };
    case "ALL":
      state.filteredItems = [...allProducts];
      return {
        ...state
      };
    case "pc_fix":
      return {
        ...filterItemsHandler("pc_fix")
      };
    case "portable":
      return {
        ...filterItemsHandler("portable")
      };
    case "camera":
      return {
        ...filterItemsHandler("camera")
      };
    case "impriment":
      return {
        ...filterItemsHandler("impriment")
      };
    case "licence":
      return {
        ...filterItemsHandler("licence")
      };
    case "cominication":
      return {
        ...filterItemsHandler("cominication")
      };
    case "dvr":
      return {
        ...filterItemsHandler("dvr")
      };
    case "reseau":
      return {
        ...filterItemsHandler("resaux")
      };
      case "ondileur":
        return {
          ...filterItemsHandler("ondileur")
        };
    default:
      return state;
  }
};

export const FilterContext = createContext();
export const FilterDispath = createContext();

export default function ContextFilter({ children }) {
  const [state, dispath] = useReducer(filterReduce, initialFilterState);
  return (
    <FilterContext.Provider value={{ state }}>
      <FilterDispath.Provider value={{ dispath }}>
        {children}
      </FilterDispath.Provider>
    </FilterContext.Provider>
  );
}
