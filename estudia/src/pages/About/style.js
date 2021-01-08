import styled from "styled-components/macro";

export const Hero = styled.div`
  height: 400px;
  .img-cover {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const About = styled.div`
  margin: 5rem 0;
  padding: 0 12vw;
`;

export const Title = styled.h3`
  font-size: 70px;
  font-weight: 700;
  text-align: center;
  color: #910603;
  span {
    font-size: 56px;
    font-weight: 500;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImgWrapper = styled.div``;
export const MetaDesc = styled.div`
  width: 60%;
`;
export const Desc = styled.p`
  line-height: 1.8rem;
  margin-bottom: 2rem;
  text-align: justify;
`;
