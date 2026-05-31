import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { House, ChevronRight, Users, Calendar, Award } from "lucide-react";

const DetailEskul = () => {
  const { id } = useParams();

  const [eskul, setEskul] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch("/eskuls.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedEskul = data.find(
          (item) => item.id === Number(id)
        );

        setEskul(selectedEskul || null);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!eskul) return <h1>Loading...</h1>;

  return (
    <div
      style={{
        background: "#F8FAFC",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* BREADCRUMB */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "30px",
            flexWrap: "wrap",
            fontSize: "15px",
          }}
        >
          <Link
            to="/"
            style={{
              color: "#2563EB",
              display: "flex",
              alignItems: "center",
            }}
          >
            <House size={18} />
          </Link>

          <ChevronRight size={16} color="#94A3B8" />

          <span
            style={{
              color: "#2563EB",
              fontWeight: "700",
            }}
          >
            {eskul.title}
          </span>
        </div>

        {/* HEADER */}
        <div
          style={{
            background: "#fff",
            borderRadius: "28px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            marginBottom: "40px",
          }}
        >
          <img
            src={eskul.image}
            alt={eskul.title}
            style={{
              width: "100%",
              height: "420px",
              objectFit: "cover",
            }}
          />

          <div style={{ padding: "35px" }}>
            <span
              style={{
                background: "#DBEAFE",
                color: "#1D4ED8",
                padding: "8px 18px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              {eskul.category}
            </span>

            <h1
              style={{
                marginTop: "20px",
                fontSize: "42px",
              }}
            >
              {eskul.title}
            </h1>

            <p
              style={{
                marginTop: "20px",
                fontSize: "18px",
                lineHeight: "1.9",
                color: "#475569",
                textAlign: "justify",
              }}
            >
              {eskul.description}
            </p>
          </div>
        </div>

        {/* INFO */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "24px",
            }}
          >
            <Users size={35} color="#2563EB" />
            <h3>Pembina</h3>

            <p style={{ color: "#64748B" }}>
              {eskul.pembina ? (
                eskul.pembina
              ) : (
                <>
                  Pembina Putra: {eskul.pembinaPutra || "-"} <br />
                  Pembina Putri: {eskul.pembinaPutri || "-"}
                </>
              )}
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "24px",
            }}
          >
            <Calendar size={35} color="#2563EB" />
            <h3>Jadwal</h3>
            <p>Setiap Jumat & Sabtu</p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "24px",
            }}
          >
            <Award size={35} color="#2563EB" />
            <h3>Prestasi</h3>
            <p>Aktif mengikuti lomba & kegiatan sekolah</p>
          </div>
        </div>

        {/* GALERI */}
        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "28px",
          }}
        >
          <h2 style={{ marginBottom: "25px" }}>
            📸 Galeri Kegiatan
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
            }}
          >
            {/* FOTO */}
            {eskul.gallery?.map((foto, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={foto}
                  alt={`gallery-${index}`}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "18px",
                  }}
                />
              </div>
            ))}

            {/* VIDEO */}
            {eskul.video?.map((vid, index) => (
              <div key={index}>
                <video
                  controls
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "18px",
                  }}
                >
                  <source src={vid} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>

        {/* MODAL */}
        {selectedImage !== null && (
          <div
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.9)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <img
              src={eskul.gallery[selectedImage]}
              alt="preview"
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailEskul;