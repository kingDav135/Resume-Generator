import { ResumeData } from '@/store/useResumeStore';

export function ATSReady({ data }: { data: ResumeData }) {
  const { basicInfo, experience, education, skills, projects } = data;

  return (
    <div className="flex flex-col h-full bg-white text-black font-serif p-12 max-width-[800px] mx-auto leading-tight">
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold uppercase mb-1">{basicInfo.name || 'YOUR NAME'}</h1>
        <div className="text-sm font-sans">
          {basicInfo.location && <span>{basicInfo.location} | </span>}
          {basicInfo.phone && <span>{basicInfo.phone} | </span>}
          {basicInfo.email && <span>{basicInfo.email}</span>}
        </div>
      </header>

      <div className="space-y-6">
        {/* Summary */}
        {basicInfo.summary && (
          <section>
            <h3 className="text-sm font-bold uppercase border-b border-black mb-2 font-sans tracking-wider">Professional Summary</h3>
            <p className="text-sm text-black leading-snug">
              {basicInfo.summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h3 className="text-sm font-bold uppercase border-b border-black mb-3 font-sans tracking-wider">Work Experience</h3>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between font-bold text-sm">
                    <span>{exp.company}</span>
                    <span>{exp.duration}</span>
                  </div>
                  <div className="italic text-sm mb-1">{exp.role}</div>
                  <div className="text-sm text-black whitespace-pre-line pl-0 ml-0 italic-none">
                    {exp.description}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section>
            <h3 className="text-sm font-bold uppercase border-b border-black mb-3 font-sans tracking-wider">Education</h3>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between text-sm">
                  <div>
                    <span className="font-bold">{edu.school}</span>, {edu.degree}
                  </div>
                  <span className="font-bold">{edu.duration}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <section>
            <h3 className="text-sm font-bold uppercase border-b border-black mb-2 font-sans tracking-wider">Skills</h3>
            <p className="text-sm leading-snug">
              <span className="font-bold">Relevant Skills: </span>
              {skills.join(', ')}
            </p>
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <h3 className="text-sm font-bold uppercase border-b border-black mb-2 font-sans tracking-wider">Projects</h3>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="text-sm">
                  <span className="font-bold">{proj.name}: </span>
                   {proj.description}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
