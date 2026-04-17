import { useState, useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, Text3D, Center, useGLTF, useAnimations } from '@react-three/drei'

const FONT_URL = "https://raw.githack.com/mrdoob/three.js/master/examples/fonts/helvetiker_bold.typeface.json"


//  Scene 1: Rotating metal cube

function Scene1_Cubes() {
  const meshRef = useRef()
  const [hovered, setHover] = useState(false)
  // 🌟 Added: Click status
  const [clicked, setClicked] = useState(false)

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5
    meshRef.current.rotation.y += delta * 0.5
  })

  return (
    <mesh
      ref={meshRef}
      // 🌟 Added: Dynamically change size based on click status (1.5x or 1x)
      scale={clicked ? 1.5 : 1}
      onClick={(e) => {
        e.stopPropagation() // Prevent event propagation
        setClicked(!clicked) // Toggle click status
      }}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <torusGeometry args={[1, 0.4, 16, 32]} />
      
      <meshStandardMaterial 
        color={hovered ? '#060001' : '#e6900f'} 
        metalness={0.9} 
        roughness={0.1} 
      />
    </mesh>
  )
}


//  Scene 2: Real 3D extruded text

function Scene2_Text() {
  const [hovered, setHover] = useState(false)
  // 🌟 Added: Click status
  const [clicked, setClicked] = useState(false)

  return (
    <Suspense fallback={null}>
      <Center position={[0, 0, 0]}>
        <Text3D
          font={FONT_URL}
          size={0.6}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          // 🌟 Added: Font default size is 1, click to scale to 1.3
          scale={clicked ? 1.3 : 1}
          onClick={(e) => {
            e.stopPropagation()
            setClicked(!clicked)
          }}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        >
          Yorushika
          <meshStandardMaterial 
            color={hovered ? '#ff4060' : '#ff79c6'} 
            metalness={0.1} 
            roughness={0.2} 
          />
        </Text3D>
      </Center>
    </Suspense>
  )
}


//  Scene 3 (Ultimate Move): Dancing Robot

function Scene3_Robot() {
  const { scene, animations } = useGLTF('/RobotExpressive.glb')
  const { actions } = useAnimations(animations, scene)
  //  Added: Click status
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (actions['Dance']) {
      actions['Dance'].reset().fadeIn(0.5).play()
    }
    return () => actions['Dance']?.stop()
  }, [actions])

  return (
    <primitive 
      object={scene} 
      //  Added: Robot's original scale is 0.6, click to scale to 0.9
      scale={clicked ? 0.9 : 0.6} 
      onClick={(e) => {
        e.stopPropagation()
        setClicked(!clicked)
      }}
      position={[0, -1.2, 0]} 
    />
  )
}

function SuspensefulScene({ children }) {
  return <Suspense fallback={null}>{children}</Suspense>
}


//  App Main Component

const scenes = [
  { id: 0, name: "Block Scene", component: <Scene1_Cubes /> },
  { id: 1, name: "3D Text Scene", component: <Scene2_Text /> },
  { id: 2, name: "Dancing Robot Ultimate Move", component: <SuspensefulScene><Scene3_Robot /></SuspensefulScene> }
]

export default function App() {
  const [sceneIndex, setSceneIndex] = useState(0)

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      
      <button 
        onClick={() => setSceneIndex((prev) => (prev + 1) % scenes.length)}
        style={{
          position: 'absolute',
          top: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          padding: '12px 30px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '40px',
          border: '1px solid rgba(0,0,0,0.1)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          color: '#333',
          fontWeight: '600',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          transition: 'all 0.3s ease'
        }}
      >
        {"Switch: Scene " + (sceneIndex + 1) + " / 3"}
      </button>

      <Canvas camera={{ position: [0, 1, 6], fov: 50 }}>
        <color attach="background" args={['#f5f5f7']} />
        <Environment preset="studio" /> 
        <ambientLight intensity={0.8} /> 
        <directionalLight position={[5, 5, 5]} intensity={1} color={'#ffffff'} />

        {scenes[sceneIndex].component}

        <ContactShadows 
          position={[0, -1.2, 0]} 
          opacity={0.4}     
          scale={10} 
          blur={2.5} 
          far={4} 
          color="#1a1a1a"   
        />

        <OrbitControls enableZoom={true} enableDamping dampingFactor={0.05} minDistance={2} maxDistance={10} target={[0, 0, 0]} />
      </Canvas>
    </div>
  )
}