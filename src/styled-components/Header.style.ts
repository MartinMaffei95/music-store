import styled from "styled-components";

export const StyledHeader = styled("header")`
  height: 4rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding-inline: 1rem;
  & {
    @apply bg-neutral-100;
  }
`;
