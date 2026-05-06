import {
  LandingContainer,
  Left,
  Tag,
  Title,
  Desc,
  ButtonGroup,
  PrimaryBtn,
  SecondaryBtn,
  Right,
} from "./landingStyled";

import schoolImg from "../../assets/eskul.jpg";

export default function LandingSection() {
  return (
    <LandingContainer>
      <Left>
        <Tag>SELAMAT DATANG DI PORTAL RESMI</Tag>

        <Title>
          Wujudkan Bakatmu di <span>SMPN 4 Gunung Putri</span>
        </Title>

        <Desc>
          Wadah pengembangan bakat, minat, dan kreativitas siswa untuk
          mewujudkan generasi unggul, berprestasi, dan berkarakter mulia.
        </Desc>

        <ButtonGroup>
          <PrimaryBtn>Jelajahi Eskul</PrimaryBtn>
          <SecondaryBtn>Lihat Profil Sekolah</SecondaryBtn>
        </ButtonGroup>
      </Left>

      <Right>
        <img src={schoolImg} alt="Sekolah" />
      </Right>
    </LandingContainer>
  );
}