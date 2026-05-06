import React from "react";
import {
  Container,
  Content,
  Title,
  Description,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from "./styled";

const CTASection = () => {
  return (
    <Container>
      <Content>
        <Title>Siap Untuk Berkembang Bersama Kami?</Title>
        <Description>
          Pendaftaran ekstrakurikuler semester ganjil telah dibuka. Segera pilih
          minatmu dan jadilah bagian dari siswa-siswi berprestasi SMPN 4 Gunung
          Putri.
        </Description>

        <ButtonGroup>
          <PrimaryButton>Daftar Sekarang</PrimaryButton>
          <SecondaryButton>Panduan Pendaftaran</SecondaryButton>
        </ButtonGroup>
      </Content>
    </Container>
  );
};

export default CTASection;