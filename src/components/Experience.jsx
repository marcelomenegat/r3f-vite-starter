export const Experience = () => {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry args={[100, 100]} />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};
