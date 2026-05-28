import {
  ProfileContainer,
  ProfileWrapper,
  ProfileLeft,
  ProfileRight,
  SchoolBadge,
  SchoolTitle,
  SchoolSubtitle,
  SchoolText,
  InfoGrid,
  InfoCard,
  InfoTitle,
  InfoDesc,
  VisiMisiBox,
  SectionTitle,
  List,
} from "./styled";

function AboutSection() {
  return (
    <ProfileContainer id="tentang">
      <ProfileWrapper>

        {/* LEFT */}
        <ProfileLeft>

          <SchoolBadge>
            🏫 SMP Negeri 4 Gunung Putri
          </SchoolBadge>

          <SchoolTitle>
            Profile Sekolah
          </SchoolTitle>

          <SchoolSubtitle>
            Sekolah Unggul, Kreatif, dan Berkarakter
          </SchoolSubtitle>

          <SchoolText>
            SMP Negeri 4 Gunung Putri merupakan sekolah menengah pertama
            negeri yang berkomitmen menciptakan generasi muda yang
            cerdas, disiplin, kreatif, dan berprestasi.
          </SchoolText>

          <SchoolText>
            Dengan dukungan tenaga pendidik profesional serta berbagai
            kegiatan ekstrakurikuler, sekolah kami terus mendorong
            siswa untuk mengembangkan potensi terbaiknya.
          </SchoolText>

          
        </ProfileLeft>

        {/* RIGHT */}
        <ProfileRight>

          <InfoGrid>

            <InfoCard>
              <InfoTitle>🎓 Akreditasi</InfoTitle>

              <InfoDesc>
                Terakreditasi B dengan mutu pendidikan yang berkualitas.
              </InfoDesc>
            </InfoCard>

            <InfoCard>
              <InfoTitle>👨‍🏫 Guru Profesional</InfoTitle>

              <InfoDesc>
                Didukung tenaga pendidik yang kompeten.
              </InfoDesc>
            </InfoCard>

            <InfoCard>
              <InfoTitle>🏆 Prestasi</InfoTitle>

              <InfoDesc>
                Aktif meraih prestasi akademik dan non akademik.
              </InfoDesc>
            </InfoCard>

            <InfoCard>
              <InfoTitle>⚽ Ekstrakurikuler</InfoTitle>

              <InfoDesc>
                Banyak kegiatan untuk mengembangkan bakat siswa.
              </InfoDesc>
            </InfoCard>

          </InfoGrid>

          <VisiMisiBox>

            <SectionTitle>
              🌟 Visi
            </SectionTitle>

            <SchoolText>
              Menjadi sekolah unggul yang berkarakter,
              kreatif, dan berprestasi.
            </SchoolText>

            <SectionTitle>
              🎯 Misi
            </SectionTitle>

            <List>
              <li>Meningkatkan kualitas pendidikan.</li>
              <li>Mengembangkan bakat siswa.</li>
              <li>Menanamkan disiplin dan tanggung jawab.</li>
              <li>Menciptakan lingkungan belajar nyaman.</li>
            </List>

          </VisiMisiBox>

        </ProfileRight>

      </ProfileWrapper>
    </ProfileContainer>
  );
}

export default AboutSection;