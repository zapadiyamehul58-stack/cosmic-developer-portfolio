import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  twinkleSpeed: number;
  twinkleOffset: number;
  vx: number;
  vy: number;
  type: "star" | "galaxy_particle";
}

interface ShootingStar {
  x: number;
  y: number;
  angle: number;
  speed: number;
  length: number;
  life: number;
  maxLife: number;
}

interface Planet {
  orbitRadius: number;
  angle: number;
  speed: number;
  size: number;
  color: string;
  glowColor: string;
  depth: number;
}

interface Galaxy {
  x: number;
  y: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  particles: { angle: number; radius: number; size: number }[];
}

const CosmicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const planetsRef = useRef<Planet[]>([]);
  const galaxiesRef = useRef<Galaxy[]>([]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initUniverse();
    };

    const isMobile = window.innerWidth < 768;
    const STAR_COUNT = isMobile ? 150 : 400;
    const CONNECTION_DIST = isMobile ? 70 : 120;

    const initUniverse = () => {
      const width = canvas.width;
      const height = canvas.height;

      starsRef.current = Array.from({ length: STAR_COUNT }, () => {
        const z = Math.random() * 4 + 0.5;
        const colorWeight = Math.random();
        let color = "rgba(255, 255, 255, ";
        if (colorWeight > 0.8) color = "rgba(165, 243, 252, ";
        else if (colorWeight > 0.6) color = "rgba(196, 181, 235, ";

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          size: (Math.random() * 1.5 + 0.2) * (z / 4),
          color,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinkleOffset: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.05,
          type: "star",
        };
      });

      planetsRef.current = [
        { orbitRadius: 200, angle: Math.random() * Math.PI * 2, speed: 0.0007, size: 4, color: "#38bdf8", glowColor: "rgba(56, 189, 248, 0.4)", depth: 1.5 },
        { orbitRadius: 350, angle: Math.random() * Math.PI * 2, speed: 0.0004, size: 3, color: "#8b5cf6", glowColor: "rgba(139, 92, 246, 0.3)", depth: 1.2 },
        { orbitRadius: 500, angle: Math.random() * Math.PI * 2, speed: 0.0002, size: 5, color: "#06b6d4", glowColor: "rgba(6, 182, 212, 0.3)", depth: 1.0 },
      ];

      galaxiesRef.current = Array.from({ length: 2 }, (_, i) => {
        const spiralParticles = Array.from({ length: 80 }, () => {
          const angle = Math.random() * Math.PI * 2;
          const radius = Math.pow(Math.random(), 0.5) * (isMobile ? 100 : 200);
          return {
            angle,
            radius,
            size: Math.random() * 1.5 + 0.5,
          };
        });

        return {
          x: i === 0 ? width * 0.2 : width * 0.8,
          y: i === 0 ? height * 0.3 : height * 0.7,
          rotation: 0,
          rotationSpeed: i === 0 ? 0.0002 : -0.00015,
          color: i === 0 ? "rgba(99, 102, 241, 0.15)" : "rgba(139, 92, 246, 0.12)",
          particles: spiralParticles,
        };
      });
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / canvas.width - 0.5) * 2;
      mouseRef.current.targetY = (e.clientY / canvas.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouse);

    let time = 0;
    const animate = () => {
      time += 1;

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const { x: mx, y: my } = mouseRef.current;
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      galaxiesRef.current.forEach((g) => {
        const gx = g.x + mx * 30;
        const gy = g.y + my * 30;

        ctx.beginPath();
        const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, isMobile ? 200 : 400);
        grad.addColorStop(0, g.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.globalCompositeOperation = "screen";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "source-over";

        g.rotation += g.rotationSpeed;
        g.particles.forEach((p) => {
          const angle = p.angle + g.rotation;
          const px = gx + Math.cos(angle) * p.radius;
          const py = gy + Math.sin(angle) * p.radius;

          const alpha = (0.3 + Math.sin(time * 0.01 + p.angle) * 0.2) * (1 - p.radius / (isMobile ? 100 : 200));
          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fillStyle = g.color.replace("0.1", alpha.toString());
          ctx.fill();
        });
      });

      ctx.lineWidth = 0.5;
      planetsRef.current.forEach((p) => {
        ctx.beginPath();
        ctx.arc(cx + mx * 15, cy + my * 15, p.orbitRadius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(56, 189, 248, 0.06)";
        ctx.stroke();
      });

      const stars = starsRef.current;
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        const px = s.x + mx * s.z * 15;
        const py = s.y + my * s.z * 15;

        const twinkle = Math.sin(time * s.twinkleSpeed + s.twinkleOffset) * 0.5 + 0.5;
        const alpha = (s.z / 4.5) * (0.3 + twinkle * 0.7);

        if (s.z > 2.5) {
          for (let j = i + 1; j < Math.min(i + 15, stars.length); j++) {
            const s2 = stars[j];
            if (s2.z < 2.5) continue;

            const p2x = s2.x + mx * s2.z * 15;
            const p2y = s2.y + my * s2.z * 15;

            const dist = Math.sqrt(Math.pow(px - p2x, 2) + Math.pow(py - p2y, 2));
            if (dist < CONNECTION_DIST) {
              ctx.beginPath();
              ctx.moveTo(px, py);
              ctx.lineTo(p2x, p2y);
              ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - dist / CONNECTION_DIST) * 0.1 * alpha})`;
              ctx.stroke();
            }
          }
        }

        ctx.beginPath();
        ctx.arc(px, py, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color + alpha + ")";
        ctx.fill();

        if (s.size > 0.8) {
          const glow = ctx.createRadialGradient(px, py, 0, px, py, s.size * 5);
          glow.addColorStop(0, s.color + (alpha * 0.4) + ")");
          glow.addColorStop(1, "transparent");
          ctx.beginPath();
          ctx.arc(px, py, s.size * 5, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        s.x += s.vx;
        s.y += s.vy;

        if (s.x < -50) s.x = canvas.width + 50;
        if (s.x > canvas.width + 50) s.x = -50;
        if (s.y < -50) s.y = canvas.height + 50;
        if (s.y > canvas.height + 50) s.y = -50;
      }

      planetsRef.current.forEach((p) => {
        p.angle += p.speed;
        const px = cx + Math.cos(p.angle) * p.orbitRadius + mx * 15;
        const py = cy + Math.sin(p.angle) * p.orbitRadius + my * 15;

        const pGlow = ctx.createRadialGradient(px, py, 0, px, py, p.size * 10);
        pGlow.addColorStop(0, p.glowColor);
        pGlow.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(px, py, p.size * 10, 0, Math.PI * 2);
        ctx.fillStyle = pGlow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      if (Math.random() < 0.002) {
        shootingStarsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.5,
          speed: 6 + Math.random() * 6,
          length: 100 + Math.random() * 150,
          life: 0,
          maxLife: 50 + Math.random() * 40,
        });
      }

      shootingStarsRef.current = shootingStarsRef.current.filter((s) => {
        s.life++;
        const progress = s.life / s.maxLife;
        const alpha = progress < 0.3 ? progress * 3.3 : (1 - progress) * 1.4;

        const hx = s.x + Math.cos(s.angle) * s.speed * s.life;
        const hy = s.y + Math.sin(s.angle) * s.speed * s.life;
        const tx = hx - Math.cos(s.angle) * s.length * alpha;
        const ty = hy - Math.sin(s.angle) * s.length * alpha;

        const grad = ctx.createLinearGradient(tx, ty, hx, hy);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(1, `rgba(200, 230, 255, ${alpha * 0.6})`);

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.moveTo(tx, ty);
        ctx.lineTo(hx, hy);
        ctx.stroke();

        return s.life < s.maxLife;
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: "linear-gradient(to bottom, #020617, #0f172a 50%, #020617)",
      }}
    />
  );
};

export default CosmicBackground;
