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

            <div id='about-me-block' className=" flex flex-col col-span-2 ">
                <div className="animation-content-wrapper mb-[10px]">
                    <h1 id="about-me-1" className="text-[20px] font-[500] tracking-[1px] about-me-content">Опыт работы</h1>
                </div>
                <div className="text-[15px]">
                    <div className="animation-content-wrapper">
                        <p id="about-me-2" className="about-me-content">С 2019 года я активно занимаюсь веб-разработкой на Python</p>
                    </div>
                    <div className="animation-content-wrapper">
                        <p id="about-me-3" className="about-me-content">С 2021 года расширил спектр, добавив JavaScript.</p>
                    </div>
                    <div className="animation-content-wrapper">
                        <p id="about-me-4" className="about-me-content">Разработал более 20 сайтов, приобрел опыт в сфере </p>
                    </div>
                    <div className="animation-content-wrapper">
                        <p id="about-me-5" className="about-me-content">фронтенда и бекенда,успешно решая разнообразные задачи.</p>
                    </div>

                </div>
            </div>
            <div className=" flex flex-col col-span-2">
                <div className="ml-[100px]  text-[15px] ">
                    <div className="animation-content-wrapper mb-[10px]">
                        <h1 id="about-me-1" className="text-[20px] font-[500] tracking-[1px] about-me-content">Контакты</h1>
                    </div>
                    <div className="animation-content-wrapper">
                        <a  id="about-me-2" href="https://t.me/USER_VA" target="_blank" 
                        className="about-me-content transition-colors duration-300 hover:text-red-500">
                            Telegram
                        </a>
                    </div>
                    <div className="animation-content-wrapper">
                        <a id="about-me-3" href="https://api.whatsapp.com/send?phone=79149045535" target="_blank" 
                        className="about-me-content transition-colors duration-300 hover:text-red-500">
                            WhatsApp
                        </a>
                    </div>                    
                    <div className="animation-content-wrapper">
                        <p id="about-me-4" className="about-me-content">Тел: +7-(914)-904-55-35</p>
                    </div>
                    <div className="animation-content-wrapper">
                        <p id="about-me-5" className="about-me-content">Email: mysnikov2000@mail.ru </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentOfMeComponent;