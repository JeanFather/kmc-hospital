import { Link } from "react-router-dom";
import "../styles/CTAHome.css";

export default function CTAHome() {
  return (
    <section className="cta-home">
      <div className="cta-home-content">
        <h4 className="cta-home-accent">Contact Us</h4>

        <h2 className="cta-home-title">
          Get Started with Your Healthcare Journey
        </h2>

        <p className="cta-home-desc">
          We're here to support you every step of the way. Simply click the
          button below to share your details, and our International Patient Team
          will reach out within 24 hours.
        </p>

        <div className="cta-home-actions">
          <Link to="/contact#contact-form" className="btn-cta-home">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
