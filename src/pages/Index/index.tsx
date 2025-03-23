import { Navbar } from '@/components/Navbar'
import React, { memo, Suspense } from 'react'

interface Props {}

const Index: React.FC<Props> = memo(() => {
  return (
    <>
      <Navbar activePath="/" />
      <div className="flex items-center justify-center h-screen w-full bg-cover bg-center bg-[url(/andy-holmes-rCbdp8VCYhQ-unsplash.jpg)] text-center text-7xl text-white font-mono">
        LOST API
      </div>
      <div className="font-mono flex p-6">
        <div className="w-1/2 p-2 flex justify-center items-center">
          <div className="text-center">
            <div>Brought to you by the </div>{' '}
            <div className="text-2xl">Husky Satellite Lab</div>
            <div>at the</div>
            <div className="text-2xl">University of Washington</div>
          </div>
          <div className="h-24 w-35 bg-cover bg-[url(/Washington_Huskies_logo.png)]"></div>
        </div>
        <div className="w-1/2 p-2">
          <div className="text-2xl">Here is how it works: </div>
          <div className="pl-10">1. Upload an image</div>
          <div className="pl-10">
            2. Check out yours, and others, satellite images
          </div>
        </div>
      </div>
      <div>
        <div className="font-mono text-center pl-60 pr-60 pt-5 pb-10">
          LOST is a star tracker software for small, low-power, low-cost
          satellites. It is being developed in the Husky Satellite Lab, a
          CubeSat team at the University of Washington.
        </div>
      </div>
      {/* Add footer */}
    </>
  )
})
Index.displayName = 'Index'

export default Index
