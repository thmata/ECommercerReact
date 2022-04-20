import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 70vh;
  position: relative;
  padding: 30px 90px;
`;

/* TAMANHO DA MENOR IMAGEM 584 x 818 */
const Image = styled.img`
  object-fit: cover;
  display: flex;
  width: 25.5rem;
  height: 35.813rem;
  border: 1px solid #008080;
  border-radius: 10px;
  border-opa
`;
const Info = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;
const Title = styled.h1`
  color: black;
`;
const Butao = styled.button`
  border: 1px solid black;
  padding: 10px;
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
