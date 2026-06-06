// import { useEffect, useRef, useState } from "react";

// export default function MouseCursor() {
//   const cursorRef = useRef(null);
//   const followerRef = useRef(null);

//   const mouse = useRef({
//     x: window.innerWidth / 2,
//     y: window.innerHeight / 2,
//   });

//   const position = useRef({
//     x: window.innerWidth / 2,
//     y: window.innerHeight / 2,
//   });

//   const [hovered, setHovered] = useState(false);
//   const [clicked, setClicked] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       mouse.current.x = e.clientX;
//       mouse.current.y = e.clientY;

//       if (cursorRef.current) {
//         cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//       }
//     };

//     const handleMouseDown = () => setClicked(true);
//     const handleMouseUp = () => setClicked(false);

//     const handleHoverStart = () => setHovered(true);
//     const handleHoverEnd = () => setHovered(false);

//     const interactiveElements = document.querySelectorAll(
//       "a, button, input, textarea, select, [data-cursor]"
//     );

//     interactiveElements.forEach((el) => {
//       el.addEventListener("mouseenter", handleHoverStart);
//       el.addEventListener("mouseleave", handleHoverEnd);
//     });

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mouseup", handleMouseUp);

//     const animate = () => {
//       position.current.x +=
//         (mouse.current.x - position.current.x) * 0.12;
//       position.current.y +=
//         (mouse.current.y - position.current.y) * 0.12;

//       if (followerRef.current) {
//         followerRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
//       }

//       requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);

//       interactiveElements.forEach((el) => {
//         el.removeEventListener("mouseenter", handleHoverStart);
//         el.removeEventListener("mouseleave", handleHoverEnd);
//       });
//     };
//   }, []);

//   return (
//     <>
//       {/* Main Cursor Dot */}
//       <div
//         ref={cursorRef}
//         className="fixed top-0 left-0 pointer-events-none z-[9999]"
//       >
//         <div
//           className={`
//             -translate-x-1/2 -translate-y-1/2
//             rounded-full
//             transition-all duration-200 ease-out
//             bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
//             shadow-[0_0_25px_rgba(59,130,246,0.8)]
//             ${clicked ? "w-2 h-2" : "w-3 h-3"}
//           `}
//         />
//       </div>

//       {/* Follower Ring */}
//       <div
//         ref={followerRef}
//         className="fixed top-0 left-0 pointer-events-none z-[9998]"
//       >
//         <div
//           className={`
//             -translate-x-1/2 -translate-y-1/2
//             rounded-full
//             backdrop-blur-sm
//             transition-all duration-300 ease-out
//             border border-cyan-400/30

//             ${
//               hovered
//                 ? "w-16 h-16 bg-cyan-400/10 border-cyan-400/60"
//                 : "w-10 h-10 bg-white/5 dark:bg-white/5"
//             }

//             ${clicked ? "scale-75" : "scale-100"}
//           `}
//         />
//       </div>

//       {/* Outer Glow */}
//       <div
//         className="fixed top-0 left-0 pointer-events-none z-[9997]"
//         style={{
//           transform: `translate(${position.current.x}px, ${position.current.y}px)`,
//         }}
//       >
//         <div
//           className={`
//             -translate-x-1/2 -translate-y-1/2
//             rounded-full
//             bg-cyan-500/10
//             blur-xl
//             transition-all duration-300
//             ${
//               hovered
//                 ? "w-24 h-24 opacity-100"
//                 : "w-16 h-16 opacity-60"
//             }
//           `}
//         />
//       </div>
//     </>
//   );
// }


import { useEffect, useRef, useState } from "react";

export default function MouseCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  const mouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const position = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile / small screen
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleHoverStart = () => setHovered(true);
    const handleHoverEnd = () => setHovered(false);

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select, [data-cursor]"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.12;
      position.current.y += (mouse.current.y - position.current.y) * 0.12;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [isMobile]);

  // 👉 MOBILE PE KUCH RENDER NAHI
  if (isMobile) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
      >
        <div
          className={`
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            transition-all duration-200 ease-out
            bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
            shadow-[0_0_25px_rgba(59,130,246,0.8)]
            ${clicked ? "w-2 h-2" : "w-3 h-3"}
          `}
        />
      </div>

      {/* Follower Ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
      >
        <div
          className={`
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            backdrop-blur-sm
            transition-all duration-300 ease-out
            border border-cyan-400/30

            ${
              hovered
                ? "w-16 h-16 bg-cyan-400/10 border-cyan-400/60"
                : "w-10 h-10 bg-white/5 dark:bg-white/5"
            }

            ${clicked ? "scale-75" : "scale-100"}
          `}
        />
      </div>

      {/* Outer Glow */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          transform: `translate(${position.current.x}px, ${position.current.y}px)`,
        }}
      >
        <div
          className={`
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-cyan-500/10
            blur-xl
            transition-all duration-300
            ${
              hovered
                ? "w-24 h-24 opacity-100"
                : "w-16 h-16 opacity-60"
            }
          `}
        />
      </div>
    </>
  );
}