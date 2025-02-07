import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Team.css";

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic scrolling
    autoplaySpeed: 3000, // Set interval for automatic scrolling in milliseconds
    nextArrow: <CustomNextArrow />, // Custom next button
    prevArrow: <CustomPrevArrow />, // Custom previous button
  };

  const cards = [
    {
      name: "Kaustubh Chavan",
      role: "Design Head",
      image: "../../assets/images/team/kaustubh.png",
    },
    {
      name: "Ishan Ghamande",
      role: "Content Head",
      image: "../../assets/images/team/ishan.png",
    },
    { name: "Nidhi Vora", role: "Web Developer", image: "../../assets/images/team/nidhi.png" },
    {
      name: "Yash Kumbhar",
      role: "Web Developer",
      image: "../../assets/images/team/yashvellaaa.png",
    },
    {
      name: "Dhiraj Patwa",
      role: "SEO Specialist",
      image: "../../assets/images/team/dhirajseo.png",
    },
    {
      name: "Sagar Nalawade",
      role: "Sr. Graphic Designer",
      image: "../../assets/images/team/sagar.png",
    },
    {
      name: "Sandeep Zore",
      role: "2D Animator & Vedio Editor",
      image: "../../assets/images/team/sandeep.png",
    },
    {
      name: "Pranali Kesarkar",
      role: "Graphic Designer",
      image: "../../assets/images/team/pranalijr.png",
    },
    {
      name: "Sanket Dait",
      role: "Graphic Designer",
      image: "../../assets/images/team/sanket.png",
    },
    {
      name: "Preeti Kumari",
      role: "Account Manager",
      image: "../../assets/images/team/preeti.png",
    },
    {
      name: "Namrata Bathija",
      role: "Content Writer",
      image: "../../assets/images/team/namrata.png",
    },
    {
      name: "Sagar Nalawade",
      role: "UI/UX Designer",
      image: "../../assets/images/team/sagar.png",
    },
  ];

  const Card = ({ name, role, image }) => {
    return (
      <div className="card">
        <img src={image} alt={`${name}`} className="card-image" />
        <div class="card-info">
          <h3 className="card-name">{name}</h3>
          <p className="card-role">{role}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="slider-container">
        <p className="slider-head">Innovators. Strategists. Achievers.</p>
        <Slider {...settings}>
          {Array(Math.ceil(cards.length / 4))
            .fill()
            .map((_, i) => (
              <div key={i} className="slide">
                <div className="row">
                  {cards.slice(i * 4, i * 4 + 2).map((card, index) => (
                    <div key={index} className="card">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="card-image"
                      />
                      <div className="card-info">
                        <h3>{card.name}</h3>
                        <p>{card.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="row">
                  {cards.slice(i * 4 + 2, i * 4 + 4).map((card, index) => (
                    <div key={index} className="card">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="card-image"
                      />
                      <div className="card-info">
                        <h3>{card.name}</h3>
                        <p>{card.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </Slider>
      </div>

      <div className="team-mobile-container">
        <p className="slider-head">Innovators. Strategists. Achievers.</p>
        {cards.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            role={card.role}
            image={card.image}
          />
        ))}
      </div>
    </>
  );
};

// Custom next button
const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return <div className={`${className} custom-next-arrow`} onClick={onClick} />;
};

// Custom previous button
const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return <div className={`${className} custom-prev-arrow`} onClick={onClick} />;
};

export default Team;
