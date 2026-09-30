import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="global-footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <div className="footer-logo"></div>
            <div className="footer-brand-text">
              <h3 className="footer-title">KMC Hospital</h3>
              <p className="footer-subtitle">Kubwa, Abuja</p>
            </div>
          </div>
          <p className="footer-description">
            Kubwa Muslim Community Hospital was established over a decade ago to
            provide accessible quality healthcare to its community and set
            benchmarks in patient safety and excellent outcomes.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Our Main Hospital Location</h4>
          <address className="footer-address">
            No. 10 Garko Road
            <br />
            Off Okitipupa Crescent,
            <br />
            Phase 4,
            <br />
            Kubwa,
            <br />
            Abuja,
            <br />
            Nigeria
          </address>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Opening Hours</h4>
          <div className="footer-hours">
            <p>
              <strong>Emergency:</strong>
              <br />
              24 Hours, 7 days a week
            </p>
            <p>
              <strong>Consultations:</strong>
              <br />
              Monday to Friday
              <br />
              8:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contact Us</h4>
          <div className="footer-contact-info">
            <p>  <a href="mailto:kmc.hospital@yahoo.com">Email: kmc.hospital@yahoo.com</a></p>
            <p>Phone: +234 816 414 4914</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Kubwa Muslim Community Hospital</p>
      </div>
    </footer>
  );
}
