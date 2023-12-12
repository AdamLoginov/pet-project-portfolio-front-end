'use client';
import { useEffect } from 'react';

import Circle from './Circle'
import Date from './Date'

const ShowConceptComponent = () =>{
    useEffect(() => {
        const handleMouseEnter = () => {
          concept.classList.add('visible');
        };
      
        const handleMouseLeave = () => {
          concept.classList.remove('visible');
        };
      
        const showConcept = document.getElementById('showConcept');
        const concept = document.getElementById('concept');
      
        showConcept.addEventListener('mouseenter', handleMouseEnter);
        showConcept.addEventListener('mouseleave', handleMouseLeave);
      
        // Очистка событий, когда компонент размонтируется
        return () => {
          showConcept.removeEventListener('mouseenter', handleMouseEnter);
          showConcept.removeEventListener('mouseleave', handleMouseLeave);
        };
      }, []);

    return(
        <div id='showConcept' className="relative inline-block z-10">
            <div className=" w-[270px] lg:w-[403px]">
                <Circle/>
            </div>
            <div  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold
            text-[#ffffff54] text-[18px] lg:text-[23px] uppercase leading-tight select-none">
                <div className="animation-content-wrapper">
                    <span className="block show-project-content tracking-[3px]">мои</span>
                </div>
                <div className="animation-content-wrapper">
                    <span className="block show-project-content tracking-[3px]">проекты</span>
                </div>
            </div>

            <Date/>

            <div className="text-[#ffffffb2] text-[11px] lg:text-[17px] absolute whitespace-nowrap -left-[30px] top-[230px] lg:left-3/4 lg:top-[250px]">
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
                    <p id="about-content-4" className="about-content">Как фрилансер, я также сотрудничаю с веб-агенствами</p>
                </div>
                <div className="animation-content-wrapper">
                    <p id="about-content-5" className="about-content">и компаниями, внося свой вклад в различные проекты.</p>
                </div>
            </div>
        </div>
    );
}

export default ShowConceptComponent;