import {
  FooterContainer,
  FooterContent,
  FooterColumn,
  FooterTitle,
  FooterText,
  FooterLink,
  FooterBottom,
  MapFrame,
} from "./FooterStyled";

export default function Footer() {
  return (
    <FooterContainer id="kontak">

      <FooterContent>

        {/* PROFIL SEKOLAH */}
        <FooterColumn>

          <FooterTitle>
            SMPN 4 Gunung Putri
          </FooterTitle>

          <FooterText>
            Membangun generasi unggul dengan
            pendidikan berkualitas.
          </FooterText>

          <FooterText>
            Senin - Jumat: 07.00 - 15.00
          </FooterText>

        </FooterColumn>

        {/* TAUTAN CEPAT */}
        <FooterColumn>

          <FooterTitle>
            Tautan Cepat
          </FooterTitle>

          <FooterLink href="/">
            Profil Sekolah
          </FooterLink>

          <FooterLink href="/#eskul">
            Ekstrakurikuler
          </FooterLink>

          <FooterLink href="/#galeri">
            Galeri
          </FooterLink>

          <FooterLink href="/#kontak">
            Kontak
          </FooterLink>

        </FooterColumn>

        {/* EKSTRAKURIKULER */}
        <FooterColumn>

          <FooterTitle>
            Ekstrakurikuler
          </FooterTitle>

          <FooterLink href="/#eskul">
            Sosial
          </FooterLink>

          <FooterLink href="/#eskul">
            Seni
          </FooterLink>

          <FooterLink href="/#eskul">
            Musik
          </FooterLink>

          <FooterLink href="/#eskul">
            Olahraga
          </FooterLink>

          <FooterLink href="/#eskul">
            Seni Bela Diri
          </FooterLink>

        </FooterColumn>

        <FooterColumn>

  <FooterTitle>
    Lokasi Kami
  </FooterTitle>

  <a
    href="https://maps.app.goo.gl/t6tRfRkbF7WjS9uA6"
    target="_blank"
    rel="noreferrer"
  >

    <MapFrame
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5977585100704!2d106.90171347499222!3d-6.445661393545672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebce61e4ccef%3A0x985f71a204e217f!2sSMP%20NEGERI%204%20GUNUNGPUTRI!5e0!3m2!1sid!2sid!4v1779910541347!5m2!1sid!2sid"
      loading="lazy"
    />

  </a>

  <FooterText>
    Tlajung Udik,
    Kec. Gn. Putri,
    Kabupaten Bogor,
    Jawa Barat 16962
  </FooterText>

</FooterColumn>

      </FooterContent>

      <FooterBottom>
        © 2026 SMPN 4 Gunung Putri
      </FooterBottom>

    </FooterContainer>
  );
}