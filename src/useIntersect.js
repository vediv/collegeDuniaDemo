/**
 * Author: Ved Dwivedi <ved2dwivedi@gmail.com>
 *
 * React
 *
 * This file contains the UserInterset of demo, please don't use it for production. 
 *
 * Copyright ©  2020-present. All rights reserved.
 *
 */

import {useEffect, useRef, useState} from 'react';

export default ({root = null, rootMargin, threshold = 0}) => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);
  if (typeof window === 'undefined') {
    global["window"] = {};
  }

  let observer;
  
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    observer = useRef(
      new window.IntersectionObserver(([entry]) => updateEntry(entry), {
        root,
        rootMargin,
        threshold,
      }),
    );
  }

  useEffect(
    () => {
      const {current: currentObserver} = observer;
      currentObserver.disconnect();

      if (node) currentObserver.observe(node);

      return () => currentObserver.disconnect();
    },
    [node],
  );

  return [setNode, entry];
};
