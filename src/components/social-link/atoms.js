import styled from 'styled-components';

export const Link = styled.a`
  text-decoration: none;
  border-bottom: none;
  display: flex;

  svg {
    display: inline-block;
    height: 1.2em;
    width: 1.2em;

    path {
      fill: #777;
    }
  }

  &:hover svg path {
    fill: black;
  }

  @media (prefers-color-scheme: dark) {
    &:hover svg path {
      fill: #ddd;
    }
  }
`;
