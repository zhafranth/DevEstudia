import React from "react";
import { WrapperBlog } from "./style";
import { Layout, Card } from "../../components/molecules";

const Blog = () => {
  return (
    <Layout primary>
      <WrapperBlog>
        <Card />
        <Card />
        <Card />
        <Card />
      </WrapperBlog>
    </Layout>
  );
};

export default Blog;
