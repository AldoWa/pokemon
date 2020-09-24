import React from "react";

import Banner from "../Banner/Banner";

const Slide = () => {
  return (
    <section className="container">
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
    </section>
  );
};

export default Slide;
