import "./App.css";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainIntro from "./Components/MainIntro";
import TechSkills from "./Components/TechSkills";
import Tools from "./Components/Tools";

function App() {
  return (
    <>
      <Header />
      <MainIntro />
      <TechSkills
        skills="Technologies"
        sk1="React js / Redux"
        sk2="JavaScript"
        sk3="Tailwind CSS"
        sk4="Bootstrap"
        sk5="HTML5"
        sk6="CSS"
        sk7="SQL & MySQl"
      />
      <Tools
        techTools="Tools/Additional skills"
        sk1="React js / Redux"
        sk2="JavaScript"
        sk3="Tailwind CSS"
        sk4="Bootstrap"
        sk5="HTML5"
        sk6="CSS"
        sk7="Git & GitHub"
      />
      <Education />
      <Footer />
    </>
  );
}

export default App;
