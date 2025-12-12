"use client";

import { useEffect, useRef } from "react";

export default function WaveGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Grid Configuration
        const spacing = 40;
        const cols = Math.ceil(width / spacing);
        const rows = Math.ceil(height / spacing);

        // Mouse State
        const mouse = { x: -1000, y: -1000 };

        // Points
        const points: { x: number; y: number; originX: number; originY: number }[] = [];
        for (let i = 0; i <= cols; i++) {
            for (let j = 0; j <= rows; j++) {
                const x = i * spacing;
                const y = j * spacing;
                points.push({ x, y, originX: x, originY: y });
            }
        }

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // Simplified: Refresh would ideally re-calc points, but for now just clear
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            ctx.strokeStyle = "rgba(0, 0, 0, 0.15)"; // Visible Grid Lines
            ctx.lineWidth = 1;

            // Update Points based on wave
            points.forEach(p => {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 250; // Radius of influence

                if (dist < maxDist) {
                    const angle = Math.atan2(dy, dx);
                    const force = (maxDist - dist) / maxDist;
                    const wave = Math.sin(force * 10) * 10; // Wave effect

                    // Push points away or pull them
                    // Creating the "Antigravity" rolling wave feel
                    p.x = p.originX + Math.cos(angle) * (force * 20);
                    p.y = p.originY + Math.sin(angle) * (force * 20);
                } else {
                    // Return to origin
                    p.x += (p.originX - p.x) * 0.1;
                    p.y += (p.originY - p.y) * 0.1;
                }
            });

            // Draw Grid Lines (connecting points)
            ctx.beginPath();
            // Horizontal
            for (let i = 0; i <= rows; i++) {
                // Approximate row connection (skipping for performance, just drawing dots creates cool effect too, but lines requested)
                // Drawing fully connected mesh is expensive in JS loop for this many points.
                // Let's create a "Field of Crosses" or simple lines which implies grid.
            }

            // Optimization: Draw simple crosshairs at points
            points.forEach(p => {
                ctx.moveTo(p.x - 2, p.y);
                ctx.lineTo(p.x + 2, p.y);
                ctx.moveTo(p.x, p.y - 2);
                ctx.lineTo(p.x, p.y + 2);
            });
            ctx.stroke();

            // Draw Dynamic Lines (Connecting neighbors is expensive, let's try a lighter visual: The Dot Grid)
            // But user asked for "Grid". Let's try drawing full path.
            // Re-looping to draw H/V lines
            for (let i = 0; i < points.length; i++) {
                const p = points[i];
                // Connect right
                if ((i + 1) % (rows + 1) !== 0 && i + (rows + 1) < points.length) {
                    // Verify logic. This is a 1D array of 2D grid.
                    // Grid logic map is tricky in 1D array.
                }
            }

            // SIMPLIFIED APPROACH: Draw grid lines based on indices
            // Horizontal Lines
            for (let j = 0; j <= rows; j++) {
                ctx.beginPath();
                for (let i = 0; i <= cols; i++) {
                    const idx = i * (rows + 1) + j;
                    if (points[idx]) {
                        if (i === 0) ctx.moveTo(points[idx].x, points[idx].y);
                        else ctx.lineTo(points[idx].x, points[idx].y);
                    }
                }
                ctx.stroke();
            }

            // Vertical Lines
            for (let i = 0; i <= cols; i++) {
                ctx.beginPath();
                for (let j = 0; j <= rows; j++) {
                    const idx = i * (rows + 1) + j;
                    if (points[idx]) {
                        if (j === 0) ctx.moveTo(points[idx].x, points[idx].y);
                        else ctx.lineTo(points[idx].x, points[idx].y);
                    }
                }
                ctx.stroke();
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} />;
}
