import styled from "styled-components/macro";

export const MainNavbar = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12vw;
  z-index: 3;
  &.primary {
    background-color: #910603;
  }
`;

export const Logo = styled.div`
  /* width:auto;
  height:auto;
  object-fit */
`;

export const Menu = styled.div`
  display: flex;
`;

export const MenuItem = styled.div`
  margin-left: 2rem;
  .link {
    text-decoration: none;
    color: #910603;
    font-size: 1rem;
    font-weight: 400;

    &.primary {
      color: #fff;
    }
  }
`;
