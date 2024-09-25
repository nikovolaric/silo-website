"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

function TimelineListItem({ children }: { children: ReactNode }) {
  const myref = useRef(null);

  const [start, setStart] = useState(false);

  useEffect(function () {
    const observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) {
          setStart(true);
        }
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    if (myref.current) {
      observer.observe(myref.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <li
      className={`${
        start ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0"
      } transition-all duration-1000`}
      ref={myref}
    >
      {children}
    </li>
  );
}

export default TimelineListItem;
