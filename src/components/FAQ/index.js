import React from "react";
import useDropdown from "../../hooks/useDropdown";
import FAQ_LIST from "./faqs";

const FAQItem = ({ faq }) => {
  const { toggle, collapsing, handleToggle } = useDropdown();

  return (
    <div className="faq-item">
      <div className="faq-question-wrapper">
        <h1
          className={`faq-question ${toggle ? "show" : ""} ${
            collapsing ? "collapsing" : ""
          }`}
          onClick={() => handleToggle(toggle)}
        >
          {faq.question}
        </h1>
      </div>
      <div
        className={`faq-answer-wrapper ${toggle ? "show" : ""} ${
          collapsing ? "collapsing" : ""
        }`}
      >
        <div
          className="faq-answer"
          dangerouslySetInnerHTML={{ __html: faq.answer }}
        />
      </div>
    </div>
  );
};

const FAQ = () => {
  return FAQ_LIST.map((f) => <FAQItem faq={f} key={f.question} />);
};

export default FAQ;
