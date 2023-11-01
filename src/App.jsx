//Main Components
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Footer from "./Footer";
import Overview from "./Overview";
import BibTeX from "./BibTex";
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Overview />
      </main>
      <BibTeX />
      <Footer />
    </>
  );
}

export default App;
