const ContentOfMeComponent = () => {
    return(
        <div id='about-me' className="grid grid-cols-5 gap-4">
            <div id='about-me-block' className=" flex flex-col col-span-1 ">
                <div className="animation-content-wrapper mb-[10px]">
                    <h1 id="about-me-1" className="text-[20px] font-[500] tracking-[1px] about-me-content">Навыки</h1>
                </div> 
                <div className="font-[400] leading-6">
                    <div className="animation-content-wrapper">
                        <p id="about-me-2" className="about-me-content">Python (Django, FastAPI)</p>
                    </div>
                    <div className="animation-content-wrapper">
                        <p id="about-me-3" className="about-me-content">JavaScript (React, Next.js)</p>
                    </div>
                    <div className="animation-content-wrapper">
                        <p id="about-me-4" className="about-me-content">HTML, CSS</p>
                    </div>
                </div>
            </div>

            <div id='about-me-block' className=" flex flex-col col-span-2">
                <div className="animation-content-wrapper mb-[10px]">
                    <h1 id="about-me-1" className="text-[20px] font-[500] tracking-[1px] about-me-content">Опыт работы</h1>
                </div>
                <div className="text-[15px]">
                    <div className="animation-content-wrapper">
                        <p id="about-me-2" className="about-me-content">С 2019 года я активно занимаюсь веб-разработкой на Python</p>
                    </div>
                    <div className="animation-content-wrapper">
                        <p id="about-me-3" className="about-me-content">С 2021 года расширил спектр, добавив JavaScript. </p>
                    </div>
                    <div className="animation-content-wrapper">
                        <p id="about-me-4" className="about-me-content">Разработал более 30 сайтов, приобрел опыт в сфере </p>
                    </div>
                    <div className="animation-content-wrapper">
                        <p id="about-me-5" className="about-me-content">фронтенда и бекенда,успешно решая разнообразные задачи.</p>
                    </div>

                </div>
            </div>
            <div className=" flex flex-col col-span-2">
                <div className="ml-[100px]  text-[15px] text-[#ffffffb2] leading-[26px]">
                    <div className="animation-content-wrapper">
                        <p id="about-me-1" className="about-me-content">Я пью кофе, ем пиццу.</p>
                    </div>
                    <div className="animation-content-wrapper">
                        <p id="about-me-2" className="about-me-content">Пишу код и совершенствую</p>
                    </div>
                    <div className="animation-content-wrapper">
                        <p id="about-me-3" className="about-me-content">свой дизайн и навыки каждый день. </p>
                    </div>
                    <div className="animation-content-wrapper">
                        <p id="about-me-4" className="about-me-content">Для будет честью поработать с вами</p>
                    </div>
                    <div className="animation-content-wrapper">
                        <p id="about-me-5" className="about-me-content">Иногда я становлюсь победителем наград.</p>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default ContentOfMeComponent;