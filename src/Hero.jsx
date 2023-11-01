import PubLinks from "./PubLinks.jsx"; // Assuming this component exists and handles the publication links
import PubAuthors from "./PubAuthors.jsx"; // Assuming this component exists and handles the authors
import "../NerfiesTemplate/static/css/index.css";

const PublicationHero = () => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container is-max-desktop">
          <div className="columns is-centered">
            <div className="column has-text-centered">
              <h1 className="title is-1 publication-title">
                Performance Scaling via Optimal Transport: Enabling Data
                Selection from Partially Revealed Sources
              </h1>
              <PubAuthors /> {/* Component for displaying authors */}
              <div className="column has-text-centered">
                <PubLinks /> {/* Component for displaying publication links */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationHero;
