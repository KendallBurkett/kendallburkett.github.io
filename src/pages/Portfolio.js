import React, { useEffect, useState } from "react";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css"; // Ensure styles are applied

const GITHUB_USERNAME = "KendallBurkett"; // Your GitHub username
const API_URL = `https://api.github.com/users/KendallBurkett/repos`;

// Mapping GitHub Topics to Images
const topicImages = {
  react: "images/react-icon.png",
  javascript: "images/javascript-icon.png",
  python: "images/python-icon.png",
  tableau: "images/tableau-icon.png",
  sql: "images/sql-icon.png",
  flask: "images/flask-icon.png",
  nodejs: "images/nodejs-icon.png",
};

function Portfolio() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  // Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section id="portfolio">
      <h2 className="portfolio-title">Portfolio</h2>
      <p>Explore some of my completed projects:</p>

      <Slider {...settings} className="portfolio-carousel">
        {repos.map((repo) => (
          <div key={repo.id} className="portfolio-item">
            <div className="portfolio-card">
              {/* Thumbnail (Placeholder for now) */}
              <img
                src={`https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`}
                alt={repo.name}
                className="repo-thumbnail"
              />
              <h3>{repo.name}</h3>
              <p>{repo.description || "No description provided."}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Portfolio;