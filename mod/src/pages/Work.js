import { React, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutBanner from '../components/aboutbanner/AboutBanner'
import './Work.css'
const Work = () => {

  const cardsData = [
    {
      imgSrc: "../../assets/images/jagmohan.png",
      title: "Jagmohan",
      link: "#",
    },
    { imgSrc: "", title: "Card Title 2", link: "#" },
    {
      imgSrc: "https://via.placeholder.com/300",
      title: "Card Title 3",
      link: "#",
    },
    {
      imgSrc: "https://via.placeholder.com/300",
      title: "Card Title 4",
      link: "#",
    },
    {
      imgSrc: "https://via.placeholder.com/300",
      title: "Card Title 5",
      link: "#",
    },
    {
      imgSrc: "https://via.placeholder.com/300",
      title: "Card Title 6",
      link: "#",
    },
    {
      imgSrc: "https://via.placeholder.com/300",
      title: "Card Title 7",
      link: "#",
    },
    {
      imgSrc: "https://via.placeholder.com/300",
      title: "Card Title 8",
      link: "#",
    },
    {
      imgSrc: "https://via.placeholder.com/300",
      title: "Card Title 9",
      link: "#",
    },
  ];
  return (
    <>
    
      <AboutBanner title="OUR WORK"/>
      <div className="work-card-container">
        {cardsData.map((card, index) => (
          <div key={index} className="work-card">
            <img
              src={card.imgSrc}
              alt={card.title}
              className="work-card-image"
            />
            <h1 className="work-card-title">{card.title}</h1>
            <a href={card.link} className="work-card-link">
              Read More
            </a>
          </div>
        ))}
      </div>
      
    </>
  )
}

export default Work
