import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #14224a;
  color: white;
  margin-top: 80px;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: auto;

  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 1.3fr;

  gap: 50px;

  padding: 60px 30px;

  align-items: flex-start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  justify-content: flex-start;

  height: 100%;
`;

export const FooterTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;

  margin-bottom: 14px;

  white-space: nowrap;
`;

export const FooterText = styled.p`
  color: #dbe4ff;

  line-height: 1.8;

  font-size: 15px;
`;

export const FooterLink = styled.a`
  color: #dbe4ff;

  text-decoration: none;

  transition: 0.3s;

  width: fit-content;

  &:hover {
    color: #60a5fa;
    transform: translateX(5px);
  }
`;

export const MapFrame = styled.iframe`
  width: 100%;

  height: 200px;

  border: none;

  border-radius: 16px;

  background: white;

  margin-top: 5px;
`;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255,255,255,0.1);

  text-align: center;

  padding: 20px;

  color: #cbd5e1;

  font-size: 14px;
`;

export const MapLink = styled.a`
  text-decoration: none;
`;