import styled from "styled-components";

export const Container = styled.section`
  background-color: #eef3f9;
  padding: 60px 20px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #1a1a1a;
`;

export const Description = styled.p`
  max-width: 700px;
  margin: 0 auto 40px auto;
  font-size: 14px;
  color: #666;
  line-height: 1.6;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  width: 250px;
  text-align: left;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardIcon = styled.span`
  font-family: "Material Icons";
  font-size: 32px;
  color: #4a90e2;
  display: block;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const CardText = styled.p`
  font-size: 13px;
  color: #555;
  line-height: 1.5;
`;