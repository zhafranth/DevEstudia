import styled from "styled-components/macro";

export const ImgWrapper = styled.div`
  padding: 0 12vw;
  border-radius: 15px;
  overflow: hidden;
  height: 340px;
  margin-top: 2.5rem;
  img {
    border-radius: 20px;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const Desc = styled.p`
  padding: 0 12vw;
  text-align: justify;
  font-weight: 400;
  line-height: 1.8rem;
  color: #0b0707;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 2.5rem;
  text-align: center;
`;
