import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const GlobeComponent: React.FC = () => {
  const innerOrbitRef = useRef<HTMLDivElement>(null);
  const outerOrbitRef = useRef<HTMLDivElement>(null);
  const planetImgRef = useRef<HTMLDivElement>(null);
  const planetAbsImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let angle = 0;
    let animationId: number | null = null;

    const animateFrame = () => {
      // Check if all refs are still valid before accessing them
      if (
        innerOrbitRef.current &&
        outerOrbitRef.current &&
        planetImgRef.current &&
        planetAbsImgRef.current
      ) {
        angle += 0.2; // Base speed for animations

        innerOrbitRef.current.style.transform = `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${angle}deg) skew(0deg)`;
        outerOrbitRef.current.style.transform = `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${angle * 0.5}deg) skew(0deg)`; // Outline-Orbit at half speed
        planetImgRef.current.style.transform = `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${angle * 0.25}deg) skew(0deg)`; // Earth at quarter speed
        planetAbsImgRef.current.style.transform = `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${angle * 0.25}deg) skew(0deg)`; // Earth shadow matches Earth

        animationId = requestAnimationFrame(animateFrame);
      }
    };

    // Start animation only if all refs are available
    if (
      innerOrbitRef.current &&
      outerOrbitRef.current &&
      planetImgRef.current &&
      planetAbsImgRef.current
    ) {
      animationId = requestAnimationFrame(animateFrame);
    }

    // Cleanup function to cancel animation on unmount
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="relative w-[600px] h-[600px] mx-auto flex items-center justify-center ">
      {/* Inner Orbit */}
      <div
        className="absolute w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        ref={innerOrbitRef}
      >
        <Image
          src="https://cdn.multiversx.com/webflow/Inner-Orbit.svg"
          alt="Inner Orbit"
          fill
          className="object-contain"
          priority
          sizes="300px"
        />
      </div>

      {/* Outer Orbit */}
      <div
        className="absolute w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        ref={outerOrbitRef}
      >
        <Image
          src="https://cdn.multiversx.com/webflow/Outline-Orbit.svg"
          alt="Outer Orbit"
          fill
          className="object-contain"
          priority
          sizes="300px"
        />
      </div>

      {/* Main Planet */}
      <div
        className="absolute w-[500px] h-[500px]"
        style={{ transformStyle: 'preserve-3d' }}
        ref={planetImgRef}
      >
        <Image
          src="https://cdn.multiversx.com/webflow/Planet.webp"
          alt="Planet"
          fill
          className="object-contain"
          priority
          sizes="600px"
        />
      </div>

      {/* Planet Shadow/Absolute */}
      <div
        className="absolute w-[500px] h-[500px] "
        style={{ transformStyle: 'preserve-3d' }}
        ref={planetAbsImgRef}
      >
        <Image
          src="https://cdn.multiversx.com/webflow/Planet.webp"
          alt="Planet Absolute"
          fill
          className="object-contain"
          sizes="150px"
        />
      </div>

      {/* Atmospheric Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>

    </div>
  );
};

export default GlobeComponent;