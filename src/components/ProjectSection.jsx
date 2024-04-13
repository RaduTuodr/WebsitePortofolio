"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import supabase from '../config/supabaseClient'

const ProjectSection = () => {
    const [fetchError, setFetchError] = useState(null);
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data, error } = await supabase.from('projects').select();

                if (error) {
                    throw new Error("Couldn't fetch projects from Supabase");
                }

                if (data) {
                    setProjects(data);
                    setFetchError(null);
                }
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
                <p>Loading...</p>
            ) : fetchError ? (
                <p>Error: {fetchError}</p>
            ) : (
                <div className="grid m-8 md:grid-cols-3 gap-8 md:gap-12">
                    {projects.map((project) => (
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
