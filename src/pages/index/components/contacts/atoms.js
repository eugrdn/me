import styled from 'styled-components';
import Section from '../../../../components/section';

export const Contacts = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #777;

  a {
    color: #000;
  }

  @media (prefers-color-scheme: dark) {
    a {
      color: #ddd;
    }
  }
`;

export const LinkList = styled.div`
  display: flex;

  ul {
    flex-grow: 1;
    display: flex;
    justify-content: space-around;
    max-width: 400px;

    li {
      margin: 0 10px 0 0;

      a {
        border-bottom: none;

        img {
          margin: 0;
        }
      }
    }

    li:last-child {
      margin: 0;
    }
  }
`;

export const FindMe = styled.p`
  margin-top: 0;
`;

// gatsby build fix =\
export default null;
