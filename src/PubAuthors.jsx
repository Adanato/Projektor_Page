import React from "react";

const PublicationAuthors = () => {
  const authors = [
    {
      name: "Feiyang Kang",
      affiliationNumber: "1",
      url: "", // Replace with actual URL or leave as an empty string if not available
    },
    {
      name: "Hoang Anh Just",
      affiliationNumber: "1",
      url: "", // Replace with actual URL
    },
    {
      name: "Anit Kumar Sahu",
      affiliationNumber: "2",
      url: "", // Replace with actual URL
    },
    {
      name: "Ruoxi Jia",
      affiliationNumber: "1",
      url: "https://ruoxijia.info/", // Replace with actual URL
    },
  ];

  const affiliations = [
    { number: "1", text: "Virginia Tech" },
    { number: "2", text: "Amazon" },
  ];

  return (
    <>
      <div className="is-size-5 publication-authors">
        {authors.map((author, index) => (
          <span key={index} className="author-block">
            {author.url ? (
              <a href={author.url} target="_blank" rel="noopener noreferrer">
                {author.name}
              </a>
            ) : (
              <span className="author-name">{author.name}</span>
            )}
            <sup>{author.affiliationNumber}</sup>
            {index < authors.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>
      <div className="is-size-5 publication-authors">
        {affiliations.map((affiliation, index) => (
          <span key={affiliation.number} className="author-block">
            <sup>{affiliation.number}</sup>
            {affiliation.text}
            {index < affiliations.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>
    </>
  );
};

export default PublicationAuthors;
