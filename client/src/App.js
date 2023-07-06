import "./App.css";

//import ColorBox from "./components/ColorBox";
import TypedBox from "./components/TypedBox";
import NewColorBox from "./components/NewColorBox";
import { useState } from "react";

function App() {
  const [currentTypedBoxIndex, setCurrentTypedBoxIndex] = useState(0);
  const [currentColoredBoxIndex, setCurrentColoredBoxIndex] = useState(0);
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

  const getNewColoredBox = (drink) => (
    <NewColorBox
      key={drink.drink}
      drinkName={drink.drink}
      color={drink.color}
    />
  );

  const finalTypedBoxes = [
    {
      boxName: "Alcoholic",
      color: "maroon",
      content: drinks.filter((drink) => drink.isAlcoholic),
    },
    {
      boxName: "NonAlcoholic",
      color: "mediumSeaGreen",
      content: drinks.filter((drink) => !drink.isAlcoholic),
    },
    {
      boxName: "HouseSpecialities",
      color: "rosyBrown",
      content: drinks.filter((drink) => drink.isHouseSpeciality),
    },
  ];

  const currentTypedBox = () => (
    <TypedBox
      boxName={finalTypedBoxes[currentTypedBoxIndex].boxName}
      color={finalTypedBoxes[currentTypedBoxIndex].color}
      currentIndex={currentColoredBoxIndex}
      goToPrevious={goToPrevious}
      goToNext={goToNext}
    >
      {finalTypedBoxes[currentTypedBoxIndex].content.map(getNewColoredBox)}
    </TypedBox>
  );

  function goToPrevious() {
    if (currentColoredBoxIndex > 0) {
      setCurrentColoredBoxIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentColoredBoxIndex(
        finalTypedBoxes[currentTypedBoxIndex].content.length - 1
      );
    }
  }

  function goToNext() {
    if (
      currentColoredBoxIndex <
      finalTypedBoxes[currentTypedBoxIndex].content.length - 1
    ) {
      setCurrentColoredBoxIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentColoredBoxIndex(0);
    }
  }

  return (
    <div className="App">
      {currentTypedBox()}
      <span className="buttonsTypedBoxes">
        <button
          onClick={() => {
            setCurrentColoredBoxIndex(0);
            if (currentTypedBoxIndex > 0) {
              setCurrentTypedBoxIndex((prevIndex) => prevIndex - 1);
            } else {
              setCurrentTypedBoxIndex(finalTypedBoxes.length - 1);
            }
          }}
        >
          {`< --`}
        </button>
        <button
          onClick={() => {
            setCurrentColoredBoxIndex(0);
            if (currentTypedBoxIndex < finalTypedBoxes.length - 1) {
              setCurrentTypedBoxIndex((prevIndex) => prevIndex + 1);
            } else {
              setCurrentTypedBoxIndex(0);
            }
          }}
        >
          {`-- >`}
        </button>
      </span>
    </div>
  );
}

export default App;
