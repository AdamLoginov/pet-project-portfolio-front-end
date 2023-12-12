const TitleOfMeComponent = () =>{
    return(
        <div className="flex justify-center mb-[50px] lg:mb-[150px]">
            <div className="uppercase text-[3rem] lg:text-[125px] font-semibold leading-tight">
                <div className="animation-content-wrapper">
                    <h1 className="title-project-content">Обо<span className="text-red-500">_</span></h1>
                </div>
                <div className="animation-content-wrapper">
                    <h1 className=" ml-[65px] lg:ml-[200px] title-project-content">мне
                        <span className="text-[#F65252]">:</span>
                    </h1>
                </div>
            </div>
        </div>  
    )
}

export default TitleOfMeComponent;