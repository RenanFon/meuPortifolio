export interface Course {
  name: string;
  institution: string;
  certificateUrl: string;
}

export interface Technology {
  name: string;
  icon: JSX.Element;
  description: string;
  courses: Course[];
}

export interface TechnologySection {
  icon: JSX.Element;
  title: string;
  technologies: Technology[];
}
