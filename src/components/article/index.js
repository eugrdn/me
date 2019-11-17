import React from 'react';
import {isMobile} from 'react-device-detect';
import styled from 'styled-components';

export default ({title, date, html}) => (
  <Article>
    <Header>
      <h1>{title}</h1>
      {date && (
        <span>
          <small>{date}</small>
        </span>
      )}
    </Header>
    <div className="divider" />
    {html && <div dangerouslySetInnerHTML={{__html: html}} />}
  </Article>
);

const Header = styled.div`
  text-align: center;
  margin: 0 auto;
  h1.title {
    line-height: 1.4em;
    text-align: center;
    font-size: 1.4em;
  }
`;

const Article = styled.article`
  min-width: ${isMobile ? '250px' : '400px'};
  max-width: 500px;
  margin: 0 auto;
  hr {
    border: 0;
    border-bottom: 1px solid #000;
    margin: 30px 0;
  }
  p {
    line-height: 1.9em;
    word-wrap: break-word;
  }
  a:hover {
    color: #369;
    border-color: #369;
  }
  .divider {
    background: #ddd;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(rgba(255, 255, 255, 0)),
      color-stop(#ccc),
      to(rgba(255, 255, 255, 0))
    );
    background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0), #ccc, rgba(255, 255, 255, 0));
    background: linear-gradient(to right, rgba(255, 255, 255, 0), #ccc, rgba(255, 255, 255, 0));
    height: 1px;
    margin: 2em 0;
  }
`;
