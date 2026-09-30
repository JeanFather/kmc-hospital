import { useState, useEffect } from "react";
import "../styles/Contact.css";
import CTASection from "../components/CTASection";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState("");

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.getElementById(
        location.hash.replace("#", ""),
      );
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddService = (e) => {
    e.preventDefault();
    if (newService.trim() !== "") {
      setServices([...services, newService]);
      setNewService("");
    }
  };

  return (
    <>
      {" "}
      <div className="contact-page">
        <div className="contact-header">
          <h1 className="page-title">Contact & Patient Guide</h1>
          <h3 className="accent-subtitle">Get in Touch</h3>

          <div className="contact-details">
            <p>
              Address: No. 10 Garko Road, Off Okitipupa Crescent, Phase 4,
              Kubwa, Abuja
            </p>
            <p>Phone: +234 816 414 4914</p>
            <p>Email: kmc.hospital@yahoo.com</p>
            <p>Hours: 24/7 Emergency | Mon-Fri 8am-6pm Consultations</p>
          </div>
        </div>

        <div className="map-container">
          <iframe
            title="KMC Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1346.3422866350834!2d7.3440332263178725!3d9.154723793338466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd8d6a51a6601%3A0xf9b7948fb9833750!2sKMC%20Hospital!5e0!3m2!1sen!2sus!4v1790678359905!5m2!1sen!2sus"
            className="google-map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div id="contact-form" className="form-container">
          <h2>Request an Appointment</h2>
          <p>Book an appointment, schedule a visit or ask us a question</p>

          <form>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
            />

            <div className="service-section">
              <input
                type="text"
                placeholder="Add a service or reason for your visit"
                value={newService}
                onChange={(e) => setNewService(e.target.value)}
              />
              <button className="service-button" onClick={handleAddService}>
                Add
              </button>
            </div>

            <div className="service-array">
              {services.map((service, index) => (
                <div className="service-chip" key={index}>
                  {service}
                </div>
              ))}
            </div>

            <textarea
              name="message"
              placeholder="What Other Ways Can We Help You?"
              value={formData.message}
              onChange={handleInputChange}
            />

            <button className="submit-button" type="submit">
              Submit Now
            </button>
          </form>
        </div>
      </div>
      <CTASection />
    </>
  );
}
