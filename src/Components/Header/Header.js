import React from "react";

import styles from "./Header.module.css";

import Button from "../Button/Button";
import RedesSocais from "../Helper/RedesSociais";

const Header = () => {
  return (
    <div className="bgWhite">
      <header className={`${styles.header} container`}>
        <div className={styles.leftContent}>
          <div className={styles.menuMobile}></div>
          <h1>Teste Web</h1>
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
