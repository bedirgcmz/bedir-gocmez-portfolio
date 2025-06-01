

// 'use client';

// import { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, A11y } from 'swiper/modules';
// import ProjectCard from './ProjectCard/ProjectCard';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';



// export default function ProjectSwiper() {
//   const [projects, setProjects] = useState<Project[] | null>(null);

//   useEffect(() => {
//     fetch('/data/ProjectsData.json')
//       .then((res) => res.json())
//       .then((data) => {
//         console.log('Fetched data:', data);
//         setProjects(data);
//       })
//       .catch((err) => console.error('Error loading projects:', err));
//   }, []);

//   if (projects === null) {
//     return <div className="text-center text-gray-400 dark:text-gray-500 py-8">Loading projects...</div>;
//   }

//   return (
//     <div className="w-full px-4 py-8 max-w-6xl mx-auto">
//       <Swiper
//         modules={[Navigation, Pagination, A11y]}
//         spaceBetween={24}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="rounded-lg"
//       >
//         {projects.map((project, index) => (
//           <SwiperSlide key={index}>
//             {/* <ProjectCard {...project} /> */}
//             <div className="h-64 flex text-center text-5xl text-gray-400 dark:text-gray-500 py-8">
//               Gel Bakalaim artik
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

"use client"
import React, { useEffect, useRef, useState } from 'react';
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
  const [screenSize, setScreenSize] = useState(3);
  const [projects, setProjects] = useState<Project[] | null>(null);


  useEffect(() => {
    fetch('/data/ProjectsData.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data);
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
                768: { slidesPerView: 2 },
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
