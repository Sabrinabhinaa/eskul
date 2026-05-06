import styled from "styled-components";

export const LandingContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 80px;
  background-color: #f9fafb;
  font-family: 'Poppins', sans-serif;
`;

export const Left = styled.div`
  max-width: 500px;
`;

export const Tag = styled.span`
  background-color: #e0f2fe;
  color: #0284c7;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin: 20px 0;

  span {
    color: #3b82f6;
  }
`;

export const Desc = styled.p`
  color: #555;
  font-size: 14px;
  margin-bottom: 25px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

export const PrimaryBtn = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`;

export const SecondaryBtn = styled.button`
  background-color: white;
  color: #3b82f6;
  border: 1px solid #3b82f6;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
`;

export const Right = styled.div`
  img {
    width: 500px;
    border-radius: 20px;
  }
`;