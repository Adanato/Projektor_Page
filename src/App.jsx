import React from "react";

//Main Components
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="project-description">
          <h2>Project Description</h2>
          <p>
            This is a brief description of your research project. You can
            provide an overview of the problem you're addressing and the
            objectives of your research.
          </p>
        </section>
        <section className="methodology">
          <h2>Methodology</h2>
          <p>
            Describe the methods and techniques you used in your research.
            Explain how you collected data, conducted experiments, or carried
            out your investigation.
          </p>
        </section>
        <section className="results">
          <h2>Results</h2>
          <p>
            Present the findings of your research. You can include graphs,
            tables, or other visual aids to illustrate your results.
          </p>
        </section>
        <section className="conclusion">
          <h2>Conclusion</h2>
          <p>
            Summarize the key takeaways from your research and discuss the
            implications of your findings.
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
