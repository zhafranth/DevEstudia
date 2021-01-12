import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout, ListBlog } from "../../components/molecules";
import axios from "axios";

const Blog = () => {
  const [data, setData] = useState([]);
  const { blogId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:1337/${blogId}s`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [blogId]);
  console.log(useParams());
  return (
    <Layout primary>
      <ListBlog data={data} to="artikel-detail" />
    </Layout>
  );
};

export default Blog;
