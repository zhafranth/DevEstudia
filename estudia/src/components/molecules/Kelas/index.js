import React from "react";
import {
  MainKelas,
  Title,
  KelasWrapper,
  Card,
  ImgWrapper,
  CardTitle,
  Desc,
  Time,
  Button,
} from "./style";

// Images
import ImgCard from "../../../assets/Images/cover-card.png";

const Kelas = () => {
  return (
    <MainKelas>
      <Title>
        Course <br />
        <span>Kelas Bahasa Spanyol</span>
      </Title>
      <KelasWrapper>
        <Card>
          <ImgWrapper>
            <img src={ImgCard} alt="" />
          </ImgWrapper>
          <CardTitle>A1.1</CardTitle>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            nulla repellendus voluptas cum mollitia placeat.
          </Desc>
          <Time>
            <img src="" alt="" /> 30 Jam
          </Time>
          <Button>Study Now</Button>
        </Card>
        <Card>
          <ImgWrapper>
            <img src={ImgCard} alt="" />
          </ImgWrapper>
          <CardTitle>A1.1</CardTitle>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            nulla repellendus voluptas cum mollitia placeat.
          </Desc>
          <Time>
            <img src="" alt="" /> 30 Jam
          </Time>
          <Button>Study Now</Button>
        </Card>
        <Card>
          <ImgWrapper>
            <img src={ImgCard} alt="" />
          </ImgWrapper>
          <CardTitle>A1.1</CardTitle>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            nulla repellendus voluptas cum mollitia placeat.
          </Desc>
          <Time>
            <img src="" alt="" /> 30 Jam
          </Time>
          <Button>Study Now</Button>
        </Card>
      </KelasWrapper>
    </MainKelas>
  );
};

export default Kelas;
