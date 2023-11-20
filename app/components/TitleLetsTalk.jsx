const TitleLetsTalkComponent = () =>{
    return(
        <div className="flex flex-col text-[8.5rem] font-semibold leading-none">
            <div className="animation-content-wrapper">
                <p id="about-me-1" className="about-me-content">Если у вас</p>
            </div>
            <div className="animation-content-wrapper">
                <p id="about-me-2" className="about-me-content">есть идеи</p>
            </div>
            <div className="animation-content-wrapper">
                <p id="about-me-3" className="about-me-content">для проекта,</p>
            </div>
            <div className="animation-content-wrapper">
                <p id="about-me-4" className="about-me-content text-red-500 lets-contact">свяжитесь</p>
            </div>
            <div className="animation-content-wrapper">
                <p id="about-me-5" className="about-me-content">со мной.</p>
            </div>
        </div>
    )
}

export default TitleLetsTalkComponent;