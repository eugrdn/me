import {isMobile} from 'react-device-detect';
import {createGlobalStyle, css} from 'styled-components';

export default createGlobalStyle`
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: -apple-system, 'B612 Mono', Consolas, monaco, monospace, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-display: fallback;
  }

  body {
    font-weight: normal;
    font-style: normal;
    color: #333333;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
  }

  @media (min-width: 1200px) {
    body {
      font-size: 0.9em;
    }
  }

  @media (min-width: 1900px) {
    body {
      font-size: 1.5em;
    }
  }

  @media (min-width: 2600px) {
    body {
      font-size: 2em;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1em;
    line-height: 1.25;
    color: #313131;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    margin-top: 1em;
    font-size: 1.5em;
  }

  h3 {
    margin-top: 1.5em;
    font-size: 1.25em;
  }

  h4,
  h5,
  h6 {
    margin-top: 1.1em;
    font-size: 1.1em;
  }

  img {
    max-width: 100%;
  }

  ${!isMobile &&
    css`
      img {
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
      }
      img:hover {
        -webkit-filter: grayscale(0%);
        filter: grayscale(0%);
      }
    `}

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid #555;

    &.image {
      display: block;
      text-align: center;
      border: 0;
      border-radius: 5px;
      margin: 30px 0;
    }
  }

  @media (prefers-color-scheme: dark) {
    body {
      color: #ddd;
      background-color: #222;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: #ddd;
    }
  }

  mark {
    background: #fffc76;
    padding: 0 5px;
  }

  blockquote {
    border-left: 5px solid #ccc;
    margin: 40px 0;
    padding: 5px 30px;
    background: #eee;
  }

  iframe {
    margin: 45px 0 !important;
  }

  ul,
  ol {
    margin: 40px 0;
    padding-left: 50px;
    
    li {
      word-wrap: break-word;
    }

    img {
      margin: 40px 0;
      border-radius: 5px;
    }
  }

  sup {
    vertical-align: top;
    position: relative;
    top: -0.5em;
    margin-left: 1px;
  }

  time {
    color: #555;
  }

  code,
  pre,
  .code,
  .footnotes {
    font-family: Consolas, monaco, monospace;
  }

  code {
    color: #f14e32;
    background: #eee;
    padding: 2px 6px;
    font-size: 13px;
  }

  pre {
    display: block;
    margin-top: 0;
    margin-bottom: 1em;
    font-size: 0.8em;
    line-height: 1.4;
    white-space: pre;
    overflow-x: auto;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    padding: 1em;

    code {
      font-size: 100%;
      color: inherit;
      background-color: transparent;
      padding: 0;
    }
  }

  table {
    width: 100%;
    table-layout: fixed;
    margin: 45px 0;

    thead {
      background: #f2f2f2;
    }

    th {
      text-align: left;
      padding: 8px 10px;
      border-bottom: 15px solid #fff;
    }

    td {
      padding: 4px 0;
    }
  }

  iframe {
    width: 100%;
  }
`;
