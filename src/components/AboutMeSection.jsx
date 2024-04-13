"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image"

import TabButton from "../components/TabButton";

const tabData = [

    {
        title: "Technologies",
        id: "technologies",
        content: (
            <ul className="list-disc pl-2">
                <li>
                    C/C++
                </li>
                <li>
                    Python
                </li>
                <li>
                    Next.js
                </li>
            </ul>
        )
    },

    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>
                    <p>
                        Technical University of Cluj-Napoca
                    </p>
                    <p>
                        {'\tFirst-year grad student in Computer Engineering'}
                    </p>
                </li>

                <li>
                    <p>
                        "Emil Racovita" National College of Cluj-Napoca
                    </p>
                </li>
            </ul>
        )
    },

    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>
                    C2 - CAE English
                </li>
                {/* MATLAN, AIA DE LA BULGARI */}
            </ul>
        )
    },

];

const AboutMeSection = () => {

    const [tab, setTab] = useState("education");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {

        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className="text-white">
            
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16">

                <Image 
                    src="/images/emoji.png"
                    width={350}
                    height={350}
                ></Image>
                
                <div>
                    <h2 className="text-4xl text-white font-bold mb-4">
                        About me
                    </h2>
                    <p>
                        Aspiring Software Developer | Seeking Entry-Level programming
                        position | Experience with Java Android and Spring, Python Flask
                    </p>

                    <div className="flex justify-start flex-row mt-8">

                        <TabButton 
                            selectTab={() => handleTabChange("technologies")} 
                            active={tab==="technologies"}>
                                {" "}
                                Technologies
                                {" "}
                        </TabButton>

                        <TabButton 
                            selectTab={() => handleTabChange("education")} 
                            active={tab==="education"}>
                                {" "}
                                Education
                                {" "}
                        </TabButton>

                        <TabButton 
                            selectTab={() => handleTabChange("certifications")} 
                            active={tab==="certifications"}>
                                {" "}
                                Certifications
                                {" "}
                        </TabButton>
                    </div>

                    <div className="mt-8">
                        {
                            tabData.find((tabInfo) => tabInfo.id === tab).content
                        }
                    </div>

                </div>

            </div>

        </section>
    );
};

export default AboutMeSection;