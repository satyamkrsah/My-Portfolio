import { useEffect, useRef } from "react";

export default function MouseCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
    >
      <div className="w-3 h-3 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
    </div>
  );
}