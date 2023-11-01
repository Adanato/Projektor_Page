function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <a className="icon-link" href="./static/videos/nerfies_paper.pdf">
            <i className="fas fa-file-pdf"></i>
          </a>
          <a className="icon-link" href="https://github.com/keunhong" disabled>
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="columns is-centered">
          <div className="column is-8">
            <div className="content">
              <p>
                This website is licensed under a{" "}
                <a
                  rel="license"
                  href="http://creativecommons.org/licenses/by-sa/4.0/"
                >
                  Creative Commons Attribution-ShareAlike 4.0 International
                  License
                </a>
                .
              </p>
              <p>
                This means you are free to borrow the{" "}
                <a href="https://github.com/nerfies/nerfies.github.io">
                  source code
                </a>{" "}
                of this website, we just ask that you link back to this page in
                the footer. Please remember to remove the analytics code
                included in the header of the website which you do not want on
                your website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  ); ///
}

export default Footer;
