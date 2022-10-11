import "./style.css";
import * as THREE from "three";
import gsap from "gsap";
console.log(gsap);
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "orange" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

//Time
let time = Date.now();

//Clock
const clock = new THREE.Clock();

// Animate using gsap
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 3, x: 0 });

// Animation
const tick = () => {
  //Time with JS
  //   const currentTime = Date.now();
  //   const deltaTime = currentTime - time;
  //   time = currentTime;

  //Clock
  //   const elapsedTime = clock.getElapsedTime();

  // Animation rotation in y and z with time of js
  //   mesh.rotation.y += 0.001 * deltaTime;
  //   mesh.rotation.z += 0.001 * deltaTime;

  // Animation rotation in y and z with Clock of three
  //   mesh.rotation.y = elapsedTime;
  //   mesh.rotation.z = elapsedTime;
  //   mesh.position.x = Math.sin(elapsedTime);
  //   mesh.position.y = Math.cos(elapsedTime);

  // Render the scene
  renderer.render(scene, camera);

  // Call the function in the next frame
  window.requestAnimationFrame(tick);
};

tick();
