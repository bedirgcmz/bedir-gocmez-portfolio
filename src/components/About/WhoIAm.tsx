import Image from 'next/image';

export default function WhoIAm() {

  return (
    <section
      aria-labelledby="who-i-am-heading"
      className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 mx-auto mb-12 text-gray-700 dark:text-gray-300 transition-colors duration-300 "
    >
      <Image src={"/images/who-i-am.jpg"} alt='Bedir Gocmez' width={215} height={280} className='rounded-lg hover:scale-105 transitin duration-300 '/>
        <div className='max-w-[670px] relative'>
            <h2
                id="who-i-am-heading"
                className="text-3xl md:text-4xl font-bold mb-4 text-[#1a7b81] dark:text-white z-[2]"
            >
                Who I Am
            </h2>
            <p className="text-base md:text-lg leading-relaxed z-[2] text-justify">
                I&#39;m a Frontend Developer based in Stockholm, passionate about crafting responsive and accessible web applications using technologies like React, Next.js, and TypeScript. My journey into tech began after years in education, where I honed my skills in communication and problem-solving. This background enriches my approach to development, emphasizing user-centric design and collaboration.
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-4 z-[2] text-justify">
                Beyond coding, I enjoy exploring the vibrant culture of Stockholm, engaging in outdoor activities, and continuously learning about the latest advancements in AI and web technologies. I&#39;m always eager to take on new challenges and contribute to meaningful projects that make a difference.
            </p>
      <Image src={"/images/icons/react.png"} alt='skills' width={80} height={80} className='absolute top-[10%] left-[10%] z-[1] opacity-[0.2]'/>
      <Image src={"/images/icons/nextjs.png"} alt='skills' width={80} height={80} className='absolute top-[40%] left-[40%] z-[1] opacity-[0.2]'/>
      <Image src={"/images/icons/js.png"} alt='skills' width={80} height={80} className='absolute top-[80%] left-[20%] z-[1] opacity-[0.2]'/>
      <Image src={"/images/icons/typescript.png"} alt='skills' width={80} height={80} className='absolute top-[30%] left-[70%] z-[1] opacity-[0.2]'/>
      <Image src={"/images/icons/nodejs.png"} alt='skills' width={80} height={80} className='absolute top-[85%] right-[10%] z-[1] opacity-[0.2]'/>
        </div>
    </section>
  );
}
