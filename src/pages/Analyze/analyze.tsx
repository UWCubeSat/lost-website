import { Navbar } from '@/components/Navbar'
import React, { memo, Suspense, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { FiUploadCloud } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoIosInformationCircleOutline } from 'react-icons/io';

interface Props { }

export const Analyze: React.FC<Props> = memo(() => {
    const [flow, setFlow] = useState<"upload" | "processing" | "processed">("upload");
    const [pixelSize, setPixelSize] = useState<number>(22.2);
    const [focalLength, setFocalLength] = useState<number>(35);
    const [magnitudeFilter, setMagnitudeFilter] = useState<number>(5);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const [output, setOutput] = useState({
        cmdOutput: "",
        attitudeString: "",
        base64Image: ""
    })

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    useEffect(() => {
        if (acceptedFiles.length > 0) {
            async function process() {
                setFlow("processing")

                //https://lost-backend-1036293057238.us-central1.run.app/analyze
                //http://localhost:3000/analyze

                const res = await fetch("https://lost-backend-1036293057238.us-central1.run.app/analyze", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        image: await toBase64(acceptedFiles[0]),
                        focalLength,
                        pixelSize,
                        centroidMagnitudeFilter: magnitudeFilter
                    })
                });
                const data = await res.text();
                if (res.status !== 200) {
                    setFlow("upload")
                    return alert(data)
                } else {
                    const parsedData = JSON.parse(data);
                    const dataLabels = ["Known", "Right Ascension", "Declination", "Roll", "i", "j", "k", "Real"];
                    let commandLineData = "";
                    for(let i = 0; i < parsedData.length; i++){
                        parsedData.command_line_data;
                    }
                    setOutput({
                        cmdOutput: parsedData.command_line_data,
                        attitudeString: Object.entries(parsedData.image_analysis)
                            .map(([key, value], index) => `<strong>${dataLabels[index]}:</strong> ${value == 1 ? "True" : value == 0 ? "False" : value}`)
                            .join('<br>'), // Use <br> instead of \n for proper HTML rendering
                        base64Image: "data:image/jpeg;base64," + parsedData.annotated_image
                    });
                    // setOutput({
                    //     cmdOutput: parsedData.command_line_data,
                    //     attitudeString: parsedData.attitude_string,
                    //     base64Image: parsedData.annotated_image
                    // })
                    setFlow("processed")
                }


            }
            process()
        }
    }, [pixelSize, focalLength, magnitudeFilter, acceptedFiles])

    return (
        <>
            <Navbar activePath='/analyze' />
            <div className="w-full flex justify-center gap-4 mt-6">
                <a
                    href="/demo_image_one.png"
                    download="demo_image_one.png"
                    className="rounded-lg border border-gray-400 text-gray-700 text-[14px] py-2 px-4 cursor-pointer"
                >
                    Download Demo Image 1
                </a>
                <a
                    href="/demo_image_two.png"
                    download="demo_image_two.png"
                    className="rounded-lg border border-gray-400 text-gray-700 text-[14px] py-2 px-4 cursor-pointer"
                >
                    Download Demo Image 2
                </a>
                <a
                    href="/demo_image_three.png"
                    download="demo_image_three.png"
                    className="rounded-lg border border-gray-400 text-gray-700 text-[14px] py-2 px-4 cursor-pointer"
                >
                    Download Demo Image 3
                </a>
            </div>
            <div className="w-full flex items-stretch justify-center mt-12 gap-5">
                <div className="w-[500px] ">
                    {
                        flow === "upload" && (
                            <section className="w-full border-dashed border-2 px-8 py-6 border-gray-400 rounded-2xl flex items-center justify-center">
                                <div {...getRootProps({ className: 'dropzone' })}>
                                    <input {...getInputProps()} />
                                    <div className="w-full justify-center items-center flex flex-col">
                                        <FiUploadCloud className="text-xl mt-3" />
                                        <h3 className="mt-6 font-bold text-gray-800 text-[14px]">Choose a file or drag & drop it here</h3>
                                        <h3 className="mt-2 text-gray-500 text-[13px]">JPG and PNG images, up to 5MB</h3>
                                        <button className="rounded-lg border border-gray-400 text-gray-700 text-[13px] py-1 px-3 mt-4 cursor-pointer">Browse File</button>
                                    </div>
                                </div>
                            </section>
                        )
                    }
                    {
                        flow === "processing" && (
                            <section className="w-full border-dashed border-2 px-8 py-2 border-gray-400 rounded-2xl flex items-center justify-center">
                                <div>
                                    <input />
                                    <div className="w-full justify-center items-center flex flex-col">
                                        <h3 className="font-bold text-gray-800 text-[14px]">Processing</h3>
                                        <AiOutlineLoading3Quarters className="text-xl mt-3 mb-6 animate-spin" />
                                    </div>
                                </div>
                            </section>
                        )
                    }

                    {
                        flow === "processed" && (
                            <>
                                <section className="w-full border-dashed border-2 px-8 py-2 border-gray-400 rounded-2xl flex items-center justify-center">
                                    <div>
                                        <input />
                                        <div className="w-full justify-center items-center flex flex-col">
                                            <h3 className="font-bold text-gray-800 text-[20px]">Annotated Image:</h3>
                                            <img onClick={() => {
                                                setModalVisible(true)
                                            }} className="rounded-lg mt-4 mb-4 cursor-pointer" src={output.base64Image} alt="Annotated Image" />
                                        </div>
                                    </div>

                                </section>
                                <div className="mt-4">
                                    <h2 className='font-bold mb-2'>Attitude Data</h2>
                                    <pre className='text-[12px] bg-gray-200 px-3 py-2' dangerouslySetInnerHTML={{ __html: output.attitudeString }} />
                                </div>
                                <div className="mt-4 mb-8">
                                    <h2 className='font-bold mb-2'>Log Output</h2>
                                    <pre className='text-[12px] bg-gray-200 px-3 py-2'>
                                        {
                                            output.cmdOutput
                                        }
                                    </pre>
                                </div>
                            </>
                        )
                    }
                </div>
                <div className="w-[400px] bg-gray-50 px-4 rounded-2xl py-2">
                    <div className="flex gap-1 flex-col">
                        <span className='text-sm font-bold'>
                            Pixel Size (side length, in µm, of each pixel)
                        </span>
                        <input type="number" className="border border-gray-400 rounded-md px-2 py-1 text-sm" min={1} max={100} placeholder='Pixel Size (µm)' value={pixelSize} onChange={(e) => setPixelSize(Number(e.target.value))} defaultValue={22.2} />
                    </div>
                    <div className="flex gap-1 flex-col mt-2">
                        <span className='text-sm font-bold'>
                            Focal Length (in mm)
                        </span>
                        <input type="number" className="border border-gray-400 rounded-md px-2 py-1 text-sm" min={1} max={600} placeholder='Focal Length (mm)' value={focalLength} onChange={(e) => setFocalLength(Number(e.target.value))} defaultValue={35} />
                    </div>
                    <div className="flex gap-1 flex-col mt-2">
                        <span className='text-sm font-bold flex items-center gap-1'>
                            Centroid Magnitude Filter <div>
                                <IoIosInformationCircleOutline className="mt-[1.5px] peer" />
                                <div className='absolute font-normal px-2 py-1 bg-white rounded-md border border-gray-400 max-w-[30%] translate-x-1 translate-y-1 hidden peer-hover:block'>The centroid magnitude filter may also need to be adjusted, depending on the resolution and noisiness of your images. If the output file has many centrorids (red boxes) where there are no visible stars, then the filter should be increased. If there are many stars without centroids, the filter should be decreased.</div>
                            </div>
                        </span>
                        <input type="number" className="border border-gray-400 rounded-md px-2 py-1 text-sm" min={1} max={10} placeholder='Centroid Magnitude Filter' value={magnitudeFilter} onChange={(e) => setMagnitudeFilter(Number(e.target.value))} defaultValue={5} />
                    </div>
                </div>
            </div>
            <div className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gray-100 rounded-3xl overflow-hidden px-4 py-4 ${modalVisible ? "block" : "hidden"}`}>
            <div className="w-full -mt-3 overflow-visible flex justify-end z-100 relative cursor-pointer font-bold" onClick={() => {
                setModalVisible(false)
            }}>X</div>
                <div className="w-full bg-contain h-full bg-no-repeat bg-center" style={{
                    backgroundImage: `url(${output.base64Image})`
                }}></div>
            </div>
        </>
    )
})
Analyze.displayName = 'Index'

const toBase64 = (file: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});
