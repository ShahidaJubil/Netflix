import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Poster from "./components/posters/Poster";
import { action, orginals, comedy, horror, romance } from "./components/Urls";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Poster url={comedy} title="Comedy" isSmall />
      <Poster url={action} title="Action" isSmall />
      <Poster url={horror} title="Horror" isSmall />
      <Poster url={romance} title="Romance" isSmall />
      <Poster url={orginals} title="Netflix Originals" />
    </div>
  );
}

export default App;
