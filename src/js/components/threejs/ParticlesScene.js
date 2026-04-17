// ParticlesScene.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import '../../../css/ParticlesScene.css'; // Import the CSS file

const ParticlesScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer;
    let group, pointCloud, linesMesh;
    const particlesData = [];
    const maxParticleCount = window.mobilecheck ? 10 : 150;
    const particleCount = window.mobilecheck ? 5 : 75;
    const rX = window.innerWidth;
    const rY = window.innerHeight;
    const rHalfX = rX / 2;
    const rHalfY = rY / 2;

    const effectController = {
      minDistance: 75,
      maxConnections: 2,
    };

    const positions = new Float32Array(maxParticleCount * maxParticleCount * 3);
    const colors = new Float32Array(maxParticleCount * maxParticleCount * 3);
    const particlePositions = new Float32Array(maxParticleCount * 3);

    const initCamera = () => {
      camera = new THREE.PerspectiveCamera(50, rX / rY, 1, 4000);
      camera.position.z = 750;
    };

    const initScene = () => {
      scene = new THREE.Scene();

      group = new THREE.Group();
      scene.add(group);

      const pMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1,
        blending: THREE.AdditiveBlending,
        transparent: true,
        sizeAttenuation: false,
      });

      const particles = new THREE.BufferGeometry();

      for (let i = 0; i < maxParticleCount; i++) {
        particlePositions[i * 3] = -Math.random() * rX + rHalfX;
        particlePositions[i * 3 + 1] = -Math.random() * rY + rHalfY;
        particlePositions[i * 3 + 2] = 1;

        particlesData.push({
          velocity: new THREE.Vector2(-1 + Math.random() * 2, -1 + Math.random() * 2),
          numConnections: 0,
        });
      }

      particles.setDrawRange(0, particleCount);
      particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3).setUsage(THREE.DynamicDrawUsage));

      pointCloud = new THREE.Points(particles, pMaterial);
      group.add(pointCloud);

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3).setUsage(THREE.DynamicDrawUsage));
      geometry.computeBoundingSphere();
      geometry.setDrawRange(0, 0);

      const material = new THREE.LineBasicMaterial({
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
      });

      linesMesh = new THREE.LineSegments(geometry, material);
      group.add(linesMesh);


    };

    const initRenderer = () => {
      renderer = new THREE.WebGLRenderer({ preserveDrawingBuffer: false, antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(rX, rY);
      renderer.autoClearColor = false;
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.domElement.id = 'particlesSceneOverlay';
      mountRef.current.appendChild(renderer.domElement);
    };

    const onWindowResize = () => {
      const rX = window.innerWidth;
      const rY = window.innerHeight;
      camera.aspect = rX / rY;
      camera.updateProjectionMatrix();
      renderer.setSize(rX, rY);
    };

    const animate = () => {
      let vertexpos = 0;
      let colorpos = 0;
      let numConnected = 0;

      for (let i = 0; i < particleCount; i++) particlesData[i].numConnections = 0;

      for (let i = 0; i < particleCount; i++) {
        const particleData = particlesData[i];

        particlePositions[i * 3] += particleData.velocity.x * 0.3;
        particlePositions[i * 3 + 1] += particleData.velocity.y * 0.3;

        if (particlePositions[i * 3] < -rX / 2 || particlePositions[i * 3] > rX / 2) {
          particleData.velocity.x = -particleData.velocity.x;
        }

        if (particlePositions[i * 3 + 1] < -rY / 2 || particlePositions[i * 3 + 1] > rY / 2) {
          particleData.velocity.y = -particleData.velocity.y;
        }

        for (let j = i + 1; j < particleCount; j++) {
          const particleDataB = particlesData[j];
          const dx = particlePositions[i * 3] - particlePositions[j * 3];
          const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < effectController.minDistance) {
            particleData.numConnections++;
            particleDataB.numConnections++;

            const alpha = 1.0 - dist / effectController.minDistance;

            positions[vertexpos++] = particlePositions[i * 3];
            positions[vertexpos++] = particlePositions[i * 3 + 1];
            positions[vertexpos++] = particlePositions[i * 3 + 2];

            positions[vertexpos++] = particlePositions[j * 3];
            positions[vertexpos++] = particlePositions[j * 3 + 1];
            positions[vertexpos++] = particlePositions[j * 3 + 2];

            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;

            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;

            numConnected++;
          }
        }
      }

      linesMesh.geometry.setDrawRange(0, numConnected * 2);
      linesMesh.geometry.attributes.position.needsUpdate = true;
      linesMesh.geometry.attributes.color.needsUpdate = true;

      pointCloud.geometry.attributes.position.needsUpdate = true;

      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    const init = () => {
      initCamera();
      initScene();
      initRenderer();
      window.addEventListener('resize', onWindowResize, false);
      animate();
    };

    init();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default ParticlesScene;
