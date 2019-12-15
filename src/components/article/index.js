import React from 'react';
import * as Atoms from './atoms';

export default ({title, date, html}) => (
  <Atoms.Article as="article">
    <Atoms.Header>
      <h1>{title}</h1>
      {date && (
        <span>
          <small>{date}</small>
        </span>
      )}
    </Atoms.Header>
    <div className="divider" />
    {html && <div dangerouslySetInnerHTML={{__html: html}} />}
  </Atoms.Article>
);
