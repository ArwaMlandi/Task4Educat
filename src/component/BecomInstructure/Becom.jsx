import React from "react";
import "./Becom.css";
import image from "../../assets/images/img4.jpg";
import { FaCheck } from "react-icons/fa";
const Becom = () => {
  return (
    <div className="become">
      <div className="become-left">
        <h2>Becom an Instructor</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          similique iusto molestias, nostrum quas quod Reiciendis similique
          iusto molestias, Reiciendis similique iusto molestias,
        </p>
        <ul className="becom-ul">
          <li className="becom-li">
            <FaCheck size={15} /> <span>Behined the world Mountaines</span>
          </li>
          <li className="becom-li">
            <FaCheck size={15} /> <span>Far far way Mountaines</span>
          </li>
          <li className="becom-li">
            <FaCheck size={15} /> <span>Larg Language Ocean</span>
          </li>
          <button className="becom-button">GET STARTED</button>
        </ul>
      </div>
      <div className="become-right">
        <div></div>
        <img src={image} alt="Image" />
      </div>
    </div>
  );
};

export default Becom;
