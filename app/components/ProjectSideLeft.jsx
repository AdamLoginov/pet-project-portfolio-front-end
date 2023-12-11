import Image from "next/image";
import MoreDetails from "./MoreDetail";

const ProjectSideLeftComponent = (data) =>{
    return(
        <div className="flex ">
            <div className="flex flex-col text-white mr-9">
                <div className="font-semibold text-[25px] leading-tight mt-[10px] mb-[20px]">
                    <div className="animation-content-wrapper">
                        <h1 className="project-content-title">{data.titleLine_1}<span className="text-red-500">_</span></h1>
                    </div>
                    <div className="animation-content-wrapper">
                        <h1 className="project-content-title">{data.titleLine_2}</h1>
                    </div>
                </div>
                <div className="text-[#ffffffb2] leading-tight ml-[50px]">
                    <div className="animation-content-wrapper">
                        <p className="project-content-title">{data.line_1}</p> 
                    </div>
                    <div className="animation-content-wrapper">
                        <p className="project-content-title">{data.line_2}</p> 
                    </div>
                </div>
            </div>
            <a href={data.url }>
                <div className="relative img-warp">
                    <div className="animation-content-wrapper">
                        <div className="project-content-image">
                            <Image src={data.image} height={160} width={669}/>
                        </div>
                    </div>
                    <div className=" absolute -bottom-[65px] -left-[65px]" style={{transform: `skewX(-50deg)`}}>
                        <MoreDetails/>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProjectSideLeftComponent;