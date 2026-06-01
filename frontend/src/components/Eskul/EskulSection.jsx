import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Title,
  Subtitle,
  CardWrapper,
  Card,
  CardImage,
  CardBody,
  EskulTitle,
  Badge,
} from "./eskulStyled";

export default function EskulSection() {
  const [eskuls, setEskuls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://eskul-y2xk.vercel.app/eskuls")
      .then((res) => res.json())
      .then((data) => {
        console.log("DATA ESKUL:", data);

        // pastikan data array
        setEskuls(Array.isArray(data) ? data : []);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setEskuls([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container id="eskul">
      <Title>Pilihan Ekstrakurikuler</Title>

      <Subtitle>Temukan komunitas sesuai minat kamu</Subtitle>

      <CardWrapper>
        {Array.isArray(eskuls) &&
          eskuls.map((item) => (
            <Link
              key={item.id}
              to={`/eskul/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card>
                <CardImage src={item.image} alt={item.title} />

                <CardBody>
                  <Badge>{item.category}</Badge>

                  <EskulTitle>{item.title}</EskulTitle>
                </CardBody>
              </Card>
            </Link>
          ))}
      </CardWrapper>
    </Container>
  );
}