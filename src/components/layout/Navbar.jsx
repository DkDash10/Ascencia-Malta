import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../assets/logo.png";

const NAV_ITEMS = [
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const go = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <div className={styles.logo} onClick={() => go("/")}>
            <img src={Logo} alt="logo" />
          </div>
          <div className={styles.links}>
            {NAV_ITEMS.map(({ label, path }) => (
              <button
                key={label}
                onClick={() => go(path)}
                className={`${styles.link} ${pathname === path && label !== "Programmes" ? styles.linkActive : ""}`}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            className={`${styles.hamburger} ${open ? styles.open : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ""} ${isScrolled ? styles.scrolled : ""}`}>
        {NAV_ITEMS.map(({ label, path }) => (
          <button
            key={label}
            className={styles.drawerLink}
            onClick={() => go(path)}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
}
