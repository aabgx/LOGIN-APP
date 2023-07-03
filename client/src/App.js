import logo from "./logo.svg";
import "./App.css";

function App() {
  const sir = ["yellow", "white", "red", "blue", "green"];
  return (
    <>
      <div className="App">
        {sir.map((color) => {
          return (
            <div
              style={{ backgroundColor: color }}
              className="myDiv"
              key={color}
            ></div>
          );
        })}
      </div>
      <div></div>
    </>
  );
}

export default App;
