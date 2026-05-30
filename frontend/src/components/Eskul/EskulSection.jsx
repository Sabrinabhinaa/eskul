// EskulSection.jsx

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
  const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true);

  fetch(`${import.meta.env.VITE_API_URL}/eskuls`)
    .then((res) => res.json())
    .then((data) => {
      const eskulData = data.data || data;
      setEskuls(eskulData);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
}, []);

if (loading) {
  return <div>Loading...</div>;
}

  return (
    <Container id="eskul">

      <Title>
        Pilihan Ekstrakurikuler
      </Title>

      <Subtitle>
        Temukan komunitas sesuai minat kamu
      </Subtitle>

      <CardWrapper>

        {eskuls.map((item) => (

          <Link
            key={item.id}
            to={`/eskul/${item.id}`}
            style={{ textDecoration: "none" }}
          >

            <Card>
          <CardImage
  src={`${import.meta.env.VITE_API_URL}${item.image}`}
  alt={item.title}
/>

              <CardBody>

                <Badge>
                  {item.category}
                </Badge>

                <EskulTitle>
                  {item.title}
                </EskulTitle>

              </CardBody>

            </Card>

          </Link>

        ))}

      </CardWrapper>

    </Container>
  );
}