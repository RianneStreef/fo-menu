import React, { useEffect, useState } from "react";

import { Link } from "gatsby";

import "../styles/Nav.css";

import back from "../images/back.svg";
import homepage from "../images/icon.png";

const Nav = () => {
  const [pathname, setPathname] = useState(``);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const location = window.location.pathname;
      setPathname(location);
    }
  }, []);

  useEffect(() => {
    console.log(pathname);
    const nav = document.getElementById("nav");
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        nav.classList.remove(scrollUp);
        return;
      }

      if (currentScroll > lastScroll && !nav.classList.contains(scrollDown)) {
        nav.classList.remove(scrollUp);
        nav.classList.add(scrollDown);
      } else if (
        currentScroll < lastScroll &&
        nav.classList.contains(scrollDown)
      ) {
        nav.classList.remove(scrollDown);
        nav.classList.add(scrollUp);
      }
      lastScroll = currentScroll;
    });
  });

  return (
    <nav className="nav scroll-up" id="nav">
      <Link
        href={
          pathname === "/restaurant" ||
          pathname === "/snacking" ||
          pathname === "/take-away"
            ? "/menus"
            : "/restaurant"
        }
        className="back-icon"
      >
        <img src={back} />
      </Link>
      <a href="https://lafaceouest.com/ " className="homepage-icon">
        <img src={homepage} />
      </a>
    </nav>
  );
};

export default Nav;
