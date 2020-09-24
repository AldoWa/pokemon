import React from "react";

import styles from "./Header.module.css";

import Button from "../Button/Button";
import RedesSocais from "../Helper/RedesSociais";
import { ReactComponent as TesteWeb } from "../../Assets/Teste web.svg";

const Header = () => {
  return (
    <div className="bgWhite">
      <header className={`${styles.header} container`}>
        <div className={styles.leftContent}>
          <div className={styles.menuMobile}></div>
          <TesteWeb />
        </div>
        <nav className={styles.nav}>
          <Button />
          <RedesSocais />
        </nav>
      </header>
    </div>
  );
};

export default Header;
