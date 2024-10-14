import { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button"

const About = () => {
  const [hasCopied,setHasCopied]=useState(false); 
  const handleCopy=()=>{
    navigator.clipboard.writeText('syedmuhammadmaarij@gmail.com');
    setHasCopied(true);
    setTimeout(()=>{
      setHasCopied(false);
    },2000)
  }
  return (
    <section className='c-space my-20 bg-dark-900 text-white' id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-8 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container bg-dark-800 rounded-lg p-6 shadow-lg">
            <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain rounded-lg' />
            <div className="mt-4">
              <p className='grid-headtext text-2xl font-bold'>Hi, I'm Maarij</p>
              <p className='grid-subtext text-base text-gray-400 mt-2'>With 3 years of experience, I have honed my skills in Full stack development & Blockchain development</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container bg-dark-800 rounded-lg p-6 shadow-lg">
            <img src="/assets/grid2.png" alt="grid-2" className='w-full mx-auto sm:w-[276px] h-fit object-contain rounded-lg' />
            <div className="mt-4">
              <p className='grid-headtext text-2xl font-bold'>Tech Stack</p>
              <p className='grid-subtext text-base text-gray-400 mt-2'>I specialize in JavaScript/TypeScript with a focus on React and Next.Js ecosystems</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container bg-dark-800 rounded-lg p-6 shadow-lg">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit items-center flex justify-center overflow-hidden">
              <Globe height={326} width={326} backgroundColor='rgba(0,0,0,0)' backgroundImageOpacity={0.5} showAtmosphere showGraticules globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" />
            </div>
            <div className="mt-4">
              <p className='grid-headtext text-2xl font-bold'>I work remotely across most timezones</p>
              <p className='grid-subtext text-base text-gray-400 mt-2'>I'm based in Pakistan, with remote work available.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container bg-dark-800 rounded-lg p-6 shadow-lg">
            <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain rounded-lg' />
            <div className="mt-4">
              <p className='grid-headtext text-2xl font-bold'>My Passion for coding.</p>
              <p className='grid-subtext text-base text-gray-400 mt-2'>I love solving problems and building things through code. Coding isn't just my profession - it is my passion.</p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container bg-dark-800 rounded-lg p-6 shadow-lg">
            <img src="assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top rounded-lg' />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                  <img src={hasCopied?'assets/tick.svg':'assets/copy.svg'} alt="copy"  />
                  <p className=" md:text-md font-medium text-gray_gradient text-white">syedmuhammadmaarij@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
