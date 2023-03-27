import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import logo from "./logo.svg";
import "./App.css";

/*const removeHide = () => {
  ImageComponent.classList.toggle("hide");
};

*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent /*hide={removeHide}*/ text="Click Me" className="btn"></ButtonComponent>
        <ImageComponent src={logo} alt="React logo" className="App-logo" />

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Go to React Documentation
        </a>
      </header>
    </div>
  );
}

export default App;
