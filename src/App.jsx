//Main Components
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Footer from "./Footer";
import Overview from "./Overview";
import BibTeX from "./BibTex";
import ImageGallery from "./ImageGallery";
// replace with your actual image path

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Overview />
        <ImageGallery />
      </main>
      <BibTeX />
      <Footer />
    </>
  );
}

export default App;
