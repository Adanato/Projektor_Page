import { useState } from "react";
import "./BibTeX.css"; // Ensure you have a BibTeX.css file with the relevant styles
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
const BibTeX = () => {
  const [isCopied, setIsCopied] = useState(false);

  const bibtexEntry = `
    @misc{kang2023performance,
      title={Performance Scaling via Optimal Transport: Enabling Data Selection from Partially Revealed Sources},
      author={Kang, Feiyang and Just, Hoang Anh and Sahu, Anit Kumar and Jia, Ruoxi},
      year={2023},
      eprint={2307.02460},
      archivePrefix={arXiv},
      primaryClass={cs.LG}
    }
  `;

  // Function to copy the BibTeX entry to clipboard

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bibtexEntry.trim()).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000); // Hide notification after 1 second
    });
  };

  return (
    <section className="section" id="BibTeX">
      {isCopied && (
        <div className="notification-toast">Copied to clipboard!</div>
      )}
      <div className="container is-max-desktop content bibtex-container">
        <h2 className="title">BibTeX</h2>
        <div className="bibtex-block">
          <pre>
            <code>{bibtexEntry}</code>
          </pre>
          <button
            onClick={copyToClipboard}
            className="button is-small is-primary clipboard-button"
          >
            <span className="icon">
              <FontAwesomeIcon icon={faClipboard} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BibTeX;
