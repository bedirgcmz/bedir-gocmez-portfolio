export type EducationIconKey = 'faCode' | 'faLaptopCode' | 'faPersonChalkboard' | 'faPersonWalkingArrowRight';

export interface Education {
    id: number;
    icon: EducationIconKey;
    title: string;
    company: string;
    description: string;
    date: string;
  }
  