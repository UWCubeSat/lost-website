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
      <div className="font-mono text-center pl-60 pr-60 pt-4">
        Check out our <a href="https://digitalcommons.usu.edu/smallsat/2023/all2023/5/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">published paper</a> from SmallSat 2023.
      </div>
      <div className="font-mono text-center pl-60 pr-60 pt-10 text-4xl">
        <strong>What is a Star Tracker?</strong>
      </div>
      <div className="font-mono text-center pl-60 pr-60 pt-2 pb-10">
        A star tracker is an optical device used to determine a
        satellite's orientation, or "attitude", by identifying constellations of stars.
        By capturing images of the surrounding star field and running them through pattern recognition algorithms, the star
        tracker calculates the spacecraft’s precise attitude in three-dimensional space. This information
        is critical for satellite navigation, stability, and alignment.
      </div>
      <div className="font-mono text-center pl-60 pr-60 pt-2 pb-4">
        Star tracking is done in three main steps:
      </div>
      <div className="flex font-mono text-center pl-30 pr-30">
        <div className="flex-1 pl-10 pr-10">
          <div className="text-2xl">
            <strong>Centroiding</strong>
          </div>
          <div>
            Onboard software scans the image to determine which pixels are stars, and calculates
            the coordinates of each star's centroid.
          </div>
        </div>
        <div className="flex-1 pl-10 pr-10">
          <div className="text-2xl">
            <strong>Star Identification</strong>
          </div>
          <div>
            Pattern recognition algorithms like Pyramid and Tetra match centroids to known stars,
            with the help of a star catalog.
          </div>
        </div>
        <div className="flex-1 pl-10 pr-10">
          <div className="text-2xl">
            <strong>Attitude Estimation</strong>
          </div>
          <div>
            Algorithms like QUEST use the identified stars and their positions to compute the satellite's attitude.
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
