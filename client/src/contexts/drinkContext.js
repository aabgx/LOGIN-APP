import { createContext } from "react";

export const DrinkContext = createContext();

export const DrinkContextProvider = ({ children }) => {
  const drinks = [
    {
      drink: "Pina Colada",
      color: "yellow",
      isAlcoholic: true,
      isHouseSpeciality: false,
    },
    {
      drink: "Negroni",
      color: "orange",
      isAlcoholic: true,
      isHouseSpeciality: false,
    },
    {
      drink: "Water",
      color: "transparent",
      isAlcoholic: false,
      isHouseSpeciality: false,
    },
    {
      drink: "Cuba Libre",
      color: "brown",
      isAlcoholic: true,
      isHouseSpeciality: false,
    },
    {
      drink: "Champagne",
      color: "#ffffe0",
      isAlcoholic: true,
      isHouseSpeciality: false,
    },
    {
      drink: "Absinth",
      color: "green",
      isAlcoholic: true,
      isHouseSpeciality: false,
    },
    {
      drink: "Coke",
      color: "black",
      isAlcoholic: false,
      isHouseSpeciality: false,
    },
    {
      drink: "Vanilla Syrup",
      color: "yellow",
      isAlcoholic: false,
      isHouseSpeciality: false,
    },
    {
      drink: "Sazerac",
      color: "#FFD580",
      isAlcoholic: true,
      isHouseSpeciality: false,
    },
    {
      drink: "Coffee",
      color: "#C4A484",
      isAlcoholic: false,
      isHouseSpeciality: false,
    },
    {
      drink: "Surprise",
      color: "#FF69B4",
      isAlcoholic: false,
      isHouseSpeciality: true,
    },
    {
      drink: "Florida Old Fashioned",
      color: "#DDA0DD",
      isAlcoholic: true,
      isHouseSpeciality: true,
    },
    {
      drink: "Mules Around the World",
      color: "#DB7093",
      isAlcoholic: true,
      isHouseSpeciality: true,
    },
  ];

  return (
    <DrinkContext.Provider value={drinks}>{children}</DrinkContext.Provider>
  );
};
