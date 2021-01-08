import React from "react";
import Carousel from "react-elastic-carousel";
import {
  MainTestimoni,
  Title,
  TestimoniWrapper,
  Item,
  ImgWrapper,
  MetaWrapper,
  Desc,
  Role,
} from "./style";

// Image
import Logo from "../../../assets/Logo/logo-title.png";
import ImgTestimoni from "../../../assets/Images/testimoni1.png";

const Testimoni = () => {
  return (
    <MainTestimoni>
      <Title>
        Kenapa Harus <img src={Logo} alt="logo Estudia" />
      </Title>
      <TestimoniWrapper>
        <Carousel showArrows={false}>
          <Item>
            <ImgWrapper>
              <img src={ImgTestimoni} alt="testimoni" className="img-cover" />
            </ImgWrapper>
            <MetaWrapper>
              <Desc>
                “ Mudah dipahami dan penyampain materi yang lebih baik ”
              </Desc>
              <Role>Hendra - Software Engineer</Role>
            </MetaWrapper>
          </Item>
          <Item>
            <ImgWrapper>
              <img src={ImgTestimoni} alt="testimoni" className="img-cover" />
            </ImgWrapper>
            <MetaWrapper>
              <Desc>
                “ Mudah dipahami dan penyampain materi yang lebih baik ”
              </Desc>
              <Role>Hendra - Software Engineer</Role>
            </MetaWrapper>
          </Item>
          <Item>
            <ImgWrapper>
              <img src={ImgTestimoni} alt="testimoni" className="img-cover" />
            </ImgWrapper>
            <MetaWrapper>
              <Desc>
                “ Mudah dipahami dan penyampain materi yang lebih baik ”
              </Desc>
              <Role>Hendra - Software Engineer</Role>
            </MetaWrapper>
          </Item>
        </Carousel>
      </TestimoniWrapper>
    </MainTestimoni>
  );
};

export default Testimoni;
