import "./App.css";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainIntro from "./Components/MainIntro";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <Header />
      <MainIntro />
      <Skills
        skills="Skills"
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
