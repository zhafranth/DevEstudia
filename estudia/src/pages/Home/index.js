import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Hero,
  Benefit,
  Layout,
  About,
  Testimoni,
  Kelas,
  ListBlog,
} from "../../components/molecules";

// Component
const Home = () => {
  const [dataBahasa, setDataBahasa] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/kelas-bahasa-spanyols")
      .then((res) => setDataBahasa(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Layout>
      <Hero />
      <About />
      <Benefit />
      {/* <Testimoni />
      <Kelas /> */}
      <ListBlog
        data={dataBahasa}
        title="Kelas Bahasa Spanyol"
        to="kelas-bahasa-spanyol"
      />
    </Layout>
  );
};

export default Home;
