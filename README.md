HanzeZhang 427431645
React Three Fiber 3D Demo
This project is a simple 3D demo built with React Three Fiber (R3F).
It includes three different 3D scenes:
3D Cube Scene
3D Text Scene
3D Robot Model Scene

You can switch between scenes using the button at the top of the page.

Tech Stack
React
React Three Fiber (R3F)
@react-three/drei (helpers like Text3D, OrbitControls, Environment)
GLTF models for the robot animation
Scene 1 — 3D Cube
This scene shows a basic 3D cube with simple interactions:
Hover → changes color
Click → scales up
Drag → rotate using OrbitControls
Scroll → zoom in/out
You can also replace the cube with other shapes:

<boxGeometry args={[1.5, 1.5, 1.5]} />   // Cube
<sphereGeometry args={[1, 32, 32]} />    // Sphere
<torusGeometry args={[1, 0.4, 16, 32]} /> // Donut

Scene 2 — 3D Text
This scene uses Text3D to display real 3D extruded text.
You can change the text by editing:

Yorushika
Text appearance is controlled by:
size → text size
height → thickness
bevelEnabled → rounded edges
curveSegments → smoothness
Interactions are the same as the cube:
Hover → color change
Click → scale up

Scene 3 — Dancing Robot
This scene loads a GLB 3D model and plays its built‑in animation.
Loaded using useGLTF()
Animation controlled by useAnimations()
Robot plays the Dance animation automatically
Click → scale up/down
The model is rendered using:
<primitive object={scene} />

Controls
All scenes support:
Left mouse drag → rotate
Scroll → zoom
Right mouse drag → pan
Click → scale object
Hover → color change (Cube & Text)

Project Structure
Code
src/
 ├─ App.jsx          // Main scene switcher
 ├─ App.jsx // Cube demo 3D text demo Robot model + animation(For convenient, I put these three into one file, use botton to switch.)
 └─ assets/  

How to Run
Environment Setup
To run this project, you only need a basic React + Vite environment.
1. Install Node.js
Make sure you have Node.js 16+ installed.
You can check with:
bash
node -v
If you don’t have it, download from:
https://nodejs.org

2. Install project dependencies
After cloning the project:
bash
npm install
This will install:
React
React Three Fiber
@react-three/drei
Three.js
Vite

3. Start the development server
bash
npm run dev
Then open:
Code
http://localhost:5173

Summary
This project demonstrates:
Basic 3D shapes
3D text rendering
Loading animated 3D models
Simple interactions (hover, click, scale)
Scene switching
R3F + Drei workflow
