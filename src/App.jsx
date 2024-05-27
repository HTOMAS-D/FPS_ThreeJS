import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ground } from "./components/Ground.jsx";
import { Player } from "./components/Player.jsx";
import { FPV } from "./components/FPV.jsx";
import { Cubes } from "./components/Cubes.jsx";
import { Cube } from "./components/Cube.jsx";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={1} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className="absolute centered cursor">+</div>
    </>
  );
}

export default App;
