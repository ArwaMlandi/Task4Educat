import React from "react";
import "./Category.css";
import {
  BiLogoReact,
  BiCamera,
  BiMusic,
  BiCalculator,
  BiPencil,
} from "react-icons/bi";
import { MdOutlineBusinessCenter, MdAnimation } from "react-icons/md";
import { SiGooglemarketingplatform } from "react-icons/si";
const Category = () => {
  return (
    <div className="cat">
      <h2>Browse Top Category</h2>
      <div className="cat-grid">
        <div className="cat-grid-item">
          <BiLogoReact className="item-icon" />
          <div className="item-text">
            <p className="item-text-p">Science</p>
            <span>1,991 courses</span>
          </div>
        </div>
        <div className="cat-grid-item">
          <MdOutlineBusinessCenter className="item-icon" />
          <div className="item-text">
            <p className="item-text-p">Business</p>
            <span>2,455 courses</span>
          </div>
        </div>
        <div className="cat-grid-item">
          <BiCalculator className="item-icon" />
          <div className="item-text">
            <p className="item-text-p">Finance Accouting</p>
            <span>1,881 courses</span>
          </div>
        </div>
        <div className="cat-grid-item">
          <BiPencil className="item-icon" />
          <div className="item-text">
            <p className="item-text-p">Design</p>
            <span>3,487 courses</span>
          </div>
        </div>
        <div className="cat-grid-item">
          <BiMusic className="item-icon" />
          <div className="item-text">
            <p className="item-text-p">Music</p>
            <span>2,445 courses</span>
          </div>
        </div>
        <div className="cat-grid-item">
          <SiGooglemarketingplatform className="item-icon" />
          <div className="item-text">
            <p className="item-text-p">Marketing</p>
            <span>4,025 courses</span>
          </div>
        </div>
        <div className="cat-grid-item">
          <BiCamera className="item-icon" />
          <div className="item-text">
            <p className="item-text-p">Photography</p>
            <span>6,154 courses</span>
          </div>
        </div>
        <div className="cat-grid-item">
          <MdAnimation className="item-icon" />
          <div className="item-text">
            <p className="item-text-p">Animation</p>
            <span>1,988 courses</span>
          </div>
        </div>
      </div>
      <p>
        We have more category here. <span>Brows all</span>
      </p>
    </div>
  );
};

export default Category;
