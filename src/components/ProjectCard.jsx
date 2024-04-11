import React from "react";
import Link from "next/link";
import { MdCodeOff } from "react-icons/md";

const ProjectCard = (thumbnailURL, title, description, githubURL) => {

    title           = thumbnailURL['title'];
    description     = thumbnailURL['description'];
    githubURL       = thumbnailURL['githubURL'];
    thumbnailURL    = thumbnailURL['thumbnailURL'];

    return (
        <div>
            <div 
                style={{ background: `url(${thumbnailURL})`, backgroundSize: "cover" }}
                className="h-52 rounded-t-xl relative group">
                
                <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#191919] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">                
                
                    <Link href={githubURL} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white">
                        <MdCodeOff className="h-10 w-10 cursor-pointer hover-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></MdCodeOff>
                    </Link>
                
                </div>
            
            </div>

            <div className="text-white rounded-b-xl bg-[#191919]">
                <h5 className="font-semibold text-lg"> 
                    {title}
                </h5>
                <p className="text-[#ADB7BE] text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;