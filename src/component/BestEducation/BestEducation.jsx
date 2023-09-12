import React from "react";
import "./BestEducation.css";
import {
  BiCalculator,
  BiMusic,
  BiBookOpen,
  BiBookReader,
  BiLoaderAlt,
  BiHeadphone,
} from "react-icons/bi";
const BestEducation = () => {
  return (
    <div className="best">
      <h2>We Have Best Education</h2>
      <p className="best-p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, <br />{" "}
        dolorum maxime minus libero ab recusandae delectus exercitation
      </p>
      <div className="best-grid">
        <div className="best-grid-item">
          <BiMusic className="best-item-icon" size={30} />
          <div className="best-item-text">
            <p className="best-item-text-p">Music Class</p>
            <span className="best-item-text-span">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              ipsa culpa magnam veniam repellendus porro doloribus. Nisi
              quisquam incidunt ratione
            </span>
          </div>
        </div>

        <div className="best-grid-item">
          <BiCalculator className="best-item-icon" size={30} />
          <div className="best-item-text">
            <p className="best-item-text-p">Math Class</p>
            <span className="best-item-text-span">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              ipsa culpa magnam veniam repellendus porro doloribus. Nisi
              quisquam incidunt ratione
            </span>
          </div>
        </div>

        <div className="best-grid-item">
          <BiBookOpen className="best-item-icon" size={30} />
          <div className="best-item-text">
            <p className="best-item-text-p">English Class</p>
            <span className="best-item-text-span">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              ipsa culpa magnam veniam repellendus porro doloribus. Nisi
              quisquam incidunt ratione
            </span>
          </div>
        </div>

        <div className="best-grid-item">
          <BiBookReader className="best-item-icon" size={30} />
          <div className="best-item-text">
            <p className="best-item-text-p">Reading for Kids</p>
            <span className="best-item-text-span">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              ipsa culpa magnam veniam repellendus porro doloribus. Nisi
              quisquam incidunt ratione
            </span>
          </div>
        </div>

        <div className="best-grid-item">
          <BiLoaderAlt className="best-item-icon" size={30} />
          <div className="best-item-text">
            <p className="best-item-text-p">History Class</p>
            <span className="best-item-text-span">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              ipsa culpa magnam veniam repellendus porro doloribus. Nisi
              quisquam incidunt ratione
            </span>
          </div>
        </div>

        <div className="best-grid-item">
          <BiHeadphone className="best-item-icon" size={30} />
          <div className="best-item-text">
            <p className="best-item-text-p">Music</p>
            <span className="best-item-text-span">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              ipsa culpa magnam veniam repellendus porro doloribus. Nisi
              quisquam incidunt ratione
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestEducation;
