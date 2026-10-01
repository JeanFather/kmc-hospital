import { Link } from "react-router-dom";
import "../styles/CTASection.css";
import whatsappIcon from '../assets/site-images/whatsapp-logo.svg';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">Ready to see a Specialist?</h2>
        <p className="cta-subtitle">
          Schedule your visit online or chat directly with our front desk for
          immediate assistance.
        </p>

        <div className="cta-buttons">
          <Link to="/contact#contact-form" className="cta-btn btn-primary">
            Book a Consultation
          </Link>

          <a
            href="https://wa.me/2348164144914"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn btn-whatsapp"
          >
            WhatsApp Coordinator
          </a>
        </div>
      </div>
    </section>
  );
}
