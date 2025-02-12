import React from "react";
import "./styles.css";

function Timeline() {
  return (
    <section id="timeline">
      <h2>Work History</h2>
      <div className="timeline-grid">

        {/* AtmosphereTV */}
        <div className="timeline-card">
          <img src="images/atmosphere.png" alt="Work Icon" className="timeline-icon" />
          <div className="timeline-details">
            <h3>Senior Account Executive - AtmosphereTV</h3>
            <p><strong>2021–2023:</strong> Achieved $6.5M+ in revenue and acquired 1,700+ clients by utilizing data-driven strategies and innovative outreach. Consistently exceeded targets, earning multiple promotions while leading team initiatives, improving onboarding, and refining sales tactics to penetrate new markets.</p>
          </div>
        </div>

        {/* Geek Squad */}
        <div className="timeline-card">
          <img src="images/geek-squad.png" alt="Tech Icon" className="timeline-icon" />
          <div className="timeline-details">
            <h3>Geek Squad Technician</h3>
            <p><strong>2015–2021:</strong> Provided technical support both in-store and in clients' homes, troubleshooting and repairing hardware, software, and connectivity issues. Educated clients on maximizing their technology, developing strong customer service and problem-solving skills.</p>
          </div>
        </div>

        {/* Harley-Davidson */}
        <div className="timeline-card">
          <img src="images/hd.png" alt="Sales Icon" className="timeline-icon" />
          <div className="timeline-details">
            <h3>Salesman - Cowboy Harley-Davidson</h3>
            <p><strong>2011–2015:</strong> Excelled in personalized customer outreach, earning invitations to sell at events nationwide. Strengthened sales expertise and customer engagement skills while representing a globally recognized brand.</p>
          </div>
        </div>

        {/* USMC */}
        <div className="timeline-card">
          <img src="images/usmc.png" alt="Military Icon" className="timeline-icon" />
          <div className="timeline-details">
            <h3>Military Service - USMC</h3>
            <p><strong>2006–2010:</strong> Served with distinction during two deployments to Iraq and one to Afghanistan, managing complex operations in dynamic and high-pressure environments. As a lower-level leader, I was entrusted with significant decision-making responsibilities to ensure mission success while fostering respectful relationships with local communities and adhering to military and cultural customs. These experiences honed my leadership, adaptability, and problem-solving abilities.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Timeline;