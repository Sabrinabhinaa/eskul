import styled from "styled-components";

/* CONTAINER */

export const ProfileContainer = styled.section`
  padding: 100px 8%;
  background: #ffffff;

  @media screen and (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    gap: 35px;
  }
`;

/* LEFT */

export const ProfileLeft = styled.div`
  flex: 1;
  min-width: 320px;

  @media screen and (max-width: 768px) {
    min-width: 100%;
  }
`;

export const SchoolBadge = styled.div`
  display: inline-block;

  background: #dbeafe;
  color: #2563eb;

  padding: 8px 18px;

  border-radius: 30px;

  font-size: 14px;
  font-weight: 600;

  margin-bottom: 20px;

  @media screen and (max-width: 480px) {
    font-size: 12px;

    padding: 6px 14px;
  }
`;

export const SchoolTitle = styled.h1`
  font-size: 50px;
  color: #0f172a;

  margin-bottom: 15px;

  line-height: 1.2;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const SchoolSubtitle = styled.h3`
  font-size: 24px;

  color: #2563eb;

  margin-bottom: 25px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const SchoolText = styled.p`
  color: #475569;

  line-height: 1.9;

  margin-bottom: 20px;

  font-size: 15px;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

/* BUTTON */

export const ButtonGroup = styled.div`
  display: flex;

  gap: 15px;

  margin-top: 30px;

  flex-wrap: wrap;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const PrimaryButton = styled.a`
  text-decoration: none;

  background: #2563eb;
  color: white;

  padding: 14px 24px;

  border-radius: 12px;

  font-weight: 600;

  transition: 0.3s;

  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const SecondaryButton = styled.button`
  background: white;

  border: 1px solid #2563eb;

  color: #2563eb;

  padding: 14px 24px;

  border-radius: 12px;

  cursor: pointer;

  font-weight: 600;

  transition: 0.3s;

  &:hover {
    background: #eff6ff;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

/* RIGHT */

export const ProfileRight = styled.div`
  flex: 1;
  min-width: 320px;

  @media screen and (max-width: 768px) {
    min-width: 100%;
  }
`;

export const InfoGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 20px;

  margin-bottom: 30px;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoCard = styled.div`
  background: #f8fbff;

  padding: 25px;

  border-radius: 20px;

  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
  }

  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;

export const InfoTitle = styled.h4`
  color: #0f172a;

  margin-bottom: 10px;

  font-size: 18px;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const InfoDesc = styled.p`
  color: #64748b;

  line-height: 1.7;

  font-size: 14px;
`;

export const VisiMisiBox = styled.div`
  background: #f8fbff;

  padding: 30px;

  border-radius: 24px;

  @media screen and (max-width: 480px) {
    padding: 22px;
  }
`;

export const SectionTitle = styled.h2`
  color: #2563eb;

  margin-bottom: 18px;

  font-size: 26px;

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const List = styled.ul`
  padding-left: 20px;

  li {
    margin-bottom: 12px;

    color: #475569;

    line-height: 1.7;

    font-size: 14px;
  }
`;