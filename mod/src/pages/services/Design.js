import { React, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Strategy.css";

const Strategy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with options
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Strategizing Marketing Plan",
      content:
        "Strategy involves 3 steps Analysis, Formulation & Implementation. We are with you at every step. Sales excellence requires a needle-like focus on value preposition communicated through the best customer experience and uniquely articulated marketing strategy. A well planned road map based on your sales goals.",
    },

    {
      title: "Establishing Brand Identity",
      content:
        "From the inception of an idea to connecting your brand with customers, we make your business stand out among the rest and be the best with the right set of brand guidelines. We seamlessly understand your brand requirements & provide relevant marketing solutions to achieve remarkable excellence in your industry.",
    },

    {
      title: "Conceptualize Content & Marketing Assets",
      content:
        "As marketing wizards, we support our clients with everything traditional to digital, from logo to websites, from SEO to social media strategies that generate leads and turn clicks into conversions. We offer a range of interactive and user-friendly website & content creation services to meet your goals and expectations.",
    },

    {
      title: "Monitoring Reports & ROI",
      content:
        "A capable forecasted marketing solution powered by tracking of performance further enables us to make the right decisions. With our technological geniuses & robust approaches, we help you set up marketing practices that will drive more sales. A ROI report helps in making & informed decisions related to your marketing investments.",
    },
    {
      title: "Monitoring Reports & ROI",
      content:
        "A capable forecasted marketing solution powered by tracking of performance further enables us to make the right decisions. With our technological geniuses & robust approaches, we help you set up marketing practices that will drive more sales. A ROI report helps in making & informed decisions related to your marketing investments.",
    },
    {
      title: "Monitoring Reports & ROI",
      content:
        "A capable forecasted marketing solution powered by tracking of performance further enables us to make the right decisions. With our technological geniuses & robust approaches, we help you set up marketing practices that will drive more sales. A ROI report helps in making & informed decisions related to your marketing investments.",
    },
  ];

  const tabs = [
    "Package Designing",
    "Marketing Colaterals",
    "Logo Designing",
    "ATL & BTL",
  ];

  const cardData = [
    [
      { img: "../../assets/images/broclogo.jpg", text: "Card 1", title:"Jagmohan" },
      { img: "/images/kent.png", text: "Card 2" },
      { img: "image3.jpg", text: "Card 3" },
      { img: "image4.jpg", text: "Card 4" },
      { img: "image5.jpg", text: "Card 5" },
    ],
    [
      { img: "image6.jpg", text: "Card 6" },
      { img: "image7.jpg", text: "Card 7" },
      { img: "image8.jpg", text: "Card 8" },
      { img: "image9.jpg", text: "Card 9" },
      { img: "image10.jpg", text: "Card 10" },
    ],
    [
      { img: "image11.jpg", text: "Card 11" },
      { img: "image12.jpg", text: "Card 12" },
      { img: "image13.jpg", text: "Card 13" },
      { img: "image14.jpg", text: "Card 14" },
      { img: "image15.jpg", text: "Card 15" },
    ],
    [
      { img: "image16.jpg", text: "Card 16" },
      { img: "image17.jpg", text: "Card 17" },
      { img: "image18.jpg", text: "Card 18" },
      { img: "image19.jpg", text: "Card 19" },
      { img: "image20.jpg", text: "Card 20" },
    ],
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [popup, setPopup] = useState(null);

  return (
    <>
      <div className="strategy-container" data-aos="fade-up">
        <div className="strategy-content">
          <h1>Design</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className="accordion-container">
          {accordionData.map((item, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-header ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <span>{activeIndex === index ? "\u2212" : "+"}</span>{" "}
                {/* Unicode minus */}
              </div>
              <div
                className={`accordion-body ${
                  activeIndex === index ? "open" : ""
                }`}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tabs-container">
        <div className="tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={index === activeTab ? "active" : ""}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="cards">
          {cardData[activeTab].map((card, index) => (
            <div
              key={index}
              className="develop-card"
              onClick={() => setPopup(card)}
            >
              <img
                className="develop-card-image"
                src={card.img}
                alt={card.text}
              />
              <h1 className="develop-card-title">{card.title}</h1>
              <a href={card.link} className="card-link">
                Visit Website
              </a>
            </div>
          ))}
        </div>
        {popup && (
          <div className="popup">
            <div className="popup-content">
              <button className="close" onClick={() => setPopup(null)}>
                X
              </button>
              <img src={popup.img} alt="Popup Image" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Strategy;
