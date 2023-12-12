import React from "react"

import Header from "./components/Header"
import Slider from "./components/Slider"
import AnimateComponent from "./components/AnimateComponent"

import TitleOfProjectComponent from "./components/TitleOfproject"
import TitleOfMeComponent from "./components/TitlteOfMe"
import TitleLetsTalkComponent from "./components/TitleLetsTalk"

import ProjectSideLeftComponent from "./components/ProjectSideLeft"
import ProjectSideRightComponent from "./components/ProjectSideRight"

import ContentOfMeComponent from "./components/ContentOfMe"
import ShowConceptComponent from "./components/ShowConceptComponent"

import Footer from "./components/Footer"

import ArrowIcon from "./components/ArrowIcon"

import image1 from"../public/img/projects/concept-2.webp"
import image2 from"../public/img/projects/concept-3.webp"
import image3 from"../public/img/projects/concept-4.webp"
import image4 from"../public/img/projects/concept-5.webp"
import image5 from"../public/img/projects/concept-6.webp"
import image6 from"../public/img/projects/concept-7.webp"
import image7 from"../public/img/projects/concept-8.webp"

import monument1 from "../public/img/monument/1.jpg"
import monument2 from "../public/img/monument/2.jpg"
import monument3 from "../public/img/monument/3.jpg"

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
    <main>
      <div className="max-w-[1529px] mx-auto relative">
        <Header/>
        <div id="startContent" className="text-white mt-[40px] lg:mt-[0px] text-[5rem] lg:text-[9.5rem] font-semibold uppercase ml-[40px] 
        lg:ml-[65px] relative z-20">
          <div className="animation-content-wrapper">
            <h1 className="title-content ">Hello<span className="text-[#F65252]">.</span></h1>
          </div>
          <div className="animation-content-wrapper">
            <h1 className="title-content -mt-[15px] lg:mt-[0px]">I am Michail</h1>
          </div>
          <div className="flex absolute lg:left-[908px]">
            <div className="animation-content-wrapper">
              <div className="arrow-content">
                <div className="w-[55px] lg:w-[75px]">
                  <ArrowIcon/>
                </div>
              </div>
            </div>
            <div className="text-[1rem] lg:text-[1.4rem] leading-tight flex flex-col ml-[2rem] z-0">
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

        <section className="mt-[150px] lg:mt-[110px] pl-[40px] lg:pl-[120px] relative">
          <ShowConceptComponent/>
        </section>

        <div id='concept' className="absolute z-10 top-[290px] right-[0px] lg:top-[650px] lg:right-0 ">
          <div className="w-[300px] lg:w-auto">
            <Slider images={sliderImages}/>
          </div>
        </div>



        <section className="mt-[200px] text-white ">
          <div id="ideas">
            <AnimateComponent>
              <TitleOfProjectComponent/>
            </AnimateComponent>
          </div>

          <div className=" mb-[50px] lg:mb-[150px] mx-auto max-w-[1100px] pl-[40px] lg:pl-[60px]">
            <AnimateComponent>
              <ProjectSideLeftComponent image={monument1} titleLine_1={"scroll"} titleLine_2={"parallax"}
              line_1={"Эффект движения фона"} line_2={"при прокрутке страницы."}
              url={"/pages/parallax/index.html"}/>
            </AnimateComponent>
          </div>

          <div className="mb-[50px] lg:mb-[150px] mx-auto max-w-[1100px] pl-[40px] lg:pl-[0px]">
            <AnimateComponent>
              <ProjectSideRightComponent image={monument2} titleLine_1={"3D"} titleLine_2={"parallax"}
              line_1={"Эффект движения фона"} line_2={"при движении мыши."}
              url={"/pages/parallax-3d/index.html"}/>
            </AnimateComponent>
          </div>

          <div className=" mb-[50px] lg:mb-[150px] mx-auto max-w-[1100px] pl-[40px] lg:pl-[60px]">
            <AnimateComponent>
              <ProjectSideLeftComponent image={monument3} titleLine_1={"scroll"} titleLine_2={"creative"}
              line_1={"Анимация элементов"} line_2={"при прокрутке страницы."}
              url={"/pages/scroll/index.html"}/>
            </AnimateComponent>
          </div>
        </section>

        <section className="block mt-[150px] lg:mt-[200px] text-white max-w-[1220px] mx-auto">
          <div id="ofMe">
            <AnimateComponent>
              <TitleOfMeComponent/>
            </AnimateComponent>
          </div>
          
            <AnimateComponent>
              <ContentOfMeComponent/>
            </AnimateComponent>
          

        </section>

        <section className="mt-[150px] lg:mt-[200px] mb-[150px] lg:mb-[200px] text-white max-w-[1220px] mx-auto">
          <AnimateComponent>
            <TitleLetsTalkComponent/>
          </AnimateComponent>
        </section>
      </div>
      <Footer/>
    </main>
  )
}
