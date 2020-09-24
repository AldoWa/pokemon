import React from "react";
import { ReactComponent as Facebook } from "../../Assets/facebook.svg";
import { ReactComponent as Instagram } from "../../Assets/instagram.svg";
import { ReactComponent as Youtube } from "../../Assets/youtube.svg";

const RedesSociais = () => {
  return (
    <ul>
      <li>
        <a href="#">
          <Facebook />
        </a>
      </li>
      <li>
        <a href="#">
          <Instagram />
        </a>
      </li>
      <li>
        <a href="#">
          <Youtube />
        </a>
      </li>
    </ul>
  );
};

export default RedesSociais;
