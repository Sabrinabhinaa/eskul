import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Users, Calendar, Award } from "lucide-react";

const DetailEskul = () => {

  const { id } = useParams();

  const [eskul, setEskul] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const API_URL =
  import.meta.env.VITE_API_URL;

const IMAGE_URL =
  import.meta.env.VITE_API_URL.replace("/eskuls", "");

  useEffect(() => {

    window.scrollTo(0, 0);

   fetch(`${API_URL}/${id}`)

      .then((res) => {

        if (!res.ok) {
          throw new Error("Data tidak ditemukan");
        }

        return res.json();
      })

      .then((data) => {

  console.log("DETAIL DATA:", data);
  console.log("IMAGE:", data.image);
  console.log("GALLERY:", data.gallery);
  console.log("VIDEO:", data.video);

  setEskul(data);
  setLoading(false);

})

      .catch((err) => {

  console.error("DETAIL ERROR:", err);

  setLoading(false);

});

  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!eskul) {
    return <h1>Data tidak ditemukan</h1>;
  }

  // SAFE ARRAY
  const galleryMedia = Array.isArray(eskul?.gallery)
    ? eskul.gallery
    : [];

  const videoMedia = Array.isArray(eskul?.video)
    ? eskul.video
    : eskul?.video
    ? [eskul.video]
    : [];

  // COMBINE MEDIA
  const media = [
    ...galleryMedia.map((item) => ({
      type: "image",
      src: item,
    })),

    ...videoMedia.map((item) => ({
      type: "video",
      src: item,
    })),
  ];

  return (
    <div
      style={{
        background: "#F8FAFC",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >

        {/* HERO */}
        <div
          style={{
            position: "relative",
            marginBottom: "40px",
          }}
        >

          {/* BACK BUTTON */}
          <Link
            to="/"
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              zIndex: 10,
              background: "#fff",
              padding: "10px 16px",
              borderRadius: "999px",
              textDecoration: "none",
              color: "#111827",
              fontWeight: "600",
            }}
          >
            ← Kembali
          </Link>

          {/* TITLE */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: "40px",
              zIndex: 10,
              color: "#fff",
            }}
          >

            <span
              style={{
                background: "#2563EB",
                padding: "8px 16px",
                borderRadius: "999px",
                fontSize: "14px",
              }}
            >
              EKSTRAKURIKULER
            </span>

            <h1
              style={{
                fontSize: "56px",
                marginTop: "15px",
              }}
            >
              {eskul.title}
            </h1>

          </div>

          {/* HERO IMAGE */}
         <img
          src={`${IMAGE_URL}${eskul.image}`}
          alt={eskul.title}
          style={{
            width: "100%",
            height: "600px",
            objectFit: "cover",
            borderRadius: "30px",
          }}
        />

        </div>

        {/* DESCRIPTION */}
        <div
          style={{
            background: "#fff",
            padding: "35px",
            borderRadius: "28px",
            marginBottom: "40px",
          }}
        >

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.9",
              color: "#475569",
            }}
          >
            {eskul.description}
          </p>

        </div>

        {/* INFO CARD */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >

          {/* PEMBINA */}
          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "24px",
            }}
          >

            <Users
              size={35}
              color="#2563EB"
            />

            <h3>Pembina</h3>

            <p
              style={{
                color: "#64748B",
                lineHeight: "1.7",
              }}
            >
              {eskul.pembina ? (
                eskul.pembina
              ) : (
                <>
                  Pembina Putra:
                  {" "}
                  {eskul.pembinaPutra || "-"}

                  <br />

                  Pembina Putri:
                  {" "}
                  {eskul.pembinaPutri || "-"}
                </>
              )}
            </p>

          </div>

          {/* JADWAL */}
          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "24px",
            }}
          >

            <Calendar
              size={35}
              color="#2563EB"
            />

            <h3>Jadwal</h3>

            <p>
              Setiap Jumat & Sabtu
            </p>

          </div>

          {/* PRESTASI */}
          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "24px",
            }}
          >

            <Award
              size={35}
              color="#2563EB"
            />

            <h3>Prestasi</h3>

            <p>
              Aktif mengikuti lomba & kegiatan sekolah
            </p>

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

          <h2
            style={{
              marginBottom: "25px",
            }}
          >
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

            {media?.map((item, index) => (

              <div
                key={index}
                onClick={() => setSelectedMedia(index)}
                style={{
                  cursor: "pointer",
                }}
              >

                {item.type === "image" ? (

                 <img
  src={`${IMAGE_URL}${item.src}`}
  alt=""
  style={{
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "18px",
  }}
/>

                ) : (

                  <video
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "18px",
                    }}
                  >
                    <source
  src={`${IMAGE_URL}${item.src}`}
  type="video/mp4"
/>
                  </video>

                )}

              </div>

            ))}

          </div>

        </div>

        {/* MODAL */}
        {selectedMedia !== null &&
          media?.[selectedMedia] && (

          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.95)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >

            {/* PREV */}
            <button
              onClick={() =>
                setSelectedMedia(
                  selectedMedia === 0
                    ? media.length - 1
                    : selectedMedia - 1
                )
              }
              style={{
                position: "absolute",
                left: "20px",
                fontSize: "40px",
                background: "transparent",
                border: "none",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              ❮
            </button>

            {/* MEDIA */}
            {media?.[selectedMedia]?.type === "image" ? (

              <img
 src={`${IMAGE_URL}${media[selectedMedia].src}`}
  alt=""
  style={{
    maxWidth: "90%",
    maxHeight: "90%",
  }}
/>

            ) : (

              <video
                controls
                autoPlay
                style={{
                  maxWidth: "90%",
                  maxHeight: "90%",
                }}
              >
                <source
  src={`${IMAGE_URL}${media[selectedMedia].src}`}
  type="video/mp4"
/>
              </video>

            )}

            {/* NEXT */}
            <button
              onClick={() =>
                setSelectedMedia(
                  selectedMedia === media.length - 1
                    ? 0
                    : selectedMedia + 1
                )
              }
              style={{
                position: "absolute",
                right: "20px",
                fontSize: "40px",
                background: "transparent",
                border: "none",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              ❯
            </button>

            {/* CLOSE */}
            <button
              onClick={() => setSelectedMedia(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                fontSize: "30px",
                background: "transparent",
                border: "none",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

          </div>

        )}

      </div>
    </div>
  );
};

export default DetailEskul;