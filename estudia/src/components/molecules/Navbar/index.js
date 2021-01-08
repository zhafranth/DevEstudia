import React from "react";
import { Link } from "react-router-dom";
import { MainNavbar, Logo, Menu, MenuItem } from "./style";

// Logo
import LogoEstudia from "../../../assets/Logo/logo.svg";
import LogoWhite from "../../../assets/Logo/logo-white.svg";

const Navbar = ({ primary }) => {
  return (
    <MainNavbar className={primary ? "primary" : ""}>
      <Logo>
        <Link to="/">
          {primary ? (
            <img src={LogoWhite} alt="Estudia" />
          ) : (
            <img src={LogoEstudia} alt="Estudia" />
          )}
        </Link>
      </Logo>
      <Menu>
        <MenuItem>
          <Link to="/" className={`${primary ? "primary link" : "link"}`}>
            Kelas Bahasa Spanyol
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/" className={`${primary ? "primary link" : "link"}`}>
            Tata Bahasa dan Kosakata
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/artikel"
            className={`${primary ? "primary link" : "link"}`}
          >
            Blog
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about" className={`${primary ? "primary link" : "link"}`}>
            Tentang Kami
          </Link>
        </MenuItem>
      </Menu>
    </MainNavbar>
  );
};

export default Navbar;
