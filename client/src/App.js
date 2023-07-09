import "./App.css";
import BoxContainer from "./components/BoxContainer";
import NewColorBox from "./components/NewColorBox";
import { useContext, useState } from "react";
import { DrinkContext } from "./contexts/drinkContext";

function App() {
  const [currentBoxContainerIndex, setCurrentBoxContainerIndex] = useState(0);
  const [currentColoredBoxIndex, setCurrentColoredBoxIndex] = useState(0);

  const drinks = useContext(DrinkContext);

  const getNewColoredBox = (drink) => (
    <NewColorBox
      key={drink.drink}
      drinkName={drink.drink}
      color={drink.color}
    />
  );

  const drinkContainers = [
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

  const currentBoxContainer = () => (
    <BoxContainer
      boxName={drinkContainers[currentBoxContainerIndex].boxName}
      color={drinkContainers[currentBoxContainerIndex].color}
      currentIndex={currentColoredBoxIndex}
      goToIndex={goToIndexColoredBox}
    >
      {drinkContainers[currentBoxContainerIndex].content.map(getNewColoredBox)}
    </BoxContainer>
  );

  function goToIndexColoredBox(indexType) {
    goToIndex(
      indexType,
      drinkContainers[currentBoxContainerIndex].content.length,
      setCurrentColoredBoxIndex
    );
  }

  function goToIndex(indexType, arrayLength, setCurrentIndex) {
    if (indexType === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : arrayLength - 1
      );
    } else if (indexType === "next") {
      setCurrentIndex((prevIndex) =>
        prevIndex < arrayLength - 1 ? prevIndex + 1 : 0
      );
    }
  }

  return (
    <div className="App">
      {currentBoxContainer()}
      <span className="buttonsBoxContainer">
        <button
          onClick={() => {
            setCurrentColoredBoxIndex(0);
            goToIndex(
              "prev",
              drinkContainers.length,
              setCurrentBoxContainerIndex
            );
          }}
        >{`< --`}</button>
        <button
          onClick={() => {
            setCurrentColoredBoxIndex(0);
            goToIndex(
              "next",
              drinkContainers.length,
              setCurrentBoxContainerIndex
            );
          }}
        >{`-- >`}</button>
      </span>
    </div>
  );
}

export default App;
