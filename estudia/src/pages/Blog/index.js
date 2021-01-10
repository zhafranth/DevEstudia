import React, { useEffect, useState } from "react";
import { WrapperBlog } from "./style";
import { Layout, Card } from "../../components/molecules";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/artikels")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <Layout primary>
      <WrapperBlog>
        {data.length != 0 &&
          data.map((item, index) => (
            <Link to={`/artikel-detail/${item.slug}`} className="link">
              <Card key={index} title={item.title} image={item.image[0].url} />
            </Link>
          ))}
      </WrapperBlog>
    </Layout>
  );
};

export default Blog;
