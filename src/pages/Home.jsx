import React, { Suspense, useState } from 'react'
import Loader from '../components/Loader'
import { Island } from '../models/Island'
import { Canvas } from '@react-three/fiber'

import Bird from '../models/Bird'
import Sky from '../models/Sky'
import {Plane} from '../models/Plain'
import HomeInfo from '../components/HomeInfo'

const Home = () => {

  const [isRottating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)
  const adjsutIslandForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0, -6.5, -43]
    let rotation = [0.1, 4.7, 0]

    if(window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9]
    }else{
      screenScale =[1,1,1] 
    }

    return [screenScale, screenPosition, rotation]
  }

  const adjsutPlaneForScreenSize = () => {
    let screenScale, screenPosition

    if(window.innerWidth < 768){
      screenScale = [1.5, 1.5, 1.5]
      screenPosition= [0, -1.5, 0]
    }else{
      screenScale =[3,3,3] 
      screenPosition= [0,-4, -4]
    }

    return [screenScale, screenPosition]
  }


  const [islandScale, islandPosition, islandRotation] = adjsutIslandForScreenSize()
  const [planeScale, planePosition] = adjsutPlaneForScreenSize()

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center'>
        {currentStage && <HomeInfo currentStage ={currentStage}/>}
      </div>
      <Canvas 
        className ={`w-full h-screen bg-transparent ${isRottating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera ={{near:0.1, far: 1000}}
      >
        <Suspense fallback ={<Loader/>}>
            <directionalLight position={[1, 1, 1]} intensity={2}/>
            <ambientLight intensity={0.5}/>
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>

            <Sky/>
            <Bird/>
            <Island
              position ={islandPosition}
              scale = {islandScale}
              rotation = {islandRotation}
              isRotating={isRottating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />
            <Plane
              planeScale = {planeScale}
              planePosition ={planePosition}
              isRotating = {isRottating}
              rotation = {[0,20, 0]}

            />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home