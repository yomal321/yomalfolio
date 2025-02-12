"use client";

import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
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

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* Text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[520px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only first 4 projects */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
