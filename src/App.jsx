import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ground } from "./components/Ground.jsx";
import { Player } from "./components/Player.jsx";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={1} />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
