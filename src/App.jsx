import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainIntro from "./Components/MainIntro";
import Education from "./Components/Education";
import TechSkills from "./Components/TechSkills";
import Tools from "./Components/Tools";
import SoftSkills from "./Components/softSkills";

function App() {
  return (
    <>
      <Header />
      <MainIntro />
      <TechSkills
        skills="Technical Skills"
        sk1="React js / Redux"
        sk2="JavaScript"
        sk3="Tailwind CSS"
        sk4="Bootstrap"
        sk5="HTML5"
        sk6="CSS"
        sk7="SQL & MySQl"
      />
      <Tools
        techTools="Tools/Additional Skills"
        sk1="  Git & GitHub"
        sk2="Visual Studio Code(IDE)"
        sk3="Canva"
        sk4="MS Excel"
        sk5="MS Word"
      />

      <SoftSkills
        softSkills="Soft Skills"
        sk1="Adaptability"
        sk2="Teamwork and Collaboration"
        sk3="Responsibility"
        sk4="Active learning"
        sk5="Discipline"
      />
      <Education />
      <Footer />
    </>
  );
}

export default App;
