"use client";


import { VSMShadowMap } from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { Palm } from "../components/Palm"
import { Oi, Lora, Poppins } from 'next/font/google'

const oi = Oi({
  subsets: ['latin'],
  weight: '400'
})

const lora = Lora({
  subsets: ['latin'],
  weight: '400'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: '300'
})

export default function CanvasWrapper() {
  return (
    <>
      <div className="absolute z-10 w-full"> {/* Absolute position with high z-index */}
        <div className="container mx-auto sm:px-6 lg:px-8 pt-8 border border-slate-400	flex flex-col">
          <div className="flex flex-col items-center justify-center flex flex-col items-center self-start mb-56">
            <h1 className={`${oi.className} text-[#D13246] text-[300px] leading-none`}>HNL</h1>
            <h2 className={`${lora.className} text-white text-[75px] leading-none mt-[-3.2rem]`}>programming study group</h2>
          </div>
          {/* Additional content can be added here */}
          <div className={`text-[#444] text-[1.4rem] ${poppins.className}`}>
            <ul className="pb-16">
              <li>- Do you want to learn new programming skills?</li>
              <li>- Do you buy online courses and never finished them?</li>
              <li>- Do you want to collaborate with intelligent, curious and driven people?</li>
            </ul>

            <p>
              Come join us!
              We're a friendly group of people who want to learn together.  
              <br/>
              Every couple of months we select a new course to follow and meet once a week until we're done.
              <br/>
              The meetups will always be free, but we will be using tutorials that cost money.  
            </p>
          </div>
        </div>
      </div>


      <div id="canvas-container" className="fixed top-0 right-0 bottom-0 left-0 z-0 bg-[#D6D2C7]"> {/* Full viewport and lower z-index */}
        <Canvas shadows camera={{ position: [0, 8, 20], fov: 30 }} shadowmap={{ type: VSMShadowMap }}>
          <CameraStart />
          <group position={[10, 0, -20]}>
            <Palm scale={0.8} wireframe={true} />
          </group>
          <hemisphereLight args={["#c3f8ff", "yellow", 5]} />
          <directionalLight position={[20, 10, 0]} intensity={10} />
        </Canvas>
      </div>
    </>
  );
};

const CameraStart = () => {
  useThree((state) => {
    console.log(state.camera)

    state.camera?.lookAt(new Vector3(0, 6, 0))
    state.camera.up = new Vector3(0, 1, 0);
    state.camera.updateProjectionMatrix()
  });

  return null
}

