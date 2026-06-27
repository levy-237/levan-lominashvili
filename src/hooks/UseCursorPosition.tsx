import { useState, useEffect } from "react";

export const useCursorPosition = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (ev: MouseEvent) => {
      setCursorPosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return cursorPosition;
};
