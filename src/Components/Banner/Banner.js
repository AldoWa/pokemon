import React from "react";
import styles from "./Banner.module.css";

import charizard from "../../Assets/hero-banner__image.png";
import Button from "../Button/Button";

const Banner = ({ title, subtitle, description, color }) => {
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={styles.gridContainer}
    >
      <div className={styles.detailsArea}>
        <span>{title}</span>
        <h2>{subtitle}</h2>
        <p>{description} </p>
        <Button />
      </div>
      <div className={styles.image}>
        <img src={charizard} alt="charizard" />
      </div>
    </div>
  );
};

export default Banner;
