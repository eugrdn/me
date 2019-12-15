import {useLayoutEffect} from 'react';
import {isMobile} from 'react-device-detect';

const REPAINTED = 'repainted:v1';
const CACHE_CHECK_DELAY_MS = 1000;

/**
 * hack! remove it after:
 * - new mobile-first layout (plain CSS only)
 * - using any tool with SSR (next.js, etc.)
 */
export const useForceRepaint = () => {
  useLayoutEffect(() => {
    let unsubscribe;

    const shouldBeRepainted =
      process.env.NODE_ENV !== 'development' && isMobile && !localStorage.getItem(REPAINTED);

    if (shouldBeRepainted) {
      unsubscribe = repaintOnCacheReady();
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);
};

function repaintOnCacheReady() {
  let id;

  function unsubscribe() {
    if (id) {
      clearTimeout(id);
    }
  }

  function repaint() {
    localStorage.setItem(REPAINTED, true);
    unsubscribe();
    window.location.reload();
  }

  async function checkCacheAndRepaint() {
    try {
      const cache = await caches
        .open(`gatsby-plugin-offline-runtime-${window.location.origin}/`)
        .then(cache => cache.keys());

      if (cache.length) {
        repaint();
      } else {
        id = setTimeout(checkCacheAndRepaint, CACHE_CHECK_DELAY_MS);
      }
    } catch (error) {
      console.error(error)
      console.log('the sadness...');
    }
  }

  if ('caches' in window) {
    id = setTimeout(checkCacheAndRepaint, CACHE_CHECK_DELAY_MS);
  } else {
    id = setTimeout(repaint, 3 * CACHE_CHECK_DELAY_MS);
  }

  return unsubscribe;
}
