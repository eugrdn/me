import React from 'react';
import ifEmoji from 'if-emoji';

export default ({className, symbol, label, fallback = null}) =>
  ifEmoji(symbol) ? (
    <>
      &nbsp;
      <span
        className={className}
        role="img"
        aria-label={label || ''}
        aria-hidden={label ? 'false' : 'true'}
      >
        {symbol}
      </span>
    </>
  ) : (
    fallback
  );
