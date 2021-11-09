import React, { useEffect } from "react";

import "../styles/Nav.css";

import back from "../images/back.svg";
import homepage from "../images/icon.png";

const Nav = () => {
  useEffect(() => {
    const body = document.body;
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        body.classList.remove(scrollUp);
        return;
      }

      if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
      } else if (
        currentScroll < lastScroll &&
        body.classList.contains(scrollDown)
      ) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
      }
      lastScroll = currentScroll;
    });
  });

  return (
    <nav className="nav" id="nav">
      <a href="javascript:history.back()" className="back-icon">
        <img src={back} />
      </a>
      <a href="https://lafaceouest.com/ " className="homepage-icon">
        <img src={homepage} />
      </a>
    </nav>
  );
};

export default Nav;
