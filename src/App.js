import Navbar from "./Components/Navbar";
import FaheemDancer from "./Components/FaheemDancer";

function App() {
  return (
    <>
      <Navbar title="Zext" home="Home" />
      <div className="container my-9">
        <FaheemDancer head="Text Formatter" />
      </div>
    </>
  );
}

export default App;
