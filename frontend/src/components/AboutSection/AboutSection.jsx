import React from "react";
import {
  Container,
  Title,
  Description,
  CardWrapper,
  Card,
  CardIcon,
  CardTitle,
  CardText,
} from "./styled";

const AboutSection = () => {
  return (
    <Container>
      <Title>Membangun Karakter Melalui Pendidikan Holistik</Title>
      <Description>
        SMP Negeri 4 Gunung Putri berkomitmen untuk memberikan pendidikan yang
        tidak hanya fokus pada akademik, tetapi juga pengembangan karakter dan
        keterampilan non-akademik melalui berbagai kegiatan ekstrakurikuler yang
        inspiratif.
      </Description>

      <CardWrapper>
        <Card>
          <CardIcon>visibility</CardIcon>
          <CardTitle>Visi Sekolah</CardTitle>
          <CardText>
            Menjadi lembaga pendidikan yang unggul dalam prestasi dan karakter,
            serta berdaya saing global.
          </CardText>
        </Card>

        <Card>
          <CardIcon>emoji_events</CardIcon>
          <CardTitle>Misi Eskul</CardTitle>
          <CardText>
            Menggali dan mengembangkan potensi minat serta bakat siswa melalui
            pembinaan yang terstruktur dan menyenangkan.
          </CardText>
        </Card>

        <Card>
          <CardIcon>diversity_3</CardIcon>
          <CardTitle>Nilai Karakter</CardTitle>
          <CardText>
            Menanamkan nilai-nilai disiplin, tanggung jawab, kerja sama, dan
            sportivitas dalam setiap kegiatan siswa.
          </CardText>
        </Card>
      </CardWrapper>
    </Container>
  );
};

export default AboutSection;