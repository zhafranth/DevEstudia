import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImgWrapper, Desc, Title } from "./style";
import { Layout } from "../../components/molecules";
import Reactmarkdown from "react-markdown";

// Images
import ImgCover from "../../assets/Images/cover-detail.png";
import axios from "axios";

const DetailBlog = (props) => {
  const [data, setData] = useState([]);

  const { detailArtikel, artikel } = useParams();

  // getData
  useEffect(() => {
    axios
      .get(`http://localhost:1337/${artikel}`)
      .then((res) => {
        const data = res.data.find((item) => item.slug === detailArtikel);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Layout primary>
      <ImgWrapper>
        <img
          src={`http://localhost:1337${
            data.image != undefined && data.image[0].url
          }`}
          alt="cover blog"
          className="img-cover"
        />
      </ImgWrapper>

      <Title>{data?.title}</Title>
      <Desc>
        <Reactmarkdown>{data?.content}</Reactmarkdown>
      </Desc>
    </Layout>
  );
};

export default DetailBlog;
