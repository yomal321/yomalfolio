"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/teajar.png",
    category: "full stack",
    name: "Tea Jar Ceylon",
    description:
      "This Tea Jar Ceylon, featuring an intuitive e-commerce platform and store locator. The site is optimized for performance, responsiveness, and a seamless user experience. It showcases the brand’s premium tea collections and immersive tea experiences.",
    link: "https://teajarceylon.com/",
    github: "https://github.com/Payshia-Software-Solutions/TeaJarWebsite",
  },
  {
    image: "/work/lms-new.png",
    category: "full stack",
    name: "Ceylon Pharma College ",
    description:
      "This project is developed based on Ceylon Pharma College's requirements. and i have developed 5 games to do the education.",
    link: "http://web.pharmacollege.lk/",
    github: "https://github.com/thilinaruwan112/LMSCeylonPharmaCollege",
  },

];
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md-w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Tabs Content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
