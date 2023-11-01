//Main Components
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Overview from "./Overview";
import BibTeX from "./BibTex";

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
