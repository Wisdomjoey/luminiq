"use client";

import { useEffect, useRef } from "react";

function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number | undefined;
    const moveMouse = (ev: MouseEvent) => {
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.left = ev.clientX + "px";
            cursorRef.current.style.top = ev.clientY + "px";

            // if (rafId) {
            //   cancelAnimationFrame(rafId);
            // }
            rafId = undefined;
          }
        });
      }
    };
    const hover = () => cursorRef.current?.classList.add("cursor-hover");
    const unHover = () => cursorRef.current?.classList.remove("cursor-hover");
    const eles = document.querySelectorAll(
      "a, button, [onclick], .work-card, .service-card, .testimonial-card, .team-card, .color-swatch",
    );

    eles.forEach((el) => {
      el.addEventListener("mouseenter", hover);
      el.addEventListener("mouseleave", unHover);
    });

    addEventListener("mousemove", moveMouse);

    return () => {
      removeEventListener("mousemove", moveMouse);

      eles.forEach((el) => {
        el.removeEventListener("mouseenter", hover);
        el.removeEventListener("mouseleave", unHover);
      });

      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return <div ref={cursorRef} id="cursor"></div>;
}

export default Cursor;
