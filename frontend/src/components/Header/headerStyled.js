// src/components/headerStyled.js
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 50px;
  background-color: #f9fafb;
`;

/* LOGO */
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: #3b82f6;
  transform: rotate(45deg);
  border-radius: 4px;
`;

export const LogoText = styled.div`
  h3 {
    margin: 0;
    font-size: 16px;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: gray;
  }
`;

/* NAV */
export const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

export const NavItem = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #3b82f6;
  }
`;

/* BUTTON */
export const ContactButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`;