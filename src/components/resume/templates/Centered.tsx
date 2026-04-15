import { ResumeData } from '@/store/useResumeStore';

export function Centered({ data }: { data: ResumeData }) {
  const { basicInfo, experience, education, skills } = data;

  return (
    <div className="flex flex-col h-full bg-white text-slate-800 font-sans p-16 items-center text-center">
      <header className="mb-12 space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tighter text-slate-900">{basicInfo.name || 'Your Name'}</h1>
        <h2 className="text-xl font-bold text-primary uppercase tracking-widest">{basicInfo.role || 'Professional Role'}</h2>
        <div className="flex justify-center gap-4 text-xs font-bold text-slate-400 uppercase">
          {basicInfo.location && <span>{basicInfo.location}</span>}
          <span>&bull;</span>
          {basicInfo.phone && <span>{basicInfo.phone}</span>}
          <span>&bull;</span>
          {basicInfo.email && <span>{basicInfo.email}</span>}
        </div>
      </header>

      <div className="w-full max-w-4xl space-y-16">
        {basicInfo.summary && (
          <section className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-300">Profile</h3>
            <p className="text-lg text-slate-600 leading-relaxed font-serif max-w-2xl mx-auto">
              {basicInfo.summary}
            </p>
          </section>
        )}

        {experience.length > 0 && (
          <section className="space-y-10">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-300">Experience</h3>
            <div className="space-y-12 text-left">
              {experience.map((exp) => (
                <div key={exp.id} className="text-center">
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{exp.role}</h4>
                  <p className="text-primary font-bold mb-4">{exp.company} <span className="text-slate-300 mx-2">/</span> {exp.duration}</p>
                  <div className="text-sm text-slate-600 leading-relaxed max-w-3xl mx-auto">
                    {exp.description}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-2 gap-16 border-t border-slate-100 pt-16">
          {education.length > 0 && (
            <section className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-300">Education</h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h4 className="font-bold text-slate-900 text-sm">{edu.degree}</h4>
                    <p className="text-slate-600 text-xs">{edu.school}</p>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">{edu.duration}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {skills.length > 0 && (
            <section className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-300">Skills</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded bg-slate-50 border border-slate-100 text-slate-700 text-[10px] font-black uppercase">
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
