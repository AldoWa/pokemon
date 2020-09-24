import React from "react";

import Banner from "../Banner/Banner";
import styles from "./Slide.module.css";

import Arrow from "../Helper/Arrow";

const Slide = () => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function nextSlide() {
    if (active < 1) setActive(active + 1);
    else setActive(0);
  }

  function prevSlide() {
    if (active > 0) {
      setActive(active - 1);
    } else {
      setActive(1);
    }
  }

  return (
    <section className={`container`}>
      <div className={` ${styles.slideContainer}`}>
        <div
          ref={contentRef}
          className={styles.slide}
          style={{ transform: `translateX(${position}px)` }}
        >
          <Banner
            title={"Faça seu teste"}
            subtitle={"De frontend"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,euismod at egestas sapien porttitor dui. "
            }
            color={"#f3be00"}
          />
          <Banner
            title={"Faça seu teste"}
            subtitle={"Outro Banner"}
            description={
              "Ait amet, consectetur adipiscing elit. Amet, euismod at egestas sapien porttitor dui. "
            }
            color={"#00a8d2"}
          />
        </div>

        <Arrow nextSlide={nextSlide} prevSlide={prevSlide} styles={styles} />
      </div>
    </section>
  );
};

export default Slide;
