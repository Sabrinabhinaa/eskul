// LandingSection.jsx

import {
  LandingContainer,
  Left,
  Title,
  Desc,
  ButtonGroup,
  PrimaryBtn,
  Right,
} from "./landingStyled";

import schoolImg from "../../assets/eskul.jpg";

export default function LandingSection() {
  return (
    <LandingContainer id="beranda">

      <Left>

        <Title>
          Kembangkan Potensi, <br />
          <span>Raih Prestasi!</span>
        </Title>

        <Desc>
          SMP Negeri 4 Gunung Putri menyediakan berbagai kegiatan
          ekstrakurikuler yang dirancang untuk mengembangkan potensi
          siswa dan membantu mereka meraih prestasi dalam berbagai bidang.
        </Desc>

        <ButtonGroup>

          <PrimaryBtn as="a" href="#eskul">
            🎯 Jelajahi Eskul
          </PrimaryBtn>

        </ButtonGroup>

      </Left>

      <Right>
        <img
          src={schoolImg}
          alt="Sekolah"
        />
      </Right>

    </LandingContainer>
  );
}