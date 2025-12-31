
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  trigger: boolean;
  onComplete: () => void;
  title: string;
  colors?: string[]; // Custom colors for fireworks
}

const CelebrationOverlay: React.FC<Props> = ({ trigger, onComplete, title, colors }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [show, setShow] = useState(false);

  // Default vibrant colors if none provided
  const defaultColors = ['#f43f5e', '#8b5cf6', '#3b82f6', '#10b981', '#fbbf24', '#ffffff'];
  const activeColors = colors && colors.length > 0 ? colors : defaultColors;

  useEffect(() => {
    if (trigger) {
      setShow(true);
      const timeout = setTimeout(() => {
        setShow(false);
        onComplete();
      }, 7000);
      return () => clearTimeout(timeout);
    }
  }, [trigger, onComplete]);

  useEffect(() => {
    if (!show || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
      size: number;
      gravity: number;
      friction: number;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 8 + 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.color = color;
        this.size = Math.random() * 3 + 1;
        this.gravity = 0.15;
        this.friction = 0.98;
      }

      update() {
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.01;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const createFirework = (x: number, y: number) => {
      // Pick a random color from the active palette
      const color = activeColors[Math.floor(Math.random() * activeColors.length)];
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle(x, y, color));
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (Math.random() < 0.12) {
        createFirework(Math.random() * canvas.width, Math.random() * (canvas.height * 0.6));
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw(ctx);
        if (particles[i].alpha <= 0) {
          particles.splice(i, 1);
        }
      }
      animationId = requestAnimationFrame(loop);
    };

    loop();

    const handleClick = (e: MouseEvent) => {
      createFirework(e.clientX, e.clientY);
    };
    canvas.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousedown', handleClick);
      cancelAnimationFrame(animationId);
    };
  }, [show, activeColors]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in duration-700">
      <canvas ref={canvasRef} className="absolute inset-0 cursor-crosshair" />
      <div className="relative z-10 text-center pointer-events-none select-none">
        <h2 className="text-6xl md:text-9xl font-display text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-orange-500 to-red-600 animate-bounce mb-6 drop-shadow-[0_0_30px_rgba(234,179,8,0.5)]">
          HAPPY NEW YEAR!
        </h2>
        <p className="text-2xl md:text-5xl font-bold text-white drop-shadow-2xl animate-pulse tracking-tight px-4">
          {title}
        </p>
        <p className="mt-8 text-slate-400 text-sm animate-pulse">
          Launched {activeColors.length} country-specific colors!<br/>
          Click the screen to launch more!
        </p>
      </div>
    </div>
  );
};

export default CelebrationOverlay;
