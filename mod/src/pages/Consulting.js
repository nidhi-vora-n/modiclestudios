import {React, useState, useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Consulting.css";
 
const Consulting = () => {

  useEffect(() => {
      AOS.init({ duration: 1000, once: true }); // Initialize AOS with options
    }, []);
  
 
const [activeIndex, setActiveIndex] = useState(null);
 
  const toggleAccordion = (index) => {

    setActiveIndex(activeIndex === index ? null : index);

  };
 
  const accordionData = [

    { title: "Strategizing Marketing Plan", content: "Strategy involves 3 steps Analysis, Formulation & Implementation. We are with you at every step. Sales excellence requires a needle-like focus on value preposition communicated through the best customer experience and uniquely articulated marketing strategy. A well planned road map based on your sales goals." },

    { title: "Establishing Brand Identity", content: "From the inception of an idea to connecting your brand with customers, we make your business stand out among the rest and be the best with the right set of brand guidelines. We seamlessly understand your brand requirements & provide relevant marketing solutions to achieve remarkable excellence in your industry." },

    { title: "Conceptualize Content & Marketing Assets", content: "As marketing wizards, we support our clients with everything traditional to digital, from logo to websites, from SEO to social media strategies that generate leads and turn clicks into conversions. We offer a range of interactive and user-friendly website & content creation services to meet your goals and expectations." },

    { title: "Monitoring Reports & ROI", content: "A capable forecasted marketing solution powered by tracking of performance further enables us to make the right decisions. With our technological geniuses & robust approaches, we help you set up marketing practices that will drive more sales. A ROI report helps in making & informed decisions related to your marketing investments." },

  ];

  return (
<div className="consult-container"  data-aos="fade-up">
<div className="consult-img">
<img src="../../assets/images/accor-image.png"></img>
</div>
<div className="accordion-container">
<h1>Consulting</h1>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

      {accordionData.map((item, index) => (
<div key={index} className="accordion-item">
<div

            className={`accordion-header ${activeIndex === index ? "active" : ""}`}

            onClick={() => toggleAccordion(index)}
>

            {item.title}
<span>+</span>
</div>
<div

            className={`accordion-body ${activeIndex === index ? "open" : ""}`}
>
<p>{item.content}</p>
</div>
</div>

      ))}
</div>
</div>

  );

};
 
export default Consulting;

 