import Image from "next/image";
import MoreDetails from "./MoreDetail";

const ProjectSideRightComponent = (data) =>{
    return(

        <div className="lg:flex">
            <div className="grid grid-cols-12">
                <a href={data.url} className="lg:mr-9 lg:col-span-8 col-span-12 order-1 lg:oreder-2">
                    <div className="relative img-warp">
                        <div className="animation-content-wrapper">
                            <div className="project-content-image">
                                <Image src={data.image} height={160} width={669}/>
                            </div>
                        </div>
                        <div className=" absolute -bottom-[65px] lg:-right-[65px]" style={{transform: `skewX(50deg)`}}>
                            <MoreDetails/>
                        </div>
                    </div>
                </a>
                <div className="flex flex-col lg:col-span-4 col-span-12 order-2 lg:order-1 text-white">
                    <div className="font-semibold text-[20px] lg:text-[25px] leading-tight mt-[10px] mb-[10px] lg:mb-[20px]">
                        <div className="animation-content-wrapper">
                                <h1 className="project-content-title">{data.titleLine_1}<span className="text-red-500">_</span></h1>
                            </div>
                            <div className="animation-content-wrapper">
                                <h1 className="project-content-title">{data.titleLine_2}</h1>
                            </div>
                        </div>
                    <div className="text-[#ffffffb2] leading-tight ml-[50px] text-[13px] lg:text-[16px]">
                        <div className="animation-content-wrapper">
                            <p className="project-content-title">{data.line_1}</p> 
                        </div>
                        <div className="animation-content-wrapper">
                            <p className="project-content-title">{data.line_2}</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSideRightComponent;