import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [showBg, setShowBg] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowBg(true);
      } else {
        setShowBg(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${showBg && "nav__background"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png"
        alt="netflix logo"
        className="nav__logo"
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar"
        className="nav__avatar"
      />
    </div>
  );
}

export default Nav;
