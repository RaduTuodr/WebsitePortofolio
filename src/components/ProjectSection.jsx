"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import LoadingSection from "../components/LoadingSection";
import supabase from '../config/supabaseClient';

const ProjectSection = () => {
    const [fetchError, setFetchError] = useState(null);
    const [projects, setProjects] = useState([]);
    const [thumbnails, setThumbnails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data: projectsData, error: projectError } = await supabase.from('projects').select();
                const { data: thumbnailsData, error: thumbnailError } = await supabase.storage.from('thumbnails');
        
                if (projectError) {
                    throw new Error(projectError.message);
                }
                if (thumbnailError) {
                    throw new Error(thumbnailError.message);
                }

                console.log(thumbnailsData);
    
                setProjects(projectsData);
                setThumbnails(thumbnailsData);
                setFetchError(null);
    
            } catch (error) {
                setFetchError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
    
        fetchProjects();
    }, []);

    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4">
                My projects
            </h2>

            {isLoading ? (
                <LoadingSection/>                   // TODO: should add a loadingSection
            ) : fetchError ? (
                <p>Error: {fetchError}</p>
            ) : (
                <div className="grid m-8 md:grid-cols-3 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            thumbnailURL={project.thumbnailURL}
                            githubURL={project.githubURL}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default ProjectSection;
