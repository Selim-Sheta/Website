'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBackground({ animate = true }: { animate?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any previous injected SVG
    container.innerHTML = '';

    // Fetch and inject SVG
    fetch('/img/background.svg')
      .then(res => res.text())
      .then(svgText => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
        const svgEl = svgDoc.querySelector('svg');

        if (!svgEl) return;

        // Ensure SVG fills the screen
        svgEl.setAttribute('width', '100%');
        svgEl.setAttribute('height', '100%');
        svgEl.setAttribute('preserveAspectRatio', 'xMidYMid slice');

        container.appendChild(svgEl);

        if (!animate) return;

        // Animate paths
        const paths = svgEl.querySelectorAll('path');
        paths.forEach(path => {
          const dx = (Math.random() - 0.5) * 100;
          const dy = (Math.random() - 0.5) * 100;
          const rot = (Math.random() - 0.5) * 60;
          const dur = 5;

          path.animate(
            [
              { transform: 'translate(0,0) rotate(0)' },
              { transform: `translate(${dx}px, ${dy}px) rotate(${rot}deg)` },
            ],
            {
              duration: dur * 1000,
              iterations: 1,
              direction: 'reverse',
              easing: 'ease-in-out',
            }
          );
        });
      });
  }, [animate]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none -z-10 overflow-hidden"
    />
  );
}
