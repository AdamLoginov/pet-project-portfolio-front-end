import Image from "next/image"

import Header from "./components/Header"
import Slider from "./components/Slider"


import ArrowIcon from "./components/ArrowIcon"
import Circle from "./components/Circle"
import MoreDetails from "./components/MoreDetail"

import image1 from"../public/img/projects/concept-2.webp"
import image2 from"../public/img/projects/concept-3.webp"
import image3 from"../public/img/projects/concept-4.webp"
import image4 from"../public/img/projects/concept-5.webp"
import image5 from"../public/img/projects/concept-6.webp"
import image6 from"../public/img/projects/concept-7.webp"
import image7 from"../public/img/projects/concept-8.webp"

import monument1 from "../public/img/monument/2.jpg"

export default function Home() {

  const sliderImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
  ]

  return (
    <main className="pl-[65px]">
      <Header/>
      <div className="text-white text-[9.5rem] font-semibold uppercase">
        
        <h1 className="text-header">Hello<span className="text-red-500">.</span></h1>
        <h1 className="text-header">I am Michail</h1>
        <div className="flex  absolute left-[970px]">
          <ArrowIcon/>
          <div className="text-[1.4rem] leading-tight flex flex-col  ml-[2rem]">
            <span>Developer</span>
            <span>UX/UI Designer</span>
            <span>Freelance</span>
          </div>
        </div>
      </div>

      <div className="conteiner">
      
      <section className="mt-[170px] pl-[120px] relative">
          <div id='showConcept' className="relative inline-block">
            <Circle/>

            <div  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold
             text-[#ffffff54] text-[23px] uppercase leading-tight">
              <span className="block show-element">мои</span>
              <span className="block show-element">проекты</span>
            </div>
            
            <div className="text-white absolute top-1 left-3/4 flex ">
              <span className="text-[140px] text-transparent mounth leading-none">10</span>
              <div className="whitespace-nowrap flex flex-col justify-end pb-4 ml-2 leading-tight">
                <p className="uppercase mb-0 font-bold text-[20px]">nov</p>
                <p className="mb-0 uppercase">Готов к работе</p>
              </div>
            </div>

            <div className="text-[#ffffffb2] text-[17px] absolute whitespace-nowrap left-3/4 top-[250px]">
                <p className="">I am a developer and UX/UI designer based in Italy.</p>
                <p>National and international customers have relied on me for design,</p>
                <p>implementation, and management of their digital products.</p>
                <p className=" -ml-[65px]">
                  <span className="uppercase text-white font-bold text-[19px]">Contact </span>
                  As a freelancer, I works also with web agencies, companies
                </p>
                <p>startups and individuals to create a blueprint for the digital business.</p>
                <p>Also, Judge at CSSDA and Envato Author.</p>
            </div>
          </div>

          <div id='concept' className="absolute top-0 right-0 mr-[65px]">
            <Slider images={sliderImages}/>
          </div>
      </section>

      <section className="mt-[400px] text-white">
        <div className="flex justify-center mb-[150px]">
          <div className="uppercase text-[125px] font-semibold leading-tight">
            <h1 className="block">выполненые_</h1>
            <h1 className=" ml-[450px]">работы
              <span className="text-red-500">:</span>
            </h1>
          </div>
        </div>

        <div  className="flex mb-[150px] mx-auto max-w-[1100px] pl-[60px]">
          <div className="flex flex-col text-white mr-9">
            <div className="font-semibold text-[25px] leading-tight mt-[10px] mb-[20px]">
              <h1>Eva_</h1>
              <h1>Loginova</h1>
            </div>
            <div className="text-[#ffffffb2] leading-tight ml-[50px]">
              <p>Портфолио Евы Логиновой,<br/> специалиста в сфере питания.</p>
            </div>
          </div>
          <div className="relative img-warp">
            <Image src={monument1} height={160} width={669}/>
            <div className=" absolute -bottom-[65px] -left-[65px]" style={{transform: `skewX(-50deg)`}}>
              <MoreDetails/>
            </div>
          </div>
        </div>

        <div className="flex mb-[150px] mx-auto max-w-[1100px]">
          <div className="mr-9">
          <div className="relative img-warp">
            <Image src={monument1} height={160} width={669}/>
            <div className=" absolute -bottom-[65px] -right-[65px]" style={{transform: `skewX(50deg)`}}>
              <MoreDetails/>
            </div>
          </div>
          </div>
          <div className="flex flex-col text-white">
            <div className="font-semibold text-[25px] leading-tight mt-[10px] mb-[20px]">
              <h1>Eva_</h1>
              <h1>Loginova</h1>
            </div>
            <div className="text-[#ffffffb2] leading-tight ml-[50px]">
              <p>Портфолио Евы Логиновой,<br/> специалиста в сфере питания.</p>
            </div>
          </div>
        </div>

        <div className="flex mb-[150px] mx-auto max-w-[1100px] pl-[60px]">
          <div className="flex flex-col text-white mr-9">
            <div className="font-semibold text-[25px] leading-tight mt-[10px] mb-[20px]">
              <h1>Eva_</h1>
              <h1>Loginova</h1>
            </div>
            <div className="text-[#ffffffb2] leading-tight ml-[50px]">
              <p>Портфолио Евы Логиновой,<br/> специалиста в сфере питания.</p>
            </div>
          </div>
          <div className="relative img-warp">
            <Image src={monument1} height={160} width={669}/>
            <div className=" absolute -bottom-[65px] -left-[65px]" style={{transform: `skewX(-50deg)`}}>
              <MoreDetails/>
            </div>
          </div>
        </div>
      </section>

      <section className="block mt-[400px] text-white">
          <div className="flex justify-center mb-[150px]">
            <div className="uppercase text-[125px] font-semibold leading-tight">
              <h1 className="block">Обо_</h1>
              <h1 className=" ml-[300px]">мне
                <span className="text-red-500">:</span>
              </h1>
            </div>
          </div>  
          <div className="grid grid-cols-3 gap-4">
              <div className=" flex flex-col">
                <h1>Навыки</h1>
              </div>
              <div className=" flex flex-col">
                <h1>qwd</h1>
              </div>
              <div className=" flex flex-col">
                qwd
              </div>
            </div>
      </section>
      
      <div className="h-[1000px]"></div>

      </div>
      
    </main>
  )
}
