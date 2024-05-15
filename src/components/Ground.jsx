import { usePlane } from "@react-three/cannon";
import { RepeatWrapping } from "three";
import { groundTexture } from "../../images/textures";

export const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI/4, 0, 0],
    position: [0, 0, 0]
  }));

  // groundTexture.magFilter = LinearFilter;

  groundTexture.wrapS = RepeatWrapping;
  groundTexture.wrapT = RepeatWrapping;
  groundTexture.repeat.set(100, 100);
  return (
      <mesh ref={ref}>
        <planeGeometry attach="geometry" args={[100, 100]} />
        <meshStandardMaterial attach="material" map={groundTexture} />
      </mesh>
  );
}

camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]));
