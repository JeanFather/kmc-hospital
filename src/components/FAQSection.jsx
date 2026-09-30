import { useState } from "react";
import "../styles/FAQSection.css";
import { faqData } from "../data/faqs";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-header">Help & FAQs</h2>

        <div className="faq-list">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div className="faq-item" key={index}>
                <button
                  className={`faq-question ${isOpen ? "active" : ""}`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`faq-icon ${isOpen ? "icon-minus" : "icon-plus"}`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
