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
  const [dataTataBahasa, setDataTataBahasa] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/kelas-bahasa-spanyols")
      .then((res) => setDataBahasa(res.data))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:1337/tata-bahasa-dan-kosakatas")
      .then((res) => setDataTataBahasa(res.data))
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
        to="kelas-bahasa-spanyols"
        height="350px"
      />
      <ListBlog
        data={dataTataBahasa}
        title="Tata Bahasa dan Kosatakata"
        to="tata-bahasa-dan-kosakatas"
        height="350px"
      />
    </Layout>
  );
};

export default Home;
