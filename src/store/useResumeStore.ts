import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  duration: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  link?: string;
}

export interface ResumeData {
  basicInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    role: string;
    tagline: string;
    summary: string;
    profileImage: string;
  };
  experience: Experience[];
  education: Education[];
  skills: string[];
  projects: Project[];
  templateId: string;
  theme: 'light' | 'dark';
}

interface ResumeStore {
  data: ResumeData;
  currentStep: number;
  updateBasicInfo: (info: Partial<ResumeData['basicInfo']>) => void;
  addExperience: () => void;
  updateExperience: (id: string, info: Partial<Experience>) => void;
  removeExperience: (id: string) => void;
  addEducation: () => void;
  updateEducation: (id: string, info: Partial<Education>) => void;
  removeEducation: (id: string) => void;
  addSkill: (skill: string) => void;
  removeSkill: (skill: string) => void;
  addProject: () => void;
  updateProject: (id: string, info: Partial<Project>) => void;
  removeProject: (id: string) => void;
  setTemplate: (id: string) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
}

const initialData: ResumeData = {
  basicInfo: {
    name: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    role: 'Product Designer',
    tagline: 'Designing simple experiences for complex problems',
    summary:
      'Product Designer with 6+ years of experience building user-centered products. Skilled in cross-functional collaboration, prototyping, and crafting accessible interfaces that scale.',
    profileImage: '',
  },
  experience: [
    {
      id: 'exp-1',
      company: 'Brightside Labs',
      role: 'Senior Product Designer',
      duration: '2021 â€” Present',
      description:
        'Led design for the core product, shipped features that increased activation by 18% and reduced task time by 24%. Mentored junior designers and improved the team design system.',
    },
    {
      id: 'exp-2',
      company: 'Nova Apps',
      role: 'Product Designer',
      duration: '2018 â€” 2021',
      description:
        'Collaborated with PMs and engineers to define product roadmap, conducted user research and A/B testing to validate concepts.',
    },
  ],
  education: [
    {
      id: 'edu-1',
      school: 'State University',
      degree: 'B.S. Interaction Design',
      duration: '2014 â€” 2018',
    },
  ],
  skills: ['Product Design', 'Figma', 'Prototyping', 'User Research', 'Accessibility'],
  projects: [
    {
      id: 'proj-1',
      name: 'Onboarding Redesign',
      description: 'Redesigned the onboarding flow to reduce churn and improve activation.',
      link: 'https://example.com/onboarding',
    },
  ],
  templateId: 'modern',
  theme: 'light',
};

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      data: initialData,
      currentStep: 1,
      updateBasicInfo: (info) =>
        set((state) => ({
          data: { ...state.data, basicInfo: { ...state.data.basicInfo, ...info } },
        })),
      addExperience: () =>
        set((state) => ({
          data: {
            ...state.data,
            experience: [
              ...state.data.experience,
              { id: crypto.randomUUID(), company: '', role: '', duration: '', description: '' },
            ],
          },
        })),
      updateExperience: (id, info) =>
        set((state) => ({
          data: {
            ...state.data,
            experience: state.data.experience.map((exp) =>
              exp.id === id ? { ...exp, ...info } : exp
            ),
          },
        })),
      removeExperience: (id) =>
        set((state) => ({
          data: {
            ...state.data,
            experience: state.data.experience.filter((exp) => exp.id !== id),
          },
        })),
      addEducation: () =>
        set((state) => ({
          data: {
            ...state.data,
            education: [
              ...state.data.education,
              { id: crypto.randomUUID(), school: '', degree: '', duration: '' },
            ],
          },
        })),
      updateEducation: (id, info) =>
        set((state) => ({
          data: {
            ...state.data,
            education: state.data.education.map((edu) =>
              edu.id === id ? { ...edu, ...info } : edu
            ),
          },
        })),
      removeEducation: (id) =>
        set((state) => ({
          data: {
            ...state.data,
            education: state.data.education.filter((edu) => edu.id !== id),
          },
        })),
      addSkill: (skill) =>
        set((state) => ({
          data: {
            ...state.data,
            skills: [...state.data.skills, skill],
          },
        })),
      removeSkill: (skill) =>
        set((state) => ({
          data: {
            ...state.data,
            skills: state.data.skills.filter((s) => s !== skill),
          },
        })),
      addProject: () =>
        set((state) => ({
          data: {
            ...state.data,
            projects: [
              ...state.data.projects,
              { id: crypto.randomUUID(), name: '', description: '' },
            ],
          },
        })),
      updateProject: (id, info) =>
        set((state) => ({
          data: {
            ...state.data,
            projects: state.data.projects.map((proj) =>
              proj.id === id ? { ...proj, ...info } : proj
            ),
          },
        })),
      removeProject: (id) =>
        set((state) => ({
          data: {
            ...state.data,
            projects: state.data.projects.filter((proj) => proj.id !== id),
          },
        })),
      setTemplate: (id) =>
        set((state) => ({
          data: { ...state.data, templateId: id },
        })),
      setTheme: (theme) =>
        set((state) => ({
          data: { ...state.data, theme },
        })),
      nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, 9) })),
      prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),
      setStep: (step) => set({ currentStep: step }),
    }),
    {
      name: 'resume-storage',
    }
  )
);
