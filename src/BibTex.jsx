const BibTeX = () => {
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

  return (
    <section className="section" id="BibTeX">
      <div className="container is-max-desktop content">
        <h2 className="title">BibTeX</h2>
        <pre>
          <code>{bibtexEntry}</code>
        </pre>
      </div>
    </section>
  );
};

export default BibTeX;
