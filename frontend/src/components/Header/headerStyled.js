import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 14px 40px;

  background: white;

  position: sticky;
  top: 0;
  z-index: 999;

  box-shadow: 0 2px 10px rgba(0,0,0,0.05);

  @media (max-width: 768px) {
    padding: 14px 20px;
  }
`;

/* LOGO */
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LogoImage = styled.img`
  width: 45px;
  height: 45px;
`;

export const LogoText = styled.div`
  h3 {
    margin: 0;
    font-size: 17px;
    color: #111827;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #6b7280;
  }
`;

/* MENU */
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: 768px) {
    position: absolute;

    top: 80px;
    left: 0;

    width: 100%;

    background: white;

    flex-direction: column;

    padding: 20px 0;

    gap: 20px;

    box-shadow: 0 5px 15px rgba(0,0,0,0.08);

    display: ${({ open }) => (open ? "flex" : "none")};
  }
`;

export const NavItem = styled.a`
  text-decoration: none;
  color: #374151;

  font-size: 15px;
  font-weight: 500;

  transition: 0.3s;

  &:hover {
    color: #2563eb;
  }
`;

/* BUTTON */
export const ContactButton = styled.a`
  background: #3b82f6;
  color: white;

  text-decoration: none;

  padding: 10px 18px;

  border-radius: 10px;

  font-size: 14px;
  font-weight: 600;

  transition: 0.3s;

  &:hover {
    background: #2563eb;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

/* HAMBURGER */
export const MenuButton = styled.button`
  display: none;

  background: transparent;
  border: none;

  font-size: 30px;
  color: #111827;

  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;