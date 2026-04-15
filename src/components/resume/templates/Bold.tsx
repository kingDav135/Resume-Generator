import { ResumeData } from '@/store/useResumeStore';

export function Bold({ data }: { data: ResumeData }) {
  const { basicInfo, experience, education, skills } = data;

  return (
    <div className="flex flex-col h-full bg-slate-950 text-white font-sans overflow-hidden">
      <header className="p-20 bg-primary shadow-2xl relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-black/10 skew-x-[-20deg] origin-top translate-x-12" />
        <div className="relative z-10 space-y-4">
          <h1 className="text-7xl font-black italic uppercase tracking-tighter leading-none">{basicInfo.name || 'Your Name'}</h1>
          <h2 className="text-2xl font-black text-black/50 uppercase tracking-widest">{basicInfo.role || 'Professional Role'}</h2>
          
          <div className="pt-8 flex gap-8 text-xs font-black uppercase tracking-widest text-white/70">
            {basicInfo.email && <span>{basicInfo.email}</span>}
            {basicInfo.phone && <span>{basicInfo.phone}</span>}
            {basicInfo.location && <span>{basicInfo.location}</span>}
          </div>
        </div>
      </header>

      <div className="flex-1 grid grid-cols-12">
        <div className="col-span-8 p-20 space-y-20">
          {/* Summary */}
          {basicInfo.summary && (
            <section className="space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tighter text-primary italic underline underline-offset-8 decoration-4">The Pitch</h3>
              <p className="text-xl font-medium leading-relaxed text-slate-300">
                {basicInfo.summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <section className="space-y-12">
              <h3 className="text-xl font-black uppercase tracking-tighter text-primary italic underline underline-offset-8 decoration-4">The Journey</h3>
              <div className="space-y-16">
                {experience.map((exp) => (
                  <div key={exp.id} className="relative pl-12">
                    <div className="absolute left-0 top-2 h-6 w-6 bg-primary rotate-45" />
                    <div className="flex justify-between items-baseline mb-6">
                      <div>
                        <h4 className="text-2xl font-black italic uppercase text-white">{exp.role}</h4>
                        <p className="text-slate-400 font-black uppercase tracking-widest text-sm">{exp.company}</p>
                      </div>
                      <span className="text-[10px] font-black bg-white/5 px-3 py-1 rounded text-primary border border-primary/20">{exp.duration}</span>
                    </div>
                    <div className="text-lg text-slate-400 leading-relaxed font-medium">
                      {exp.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="col-span-4 bg-white/5 p-20 border-l border-white/5 space-y-20">
          {/* Skills */}
          {skills.length > 0 && (
            <section className="space-y-8">
              <h3 className="text-lg font-black uppercase tracking-widest text-slate-500">Arsenal</h3>
              <div className="flex flex-col gap-4">
                {skills.map((skill) => (
                  <div key={skill} className="flex flex-col gap-1.5">
                    <span className="text-sm font-black uppercase italic text-primary">{skill}</span>
                    <div className="h-1.5 w-full bg-white/10 rounded-full">
                       <div className="h-full bg-primary w-[85%] rounded-full shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section className="space-y-8">
              <h3 className="text-lg font-black uppercase tracking-widest text-slate-500">Foundation</h3>
              <div className="space-y-8">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h4 className="font-black italic text-white text-base leading-tight uppercase mb-2">{edu.degree}</h4>
                    <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">{edu.school}</p>
                    <p className="text-primary font-black text-[10px] mt-2 italic uppercase">{edu.duration}</p>
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
