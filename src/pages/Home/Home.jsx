import React from "react";
import { useState } from "react";
import NavBarUp from "../../component/Navbar/NavBarUp";
import NaveBarDown from "../../component/Navbar/NaveBarDown";
import imgee from "../../assets/images/img111.svg";
import im1 from "../../assets/images/img4.jpg";
import im2 from "../../assets/images/img8.jpg";
import im3 from "../../assets/images/img5.jpg";
import im4 from "../../assets/images/img12.jpg";
import "./Home.css";
import Category from "../../component/category/Category";
import Becom from "../../component/BecomInstructure/Becom";
import BestEducation from "../../component/BestEducation/BestEducation";
import { MdStar, MdMenuBook } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import NewsHome from "../../component/News/NewsHome";
import Testamonial from "../../component/Testamonial/Testamonial";
import Price from "../../component/Price/Price";
import ChooseUs from "../../component/ChooseUs/ChooseUs";

const Home = () => {
  const backgroundImageUrl = imgee;

  const containerAllStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const [cards, setCards] = useState([
    {
      id: 1,
      image: im1,
      iconCount: <MdMenuBook />,
      count: "43 lesson",
      iconRate: <MdStar />,
      rate: "4.8",
      title: "Education Program Title",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. t",
      rate: 4.5,
      price: "$19.99",
      link: "Learn More",
    },
    {
      id: 2,
      image: im2,
      iconCount: <MdMenuBook />,
      count: "43 lesson",
      iconRate: <MdStar />,
      rate: "4.8",
      title: "Education Program Title",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      rate: 4.8,
      price: "$24.99",
      link: "Learn More",
    },
    {
      id: 3,
      image: im3,
      iconCount: <MdMenuBook />,
      count: "43 lesson",
      iconRate: <MdStar />,
      rate: "4.8",
      title: "Education Program Title",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      rate: 4.2,
      price: "$14.99",
      link: "Learn More",
    },
  ]);

  return (
    <div>
      <div style={containerAllStyle}>
        <div className="home-content">
          <span>WHATCH THE VIDEO</span>
          <h2>Education is the Mother of Leadership </h2>
          <button className="home-button">EXPLORE COURSES</button>
        </div>
        <NavBarUp />
      </div>
      <Category />
      <Becom />
      <BestEducation />
      <div className="course-container">
        <h2 className="course-container-h2">The Right Course For You</h2>
        <p className="best-p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam,{" "}
          <br /> dolorum maxime minus libero ab recusandae delectus exercitation
        </p>

        <div className="course">
          {cards.map((card) => (
            <div className="course-card" key={card.id}>
              <div className="course-card-content">
                <div className="course-image-container">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="coursr-rate">
                  <p className="coursr-countP">
                    {" "}
                    {card.iconCount} {card.count}
                  </p>
                  <p className="coursr-rateP">
                    {card.iconRate} {card.rate}
                  </p>
                </div>
                <h3 className="course-title">{card.title}</h3>

                <span className="course-p">
                  {card.description} <br /> {card.description}
                </span>

                <div>
                  <hr />
                </div>
                <div className="coursr-rate">
                  <p className="coursr-pric"> {card.price}</p>
                  <p className="coursr-link">{card.link}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="educat">
        <h2>Education for Tomorrow's Leaders</h2>
        <p className="educatP">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          impedit, vero error perspiciatis laudantium labore temporibus cum
          optio eaque labore temporibus cum optio eaqu labore temporibus cum
          optio eaqu
        </p>
        <button className="home-button">ENROLL NOW</button>
      </div>

      <div className="home-about">
        <div className="become-left">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            similique iusto molestias,
            <br /> nostrum quas quod Reiciendis similique iusto molestias,
            Reiciendis similique iusto molestias,
            <br /> Reiciendis similique iusto
          </p>
          <ul className="becom-ul">
            <li className="becom-li">
              <FaCheck size={15} /> <span>Sperated They live.</span>
            </li>
            <li className="becom-li">
              <FaCheck size={15} />{" "}
              <span>Bookmarksgrove right at the coast.</span>
            </li>
            <li className="becom-li">
              <FaCheck size={15} /> <span>Larg Language Ocean</span>
            </li>
            <div className="home-about-num">
              <p className="home-about-numP">
                {" "}
                <span className="home-about-numspan">2+0</span> No, Students
              </p>
              <p className="home-about-numP">
                <span className="home-about-numspan">0</span>No , Teachers
              </p>
              <p className="home-about-numP">
                <span className="home-about-numspan">0</span>No , Awards
              </p>
            </div>
            <button className="becom-button">ADDMITION</button>
            <button className="home-about-button">LEARN MORE</button>
          </ul>
        </div>

        <div className="right-test">
          <div></div>
          <div></div>
          <img src={im4} alt="Image" className="person-test" />
        </div>
      </div>
      <NewsHome />

      <Price />
      <Testamonial />
      <ChooseUs />
    </div>
  );
};

export default Home;
