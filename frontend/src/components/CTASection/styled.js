import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  
  min-height: 50vh; 

  padding: 20px 16px;
  background: #f4f8ff;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 650px;

  background: linear-gradient(135deg, #2563eb, #3b82f6);

  color: white;

  border-radius: 22px;

  padding: 35px 25px;

  text-align: center;

  box-shadow: 0 14px 30px rgba(37, 99, 235, 0.12);

  margin: auto;

  @media (max-width: 480px) {
    border-radius: 18px;

    padding: 28px 20px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(22px, 4vw, 34px);

  font-weight: 700;

  margin-bottom: 16px;

  color: white;
`;

export const Description = styled.p`
  font-size: clamp(13px, 2vw, 15px);

  max-width: 560px;

  margin: 0 auto 30px;

  line-height: 1.7;

  color: #e5edff;
`;

export const ButtonGroup = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 12px;

  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;

    align-items: center;
  }
`;

export const PrimaryButton = styled.a`
  background: white;

  color: #2563eb;

  text-decoration: none;

  padding: 12px 22px;

  border-radius: 12px;

  font-size: 14px;
  font-weight: 600;

  transition: 0.3s;

  display: inline-flex;

  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-3px);

    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 480px) {
    width: 100%;

    text-align: center;
  }
`;

export const SecondaryButton = styled.a`
  background: transparent;

  color: white;

  text-decoration: none;

  border: 1px solid rgba(255, 255, 255, 0.4);

  padding: 12px 22px;

  border-radius: 12px;

  font-size: 14px;
  font-weight: 600;

  transition: 0.3s;

  display: inline-flex;

  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.12);

    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    width: 100%;

    text-align: center;
  }
`;