import {
  Container,
  FooterWrapper,
  Column,
  Logo,
  Title,
  Text,
  LinkItem,
  Image,
  BottomBar,
} from "./FooterStyled";

const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        {/* Kolom 1 */}
        <Column>
          <Logo>SMPN 4 Gunung Putri</Logo>
          <Text>
            Jl. Pendidikan No. 4, Kec. Gunung Putri, Kabupaten Bogor, Jawa Barat.
            Membangun generasi unggul dengan pendidikan berkualitas.
          </Text>
          <Text>Senin - Jumat: 07.00 - 15.00</Text>
        </Column>

        {/* Kolom 2 */}
        <Column>
          <Title>Tautan Cepat</Title>
          <LinkItem>Profil Sekolah</LinkItem>
          <LinkItem>Informasi Akademik</LinkItem>
          <LinkItem>Pendaftaran</LinkItem>
          <LinkItem>Galeri Kegiatan</LinkItem>
        </Column>

        {/* Kolom 3 */}
        <Column>
          <Title>Ekstrakurikuler</Title>
          <LinkItem>Olahraga</LinkItem>
          <LinkItem>Seni & Budaya</LinkItem>
          <LinkItem>Sains & Teknologi</LinkItem>
          <LinkItem>Kepramukaan</LinkItem>
        </Column>

        {/* Kolom 4 */}
        <Column>
          <Title>Lokasi Kami</Title>
          <Image
            src="https://via.placeholder.com/150"
            alt="Lokasi Sekolah"
          />
          <Text>Kabupaten Bogor, Indonesia</Text>
        </Column>
      </FooterWrapper>

      {/* Bottom */}
      <BottomBar>
        © 2026 SMPN 4 Gunung Putri. All rights reserved.
      </BottomBar>
    </Container>
  );
};

export default Footer;