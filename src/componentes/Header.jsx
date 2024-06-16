import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Dog from "../assets/dogs.svg?react";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.navLinks} container`}>
        <Link to="/">
          <Dog />
        </Link>
        <Link className={styles.linkEntrar} to="/login">
          Login / Criar
        </Link>
      </div>
    </nav>
  );
};

export default Header;
