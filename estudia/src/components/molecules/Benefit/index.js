import React from "react";
import {
  MainBenefit,
  Title,
  WrapperBenefit,
  ItemBenefit,
  Point,
  TitleBenefit,
  DescBenefit,
} from "./style";

// Logo
import Logo from "../../../assets/Logo/logo-title.png";

const Benefit = () => {
  return (
    <MainBenefit>
      <Title>
        Kenapa Harus <img src={Logo} alt="logo Estudia" />
      </Title>
      <WrapperBenefit>
        <ItemBenefit>
          <Point>01</Point>
          <TitleBenefit>Praktis dan fleksibel</TitleBenefit>
          <DescBenefit>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ea
            optio nemo voluptates, odio ad temporibus cupiditate alias quod vel.
          </DescBenefit>
        </ItemBenefit>
        <ItemBenefit>
          <Point>02</Point>
          <TitleBenefit>Pengalaman Belajar yang menyenangkan</TitleBenefit>
          <DescBenefit>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ea
            optio nemo voluptates, odio ad temporibus cupiditate alias quod vel.
          </DescBenefit>
        </ItemBenefit>
        <ItemBenefit>
          <Point>03</Point>
          <TitleBenefit>Hemat Waktu dan Biaya</TitleBenefit>
          <DescBenefit>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ea
            optio nemo voluptates, odio ad temporibus cupiditate alias quod vel.
          </DescBenefit>
        </ItemBenefit>
      </WrapperBenefit>
    </MainBenefit>
  );
};

export default Benefit;
