'use client';

const TitleLetsTalkComponent = () =>{
    const scrollToAnchor = (id) =>{
        const anchorElement = document.getElementById(id);
        if (anchorElement) {
            anchorElement.scrollIntoView({behavior: 'smooth',block: 'start', inline: 'nearest'});
        }
    }
    return(
        <div className="flex flex-col text-[3.8rem] lg:text-[8.5rem] font-semibold leading-none ml-[40px] lg:ml-[0px]">
            <div className="animation-content-wrapper">
                <p id="about-me-1" className="about-me-content">Если у вас</p>
            </div>
            <div className="animation-content-wrapper">
                <p id="about-me-2" className="about-me-content">есть идеи</p>
            </div>
            <div className="animation-content-wrapper">
                <p id="about-me-3" className="about-me-content">для проекта
                    <span className="text-red-500">
                        ,
                    </span>
                </p>
            </div>
            <div className="animation-content-wrapper">
                <a id="about-me-4" onClick={() => scrollToAnchor('ofMe')} className="about-me-content text-red-500 lets-contact select-none">свяжитесь</a>
            </div>
            <div className="animation-content-wrapper">
                <p id="about-me-5" className="about-me-content">со мной
                <span className="text-red-500">
                    .
                </span>
                </p>
            </div>
        </div>
    )
}

export default TitleLetsTalkComponent;