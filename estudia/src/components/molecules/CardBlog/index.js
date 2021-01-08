import React from "react";
import { MainCard, ImgWrapper, Title, Desc, Time } from "./style";

// Image
import ImgCover from "../../../assets/Images/cover-blog.png";

const Card = () => {
  return (
    <MainCard>
      <ImgWrapper>
        <img src={ImgCover} alt="" className="img-cover" />
      </ImgWrapper>
      <Title>Bahasa Spanyol untuk Orang Indonesia</Title>
      <Desc>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fuga
        distinctio ipsa assumenda laborum? A!
      </Desc>
      <Time>November 17, 2020</Time>
    </MainCard>
  );
};

export default Card;
