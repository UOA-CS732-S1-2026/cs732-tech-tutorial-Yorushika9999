# 🤖 React Three Fiber 3D Demo

## 👤 Student Information
- **Name:** Hanze Zhang  
- **Student ID:** 427431645  
- **GitHub ID:** Yorushika9999  

---

## 📝 Project Overview
This project is a simple 3D demo built with **React Three Fiber (R3F)**. It features three interactive scenes that demonstrate the core capabilities of 3D rendering in React.

> 💡 **Tip:** You can switch between scenes using the navigation buttons at the top of the page.

---

## 🚀 Tech Stack
- **Framework:** React  
- **3D Engine:** Three.js  
- **React Integration:** React Three Fiber (R3F)  
- **Helper Library:** `@react-three/drei` (Text3D, OrbitControls, Environment)  
- **Build Tool:** Vite  

---

## 🎬 Scenes

### 🧊 1. 3D Cube Scene
A basic 3D cube demonstrating standard interactions:
- **Hover:** Changes object color  
- **Click:** Scales the object up  
- **OrbitControls:** Drag to rotate, scroll to zoom  

### 🔠 2. 3D Text Scene
Renders real 3D extruded text using `Text3D`.

Features:
- Customizable text (e.g., “Yorushika”)  
- Adjustable size, thickness, bevel  

### 🕺 3. Dancing Robot Scene
Loads a complex GLB 3D model with skeletal animations.

Features:
- `useGLTF` for model loading  
- `useAnimations` to play the built-in **Dance** animation automatically  

---

## 🛠️ Project Structure

```text
project-root/
├── public/                # ⚠️ Static assets MUST go here for Vite
│   └── RobotExpressive.glb
├── src/
│   ├── App.jsx            # Main Logic (Scene switcher + Cube/Text/Robot components)
│   └── main.jsx           # React entry point
├── package.json
└── vite.config.js
```

---

## 💻 How to Run

### 1. Environment Setup
This project requires **Node.js 16+**.

Check your version:
```bash
node -v
npm -v
```
*(If you don't have Node.js installed, download it from the official website: [https://nodejs.org/](https://nodejs.org/))*

### 2. Clone the Project
Clone your GitHub Classroom repository:
```bash
git clone [https://github.com/UOA-CS732-S1-2026/cs732-tech-tutorial-Yorushika9999.git](https://github.com/UOA-CS732-S1-2026/cs732-tech-tutorial-Yorushika9999.git)
```
Enter the project folder:
```bash
cd cs732-tech-tutorial-Yorushika9999
```

### 3. Install Dependencies
Install all required libraries (React, Three.js, R3F, Drei, Vite):
```bash
npm install
```
*This will automatically download everything needed to run the project.*

### 4. Start the Development Server
Run the local dev server:
```bash
npm run dev
```
Then open the URL shown in the terminal, usually: `http://localhost:5173`

---

## ✔️ Features Summary

- [x] Basic 3D shapes: rendering and geometry properties  
- [x] 3D Text: using Text3D with custom fonts  
- [x] External Models: loading and animating `.glb` files  
- [x] Interactions: hover, click, scale  
- [x] Scene Management: switching between multiple 3D views

---

## 🛠️ Troubleshooting

If you encounter any issues while running the project, please check the following:

- **1. Port already in use:** If `http://localhost:5173` doesn't work, check your terminal. If port 5173 is occupied, Vite will automatically switch to another port (e.g., `5174`). Always use the exact link provided in your terminal output.

- **2. The 3D robot model is missing (404 Error):** Vite requires static models referenced via absolute paths (like `useGLTF('/RobotExpressive.glb')`) to be located in the `public/` directory. Please ensure the `.glb` file is not accidentally moved to `src/`.

- **3. Build/Vite errors on startup:** Ensure your Node.js version is **v18.0.0 or higher**. Older versions may not support the latest Vite bundler.

- **4. "Cannot find module" or broken dependencies:** If `npm install` was interrupted, you might have corrupted packages. Run the following commands to perform a clean install:
  ```bash
  rm -rf node_modules
  rm package-lock.json
  npm install
