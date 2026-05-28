import styled from "styled-components";

export const Container = styled.section`
  padding: clamp(50px, 6vw, 80px) 8%;
  background:  #eaf0f4;
  

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(24px, 4vw, 42px);
  font-weight: 700;
  text-align: center;
  color: #1e293b;
  margin-bottom: 12px;
`;

export const Subtitle = styled.p`
  text-align: center;
  font-size: clamp(13px, 2vw, 17px);
  color: #64748b;
  margin-bottom: clamp(30px, 5vw, 50px);
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: clamp(16px, 2.5vw, 30px);
`;

export const Card = styled.div`
  background: white;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(37, 99, 235, 0.15);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: clamp(160px, 20vw, 220px);
  object-fit: cover;
`;

export const CardBody = styled.div`
  padding: clamp(12px, 2vw, 20px);
`;

export const Badge = styled.span`
  display: inline-block;
  background: #3043cf;
  color: #fff;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: clamp(10px, 1.5vw, 12px);
  font-weight: 600;
  margin-bottom: 8px;
`;

export const EskulTitle = styled.h3`
  font-size: clamp(14px, 2vw, 18px);
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
`;

export const Desc = styled.p`
  font-size: clamp(12px, 1.8vw, 15px);
  line-height: 1.7;
  color: #64748b;
`;