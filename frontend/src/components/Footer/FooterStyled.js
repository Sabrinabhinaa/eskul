import styled from "styled-components";

export const Container = styled.footer`
  background-color: #f8f9fb;
  padding: 50px 20px 20px;
`;

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #2f80ed;
  margin-bottom: 10px;
`;

export const Title = styled.h4`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #666;
  margin-bottom: 8px;
  line-height: 1.5;
`;

export const LinkItem = styled.a`
  font-size: 13px;
  color: #555;
  margin-bottom: 6px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #2f80ed;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 150px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const BottomBar = styled.div`
  margin-top: 40px;
  padding-top: 15px;
  border-top: 1px solid #ddd;
  text-align: center;
  font-size: 12px;
  color: #888;
`;