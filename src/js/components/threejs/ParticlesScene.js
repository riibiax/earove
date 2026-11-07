import React, { useEffect, useRef } from "react";
import "../../../css/ParticlesScene.css";

/** A decorative hero field, loaded after the page content. */
export default function ParticlesScene() {
  const mountRef = useRef(null);
  useEffect(() => {
    const mount = mountRef.current;
    let disposed = false;
    let cleanup = () => {};
    import("three").then((THREE) => {
      if (disposed) return;
      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      } catch {
        return; // Content remains usable when WebGL is unavailable.
      }
      renderer.setClearColor(0xffffff, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      mount.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(0, 1, 1, 0, -1, 1);
      const count = 46;
      let activeCount = count;
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const particles = Array.from({ length: count }, (_, i) => {
        new THREE.Color(i % 13 === 0 ? "#ff832b" : "#808080").toArray(colors, i * 3);
        return { x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.012, vy: (Math.random() - 0.5) * 0.018 };
      });
      const pointGeometry = new THREE.BufferGeometry();
      pointGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
      pointGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      const pointMaterial = new THREE.PointsMaterial({ size: 2.5, sizeAttenuation: false, vertexColors: true, transparent: true, opacity: 0.45, depthTest: false });
      const points = new THREE.Points(pointGeometry, pointMaterial);
      points.frustumCulled = false;
      scene.add(points);
      // Every pair can connect. A connection cap would make neighbours switch abruptly.
      const maxSegments = count * (count - 1) / 2;
      const linePositions = new Float32Array(maxSegments * 6);
      const lineColors = new Float32Array(maxSegments * 8);
      const lineColor = new THREE.Color("#909090");
      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
      lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 4).setUsage(THREE.DynamicDrawUsage));
      const lineMaterial = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.16, depthTest: false });
      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      lines.frustumCulled = false;
      scene.add(lines);
      let width = 1, height = 1, frame = null, lastTime = null;
      let inView = false, contextLost = false;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      const draw = (delta = 0) => {
        particles.forEach((p, i) => {
          p.x += p.vx * delta;
          p.y += p.vy * delta;
          // Reflect at the edges instead of teleporting and dropping existing links.
          if (p.x < 0 || p.x > 1) { p.vx *= -1; p.x = Math.max(0, Math.min(1, p.x)); }
          if (p.y < 0 || p.y > 1) { p.vy *= -1; p.y = Math.max(0, Math.min(1, p.y)); }
          positions[i * 3] = p.x * width;
          positions[i * 3 + 1] = p.y * height;
        });
        let cursor = 0, colorCursor = 0;
        const distance = Math.min(150, Math.max(100, width * 0.22));
        for (let i = 0; i < activeCount; i++) {
          for (let j = i + 1; j < activeCount; j++) {
            const dx = positions[i * 3] - positions[j * 3];
            const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
            if (dx * dx + dy * dy > distance * distance) continue;
            const proximity = 1 - Math.sqrt(dx * dx + dy * dy) / distance;
            // Smoothstep reaches zero gently at the distance threshold.
            const alpha = proximity * proximity * (3 - 2 * proximity);
            linePositions.set(positions.subarray(i * 3, i * 3 + 3), cursor);
            linePositions.set(positions.subarray(j * 3, j * 3 + 3), cursor + 3);
            cursor += 6;
            for (let endpoint = 0; endpoint < 2; endpoint++) {
              lineColors[colorCursor++] = lineColor.r;
              lineColors[colorCursor++] = lineColor.g;
              lineColors[colorCursor++] = lineColor.b;
              lineColors[colorCursor++] = alpha;
            }
          }
        }
        lineGeometry.setDrawRange(0, cursor / 3);
        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.attributes.color.needsUpdate = true;
        pointGeometry.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
      };
      const animate = (time) => {
        draw(lastTime === null ? 0 : Math.min((time - lastTime) / 1000, 0.05));
        lastTime = time;
        frame = requestAnimationFrame(animate);
      };
      const syncAnimation = () => {
        if (frame !== null) cancelAnimationFrame(frame);
        frame = null;
        lastTime = null;
        if (contextLost) return;
        if (inView && !document.hidden && !reducedMotion.matches) frame = requestAnimationFrame(animate);
        else if (inView && !document.hidden) draw();
      };
      const resize = () => {
        width = Math.max(mount.clientWidth, 1);
        height = Math.max(mount.clientHeight, 1);
        activeCount = width <= 640 ? 22 : count;
        pointGeometry.setDrawRange(0, activeCount);
        camera.right = width;
        camera.top = height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        if (!contextLost) draw();
      };
      const onContextLost = (event) => {
        event.preventDefault();
        contextLost = true;
        syncAnimation();
      };
      const onContextRestored = () => {
        contextLost = false;
        resize();
        syncAnimation();
      };
      const resizeObserver = new ResizeObserver(resize);
      const visibilityObserver = new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        syncAnimation();
      });
      resize();
      resizeObserver.observe(mount);
      visibilityObserver.observe(mount);
      reducedMotion.addEventListener("change", syncAnimation);
      document.addEventListener("visibilitychange", syncAnimation);
      renderer.domElement.addEventListener("webglcontextlost", onContextLost);
      renderer.domElement.addEventListener("webglcontextrestored", onContextRestored);
      cleanup = () => {
        if (frame !== null) cancelAnimationFrame(frame);
        resizeObserver.disconnect();
        visibilityObserver.disconnect();
        reducedMotion.removeEventListener("change", syncAnimation);
        document.removeEventListener("visibilitychange", syncAnimation);
        renderer.domElement.removeEventListener("webglcontextlost", onContextLost);
        renderer.domElement.removeEventListener("webglcontextrestored", onContextRestored);
        pointGeometry.dispose();
        pointMaterial.dispose();
        lineGeometry.dispose();
        lineMaterial.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    }).catch(() => {
      // A failed decorative download must not interrupt the page.
    });
    return () => { disposed = true; cleanup(); };
  }, []);
  return <div className="home-particles" ref={mountRef} aria-hidden="true" />;
}
