const Footer = () => {
  const acknowledgments = [
    {
      text: "LLM Finetuning Risks",
      url: "https://llm-tuning-safety.github.io/",
    },
    {
      text: "Nerfies",
      url: "https://nerfies.github.io/",
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          {/* Icons can be added here later if needed */}
        </div>
        <div className="columns is-centered">
          <div className="column is-8">
            <div className="content">
              <p>
                Acknowledgements: The website template was borrowed from{" "}
                {acknowledgments.map((ack, index) => (
                  <span key={index}>
                    <a href={ack.url} target="_blank" rel="noopener noreferrer">
                      {ack.text}
                    </a>
                    {index < acknowledgments.length - 1 ? ", " : " "}
                  </span>
                ))}
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
