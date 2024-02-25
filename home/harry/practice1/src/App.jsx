import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
  <>
    <Navbar1 title='Practice' link='Link'home='Home'/>
    <TextForm heading='This is textarea to convert Character'/>
  </>
  );
}

export default App;
