import React from "react";
import {
  Hero,
  Benefit,
  Layout,
  About,
  Testimoni,
  Kelas,
} from "../../components/molecules";

// Component
const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Benefit />
      {/* <Testimoni />
      <Kelas /> */}
    </Layout>
  );
};

export default Home;
