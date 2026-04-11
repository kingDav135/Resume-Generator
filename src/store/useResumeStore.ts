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
    name: '',
    email: '',
    phone: '',
    location: '',
    role: '',
    tagline: '',
    summary: '',
    profileImage: '',
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],
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
