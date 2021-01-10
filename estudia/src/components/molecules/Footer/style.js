import styled from "styled-components/macro";

export const MainFooter = styled.div`
  /* position: absolute;
  bottom: 0;
  left: 0;
  right: 0; */
  background-color: #910603;
  color: #fff;
  padding: 2rem 12vw;
  margin-top: 4rem;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  .link {
    text-decoration: none;
    margin-bottom: 1rem;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
`;
export const LogoFooter = styled.div``;
export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Title = styled.h4``;
export const Copyright = styled.p``;
export const Address = styled.p``;
