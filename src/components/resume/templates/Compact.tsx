import { ResumeData } from '@/store/useResumeStore';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Compact({ data }: { data: ResumeData }) {
  const { basicInfo, experience, education, skills, projects } = data;

  return (
    <div className="flex flex-col h-full bg-white text-slate-800 font-sans p-10 leading-snug">
      <header className="flex justify-between items-end border-b-2 border-slate-900 pb-4 mb-4">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight text-slate-900">{basicInfo.name || 'Your Name'}</h1>
          <h2 className="text-base font-bold text-primary">{basicInfo.role || 'Professional Role'}</h2>
        </div>
        <div className="text-right text-[10px] font-bold text-slate-500 uppercase flex flex-col items-end gap-0.5">
          {basicInfo.location && <span>{basicInfo.location}</span>}
          {basicInfo.phone && <span>{basicInfo.phone}</span>}
          {basicInfo.email && <span>{basicInfo.email}</span>}
        </div>
      </header>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 space-y-6">
          {/* Summary */}
          {basicInfo.summary && (
            <section>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-2">Profile</h3>
              <p className="text-sm text-slate-600 leading-tight">
                {basicInfo.summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <section>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-4">Professional Experience</h3>
              <div className="space-y-4">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-sm font-bold text-slate-900">{exp.role} @ {exp.company}</h4>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{exp.duration}</span>
                    </div>
                    <div className="text-xs text-slate-600 leading-tight whitespace-pre-line pl-2 border-l border-slate-200">
                      {exp.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-4">Key Projects</h3>
              <div className="grid grid-cols-2 gap-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-3 bg-slate-50 rounded-lg">
                    <h4 className="text-xs font-bold text-slate-900 mb-1">{proj.name}</h4>
                    <p className="text-[11px] text-slate-600 leading-tight">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="col-span-4 space-y-8 bg-slate-50 p-6 rounded-2xl h-fit">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span key={skill} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600 text-[9px] font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Academic Background</h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h4 className="font-bold text-slate-900 text-[11px] mb-0.5">{edu.degree}</h4>
                    <p className="text-slate-500 text-[10px] mb-0.5">{edu.school}</p>
                    <span className="text-[9px] text-slate-400 font-bold uppercase">{edu.duration}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
