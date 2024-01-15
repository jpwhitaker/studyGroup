/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, Outlines } from "@react-three/drei";

export function SaltMine(props) {
  const material = props.material;
  const { nodes, materials } = useGLTF("/salt_mine.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={material}
        position={[-1.058, 5.572, -3.666]}
        scale={[1, 1, 1.634]}
      >
        <Outlines thickness={0.05} color="black" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={material}
        position={[-1.1, 5.572, -3.666]}
        scale={[1, 1, 1.634]}
      >
        <Outlines thickness={0.05} color="black" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={material}
        position={[-1.092, 5.572, -3.666]}
        scale={[1, 1, 1.634]}
      >
        <Outlines thickness={0.05} color="black" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={material}
        position={[-1.058, 5.572, -3.666]}
        scale={[1, 1, 1.634]}
      >
        <Outlines thickness={0.05} color="black" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={material}
        position={[-1.058, 4.44, -3.666]}
        scale={[1, 1, 1.634]}
      >
        <Outlines thickness={0.05} color="black" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={material}
        position={[-1.058, 4.44, -3.666]}
        scale={[1, 1, 1.634]}
      >
        <Outlines thickness={0.05} color="black" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={material}
        position={[-1.058, 4.44, -3.666]}
        scale={[1, 1, 1.634]}
      >
        <Outlines thickness={0.05} color="black" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={material}
        position={[-1.058, 5.547, -3.666]}
        scale={[1, 1, 1.634]}
      >
        <Outlines thickness={0.05} color="black" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={material}
        position={[-1.058, 2.447, 4.717]}
        scale={[1, 1, 1.634]}
      >
        <Outlines thickness={0.05} color="black" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={material}
        position={[-1.058, 8.515, 4.717]}
        scale={[1, 1, 1.634]}
      >
        <Outlines thickness={0.05} color="black" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={material}
        position={[-1.058, 7.941, 4.844]}
        scale={[1, 1, 1.634]}
      >
        <Outlines thickness={0.05} color="black" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={material}
        position={[-1.055, 8.693, 4.296]}
        scale={[1, 1, 1.634]}
      >
        <Outlines thickness={0.05} color="black" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={material}
        position={[-1.058, 4.44, 0.846]}
        scale={[1, 1, 1.634]}
      >
        <Outlines thickness={0.05} color="black" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={material}
        position={[-1.058, 8.515, 4.717]}
        scale={[1, 1, 1.634]}
      >
        <Outlines thickness={0.05} color="black" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={material}
        position={[-1.058, 8.188, 3.253]}
        scale={[1, 1, 1.634]}
      >
        <Outlines thickness={0.05} color="black" />
      </mesh>
    </group>
  );
}

useGLTF.preload("/salt_mine.glb");