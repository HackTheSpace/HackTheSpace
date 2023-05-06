import * as THREE from "https://cdn.skypack.dev/three@0.136.0";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js";

const renderer = new THREE.WebGLRenderer();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight
);
let mesh;
const controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);
scene.background = new THREE.Color("rgba(0,0,0,0");
camera.position.set(0, 2, 10);

// Set up lights
const spotLight = new THREE.SpotLight(0xeff0000, 10, 1000, Math.PI / 2);
scene.add(spotLight);

const hemisphereLight = new THREE.HemisphereLight(0xff0000, 1);
scene.add(hemisphereLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(10, 20, 0); // x, y, z
scene.add(directionalLight);

new GLTFLoader().load(
  "../assets/stylized_planet/scene.gltf",
  ({ scene: model }, animations) => {
    scene.add(model);

    model.scale.setScalar(2.0);

    camera.lookAt(model.position);

    controls.target.copy(model.position);

    mesh = model;
  }
);

const animate = () => {
  if (mesh) {
    mesh.rotateY(Math.PI / 360);
  }

  renderer.render(scene, camera);

  controls.update();

  requestAnimationFrame(animate);
};

animate();

const home = document.getElementById("home");
console.log("working?");
home.appendChild(renderer.domElement);
