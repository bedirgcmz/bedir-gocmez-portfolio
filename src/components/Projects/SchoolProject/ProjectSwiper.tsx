
"use client"
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import ProjectCard from './ProjectCard/ProjectCard';

type Project = {
    id: number;
    image: string;
    project_name: string;
    info: string;
    link: string;
    github_link: string;
  };

export default function ProjectSwiper() {
  const [projects, setProjects] = useState<Project[] | null>(null);


  useEffect(() => {
    fetch('/data/projects.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => console.error('Error loading projects:', err));
  }, []);

  if (projects === null) {
    return <div className="text-center text-gray-400 dark:text-gray-500 py-8">Loading projects...</div>;
  }

  return (
    <>
      <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              breakpoints={{
                0: { slidesPerView: 1 },
                769: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1400: { slidesPerView: 4 },
              }}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              autoplay={{ delay: 3000, pauseOnMouseEnter : true }}
              className="rounded-lg"
              style={{ paddingBottom: '20px' }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
