import React from "react";
import "./ChooseUs.css";
import image from "../../assets/images/img6.jpg";
import image2 from "../../assets/images/img8.jpg";
const ChooseUs = () => {
  return (
    <div className="choose">
      <div className="image-choose">
        <img src={image} alt="Image" />
      </div>
      <div className="content-choose">
        <div className="choose-right">
          <h2>Becom an Instructor</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            similique iusto molestias,
          </p>
          <div className="choose-right-div">- Good Teachers and Staff</div>

          <div className="choose-card">
            <img src={image2} alt="Card Image" className=" choose-card-image" />

            <p className="choose-card-paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              fugit adipisci, molestiae quos eveniet quaerat neque nihil placeat
              incidunt ipsum.
              <br />
              <br />
              quibusdam voluptate porro laborum ducimus veritatis accusamus
              facere, amet eligendi.
            </p>
          </div>
          <p>+ we value Good Characters</p>
          <p> + Your children are save</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
