import "./BoxContainer.css";

const BoxContainer = (props) => {
  const { boxName, color, currentIndex, goToIndex, children } = props;

  const typedStyle = {
    border: `10px solid ${color}`,
  };

  return (
    <div style={typedStyle} className="typedBox">
      <h1>{boxName}</h1>
      <div className="typedBoxelem">{children[currentIndex]}</div>

      <span className="buttons">
        <button onClick={() => goToIndex("prev")}>{`< --`}</button>
        <button onClick={() => goToIndex("next")}>{`-- >`}</button>
      </span>
    </div>
  );
};

export default BoxContainer;
