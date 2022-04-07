import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import styled from "styled-components";
import img1 from "../img/maxresdefault.jpg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
`;

const Image = styled.img``;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.6;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeft />
      </Arrow>
      <Wrapper>
        <ImgContainer>
          <Image src={img1} />
        </ImgContainer>
        <InfoContainer></InfoContainer>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
