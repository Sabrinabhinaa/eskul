import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  background-color: #f5f5f5;
`;

export const Content = styled.div`
  background: linear-gradient(135deg, #2f80ed, #1c5ecb);
  border-radius: 16px;
  padding: 50px 30px;
  max-width: 900px;
  width: 100%;
  text-align: center;
  color: white;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  font-size: 14px;
  max-width: 600px;
  margin: 0 auto 30px auto;
  line-height: 1.6;
  color: #e0e0e0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  background-color: white;
  color: #2f80ed;
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SecondaryButton = styled.button`
  background: transparent;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  border: 1px solid white;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;