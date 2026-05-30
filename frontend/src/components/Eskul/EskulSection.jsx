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

  useEffect(() => {

   fetch(`${import.meta.env.VITE_API_URL}/eskuls`)

      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        setEskuls(data);
      })

      .catch((err) => console.log(err));

  }, []);

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
                src={item.image}
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