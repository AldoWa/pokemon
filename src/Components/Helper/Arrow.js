import React from "react";

import { ReactComponent as ArrowLeft } from "../../Assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../Assets/arrow-right.svg";

const Arrow = ({ prevSlide, nextSlide, styles }) => {
  return (
    <nav>
      <button onClick={prevSlide} className={styles.arrowLeft}>
        <ArrowLeft />
      </button>
      <button onClick={nextSlide} className={styles.arrowRight}>
        <ArrowRight />
      </button>
    </nav>
  );
};

export default Arrow;
