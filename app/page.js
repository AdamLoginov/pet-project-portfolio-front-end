import Image from "next/image"

import ScrollComponent from "./components/ScrollComponent"

import Header from "./components/Header"
import Date from "./components/Date"
import Slider from "./components/Slider"
import AnimateComponent from "./components/AnimateComponent"

import TitleOfProjectComponent from "./components/TitleOfproject"
import TitleOfMeComponent from "./components/TitlteOfMe"
import TitleLetsTalkComponent from "./components/TitleLetsTalk"

import ProjectSideLeftComponent from "./components/ProjectSideLeft"
import ProjectSideRightComponent from "./components/ProjectSideRight"

import ContentOfMeComponent from "./components/ContentOfMe"

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
    <main className="">
      <Header/>
      <div className="text-white text-[9.5rem] font-semibold uppercase ml-[65px]">
        <div className="animation-content-wrapper">
          <h1 className="title-content">Hello<span className="text-[#F65252]">.</span></h1>
        </div>
        <div className="animation-content-wrapper">
          <h1 className="title-content">I am Michail</h1>
        </div>
        <div className="flex  absolute left-[970px]">
          <div className="animation-content-wrapper">
            <div className="arrow-content">
              <ArrowIcon/>
            </div>
          </div>
          <div className="text-[1.4rem] leading-tight flex flex-col  ml-[2rem]">
            <div className="animation-content-wrapper">
              <h1 className="more-content">Developer</h1>
            </div>
            <div className="animation-content-wrapper">
              <span className="more-content">UX/UI Designer</span>
            </div>
            <div className="animation-content-wrapper">
              <span className="more-content">Freelance</span>
            </div>
          </div>
        </div>
      </div>

      <div className="conteiner">
      
      <section className="mt-[170px] pl-[120px] relative">
          <div id='showConcept' className="relative inline-block">
            <Circle/>
            <div  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold
            text-[#ffffff54] text-[23px] uppercase leading-tight">
              <div className="animation-content-wrapper">
                <span className="block show-project-content tracking-[3px]">мои</span>
              </div>
              <div className="animation-content-wrapper">
                <span className="block show-project-content tracking-[3px]">проекты</span>
              </div>
            </div>
            <Date />

            <div className="text-[#ffffffb2] text-[17px] absolute whitespace-nowrap left-3/4 top-[250px]">
              <div className="animation-content-wrapper">
                <p id="about-content-1" className="about-content">I am a developer and UX/UI designer based in Italy.</p>
              </div>
              <div className="animation-content-wrapper">
                <p id="about-content-2" className="about-content">National and international customers have relied on me for design,</p>
              </div>
              <div className="animation-content-wrapper">
                <p id="about-content-3" className="about-content">implementation, and management of their digital products.</p>
              </div>
              <div  className=" -ml-[65px] animation-content-wrapper">
                <p id="about-content-4" className="about-content">
                  <span className="uppercase text-white font-bold text-[20px] link-contact">Contact </span>
                  As a freelancer, I works also with web agencies, companies
                </p>
              </div>
              <div className="animation-content-wrapper">
                <p id="about-content-5" className="about-content">startups and individuals to create a blueprint for the digital business.</p>
              </div>
              <div className="animation-content-wrapper">
                <p id="about-content-6" className="about-content">Also, Judge at CSSDA and Envato Author.</p>
              </div>
            </div>
          </div>

          <div id='concept' className="absolute top-0 right-0 mr-[65px]">
            <Slider images={sliderImages}/>
          </div>
      </section>

      <section className="mt-[400px] text-white">
        <AnimateComponent>
          <TitleOfProjectComponent/>
        </AnimateComponent>

        <div  className="mb-[150px] mx-auto max-w-[1100px] pl-[60px]">
          <AnimateComponent>
            <ProjectSideLeftComponent image={monument1} />
          </AnimateComponent>
        </div>

        <div className="mb-[150px] mx-auto max-w-[1100px]">
          <AnimateComponent>
            <ProjectSideRightComponent image={monument1}/>
          </AnimateComponent>
        </div>

        <div className=" mb-[150px] mx-auto max-w-[1100px] pl-[60px]">
          <AnimateComponent>
            <ProjectSideLeftComponent image={monument1} />
          </AnimateComponent>
        </div>
      </section>

      <section className="block mt-[400px] text-white max-w-[1220px] mx-auto">
        <AnimateComponent>
          <TitleOfMeComponent/>
        </AnimateComponent>

        <AnimateComponent>
          <ContentOfMeComponent/>
        </AnimateComponent>

      </section>

      <section className="mt-[400px] mb-[200px] text-white max-w-[1220px] mx-auto">
        <AnimateComponent>
          <TitleLetsTalkComponent/>
        </AnimateComponent>
      </section>

      </div>
      <footer>
        <div className="m-[15px] bg-[#F65252] px-[150px] py-[65px]">
          <div className="flex justify-between">
            <div>
              wdqw
            </div>
            <div>
              qwdqwd
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
