'use client';

import { useEffect, useRef } from 'react';

type AnimationMode = 'regular' | 'alternate' | 'off';

export default function AnimatedBackground({ mode = 'regular' }: { mode?: AnimationMode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';

    fetch('/img/background.svg')
      .then((res) => res.text())
      .then((svgText) => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
        const svgEl = svgDoc.querySelector('svg');

        if (!svgEl) return;

        svgEl.setAttribute('width', '100%');
        svgEl.setAttribute('height', '100%');
        svgEl.setAttribute('preserveAspectRatio', 'xMidYMid slice');

        container.appendChild(svgEl);

        if (mode === 'off') return;

        const paths = svgEl.querySelectorAll('path');
        paths.forEach((path) => {
          const dx = (Math.random() - 0.5) * 100;
          const dy = (Math.random() - 0.5) * 100;
          const rot = (Math.random() - 0.5) * 60;
          const dur =
            mode === 'alternate'
              ? 15 + Math.random() * 45 // 15–60s
              : 5; // default for regular

          path.animate(
            [
              { transform: 'translate(0,0) rotate(0)' },
              { transform: `translate(${dx}px, ${dy}px) rotate(${rot}deg)` },
            ],
            {
              duration: dur * 1000,
              iterations: mode === 'alternate' ? Infinity : 1,
              direction: mode === 'alternate' ? 'alternate' : 'reverse',
              easing: 'ease-in-out',
            }
          );
        });
      });
  }, [mode]);

  return (
    <div
        ref={containerRef}
        className="fixed top-0 left-0 w-screen h-screen pointer-events-none -z-10 overflow-hidden"
        style={{ transform: 'translateZ(0)', WebkitTransform: 'translateZ(0)' }}
    />
  );
}
