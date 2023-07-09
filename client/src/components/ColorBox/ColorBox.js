import "./ColorBox.css";

const ColorBox = (props) => {
  const { color, index, onClick, onContextMenuClick } = props;
  const boxStyles = {
    backgroundColor: props.color,
  };

  function onContextMenuClickHandler(e) {
    e.preventDefault();
    onContextMenuClick();
  }

  return (
    <div
      onContextMenu={onContextMenuClickHandler}
      onClick={onClick}
      style={boxStyles}
      className="colorBox"
    >
      <span>{color}</span>
      <span>{index}</span>
    </div>
  );
};

export default ColorBox;
