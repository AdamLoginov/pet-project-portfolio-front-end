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

import Footer from "./components/Footer"

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
        <div id="startContent" className="text-white text-[9.5rem] font-semibold uppercase ml-[65px]">
          <div className="animation-content-wrapper">
            <h1 className="title-content">Hello<span className="text-[#F65252]">.</span></h1>
          </div>
          <div className="animation-content-wrapper">
            <h1 className="title-content">I am Michail</h1>
          </div>
          <div className="flex  absolute left-[973px]">
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


        <section className="mt-[110px] pl-[120px] relative ">
            <div id='showConcept' className="relative inline-block">
              <Circle/>
              <div  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold
              text-[#ffffff54] text-[23px] uppercase leading-tight select-none">
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
                  <p id="about-content-1" className="about-content">Я разработчик и UX/UI дизайнер из России.</p>
                </div>
                <div className="animation-content-wrapper">
                  <p id="about-content-2" className="about-content">Клиенты из разных стран доверяли мне в вопросах дизайна,</p>
                </div>
                <div className="animation-content-wrapper">
                  <p id="about-content-3" className="about-content">разработки, внедрения и управления их цифровыми продуктами.</p>
                </div>
                <div  className=" animation-content-wrapper">
                  <p id="about-content-4" className="about-content">
                    Как фрилансер, я также сотрудничаю с веб-агенствами
                  </p>
                </div>
                <div className="animation-content-wrapper">
                  <p id="about-content-5" className="about-content">и компаниями, внося свой вклад в различные проекты.</p>
                </div>
              </div>
            </div>

            <div id='concept' className="absolute top-0 right-0 ">
              <Slider images={sliderImages}/>
            </div>
        </section>

        <section className="mt-[200px] text-white ">
          <div id="ideas">
            <AnimateComponent>
              <TitleOfProjectComponent/>
            </AnimateComponent>
          </div>

          <div className="mb-[150px] mx-auto max-w-[1100px] pl-[60px]">
            <AnimateComponent>
              <ProjectSideLeftComponent image={monument1} titleLine_1={"scroll"} titleLine_2={"parallax"}
              line_1={"Эффект движения фона"} line_2={"при прокрутке страницы."}
              url={"/pages/parallax/index.html"}/>
            </AnimateComponent>
          </div>

          <div className="mb-[150px] mx-auto max-w-[1100px]">
            <AnimateComponent>
              <ProjectSideRightComponent image={monument2} titleLine_1={"3D"} titleLine_2={"parallax"}
              line_1={"Эффект движения фона"} line_2={"при движении мыши."}
              url={"/pages/parallax-3d/index.html"}/>
            </AnimateComponent>
          </div>

          <div className=" mb-[150px] mx-auto max-w-[1100px] pl-[60px]">
            <AnimateComponent>
              <ProjectSideLeftComponent image={monument3} titleLine_1={"scroll"} titleLine_2={"creative"}
              line_1={"Анимация элементов"} line_2={"при прокрутке страницы."}
              url={"/pages/scroll/index.html"}/>
            </AnimateComponent>
          </div>
        </section>

        <section className="block mt-[200px] text-white max-w-[1220px] mx-auto">
          <div id="ofMe">
            <AnimateComponent>
              <TitleOfMeComponent/>
            </AnimateComponent>
          </div>
          
            <AnimateComponent>
              <ContentOfMeComponent/>
            </AnimateComponent>
          

        </section>

        <section className="mt-[200px] mb-[200px] text-white max-w-[1220px] mx-auto">
          <AnimateComponent>
            <TitleLetsTalkComponent/>
          </AnimateComponent>
        </section>
      </div>
      <Footer/>
    </main>
  )
}
