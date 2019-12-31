import {isMobile, isMobileOnly} from 'react-device-detect';
import styled, {css} from 'styled-components';

export default styled.section`
  min-width: ${isMobile ? '200px' : '400px'};

  ${isMobileOnly &&
    css`
      max-width: 90vw;
    `}

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 25px 0;

      span {
        display: inline-block;
        color: #757575;
        letter-spacing: 1px;
        text-transform: uppercase;
      }

      a {
        line-height: 1.2em;
        text-decoration: none;
        border: 0;
        color: #000;
        box-sizing: border-box;
      }

      @media (min-width: 992px) {
        a {
          border-bottom: 2px solid transparent;

          &:hover {
            border-color: #000;
          }
        }
      }

      @media (prefers-color-scheme: dark) {
        a {
          color: #ddd;

          &:hover {
            border-color: #ddd;
          }
        }
      }
    }
  }
`;
