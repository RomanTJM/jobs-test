export interface Job {
  id: number;
  title: string;
  salary: string;
  location: string;
  experience: string;
}

export type ExperienceFilter = 'any' | '1-3' | '3-5' | '5+'; 