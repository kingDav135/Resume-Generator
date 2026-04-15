import { ResumeData } from '@/store/useResumeStore';

export function Professional({ data }: { data: ResumeData }) {
  const { basicInfo, experience, education, skills } = data;

  return (
    <div className="flex flex-col h-full bg-white text-slate-800 font-serif p-16">
      <header className="text-center border-b-2 border-slate-800 pb-10 mb-10">
        <h1 className="text-4xl font-bold uppercase tracking-tight mb-4">{basicInfo.name || 'Your Name'}</h1>
        <div className="flex justify-center gap-6 text-sm font-sans text-slate-500">
          {basicInfo.location && <span>{basicInfo.location}</span>}
          {basicInfo.phone && <span>{basicInfo.phone}</span>}
          {basicInfo.email && <span>{basicInfo.email}</span>}
        </div>
      </header>

      <div className="space-y-10">
        {/* Summary */}
        {basicInfo.summary && (
          <section>
            <h3 className="text-sm font-bold uppercase border-b border-slate-200 pb-1 mb-4 font-sans text-slate-900">Summary</h3>
            <p className="text-base text-slate-700 leading-relaxed">
              {basicInfo.summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h3 className="text-sm font-bold uppercase border-b border-slate-200 pb-1 mb-6 font-sans text-slate-900">Professional Experience</h3>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline font-sans mb-2">
                    <div className="flex gap-2 items-baseline">
                        <span className="font-bold text-slate-900">{exp.company}</span>
                        <span className="text-slate-400">|</span>
                        <span className="font-semibold text-slate-700">{exp.role}</span>
                    </div>
                    <span className="text-xs text-slate-500 font-bold">{exp.duration}</span>
                  </div>
                  <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line pl-4 border-l-2 border-slate-50">
                    {exp.description}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-2 gap-10">
            {/* Education */}
            {education.length > 0 && (
            <section>
                <h3 className="text-sm font-bold uppercase border-b border-slate-200 pb-1 mb-4 font-sans text-slate-900">Education</h3>
                <div className="space-y-4">
                {education.map((edu) => (
                    <div key={edu.id}>
                    <h4 className="font-bold text-slate-900 text-sm">{edu.school}</h4>
                    <p className="text-slate-600 text-xs">{edu.degree}</p>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">{edu.duration}</span>
                    </div>
                ))}
                </div>
            </section>
            )}

            {/* Skills */}
            {skills.length > 0 && (
            <section>
                <h3 className="text-sm font-bold uppercase border-b border-slate-200 pb-1 mb-4 font-sans text-slate-900">Skills</h3>
                <div className="flex flex-wrap gap-2 font-sans">
                {skills.map((skill) => (
                    <span key={skill} className="text-xs text-slate-700 bg-slate-50 px-2 py-1 rounded">
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
