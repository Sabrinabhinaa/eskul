import { useState } from "react";

import logosmp from "../../assets/logosmp.png";

import {
  HeaderContainer,
  Logo,
  LogoImage,
  LogoText,
  Nav,
  NavItem,
  ContactButton,
  MenuButton,
} from "./headerStyled";

export default function Header() {

  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>

      {/* LOGO */}
      <Logo>

        <LogoImage
          src={logosmp}
          alt="Logo SMP"
        />

        <LogoText>

          <h3>SMPN 4 Gunung Putri</h3>

          <p>Sistem Informasi Ekstrakurikuler</p>

        </LogoText>

      </Logo>

      {/* HAMBURGER */}
      <MenuButton
        onClick={() => setOpen(!open)}
      >
        ☰
      </MenuButton>

      {/* NAVBAR */}
      <Nav open={open}>

        <NavItem href="/#beranda">
          Beranda
        </NavItem>

        <NavItem href="/#tentang">
          Tentang Kami
        </NavItem>

        <NavItem href="/#eskul">
          Ekstrakurikuler
        </NavItem>

        <NavItem href="/#kontak">
          Kontak
        </NavItem>

      </Nav>

      {/* BUTTON */}
      <ContactButton
        href="/#kontak"
      >
        Hubungi Kami
      </ContactButton>

    </HeaderContainer>
  );
}