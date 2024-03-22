"use client";


import { VSMShadowMap } from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { EmailSignUp } from "../components/EmailSignUp"
import { IntroText } from "../components/IntroText"
import { Oi, Lora, Poppins } from 'next/font/google'
import { useState } from "react";

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
  const [palmWireframe, setPalmWireframe] = useState(false)

  return (
    <>
      <div className="absolute z-10 w-full"> {/* Absolute position with high z-index */}
        <div className="container mx-auto sm:px-6 lg:px-8 	flex flex-col">
          <IntroText />
          <div className="bg-[#00ff84] text-[#0d1230] font-semibold py-2 px-4 w-fit mb-4 rounded-md">Upcoming Meetups</div>
          <MeetupList meetups={meetupList} />

        </div>
      </div>


      <div id="canvas-container" className="fixed top-0 right-0 bottom-0 left-0 z-0"> {/* Full viewport and lower z-index */}
        {/* <Canvas shadows camera={{ position: [0, 8, 20], fov: 30 }} shadowmap={{ type: VSMShadowMap }}>
          <CameraStart />
          <group position={[10, 0, -20]}>
            <Palm palmWireframe={palmWireframe} setPalmWireframe={setPalmWireframe} position={[10, 0, 0]} scale={0.85} />
          </group>
          <hemisphereLight args={["#c3f8ff", "yellow", 5]} />
          <directionalLight position={[20, 10, 0]} intensity={10} />
        </Canvas> */}
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

const MeetupList = ({ meetups }) => {
  // Use grid layout with responsive grid columns
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mb-20">
      {meetups.map((meetup, index) => (
        <Meetup key={index} {...meetup} />
      ))}
    </div>
  );
};


const Meetup = ({ title, date, time, author, website, cost, description, bgColor, courseImg, imgCover, authorImg }) => {
  return (
    <div className="overflow-auto bg-white p-4 rounded-xl">
      <div className={`${bgColor} h-[165px] w-[165px] float-left mr-4 rounded-xl flex items-center justify-center`}>
        <img src={courseImg} className={imgCover ? "w-full h-full object-cover rounded-xl" : "w-4/5"} alt="" />
      </div>
      <div>
        <div className="flex justify-between">
          <div>
            <span className="text-2xl">{title}</span>
            <p>Author: {author}</p>
            <p className="mb-2">Date: {date} at {time}</p>
          </div>
          <img src={authorImg} className="w-20 h-20 rounded-full hidden md:block border-2 border-white drop-shadow-md" alt="Author" />
        </div>
        <hr className="mb-2" />
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};


const meetupList = [
  {
    title: 'The Joy of React',
    date: 'Apr 19',
    time: '6pm',
    day: 'fridays',
    author: 'Josh W Comeau',
    authorImg: './josh.jpg',
    website: 'https://www.joyofreact.com',
    cost: 480,
    bgColor: "bg-[#0D1230]",
    courseImg: "./joy-of-react.png",
    description: `The Joy of React is an interactive course. You won’t just sit and watch me code. There are tons of exercises, 
    real-world-inspired projects, and fun mini-games and activities. It’s not like any other course you’ve taken before 
    (unless you’ve taken my CSS course, in which case, it’s quite a bit like that).
  
    We learn React from the ground up, building a robust mental model we can use to understand React and solve hard problems. I’ll share the dozens of epiphanies I’ve had after almost a decade of professional React experience.
    `
  },
  {
    title: 'Three.js Journey',
    date: `TBA`,
    time: `6pm`,
    day: `fridays`,
    author: `Bruno Simon`,
    authorImg: `./bruno.jpg`,
    website: `https://threejs-journey.com`,
    cost: '$95',
    bgColor: "bg-[#F2ECFF]",
    imgCover: true,
    courseImg: "./threejs-journey.png",
    description: `The course is complete, yet accessible for beginners. We will start by discovering what WebGL is and why using the 
    Three.js library is a must. We will then discover the various components of Three.js and once the basics are acquired, we will 
    move on to more advanced techniques to display millions of particles, add physics, add interactions, create a galaxy, animate a raging sea, etc.
    At the end of the course, you will have a deep understanding of Three.js and enough experience to start your own projects.
    As a bonus, we will also learn how to use the 3D software Blender to be able to create our own models.
    `
  }
]