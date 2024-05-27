import { useBox } from "@react-three/cannon";

export const Cube = ({ pos, texture }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    pos
  }));

  return (
    <mesh ref={ref}>
      <boxGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="orange" />
    </mesh>
  );
};
