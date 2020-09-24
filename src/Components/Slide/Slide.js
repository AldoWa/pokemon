import React from "react";
import Button from "../Button/Button";

import charizard from "../../Assets/hero-banner__image.png";

import styles from "./Slide.module.css";

const Slide = () => {
  return (
    <section className="container">
      <div className={styles.gridContainer}>
        <div className={styles.detailsArea}>
          <span>Faça seu teste</span>
          <h2>De frontend</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
            euismod at egestas sapien porttitor dui.{" "}
          </p>
          <Button />
        </div>
        <div className={styles.image}>
          <img src={charizard} alt="charizard" />
        </div>
      </div>
    </section>
  );
};

export default Slide;
