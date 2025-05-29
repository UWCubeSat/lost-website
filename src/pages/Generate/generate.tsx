import { Navbar } from '@/components/Navbar'
import React, { memo, Suspense, useEffect, useState } from 'react'
import { IoIosInformationCircleOutline } from 'react-icons/io'

interface Props {}

export const Generate: React.FC<Props> = memo(() => {
  return (
    <div>
      <Navbar activePath="/generate" />
      <div className="flex justify-center">
        <div className="w-[400px] bg-gray-50 px-4 rounded-2xl py-2">
          <div className="flex gap-1 flex-col">
            <span className="text-sm font-bold">FOV</span>
            <input
              type="number"
              className="border border-gray-400 rounded-md px-2 py-1 text-sm"
              min={1}
              max={100}
              placeholder="Pixel Size (µm)"
              value={30}
              defaultValue={30}
            />
          </div>
          <div className="flex gap-1 flex-col mt-2">
            <span className="text-sm font-bold">Spread</span>
            <input
              type="number"
              className="border border-gray-400 rounded-md px-2 py-1 text-sm"
              min={1}
              max={600}
              placeholder="Focal Length (mm)"
              value={3}
              defaultValue={35}
            />
          </div>
          <div className="flex gap-1 flex-col mt-2">
            <span className="text-sm font-bold">Noise</span>
            <input
              type="number"
              className="border border-gray-400 rounded-md px-2 py-1 text-sm"
              min={1}
              max={600}
              placeholder="Focal Length (mm)"
              value={3}
              defaultValue={35}
            />
          </div>
          <div className="flex gap-1 flex-col mt-2">
            <span className="text-sm font-bold">Right Ascension</span>
            <input
              type="number"
              className="border border-gray-400 rounded-md px-2 py-1 text-sm"
              min={1}
              max={600}
              placeholder="Focal Length (mm)"
              value={3}
              defaultValue={35}
            />
          </div>
          <div className="flex gap-1 flex-col mt-2">
            <span className="text-sm font-bold">Declination</span>
            <input
              type="number"
              className="border border-gray-400 rounded-md px-2 py-1 text-sm"
              min={1}
              max={600}
              placeholder="Focal Length (mm)"
              value={3}
              defaultValue={35}
            />
          </div>
          <div className="flex gap-1 flex-col mt-2">
            <span className="text-sm font-bold">Roll</span>
            <input
              type="number"
              className="border border-gray-400 rounded-md px-2 py-1 text-sm"
              min={1}
              max={600}
              placeholder="Focal Length (mm)"
              value={3}
              defaultValue={35}
            />
          </div>
          <div className="flex gap-1 flex-col mt-2">
            <span className="text-sm font-bold flex items-center gap-1">
              Centroid Magnitude Filter{' '}
              <div>
                <IoIosInformationCircleOutline className="mt-[1.5px] peer" />
                <div className="absolute font-normal px-2 py-1 bg-white rounded-md border border-gray-400 max-w-[30%] translate-x-1 translate-y-1 hidden peer-hover:block">
                  The centroid magnitude filter may also need to be adjusted,
                  depending on the resolution and noisiness of your images. If
                  the output file has many centrorids (red boxes) where there
                  are no visible stars, then the filter should be increased. If
                  there are many stars without centroids, the filter should be
                  decreased.
                </div>
              </div>
            </span>
            <input
              type="number"
              className="border border-gray-400 rounded-md px-2 py-1 text-sm"
              min={1}
              max={10}
              placeholder="Centroid Magnitude Filter"
              value={0}
              defaultValue={5}
            />
          </div>
          <div className="flex gap-1 flex-col mt-2">
            <span className="text-sm font-bold flex items-center gap-1">
              Tetra{' '}
              <div>
                <IoIosInformationCircleOutline className="mt-[1.5px] peer" />
                <div className="absolute font-normal px-2 py-1 bg-white rounded-md border border-gray-400 max-w-[30%] translate-x-1 translate-y-1 hidden peer-hover:block">
                  Just another algorithm for detecting stars.
                </div>
              </div>
            </span>
            <input type="checkbox" className="self-start w-5 h-5" />
          </div>
          <div className="flex justify-center p-4">
            <button
              type="submit"
              className="cursor-pointer border-solid py-1 px-2 border-2 rounded-lg hover:bg-black hover:text-white"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
      <div className="text-red-700">PAGE IN DEVELOPMENT</div>
    </div>
  )
})
