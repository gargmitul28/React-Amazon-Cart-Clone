import "./css/App.css";
import Header from "./components/Header";
import AppMain from "./components/AppMain";

function App() {
  return (
    <div className="App">
      <Header title="Amazon Cart" />
      <AppMain />
    </div>
  );
}

export default App;
