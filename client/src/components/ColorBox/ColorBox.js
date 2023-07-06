import "./ColorBox.css";

const ColorBox = (props) => {
  const { color,index ,onClick,onContextMenuClick} = props;
  const boxStyles = {
    backgroundColor: props.color
  };

  return (
    <div onContextMenu={(e) => {
        e.preventDefault()
        console.log(e)
        onContextMenuClick()
        }} onClick={onClick} style={boxStyles} className="colorBox">
      <span>
        {color}
      </span>
      <span>
        {index}
      </span>
    </div>
  );
};

export default ColorBox;
