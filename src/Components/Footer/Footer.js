import React from "react";

import { ReactComponent as TesteWeb } from "../../Assets/Teste web.svg";
import { ReactComponent as Logo } from "../../Assets/logo-yooh.svg";

import styles from "./Footer.module.css";
import RedesSociais from "../Helper/RedesSociais";

const Footer = () => {
  return (
    <footer className={`${styles.footer} bgWhite`}>
      <div className="container">
        <header className={styles.upContent}>
          <TesteWeb />
          <div className={styles.redesSociais}>
            <p>email@testeweb.com</p>
            <nav className={styles.nav}>
              <RedesSociais />
            </nav>
          </div>
        </header>
        <div className={styles.bottomContent}>
          <small>2020 © Todos os direitos reservados.</small>
          <div className={styles.logo}>
            <Logo />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
