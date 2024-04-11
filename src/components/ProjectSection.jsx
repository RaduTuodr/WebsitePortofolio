import React from "react";
import ProjectCard from "../components/ProjectCard";

const projectData = [
    {
        'id': 1,
        'title': "Project 1",
        'description': "This is one of my projects",
        'thumbnailURL': 'images/projectImages/eu_maracoca_ralu.jpg',
        'githubURL': 'https://github.com/RaduTuodr/FakeNewsML'
    },
    {
        'id': 2,
        'title': "Project 2",
        'description': "This is one of my projects",
        'thumbnailURL': "images/projectImages/project2.jpg",
        'githubURL': 'https://github.com/RaduTuodr/FakeNewsML'
    },
    {
        'id': 3,
        'title': "Project 3",
        'description': "This is one of my projects",
        'thumbnailURL': "images/projectImages/project3.jpg",
        'githubURL': 'https://github.com/RaduTuodr/FakeNewsML'
    },
    {
        'id': 4,
        'title': "Project 4",
        'description': "This is one of my projects",
        'thumbnailURL': "/images/projectImages/project4.jpeg",
        'githubURL': 'https://github.com/RaduTuodr/FakeNewsML'
    }
]

const ProjectSection = () => {

    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4">
                My projects
            </h2>

            <div className="grid m-8 md:grid-cols-3 gap-8 md:gap-12">

                {projectData.map((project) => (                             //// TODO: WHY DOES THUMBNAIL URL BEHAVE SO WEIRD????
                    <ProjectCard
                        key={project['id']}
                        title={project['title']}
                        description={project['description']}
                        thumbnailURL={project['thumbnailURL']} 
                        githubURL={project['githubURL']}/>
                ))}
            </div>
        </>
    );
};

export default ProjectSection;