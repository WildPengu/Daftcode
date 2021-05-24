import "./App.css";
import Community from "./layouts/community/Community";
import OurOffert from "./layouts/ourOffert/OurOffert";
import Footer from "./layouts/footer/Footer";
import MainSection from "./layouts/mainSection/MainSection";
import Menu from "./layouts/menu/Menu";

function App() {
  return (
    <div className="App" id="home">
      <Menu />
      <MainSection />
      <Community/>
      <OurOffert/>
      <Footer />
    </div>
  );
}

export default App;
