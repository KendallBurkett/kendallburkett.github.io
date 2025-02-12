import React from "react";
import "./styles.css";

function About() {
  return (
    <>
      {/* About Me and Skills Side-by-Side */}
      <section id="about-skills">
        <div className="about-container">
          <h2>Who I Am</h2>
          <p>
            Hi, I’m Kendall Burkett, a dynamic developer, data analyst, and leader with a proven track record of success across diverse industries. My journey has been shaped by years of experience in data analytics, machine learning, development, and leadership roles that required adaptability, innovation, and a dedication to excellence.
          </p>
          <p>
            In my recent role as a Senior Account Executive at AtmosphereTV, I generated over $6.5M in revenue and acquired 1,700+ clients by leveraging data-driven strategies and innovative outreach. I consistently exceeded targets, earned multiple promotions, and led team initiatives to improve onboarding processes and refine sales tactics for emerging markets.
          </p>
          <p>
            During the Covid-19 pandemic, I pivoted to freelance web development, where I built and maintained custom web applications for clients. This experience deepened my technical expertise, strengthened my client collaboration skills, and reaffirmed my passion for creating impactful solutions.
          </p>
          <p>
            Previously, I honed my technical and customer service skills as a Geek Squad Technician, providing comprehensive hardware, software, and connectivity support to clients in-store and in their homes. This role reinforced my problem-solving abilities and allowed me to educate clients on how to maximize the value of their technology.
          </p>
          <p>
            As a salesman for Cowboy Harley-Davidson, I developed exceptional customer engagement and sales skills, building lasting relationships and earning opportunities to represent the brand at national events. This role showcased my professionalism, adaptability, and ability to connect with diverse audiences.
          </p>
          <p>
            My career began with service in the United States Marine Corps, where I completed two deployments to Iraq and one to Afghanistan. I managed complex operations under high-pressure conditions, balancing mission objectives with cultural respect and collaboration. These experiences shaped my leadership style, adaptability, and commitment to fostering meaningful relationships.
          </p>
          <p>
            Whether analyzing data, developing innovative solutions, or leading a team, I bring a strong foundation of technical expertise, strategic thinking, and a passion for continuous growth. Explore this site to learn more about my journey, skills, and accomplishments.
          </p>
          <p>
            I'm highly skilled in Python, SQL, data visualization tools (like Tableau), and React. Explore this site to learn more about my journey and accomplishments.
          </p>
        </div>

        <div className="skills-container">
          <h2>Skills & Expertise</h2>
          <div className="skill-card">
            <h3>Programming</h3>
            <p>Proficient: Python, JavaScript, SQL</p>
            <p>Familiar: C++, Java</p>
          </div>
          <div className="skill-card">
            <h3>Data Analytics</h3>
            <p>Tools: Tableau, Power BI, MongoDB, PostgreSQL</p>
            <p>Techniques: Statistical Modeling, Machine Learning, A/B Testing</p>
          </div>
          <div className="skill-card">
            <h3>Development</h3>
            <p>Front-End: React, HTML, CSS, Bootstrap</p>
            <p>Back-End: Flask, Node.js, APIs</p>
          </div>
          <div className="skill-card">
            <h3>Leadership & Collaboration</h3>
            <p>Team Management & Mentorship</p>
            <p>Cross-Functional Collaboration</p>
          </div>
          <div className="skill-card">
            <h3>Problem-Solving</h3>
            <p>Fit/Gap Analysis</p>
            <p>Root Cause Analysis</p>
            <p>Critical Thinking & Creativity</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;