import React from "react";
import { MainCard, ImgWrapper, Title, Desc, Time } from "./style";

// Image
import ImgCover from "../../../assets/Images/cover-blog.png";

const Card = ({ title, image }) => {
  console.log(image);
  return (
    <MainCard>
      <ImgWrapper>
        <img
          src={`http://localhost:1337${image}`}
          alt="image "
          className="img-cover"
        />
      </ImgWrapper>
      <Title>{title}</Title>
      {/* <Desc>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fuga
        distinctio ipsa assumenda laborum? A!
      </Desc> */}
      {/* <Time>November 17, 2020</Time> */}
    </MainCard>
  );
};

export default Card;
