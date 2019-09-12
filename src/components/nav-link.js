import {Link} from 'gatsby';
import styled from 'styled-components';

export default styled(Link)`
  a {
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
`;
