import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var loader = new GLTFLoader();

// Load a glTF resource
loader.load(
	// resource URL
	'hobbithouse.glb',
	// called when the resource is loaded
	function (gltf) {
		scene.add(gltf.scene);

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object
	},
	// called while loading is progressing
	function (xhr) {
		console.log((xhr.loaded / xhr.total * 100) + '% loaded');
	},
	// called when loading has errors
	function (error) {
		console.log('An error happened');
	}
);

function update() {
}

function animate() {
	requestAnimationFrame(animate);
	update();
	renderer.render(scene, camera);
}
animate();