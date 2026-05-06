// src/components/Header.jsx
import {
  HeaderContainer,
  Logo,
  LogoIcon,
  LogoText,
  Nav,
  NavItem,
  ContactButton,
} from "./headerStyled";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <LogoIcon />
        <LogoText>
          <h3>SMPN 4 Gunung Putri</h3>
          <p>Sistem Informasi Eskul</p>
        </LogoText>
      </Logo>

      <Nav>
        <NavItem>Beranda</NavItem>
        <NavItem>Tentang Kami</NavItem>
        <NavItem>Ekstrakurikuler</NavItem>
        <NavItem>Kontak</NavItem>
      </Nav>

      <ContactButton>Hubungi Kami</ContactButton>
    </HeaderContainer>
  );
}