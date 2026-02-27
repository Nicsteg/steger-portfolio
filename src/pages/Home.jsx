import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from '@react-three/fiber';
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
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
      <Canvas className={`w-full h-full bg-transparent ${isRotate ? 'cursor-grabbing' : 'cursor-grab'}`}
       camera={{ near: 0.1, far: 1000}}>
        
        <Suspense fallback={<Loader />}> 
          <directionalLight
            position={[5, 10, 7.5]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
          />
          <ambientLight intensity={0.3} />
          <pointLight
            position={[10, 10, 10]}
            intensity={1}
            castShadow
          />
          <hemisphereLight
            skyColor={0xffffbb}
            groundColor={0x080820}
            intensity={0.5}
          />
          <Bird />
          <Sky 
            isRotate={isRotate}
          />
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
      <div className="absolute bottom-2 left-2">
        <img 
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home;
