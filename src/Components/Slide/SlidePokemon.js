import React from "react";

import styles from "./SlidePokemon.module.css";

import Arrow from "../Helper/Arrow";

const SlidePokemon = ({ children }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const slideRef = React.useRef();

  React.useEffect(() => {
    const { width } = slideRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function nextSlide() {
    if (active < children.length - 1) {
      setActive(active + 1);
    } else {
      setActive(0);
    }
  }

  function prevSlide() {
    if (active > 0) setActive(active - 1);
    else setActive(children.length - 1);
  }

  return (
    <div className={styles.wrapperCarrosel}>
      <div
        ref={slideRef}
        className={styles.slide}
        style={{ transform: `translateX(${position}px)` }}
      >
        {children}
      </div>

      <Arrow prevSlide={prevSlide} nextSlide={nextSlide} styles={styles} />

      <div className={styles.slideLoc}>
        {children.map((item, index) => {
          return (
            <div
              key={item.props.name}
              className={
                active === index
                  ? `${styles.ball} ${styles.active}`
                  : `${styles.ball}`
              }
            >
              asdad
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SlidePokemon;
