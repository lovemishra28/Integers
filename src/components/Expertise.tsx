"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiFigma,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiJavascript,
  SiGraphql,
  SiVite,
  SiFirebase,
} from 'react-icons/si';
import { FaCaravan } from 'react-icons/fa';
import { FaSyncAlt, FaArrowRight, FaCompressAlt } from 'react-icons/fa';

interface TechItem {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  bg: string;
  textColor: string;
  iconColor: string;
  radius: number; // radius in px
}

interface BallPhysics {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  rotation: number;
  vRot: number;
}

const TECH_DATA: TechItem[] = [
  {
    id: "nextjs",
    name: "Next.js",
    category: "Fullstack Framework",
    description: "SSR, edge computing, SEO optimization & high-performance web applications.",
    icon: <SiNextdotjs className="w-9 h-9" />,
    bg: "#111111",
    textColor: "#ffffff",
    iconColor: "#ffffff",
    radius: 52,
  },
  {
    id: "react",
    name: "React",
    category: "Frontend UI",
    description: "Component-driven modern web interfaces with rich state management.",
    icon: <SiReact className="w-9 h-9" />,
    bg: "#d4ff3f",
    textColor: "#000000",
    iconColor: "#000000",
    radius: 50,
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Language",
    description: "Type-safe development ensuring zero-runtime bugs and clean architecture.",
    icon: <SiTypescript className="w-8 h-8" />,
    bg: "#3178c6",
    textColor: "#ffffff",
    iconColor: "#ffffff",
    radius: 47,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Styling",
    description: "Utility-first design system with rapid prototyping and bespoke aesthetics.",
    icon: <SiTailwindcss className="w-8 h-8" />,
    bg: "#ffffff",
    textColor: "#000000",
    iconColor: "#06b6d4",
    radius: 46,
  },
  {
    id: "figma",
    name: "Figma",
    category: "UI/UX Design",
    description: "Interactive wireframing, high-fidelity design systems, and design handoff.",
    icon: <SiFigma className="w-8 h-8" />,
    bg: "#ffffff",
    textColor: "#000000",
    iconColor: "#f24e1e",
    radius: 46,
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend Runtime",
    description: "Asynchronous backend microservices and high-throughput REST / GraphQL APIs.",
    icon: <SiNodedotjs className="w-8 h-8" />,
    bg: "#ffffff",
    textColor: "#000000",
    iconColor: "#5fa04e",
    radius: 45,
  },
  {
    id: "python",
    name: "Python",
    category: "Backend & AI",
    description: "Automation, robust APIs, data workflows, and machine learning integrations.",
    icon: <SiPython className="w-8 h-8" />,
    bg: "#ffffff",
    textColor: "#000000",
    iconColor: "#3776ab",
    radius: 44,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Relational DB",
    description: "ACID compliant data persistence with indexing and complex relationships.",
    icon: <SiPostgresql className="w-8 h-8" />,
    bg: "#ffffff",
    textColor: "#000000",
    iconColor: "#4169e1",
    radius: 44,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "NoSQL DB",
    description: "Document storage supporting flexible schemas and rapid data retrieval.",
    icon: <SiMongodb className="w-8 h-8" />,
    bg: "#ffffff",
    textColor: "#000000",
    iconColor: "#47a248",
    radius: 43,
  },
  {
    id: "docker",
    name: "Docker",
    category: "DevOps & Cloud",
    description: "Containerized environments guaranteeing consistent production deployments.",
    icon: <SiDocker className="w-8 h-8" />,
    bg: "#ffffff",
    textColor: "#000000",
    iconColor: "#2496ed",
    radius: 43,
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Core Language",
    description: "Modern ESNext standard driving dynamic interactions and logic.",
    icon: <SiJavascript className="w-8 h-8" />,
    bg: "#f7df1e",
    textColor: "#000000",
    iconColor: "#000000",
    radius: 43,
  },
  {
    id: "graphql",
    name: "GraphQL",
    category: "API Layer",
    description: "Precise client queries, reduced payload sizes, and strongly typed schemas.",
    icon: <SiGraphql className="w-7 h-7" />,
    bg: "#ffffff",
    textColor: "#000000",
    iconColor: "#e10098",
    radius: 41,
  },
  {
    id: "git",
    name: "Git",
    category: "Version Control",
    description: "Branching strategies, atomic commits, CI/CD pipelines, and collaboration.",
    icon: <SiGit className="w-7 h-7" />,
    bg: "#ffffff",
    textColor: "#000000",
    iconColor: "#f05032",
    radius: 40,
  },
  {
    id: "vite",
    name: "Vite",
    category: "Build Tool",
    description: "Ultra-fast HMR and production bundling for maximum developer velocity.",
    icon: <SiVite className="w-7 h-7" />,
    bg: "#ffffff",
    textColor: "#000000",
    iconColor: "#646cff",
    radius: 40,
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "Cloud Services",
    description: "Realtime updates, auth, storage, and serverless background workers.",
    icon: <SiFirebase className="w-7 h-7" />,
    bg: "#ffffff",
    textColor: "#000000",
    iconColor: "#ffca28",
    radius: 40,
  },
];

export default function Expertise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ballElementsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const physicsRef = useRef<BallPhysics[]>([]);
  const isDraggingRef = useRef<string | null>(null);
  const dragOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mousePosRef = useRef<{ x: number; y: number; prevX: number; prevY: number }>({
    x: -999,
    y: -999,
    prevX: -999,
    prevY: -999,
  });

  const [activeTech, setActiveTech] = useState<TechItem>(TECH_DATA[0]);
  const [gravityMode, setGravityMode] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [ballScale, setBallScale] = useState<number>(1);

  // Initialize ball physics positions
  const initBalls = useCallback((width: number, height: number) => {
    const isMobile = width < 640;
    const isTablet = width >= 640 && width < 1024;
    const scale = isMobile ? 0.78 : isTablet ? 0.9 : 1;
    setBallScale(scale);

    const cols = Math.max(3, Math.floor(width / (140 * scale)));
    const balls: BallPhysics[] = TECH_DATA.map((item, idx) => {
      const col = idx % cols;
      const row = Math.floor(idx / cols);
      const colWidth = width / (cols + 1);
      const effectiveRadius = Math.round(item.radius * scale);
      
      const x = colWidth * (col + 0.9) + (Math.random() - 0.5) * 20;
      const y = 50 + row * (100 * scale) + (Math.random() - 0.5) * 20;

      return {
        id: item.id,
        x: Math.max(effectiveRadius, Math.min(width - effectiveRadius, x)),
        y: Math.max(effectiveRadius, Math.min(height - effectiveRadius, y)),
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        radius: effectiveRadius,
        rotation: (Math.random() - 0.5) * 10,
        vRot: (Math.random() - 0.5) * 0.8,
      };
    });

    physicsRef.current = balls;
  }, []);

  // Toss all balls with random energy
  const tossBalls = () => {
    physicsRef.current.forEach((ball) => {
      ball.vx = (Math.random() - 0.5) * 26;
      ball.vy = -Math.random() * 20 - 5;
      ball.vRot = (Math.random() - 0.5) * 6;
    });
  };

  useEffect(() => {
    setIsClient(true);
    const container = containerRef.current;
    if (!container) return;

    const { clientWidth: width, clientHeight: height } = container;
    initBalls(width, height);

    let animationFrameId: number;

    const updatePhysics = () => {
      const currentContainer = containerRef.current;
      if (!currentContainer) return;

      const w = currentContainer.clientWidth;
      const h = currentContainer.clientHeight;
      const balls = physicsRef.current;
      const draggingId = isDraggingRef.current;
      const mouse = mousePosRef.current;

      const gravity = gravityMode ? 0.28 : 0;
      const bounce = 0.76;
      const friction = 0.988;

      // 1. Move and apply boundaries
      for (let i = 0; i < balls.length; i++) {
        const b = balls[i];

        if (b.id === draggingId) {
          // Dragged ball follows pointer directly
          b.x = Math.max(b.radius, Math.min(w - b.radius, mouse.x - dragOffsetRef.current.x));
          b.y = Math.max(b.radius, Math.min(h - b.radius, mouse.y - dragOffsetRef.current.y));
          b.vx = (mouse.x - mouse.prevX) * 0.7;
          b.vy = (mouse.y - mouse.prevY) * 0.7;
          b.rotation = Math.max(-20, Math.min(20, b.vx * 1.5));
          continue;
        }

        // Apply forces
        b.vy += gravity;

        // Zero-G ambient subtle continuous floating
        if (!gravityMode) {
          b.vx += Math.sin(Date.now() * 0.0015 + i * 1.3) * 0.05;
          b.vy += Math.cos(Date.now() * 0.0015 + i * 1.7) * 0.05;
          const speed = Math.hypot(b.vx, b.vy);
          if (speed > 4.2) {
            b.vx = (b.vx / speed) * 4.2;
            b.vy = (b.vy / speed) * 4.2;
          }
        }

        // Mouse magnetic push (when mouse is hovering nearby)
        if (mouse.x > 0 && mouse.y > 0 && !draggingId) {
          const mdx = b.x - mouse.x;
          const mdy = b.y - mouse.y;
          const mDist = Math.hypot(mdx, mdy);
          const reach = b.radius + 60;
          if (mDist < reach && mDist > 0) {
            const push = ((reach - mDist) / reach) * 1.8;
            b.vx += (mdx / mDist) * push;
            b.vy += (mdy / mDist) * push;
            b.vRot += (mdx > 0 ? 1 : -1) * push * 0.3;
          }
        }

        b.vx *= friction;
        b.vy *= friction;
        b.x += b.vx;
        b.y += b.vy;

        // Gentle auto-righting rotation torque so logos and names remain upright & readable
        b.rotation += b.vRot;
        b.vRot *= 0.92;
        b.rotation *= 0.92;

        // Wall collisions
        if (b.x - b.radius < 0) {
          b.x = b.radius;
          b.vx = -b.vx * bounce;
          b.vRot = b.vy * 0.15;
        } else if (b.x + b.radius > w) {
          b.x = w - b.radius;
          b.vx = -b.vx * bounce;
          b.vRot = -b.vy * 0.15;
        }

        if (b.y - b.radius < 0) {
          b.y = b.radius;
          b.vy = -b.vy * bounce;
        } else if (b.y + b.radius > h) {
          b.y = h - b.radius;
          b.vy = -b.vy * bounce;
          b.vx *= 0.95; // floor friction
        }
      }

      // 2. Ball-to-ball elastic collisions
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const b1 = balls[i];
          const b2 = balls[j];

          const dx = b2.x - b1.x;
          const dy = b2.y - b1.y;
          const dist = Math.hypot(dx, dy);
          const minDist = b1.radius + b2.radius;

          if (dist < minDist && dist > 0) {
            // Overlap separation
            const overlap = (minDist - dist) / 2;
            const nx = dx / dist;
            const ny = dy / dist;

            if (b1.id !== draggingId) {
              b1.x -= nx * overlap;
              b1.y -= ny * overlap;
            }
            if (b2.id !== draggingId) {
              b2.x += nx * overlap;
              b2.y += ny * overlap;
            }

            // Elastic momentum exchange
            const kx = b1.vx - b2.vx;
            const ky = b1.vy - b2.vy;
            const impulse = (nx * kx + ny * ky) * (1 + bounce);

            if (b1.id !== draggingId) {
              b1.vx -= impulse * nx * 0.5;
              b1.vy -= impulse * ny * 0.5;
              b1.vRot += (nx * ky - ny * kx) * 0.08;
            }
            if (b2.id !== draggingId) {
              b2.vx += impulse * nx * 0.5;
              b2.vy += impulse * ny * 0.5;
              b2.vRot -= (nx * ky - ny * kx) * 0.08;
            }
          }
        }
      }

      // 3. Update DOM Transforms smoothly
      for (let i = 0; i < balls.length; i++) {
        const b = balls[i];
        const el = ballElementsRef.current[b.id];
        if (el) {
          el.style.transform = `translate3d(${b.x - b.radius}px, ${b.y - b.radius}px, 0px) rotate(${b.rotation}deg)`;
        }
      }

      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);

    // Resize listener
    const handleResize = () => {
      if (containerRef.current) {
        initBalls(containerRef.current.clientWidth, containerRef.current.clientHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [gravityMode, initBalls]);

  // Pointer drag handling (mouse & touch)
  const handlePointerDown = (id: string, e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const ball = physicsRef.current.find((b) => b.id === id);
    if (!ball) return;

    isDraggingRef.current = id;
    dragOffsetRef.current = {
      x: mouseX - ball.x,
      y: mouseY - ball.y,
    };
    mousePosRef.current.x = mouseX;
    mousePosRef.current.y = mouseY;
    mousePosRef.current.prevX = mouseX;
    mousePosRef.current.prevY = mouseY;

    const tech = TECH_DATA.find((t) => t.id === id);
    if (tech) setActiveTech(tech);

    // Pointer capture
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    mousePosRef.current.x = e.clientX - rect.left;
    mousePosRef.current.y = e.clientY - rect.top;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = null;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handleContainerPointerLeave = () => {
    mousePosRef.current.x = -999;
    mousePosRef.current.y = -999;
    isDraggingRef.current = null;
  };

  return (
    <section id="expertise" className="py-20 md:py-24 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto bg-[#f8f9f5] relative">
      {/* ----------------- SECTION HEADER ----------------- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 relative z-10 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block">
            <div className="absolute -left-3 -top-3 w-12 h-12 bg-[#d4ff3f] rounded-full opacity-80 z-0 blur-sm pointer-events-none" />
            <span className="text-xs sm:text-sm font-bold text-[#62d124] block mb-2 relative z-10">
              Interactive Tech Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-black leading-tight">
            We Build With Modern<br />Battle-Tested Technologies.
          </h2>
        </motion.div>

        {/* Action Controls: Toss & Gravity Toggle */}
        <motion.div
          className="w-full sm:w-auto flex items-center gap-2.5 sm:gap-3 flex-wrap"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={tossBalls}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-bold text-xs bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
            title="Toss the tech balls!"
          >
            <FaSyncAlt className="w-3 h-3" />
            Toss Balls
          </button>

          <button
            onClick={() => setGravityMode((prev) => !prev)}
            className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-bold text-xs border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer ${
              gravityMode ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                gravityMode ? 'bg-[#d4ff3f] animate-pulse' : 'bg-gray-400'
              }`}
            />
            {gravityMode ? 'Gravity: ON' : 'Zero-G: FLOAT'}
          </button>
        </motion.div>
      </div>

      {/* ----------------- INTERACTIVE LOGO BALLS PHYSICS ARENA ----------------- */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full rounded-3xl border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
      >
        {/* Subtle Neo-Brutalist Dot Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 z-0"
          style={{
            backgroundImage: "radial-gradient(#000000 1.2px, transparent 1.2px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Ambient Top Decorative Gradient */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-100/50 to-transparent pointer-events-none z-0" />

        {/* The Physics Container Arena */}
        <div
          ref={containerRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={handleContainerPointerLeave}
          className="relative w-full h-[460px] sm:h-[520px] md:h-[600px] overflow-hidden select-none touch-pan-y z-10 cursor-default"
        >
          {isClient &&
            TECH_DATA.map((tech) => (
              <div
                key={tech.id}
                ref={(el) => {
                  ballElementsRef.current[tech.id] = el;
                }}
                onPointerDown={(e) => handlePointerDown(tech.id, e)}
                onPointerUp={handlePointerUp}
                onMouseEnter={() => setActiveTech(tech)}
                style={{
                  width: `${Math.round(tech.radius * ballScale * 2)}px`,
                  height: `${Math.round(tech.radius * ballScale * 2)}px`,
                  backgroundColor: tech.bg,
                  color: tech.textColor,
                  willChange: 'transform',
                }}
                className={`absolute top-0 left-0 rounded-full border-2 border-black flex flex-col items-center justify-center cursor-grab active:cursor-grabbing select-none touch-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow group ${
                  activeTech.id === tech.id ? 'ring-4 ring-[#d4ff3f]' : ''
                }`}
              >
                {/* 3D Glossy Sphere Specular Highlight Layer */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.05) 55%, rgba(0,0,0,0.3) 100%)",
                  }}
                />

                {/* Tech Icon */}
                <div
                  style={{ color: tech.iconColor }}
                  className="relative z-10 transition-transform group-hover:scale-110 drop-shadow-sm pointer-events-none scale-75 sm:scale-90 md:scale-100"
                >
                  {tech.icon}
                </div>

                {/* Tech Label Badge */}
                <span
                  style={{ color: tech.textColor }}
                  className="relative z-10 text-[9px] sm:text-[10px] md:text-[11px] font-black uppercase tracking-wider mt-0.5 sm:mt-1 drop-shadow-xs pointer-events-none"
                >
                  {tech.name}
                </span>
              </div>
            ))}
        </div>

        {/* ----------------- BOTTOM LIVE INFO DISPLAY BAR ----------------- */}
        <div className="relative z-20 bg-white/95 backdrop-blur-md border-t-2 border-black p-4 sm:p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            {/* Active Icon Bubble */}
            <div
              style={{ backgroundColor: activeTech.bg, color: activeTech.iconColor }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center shrink-0"
            >
              {activeTech.icon}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-bold text-black font-sans leading-tight">
                  {activeTech.name}
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#d4ff3f] text-black border border-black">
                  {activeTech.category}
                </span>
              </div>
              <p className="text-xs text-gray-600 font-medium mt-0.5 line-clamp-2 sm:truncate max-w-xl">
                {activeTech.description}
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full font-bold text-xs bg-[#d4ff3f] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all shrink-0 cursor-pointer text-center"
          >
            Start Project With {activeTech.name}
            <FaArrowRight className="w-2.5 h-2.5 -rotate-45" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
