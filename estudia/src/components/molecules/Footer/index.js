import React from "react";
import { Link } from "react-router-dom";
import {
  MainFooter,
  FooterContent,
  LogoFooter,
  FooterItem,
  Title,
  Copyright,
  Address,
} from "./style";

// Logo & Icons
import Logo from "../../../assets/Logo/logo-white.png";

const Footer = () => {
  return (
    <MainFooter>
      <FooterContent>
        <LogoFooter>
          <Link className="link">
            <img src={Logo} alt="Estudia Logo" />
          </Link>
          <Address>Jakarta, Indonesia</Address>
        </LogoFooter>
        <FooterItem>
          <Title>Tentang Kami</Title>
          <Link className="link">Profile</Link>
          <Link className="link">Blog</Link>
        </FooterItem>
        <FooterItem>
          <Title>Kelas Bahasa Spanyol</Title>
          <Link className="link">Profile</Link>
          <Link className="link">Blog</Link>
        </FooterItem>
        <FooterItem>
          <Title>Kontak</Title>
          <Link className="link">
            <img src="" alt="facebook estudia" />
            Estudia
          </Link>
          <Link className="link">
            <img src="" alt="instagram estudia" />
            Estudia
          </Link>
        </FooterItem>
      </FooterContent>
      <Copyright />
    </MainFooter>
  );
};

export default Footer;
