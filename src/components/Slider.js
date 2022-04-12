import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import styled from "styled-components";
import img1 from "../img/maxresdefault.jpg";
import img2 from "../img/img2.jpg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(-191vh);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const InfoContainer = styled.div`
  margin-bottom: 30vh;
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Image = styled.img`
  margin-left: 10vh;
  border-radius: 10px;
`;

const Image2 = styled.img`
  margin-left: 10vh;
  border-radius: 10px;
  width: 1280px;
  height: 720px;
`;

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
  z-index: 2;
`;

const Slider = () => {
  const handleClick = (direction) => {};

  return (
    <Container>
      <Arrow direction="left" onCLick={() => handleClick("left")}>
        <ArrowLeft />
      </Arrow>
      <Wrapper>
        <Slide bg="fcf1ed">
          <ImgContainer>
            <Image src={img1} />
          </ImgContainer>
          <InfoContainer>
            <Title>TODOS MODELOS DA FAMÍLIA ARDUINO</Title>
            <Desc>COMPRE AGORA</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fcf1ed">
          <ImgContainer>
            <Image2 src={img2} />
          </ImgContainer>
          <InfoContainer>
            <Title>TODOS MODELOS DA FAMÍLIA RASPBERRY</Title>
            <Desc>COMPRE AGORA</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onCLick={() => handleClick("left")}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
