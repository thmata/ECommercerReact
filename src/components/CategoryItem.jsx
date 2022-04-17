import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 3rem;
  height: 70vh;
  flex: 1;
`;

/* TAMANHO DA MENOR IMAGEM 584 x 818 */
const Image = styled.img`
  object-fit: cover;
  height: 52rem;
  width: 34.438rem;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const Title = styled.h1``;
const Butao = styled.button``;

export const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Butao>COMPRAR</Butao>
      </Info>
    </Container>
  );
};
