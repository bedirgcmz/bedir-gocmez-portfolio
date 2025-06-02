'use client';

import Image from 'next/image';

const imageList = [
  {
    src: '/images/p2.png',
    alt: 'Project Image 1',
    rotate: '-12',
    offset: '-20', 
    z: '10',
  },
  {
    src: '/images/p3.png',
    alt: 'Project Image 2',
    rotate: '-2',
    offset: '0', 
    z: '20',
  },
  {
    src: '/images/p1.png',
    alt: 'Project Image 3',
    rotate: '12',
    offset: '20', 
    z: '30',
  },
];

export default function CardImages() {
  return (
    <div
      className="relative w-[320px] h-[280px] mx-auto flex transition-transform duration-300  hover:scale-110"
      aria-label="Fan-style project image cards"
    >
      {imageList.map((img) => (
        <Image
        key={img.src}
        src={img.src}
        alt={img.alt}
        width={240}
        height={360}
        className="absolute top-[20px] left-[35px] -translate-x-1/2 rounded-xl shadow-md transition-transform duration-300 scale-100 hover:scale-125"
        style={{
          transform: `translateX(${img.offset}px) rotate(${img.rotate}deg)`,
          zIndex: parseInt(img.z),
        }}
      />
      
      ))}
    </div>
  );
}
