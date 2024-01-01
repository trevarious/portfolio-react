import React, { useEffect, useRef } from "react";
import * as THREE from "three";

import globeTexture from '../src/your-globe-texture.webp';

export default function Globe({ width, height }) {
    const globeContainer = useRef(null);

    useEffect(() => {
        let scene, camera, renderer, globe;

        // Create a new scene
        scene = new THREE.Scene();

        // Create a camera
        camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
        camera.position.z = 5;

        // Create a renderer
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0); // Set clearAlpha to 0 for transparency
        // Append renderer to the container
        globeContainer.current.appendChild(renderer.domElement);

        // Create a globe geometry
        const geometry = new THREE.SphereGeometry(2, 32, 32);
        const texture = new THREE.TextureLoader().load(
            globeTexture // Replace with the path to your globe texture
        );
        const material = new THREE.MeshBasicMaterial({ map: texture });

        // Create the globe mesh
        globe = new THREE.Mesh(geometry, material);
        scene.add(globe);

        // Animation function to rotate the globe
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the globe
            globe.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();

        // Clean up on unmount
        return () => {
            renderer.domElement.remove();
            renderer.dispose();
        };
    }, [width, height]);

    return <div ref={globeContainer} />;
}
