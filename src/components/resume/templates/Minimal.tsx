import { ResumeData } from '@/store/useResumeStore';

export function Minimal({ data }: { data: ResumeData }) {
  const { basicInfo, experience, education, skills } = data;

  return (
    <div className="flex flex-col h-full bg-white text-zinc-900 font-sans p-16">
      <header className="mb-16 border-b border-zinc-100 pb-12">
        <h1 className="text-4xl font-light tracking-tight mb-2">{basicInfo.name || 'Your Name'}</h1>
        <h2 className="text-xl text-zinc-500 mb-8">{basicInfo.role || 'Your Professional Title'}</h2>
        
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs text-zinc-400 font-medium">
          {basicInfo.email && <span>{basicInfo.email}</span>}
          {basicInfo.phone && <span>{basicInfo.phone}</span>}
          {basicInfo.location && <span>{basicInfo.location}</span>}
        </div>
      </header>

      <div className="grid grid-cols-12 gap-16">
        <div className="col-span-8 space-y-16">
          {/* Summary */}
          {basicInfo.summary && (
            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-300 mb-6 italic">Profile</h3>
              <p className="text-base text-zinc-600 leading-relaxed font-serif">
                {basicInfo.summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-300 mb-8">Experience</h3>
              <div className="space-y-12">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-4">
                      <h4 className="text-lg font-bold">{exp.role}</h4>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{exp.duration}</span>
                    </div>
                    <p className="text-sm font-bold text-zinc-400 mb-4">{exp.company}</p>
                    <div className="text-sm text-zinc-600 leading-relaxed max-w-prose">
                      {exp.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="col-span-4 space-y-16">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-300 mb-8">Skills</h3>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill} className="text-sm text-zinc-600 flex items-center justify-between border-b border-zinc-50 pb-2">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-300 mb-8">Education</h3>
              <div className="space-y-8">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h4 className="text-sm font-bold mb-1">{edu.degree}</h4>
                    <p className="text-xs text-zinc-500 mb-2">{edu.school}</p>
                    <span className="text-[10px] font-bold text-zinc-300 uppercase">{edu.duration}</span>
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
