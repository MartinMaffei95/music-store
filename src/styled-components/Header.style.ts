import styled from "styled-components";

export const StyledHeader = styled("header")`
  position: relative;
  .header_content {
    position: relative;
    z-index: 600;
  }
  .header_nav {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    backdrop-filter: blur(20px);
    width: 100%;
    margin: 0;
    z-index: 100;
    ul {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
  }
  .open {
    transform: translateY(100%);
  }
`;
