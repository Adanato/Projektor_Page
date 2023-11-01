import image1 from "./assets/4imagegraphs.PNG"; // replace with your actual image path
import image2 from "./assets/IntroImage.PNG"; // replace with your actual image path
import image3 from "./assets/pipeline_projektor.png";
import "./ImageGallery.css"; // Import custom styles

function ImageGallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-row">
        <div className="gallery-column">
          <img
            src={image1}
            alt="Description of Image 1"
            className="gallery-image"
          />
        </div>
        <div className="gallery-column">
          <img
            src={image2}
            alt="Description of Image 2"
            className="gallery-image"
          />
        </div>
        <div className="gallery-column">
          <img
            src={image3}
            alt="Description of Image 3"
            className="gallery-image"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
