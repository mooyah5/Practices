import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

// 렌더링 Render
const renderer = new THREE.WebGLRenderer({
  antialias: true, // 우글거리는 현상 완화
});
renderer.shadowMap.enabled = true; //  mesh가 그림자 다른 mesh에 주기
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 배경 Scene
const scene = new THREE.Scene();

// 카메라 Camera
const camera = new THREE.PerspectiveCamera(
  100, // fov 시야각
  window.innerWidth / window.innerHeight, // 종횡비
  0.1, // 볼 수 있는 가장 가까운 거리
  100 // 볼 수 있는 가장 먼 거리
);
camera.position.z = 5;
camera.position.y = 1;

// 빛 Light
const directionalLight = new THREE.DirectionalLight(0xffffff, 5); // 직사광선 (태양빛)
directionalLight.castShadow = true; // 그림자
directionalLight.position.set(3, 4, 5);
directionalLight.lookAt(0, 0, 0); // 기본적으로 원점을 바라봄
scene.add(directionalLight);

// 바닥 Floor
const floorGeometry = new THREE.PlaneGeometry(20, 20);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xbbbbbb });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2; // x로 90도 회전
floor.receiveShadow = true; // 그림자 받기 허용
floor.castShadow = true; // 그림자 주기 허용
scene.add(floor);

// 사물 Mesh 1 Box
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0xff00000 });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0.5, 0);
mesh.castShadow = true;
scene.add(mesh);

// 사물 Mesh 2 캡슐 Capsule
const capsuleGeometry = new THREE.CapsuleGeometry(1, 2, 20, 30);
const capsuleMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 });
const capsule = new THREE.Mesh(capsuleGeometry, capsuleMaterial);
capsule.position.set(3, 1.75, 0);
capsule.castShadow = true;
capsule.receiveShadow = true;
scene.add(capsule);

// 사물 3 Cylinder
const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 1, 8, 8, true);
const cylinderMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.position.set(-3, 1.3);
cylinder.castShadow = true;
cylinder.receiveShadow = true;
scene.add(cylinder);

// 사물 4 Torus 도넛
const torusGeometry = new THREE.TorusGeometry(0.5, 0.2, 4, 10, Math.PI * 2);
const torusMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
torus.position.set(0, 0.6, 2.5);
torus.castShadow = true;
torus.receiveShadow = true;
scene.add(torus);

// 별 모양 만들기 Shape
const starShape = new THREE.Shape();
starShape.moveTo(0, 1);
starShape.lineTo(0.2, 0.2);
starShape.lineTo(1, 0.2);
starShape.lineTo(0.4, -0.1);
starShape.lineTo(0.6, -1);
starShape.lineTo(0, -0.5);
starShape.lineTo(-0.6, -1);
starShape.lineTo(-0.4, -0.1);
starShape.lineTo(-1, 0.2);
starShape.lineTo(-0.2, 0.2);
starShape.lineTo(0, 1);

const shapeGeometry = new THREE.ShapeGeometry(starShape);
const shapeMaterial = new THREE.MeshStandardMaterial({ color: 0xff00ff });
const startShapeMesh = new THREE.Mesh(shapeGeometry, shapeMaterial);
startShapeMesh.position.set(0, 1, -2);
scene.add(startShapeMesh);

const extrudeSettings = {
  steps: 2, // 부드럽게
  depth: 0.2,
  bevelEnabled: true, // 입체로 만들었을 때의 모서리 부드럽게
  bevelThickness: 0.5, // 모서리 두께
  bevelSize: 0.3, // 모서리 크기
  bevelSegments: 100, // 바벨링된 모습이 얼마나 매끄럽게 나올지
};

const extrudeGeometry = new THREE.ExtrudeGeometry(starShape, extrudeSettings);
const extrudeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ffff });
const extrude = new THREE.Mesh(extrudeGeometry, extrudeMaterial);
extrude.position.set(-3, 1.5, -2);
scene.add(extrude);

// 점
const numPoints = 1000;
const positions = new Float32Array(numPoints * 3); // 점의 개수 3배 만큼 포인트의 좌표 저장
for (let i = 0; i < numPoints; i++) {
  const x = (Math.random() - 0.5) * 1;
  const y = (Math.random() - 0.5) * 1;
  const z = (Math.random() - 0.5) * 1;

  positions[i * 3] = x;
  positions[i * 3 + 1] = y;
  positions[i * 3 + 2] = z;
}

const bufferGeometry = new THREE.BufferGeometry(); //  GPU 많이 사용해서 간단, 렌더링 효율성
bufferGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(positions, 3)
);

// OrbitControls
const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.update();

// 반응형
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight); // 렌더(배경)부분이 반응형이됨
  camera.aspect = window.innerWidth / window.innerHeight; // 카메라 비율을 반응형으로 함으로써 mesh 비율이 유지됨
  camera.updateProjectionMatrix(); // camera update (필수)
  renderer.render(scene, camera);
});

const render = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(render); // 재귀적으로 렌더함수 호출
};

render();
