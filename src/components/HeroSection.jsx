import { Link } from "react-router-dom";
import "../styles/HeroSection.css";
import whatsappIcon from "../assets/site-images/whatsapp-logo.svg";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Get Quality Healthcare at KMC Hospital in Kubwa
        </h1>
        <p className="hero-subtitle">
          Trusted by Patients from all around Abuja and Northern Nigeria
        </p>

        <p className="hero-description">
          Kubwa's leading private hospital offering advanced treatments, quick
          appointments, and personalised patient support.
        </p>

        <div className="hero-buttons">
          <Link
            to="/contact#contact-form"
            className="btn-hero btn-hero-primary"
          >
            Request a treatment plan
          </Link>

          <a
            href="https://wa.me/2348164144914"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero btn-hero-whatsapp"
          >
            <div className="whatsapp">
            <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
            <p>WhatsApp Coordinator</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
