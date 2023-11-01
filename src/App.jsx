import React from "react";

//Main Components
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Overview from "./Overview";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Overview />
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
