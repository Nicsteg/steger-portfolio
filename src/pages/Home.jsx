import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky'; 
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';
import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.1;
  audioRef.current.loop = true;
  const [isRotate, setIsRotate] = useState(false);
  const [currentStage, setCurrentStage] = useState(1)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlayingMusic) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    }
  }, [isPlayingMusic])

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [ screenScale, screenPosition, rotation ];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [ screenScale, screenPosition ];
  }

  const [ screenScale, screenPosition, rotation ] = adjustIslandForScreenSize();
  const [ planeScale, planePosition ] = adjustPlaneForScreenSize();

  return (
    <section className="relative h-screen w-full">
      <div className="absolute left-0 right-0 top-28 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>

      <Canvas
        className={`h-full w-full bg-transparent ${isRotate ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ position: [0, 0, 15], near: 0.1, far: 1000, fov: 45 }}
      >
        <Suspense fallback={<Loader />}>
          <color attach="background" args={["#cfe7ff"]} />
          <fog attach="fog" args={["#cfe7ff", 30, 90]} />

          <Stars radius={100} depth={50} count={1200} factor={2.5} saturation={0} fade speed={0.6} />

          <directionalLight
            position={[5, 12, 6]}
            intensity={1.8}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
          />
          <ambientLight intensity={0.45} />
          <pointLight
            position={[8, 6, 8]}
            intensity={0.8}
            castShadow
          />
          <hemisphereLight
            skyColor={0xb1e1ff}
            groundColor={0x223344}
            intensity={0.65}
          />

          <Bird />
          <Sky />
          <Island
            isRotate={isRotate}
            setIsRotate={setIsRotate}
            setCurrentStage={setCurrentStage}
            position={screenPosition}
            rotation={rotation}
            scale={screenScale}
          />
          <Plane
            isRotate={isRotate}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

      <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/35 px-4 py-1 text-xs font-medium text-white backdrop-blur-sm">
        Drag to rotate the island
      </p>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="h-10 w-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home;