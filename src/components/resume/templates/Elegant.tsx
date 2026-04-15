import { ResumeData } from '@/store/useResumeStore';

export function Elegant({ data }: { data: ResumeData }) {
  const { basicInfo, experience, education, skills } = data;

  return (
    <div className="flex flex-col h-full bg-white text-slate-900 font-serif p-20 border-[20px] border-slate-50">
      <header className="text-center mb-16 space-y-4">
        <h1 className="text-5xl font-light tracking-[0.1em] uppercase text-slate-800 border-b border-slate-100 pb-8 mx-auto w-fit">{basicInfo.name || 'Your Name'}</h1>
        <h2 className="text-lg font-medium text-slate-400 italic tracking-widest">{basicInfo.role || 'Professional Role'}</h2>
        <div className="flex justify-center gap-8 text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em] font-sans">
          {basicInfo.email && <span>{basicInfo.email}</span>}
          {basicInfo.phone && <span>{basicInfo.phone}</span>}
          {basicInfo.location && <span>{basicInfo.location}</span>}
        </div>
      </header>

      <div className="space-y-16 max-w-3xl mx-auto">
        {/* Summary */}
        {basicInfo.summary && (
          <section className="text-center">
            <p className="text-lg text-slate-600 leading-relaxed font-serif italic italic-none px-12">
              &quot;{basicInfo.summary}&quot;
            </p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section className="space-y-12">
            <div className="flex items-center justify-center gap-4 mb-10 font-sans">
               <div className="h-px w-10 bg-slate-200" />
               <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Chronicle</h3>
               <div className="h-px w-10 bg-slate-200" />
            </div>
            <div className="space-y-12">
              {experience.map((exp) => (
                <div key={exp.id} className="space-y-4">
                  <div className="flex justify-between items-baseline border-b border-slate-50 pb-2">
                    <h4 className="text-xl font-bold text-slate-800">{exp.role}</h4>
                    <span className="text-[10px] font-bold text-slate-300 font-sans uppercase tracking-widest">{exp.duration}</span>
                  </div>
                  <p className="text-sm font-bold text-slate-400 font-sans italic">{exp.company}</p>
                  <div className="text-sm text-slate-600 leading-relaxed indent-8">
                    {exp.description}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-2 gap-16 border-t border-slate-100 pt-16 font-sans">
            {/* Education */}
            {education.length > 0 && (
            <section className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">Background</h3>
                <div className="space-y-6">
                {education.map((edu) => (
                    <div key={edu.id}>
                    <h4 className="font-bold text-slate-800 text-sm">{edu.degree}</h4>
                    <p className="text-slate-500 text-xs">{edu.school}</p>
                    <span className="text-[9px] text-slate-300 font-bold uppercase">{edu.duration}</span>
                    </div>
                ))}
                </div>
            </section>
            )}

            {/* Skills */}
            {skills.length > 0 && (
            <section className="space-y-6 text-right">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">Expertise</h3>
                <div className="flex flex-col gap-2">
                {skills.map((skill) => (
                    <span key={skill} className="text-xs text-slate-600 font-medium">
                    {skill}
                    </span>
                ))}
                </div>
            </section>
            )}
        </div>
      </div>
    </div>
  );
}
