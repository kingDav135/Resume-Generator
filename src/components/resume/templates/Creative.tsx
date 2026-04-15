import { ResumeData } from '@/store/useResumeStore';
import { Palette } from 'lucide-react';

export function Creative({ data }: { data: ResumeData }) {
  const { basicInfo, experience, education, skills } = data;

  return (
    <div className="flex flex-col h-full bg-white text-slate-800 p-0 overflow-hidden relative font-sans">
      <div className="absolute top-0 right-0 w-2/3 h-64 bg-accent/10 rounded-bl-[200px] -z-0" />
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-primary/20 rounded-full" />

      <div className="relative z-10 p-16">
        <header className="mb-16">
          <div className="inline-block px-4 py-1 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-full mb-6">
            Available for hire
          </div>
          <h1 className="text-6xl font-black text-slate-900 leading-tight mb-4">
            {basicInfo.name || 'Your Name'}<span className="text-primary">.</span>
          </h1>
          <h2 className="text-2xl font-bold text-accent italic">{basicInfo.role || 'Professional Role'}</h2>

          <div className="mt-10 flex gap-10 text-xs font-black uppercase tracking-widest text-slate-400">
            <div className="space-y-2">
              <p className="text-slate-900">Email</p>
              <p>{basicInfo.email || 'Unavailable'}</p>
            </div>
            <div className="space-y-2">
              <p className="text-slate-900">Phone</p>
              <p>{basicInfo.phone || 'Unavailable'}</p>
            </div>
            <div className="space-y-2">
              <p className="text-slate-900">Location</p>
              <p>{basicInfo.location || 'Unavailable'}</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-12">
            <div className="p-8 bg-slate-900 text-white rounded-[40px] flex items-center justify-between shadow-2xl">
              <div className="max-w-2xl">
                <p className="text-lg font-medium leading-relaxed">
                  {basicInfo.summary || 'Describe your creative vision and professional background here...'}
                </p>
              </div>
              <div className="hidden md:flex flex-col items-center gap-2">
                <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center text-white">
                  <Palette size={32} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-accent">Summary</span>
              </div>
            </div>
          </div>

          <div className="col-span-7 space-y-16 mt-10">
            <section>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-3xl font-black text-slate-900">Experience</h3>
                <div className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="space-y-12">
                {experience.map((exp) => (
                  <div key={exp.id} className="group">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-black group-hover:text-primary transition-colors">{exp.role}</h4>
                        <p className="text-accent font-bold">{exp.company}</p>
                      </div>
                      <span className="text-[10px] font-black bg-slate-100 px-3 py-1 rounded-full">{exp.duration}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="col-span-5 space-y-16 mt-10">
            <section>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-3xl font-black text-slate-900">Expertise</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div key={skill} className="px-4 py-3 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-center text-xs font-black uppercase tracking-tighter hover:border-accent/30 transition-all cursor-default">
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-3xl font-black text-slate-900">Learning</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h4 className="font-bold text-slate-900">{edu.degree}</h4>
                    <p className="text-sm text-slate-500">{edu.school}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
