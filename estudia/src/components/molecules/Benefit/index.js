import React, { useEffect, useState } from "react";
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
import axios from "axios";

const Benefit = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/benefits")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <MainBenefit>
      <Title>
        Kenapa Harus <img src={Logo} alt="logo Estudia" />
      </Title>
      <WrapperBenefit>
        {data.length != 0 &&
          data.map((item) => (
            <ItemBenefit key={item.id}>
              <Point>0{item.id}</Point>
              <TitleBenefit>{item.title}</TitleBenefit>
              <DescBenefit>{item.desc}</DescBenefit>
            </ItemBenefit>
          ))}
      </WrapperBenefit>
    </MainBenefit>
  );
};

export default Benefit;
