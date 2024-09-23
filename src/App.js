import "./App.css";
import DiscoverSide from "./components/DiscoverSide/DiscoverSide";
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <MainContent></MainContent>
      <DiscoverSide></DiscoverSide>
    </div>
  );
}

export default App;
