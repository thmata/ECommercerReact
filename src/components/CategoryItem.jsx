import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 3rem;
  height: 70vh;
  flex: 1;
  position: relative;
`;

/* TAMANHO DA MENOR IMAGEM 584 x 818 */
const Image = styled.img`
  object-fit: cover;
  height: 52rem;
  width: 34.438rem;
`;
const Info = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const Title = styled.h1`
  color: black;
`;
const Butao = styled.button`
  border: none;
  padding: 20px;
  background: transparent;
  cursor: pointer;
  color: grey;
`;

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
