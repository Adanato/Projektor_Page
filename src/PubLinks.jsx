const PublicationLinks = () => {
  return (
    <div className="column has-text-centered">
      <div className="publication-links">
        <span className="link-block">
          <a
            href="https://arxiv.org/pdf/2307.02460.pdf"
            className="external-link button is-normal is-rounded is-dark"
          >
            <span className="icon">
              <i className="fas fa-file-pdf"></i>
            </span>
            <span>Paper</span>
          </a>
        </span>
        <span className="link-block">
          <a
            href="https://arxiv.org/abs/2307.02460"
            className="external-link button is-normal is-rounded is-dark"
          >
            <span className="icon">
              <i className="ai ai-arxiv"></i>
            </span>
            <span>arXiv</span>
          </a>
        </span>

        {/* <span className="link-block">
          <a
            href="https://www.youtube.com/watch?v=MrKrnHhk8IA"
            className="external-link button is-normal is-rounded is-dark"
          >
            <span className="icon">
              <i className="fab fa-youtube"></i>
            </span>
            <span>Video</span>
          </a>
        </span> */}

        <span className="link-block">
          <a
            href="https://github.com/ruoxi-jia-group/projektor"
            className="external-link button is-normal is-rounded is-dark"
          >
            <span className="icon">
              <i className="fab fa-github"></i>
            </span>
            <span>Code</span>
          </a>
        </span>

        <span className="link-block">
          <a
            href="https://github.com/ruoxi-jia-group/projektor/tree/main/data"
            className="external-link button is-normal is-rounded is-dark"
          >
            <span className="icon">
              <i className="far fa-images"></i>
            </span>
            <span>Data</span>
          </a>
        </span>
      </div>
    </div>
  );
};

export default PublicationLinks;
