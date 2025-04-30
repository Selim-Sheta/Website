'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the SVG file after hydration
    fetch('/img/background.svg')
      .then(res => res.text())
      .then(data => setSvgContent(data));
  }, []);

  useEffect(() => {
    if (!svgContent) return;

    const svg = containerRef.current?.querySelector('svg');
    if (svg)
    {
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    } else{
      return;
    }

    const paths = svg.querySelectorAll('path');
    paths.forEach((path) => {
        const dx = (Math.random() - 0.5) * 100;
        const dy = (Math.random() - 0.5) * 100;
        const rot = (Math.random() - 0.5) * 60;
        const dur = 5;

        const initialAnimation = path.animate(
            [
                { transform: 'translate(0,0) rotate(0)' },
                { transform: `translate(${dx}px, ${dy}px) rotate(${rot}deg)` },
            ],
            {
                duration: dur * 1000,
                iterations: 1,
                direction: 'reverse', // plays from end to start
                easing: 'ease-in-out',
            }
        );
    });
  }, [svgContent]);

  if (!svgContent) return null;

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none -z-10"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}

const wobble = (value: number) => (Math.random() - 0.5) * Math.min(Math.abs(value) * 0.3, 10);
