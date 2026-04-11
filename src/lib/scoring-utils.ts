import { ResumeData } from '@/store/useResumeStore';

export interface ScoreResult {
  score: number;
  suggestions: string[];
}

export function calculateScore(data: ResumeData): ScoreResult {
  let score = 0;
  const suggestions: string[] = [];

  // Basic Info (Max 20)
  if (data.basicInfo.name) score += 5;
  else suggestions.push('Add your full name');

  if (data.basicInfo.email) score += 5;
  else suggestions.push('Add your email address');

  if (data.basicInfo.phone) score += 5;
  else suggestions.push('Add your phone number');

  if (data.basicInfo.role) score += 5;
  else suggestions.push('Add your professional title');

  // Summary (Max 10)
  if (data.basicInfo.summary.length >= 100) {
    score += 10;
  } else if (data.basicInfo.summary.length > 0) {
    score += 5;
    suggestions.push('Your professional summary is a bit short. Aim for at least 100 characters.');
  } else {
    suggestions.push('Add a professional summary to highlight your key achievements.');
  }

  // Experience (Max 30)
  const expCount = data.experience.length;
  if (expCount >= 3) score += 30;
  else if (expCount > 0) {
    score += expCount * 10;
    suggestions.push('Add more work experience entries to showcase your career growth.');
  } else {
    suggestions.push('Add your work experience to demonstrate your professional history.');
  }

  // Education (Max 20)
  const eduCount = data.education.length;
  if (eduCount >= 2) score += 20;
  else if (eduCount > 0) {
    score += 10;
    suggestions.push('Add more education details if applicable.');
  } else {
    suggestions.push('Add your educational background.');
  }

  // Skills (Max 20)
  const skillCount = data.skills.length;
  if (skillCount >= 10) score += 20;
  else if (skillCount > 0) {
    score += Math.min(skillCount * 2, 20);
    if (skillCount < 5) suggestions.push('Add more skills to improve your discoverability.');
  } else {
    suggestions.push('Add your key skills (e.g. React, Project Management).');
  }

  return {
    score,
    suggestions: suggestions.slice(0, 3) // Return top 3 suggestions
  };
}
