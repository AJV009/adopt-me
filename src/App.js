import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="havanese" />
      <Pet name="pepper" animal="bird" breed="cockatiel" />
      <Pet name="Sudo" animal="dog" breed="wheaten terrier" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
