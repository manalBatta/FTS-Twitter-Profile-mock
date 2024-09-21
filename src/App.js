import "./App.css";
import AvatarAndName from "./components/AvatarAndName ";
import DiscoverSide from "./components/DiscoverSide";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

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
