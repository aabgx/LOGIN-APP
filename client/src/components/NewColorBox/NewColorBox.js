import "./NewColorBox.css";

const NewColorBox = (props) => {
  const { drinkName, color } = props;
  const boxStyles = {
    backgroundColor: color,
  };

  return (
    <p style={boxStyles} className="newColorBox">
      {drinkName}
    </p>
  );
};

export default NewColorBox;
