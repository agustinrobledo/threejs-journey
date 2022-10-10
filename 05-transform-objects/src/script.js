import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Objects
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
const meshTwo = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "pink" })
);
const meshThree = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "orange" })
);

// Create group and add to the scene
const group = new THREE.Group();
scene.add(group);

// Add the objects to the group
group.add(mesh);
group.add(meshTwo);
group.add(meshThree);

// Position

// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = -1;
// You can made this in one-line with set method: position.set(x, y, z)

mesh.position.set(2, 0, -2);
meshTwo.position.set(1, 1, -2);
meshThree.position.set(0, 0, -2);
group.position.z = 1.5;

// You can normalize values of position
// console.log("Without normalize position: ", mesh.position.length());
// mesh.position.normalize();
// console.log("With normalize position: ", mesh.position.length());

// Scale
mesh.scale.set(1, 1, 1);
meshTwo.scale.set(1, 1, 1);
meshThree.scale.set(1, 0.5, 1);

// Rotation with rotation() method
mesh.rotation.set(Math.PI * 0.25, Math.PI * 0.25, 0);
group.rotation.z = Math.PI * 0.2;

// Axes Helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(0, 0, 2);
scene.add(camera);

camera.lookAt(group.position);

// Distance of mesh to camera
console.log(
  "Distance of mesh to camera: ",
  mesh.position.distanceTo(camera.position)
);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
