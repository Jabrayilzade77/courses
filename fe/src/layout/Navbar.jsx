import React, { useContext } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { BasketContext } from "../context/BasketProvider";

function Navbar() {
  const { basket } = useContext(BasketContext);
  return (
    <>
      <header>
      <div className={styles.navbar_container}>
        <div className={styles.course_div}>
          <img
            src="https://preview.colorlib.com/theme/course/images/logo.png"
            className={styles.course_image}
            alt=""
          />
          <h1 className={styles.course_h1}>COURSE</h1>
        </div>
        <div className={styles.navbar_links}>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/wishList"}>WishList</Link>
          <Link to={"/basket"}>Basket {basket.length}</Link>
          <Link to={"/admin"}>Admin</Link>
          <Link to={"/add"}>Add</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>

        <div className={styles.telefon_div}>
          <img className={styles.telefon_image}
            src="https://preview.colorlib.com/theme/course/images/phone-call.svg"
            alt=""
          />
          <p>+43 4566 7788 2457</p>
        </div>
      </div>
      </header>
    </>
  );
}

export default Navbar;
