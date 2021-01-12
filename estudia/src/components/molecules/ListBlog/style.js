import styled from "styled-components";

export const WrapperBlog = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 12vw;
  flex-wrap: wrap;
  margin-top: 5rem;
  min-height: 53vh;

  .link {
    display: block;
    width: 100%;
    text-decoration: none;
    width: 30%;
    color: #100d0d;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #100d0d;
  /* margin: 0; */
  text-align: center;
`;
