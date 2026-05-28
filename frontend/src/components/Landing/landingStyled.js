import styled from "styled-components";

export const LandingContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: clamp(40px, 6vw, 70px) clamp(20px, 6vw, 80px);

  background: linear-gradient(to bottom, #f8fbff, #eef5ff);

  font-family: "Montserrat", sans-serif;

  gap: clamp(20px, 4vw, 60px);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

/* LEFT */
export const Left = styled.div`
  flex: 1;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
  }
`;

export const Tag = styled.span`
  background-color: #e0f2fe;
  color: #0284c7;

  padding: 6px 14px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 500;

  width: fit-content;
`;

export const Title = styled.h1`
  font-size: clamp(32px, 5vw, 58px);
  font-weight: 700;
  line-height: 1.1;

  margin-top: 10px;
  margin-bottom: 20px;

  color: #111827;

  span {
    color: #3b82f6;
  }
`;

export const Desc = styled.p`
  color: #555;
  font-size: clamp(15px, 2vw, 18px);

  line-height: 1.9;
  margin-bottom: 35px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;

  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const PrimaryBtn = styled.a`
  background-color: #3b82f6;
  color: white;

  text-decoration: none;

  padding: 14px 28px;
  border-radius: 12px;

  font-size: 15px;
  font-weight: 600;

  transition: 0.25s ease;

  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
  }
`;

export const SecondaryBtn = styled.button`
  background-color: white;
  color: #3b82f6;

  border: 1px solid #3b82f6;

  padding: 14px 28px;
  border-radius: 12px;

  font-size: 15px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.25s ease;

  &:hover {
    background-color: #eff6ff;
    transform: translateY(-2px);
  }
`;

/* RIGHT */
export const Right = styled.div`
  flex: 1;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 650px;

    height: auto;

    border-radius: 24px;

    object-fit: contain;
  }

  @media (max-width: 768px) {
    margin-top: 20px;

    img {
      max-width: 100%;
      height: auto;
    }
  }
`;