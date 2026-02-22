import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { GitHubRepoCard } from '@/components/GitHubRepoCard'
import React, { memo, Suspense } from 'react'

interface Props {}

const Index: React.FC<Props> = memo(() => {
  return (
    <>
      <Navbar activePath="/" />
      <div className="flex items-center justify-center h-screen w-full bg-cover bg-center bg-[url(/andy-holmes-rCbdp8VCYhQ-unsplash.jpg)] text-center text-white font-mono">
        <div className="flex flex-col items-center gap-8">
          <strong className="text-7xl">Open-Source Star Tracking</strong>
          <GitHubRepoCard />
        </div>
      </div>
      <div className="font-mono text-center pl-60 pr-60 pt-10">
        LOST is an open-source star tracker built for small, low-power, low-cost
        satellites. It is being developed in the Husky Satellite Lab, a CubeSat
        team at the University of Washington.
      </div>
      <div className="font-mono text-center pl-60 pr-60 pt-10 text-4xl">
        <strong>What is a Star Tracker?</strong>
      </div>
      <div className="font-mono text-center pl-60 pr-60 pt-2 pb-10">
        A star tracker is a high-precision optical device used to determine a
        spacecraft’s orientation in space by observing the positions of stars.
        By capturing images of the night sky and comparing them to an onboard
        star catalog, the star tracker calculates the spacecraft’s exact
        attitude in three-dimensional space. This information is critical for
        navigation, stability, and alignment of instruments in satellites,
        CubeSats, and other space missions.
      </div>
      <div className="font-mono text-center pl-60 pr-60 pt-2 pb-4">
        Star tracking is done in three main steps:
      </div>
      <div className="flex font-mono text-center pl-30 pr-30">
        <div className="pl-10 pr-10">
          <div className="text-2xl">
            <strong>Image Aquisition</strong>
          </div>
          <div>
            The star tracker captures an image of the night sky using its
            onboard camera. This image contains multiple bright points (stars)
            against a dark background.
          </div>
        </div>
        <div className="pl-10 pr-10">
          <div className="text-2xl">
            <strong>Star Identification</strong>
          </div>
          <div>
            The onboard software processes the image to identify which stars are
            visible. It compares the detected star pattern to a known star
            catalog using pattern recognition algorithms.
          </div>
        </div>
        <div className="pl-10 pr-10">
          <div className="text-2xl">
            <strong>Attitude Determination</strong>
          </div>
          <div>
            Once the stars are identified, the star tracker calculates the
            spacecraft's orientation (attitude) by determining how the observed
            star positions compare to their known positions in space.
          </div>
        </div>
      </div>
      <div className="font-mono text-center pt-10 pb-10 text-2xl">
        <em>Want to see LOST in action? <a href="/analyze" className="text-blue-600 underline hover:text-blue-800">Try it out!</a></em>
      </div>
      <Footer />
    </>
  )
})
Index.displayName = 'Index'

export default Index
