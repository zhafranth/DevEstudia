import React from "react";
import { ImgWrapper, Desc, Title } from "./style";
import { Layout } from "../../components/molecules";

// Images
import ImgCover from "../../assets/Images/cover-detail.png";

const DetailBlog = () => {
  return (
    <Layout primary>
      <ImgWrapper>
        <img src={ImgCover} alt="cover blog" className="img-cover" />
      </ImgWrapper>

      <Title>Belajar Spanyol untuk orang Indonesia</Title>
      <Desc>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
        exercitationem optio deleniti neque cum ea ratione maiores consequatur
        iste vero, sapiente facere, aliquam doloribus, ipsum blanditiis veniam
        qui doloremque perferendis! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eligendi provident commodi, nulla fugiat expedita
        aspernatur dolorum. Autem, natus accusantium, pariatur maiores debitis
        recusandae suscipit dicta adipisci maxime rerum consequuntur? Totam
        autem odit sapiente tempore aperiam quos veniam nesciunt perspiciatis,
        voluptatem cumque mollitia esse explicabo quo quisquam. Ducimus dolores
        molestiae optio.
      </Desc>
      <Desc>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
        exercitationem optio deleniti neque cum ea ratione maiores consequatur
        iste vero, sapiente facere, aliquam doloribus, ipsum blanditiis veniam
        qui doloremque perferendis! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eligendi provident commodi, nulla fugiat expedita
        aspernatur dolorum. Autem, natus accusantium, pariatur maiores debitis
        recusandae suscipit dicta adipisci maxime rerum consequuntur? Totam
        autem odit sapiente tempore aperiam quos veniam nesciunt perspiciatis,
        voluptatem cumque mollitia esse explicabo quo quisquam. Ducimus dolores
        molestiae optio.
      </Desc>
      <Desc>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
        exercitationem optio deleniti neque cum ea ratione maiores consequatur
        iste vero, sapiente facere, aliquam doloribus, ipsum blanditiis veniam
        qui doloremque perferendis! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eligendi provident commodi, nulla fugiat expedita
        aspernatur dolorum. Autem, natus accusantium, pariatur maiores debitis
        recusandae suscipit dicta adipisci maxime rerum consequuntur? Totam
        autem odit sapiente tempore aperiam quos veniam nesciunt perspiciatis,
        voluptatem cumque mollitia esse explicabo quo quisquam. Ducimus dolores
        molestiae optio.
      </Desc>
    </Layout>
  );
};

export default DetailBlog;
