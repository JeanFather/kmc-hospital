import CTASection from "../components/CTASection";
import "../styles/About.css";
import { facilitiesData } from "../data/facilities.js";
import { statsData } from "../data/aboutstats.js";

export default function About() {
  return (
    <>
      <div className="about-page">
{/* === HEADER SECTION === */}
        <section className="about-header-section">
          <h4 className="about-accent">About KMC Hospital</h4>
          <h1 className="about-main-title">Our Proven Track Record</h1>
          
          <p className="about-text">
            Over a decade of delivering excellent healthcare, building trust within our community and saving lives around Abuja. We're renowned for our excellence in healthcare innovation, patient safety and world-class outcomes.
          </p>
          <p className="about-text">
            Located in the heart of Phase 4, Kubwa, KMC Hospital is dedicated to providing world-class, accessible healthcare. Our mission is to combine advanced medical technology with compassionate, patient-first service.
          </p>
          
          {/* Main Hospital Image */}
          <img 
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop" 
            alt="KMC Hospital Patient Room" 
            className="about-hero-image"
          />
          
          <p className="about-text">
            KMC Hospital has been a beacon of hope and healing in Kubwa. Our commitment to providing accessible, quality healthcare has transformed thousands of lives.
          </p>
          <p className="about-text">
            From routine check-ups to emergency interventions, our dedicated team works tirelessly to ensure every patient receives the care they deserve.
          </p>
        </section>
        {/* === STATS GRID SECTION === */}
        <section className="about-grid-section">
          <div className="card-grid">
            {statsData.map((stat) => (
              <div className={`info-card dark-card ${stat.id}`} key={stat.id}>
                <h2 className="card-large-number">{stat.number}</h2>
                <h3 className="card-green-title">{stat.title}</h3>
                <p className="card-desc">{stat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* === FACILITIES SECTION === */}
        <section className="about-facilities-section">
{/* === FACILITIES SECTION === */}
        
          <h2 className="facilities-title">Our Facilities</h2>
          <p className="about-text">
            We continually invest in advanced medical technology to provide the Kubwa community with the highest standard of accessible healthcare.
          </p>
          <p className="about-text">
            Our hospital is equipped with modern, state-of-the-art infrastructure designed to ensure your comfort, safety, and a swift recovery.
          </p>
          <div className="card-grid">
            {facilitiesData.map((facility) => (
              <div
                className={`info-card light-card ${facility.id}`}
                key={facility.id}
              >
                <h3 className="card-green-title large-title">
                  {facility.title}
                </h3>
                <p className="card-desc">{facility.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CTASection />
    </>
  );
}
