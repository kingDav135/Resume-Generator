import { ResumeData } from '@/store/useResumeStore';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Code2, Link as LinkIcon, User } from 'lucide-react';

export function Sidebar({ data }: { data: ResumeData }) {
  const { basicInfo, experience, education, skills, projects } = data;

  return (
    <div className="flex flex-row h-full bg-white text-slate-800 font-sans min-h-[297mm]">
      {/* Sidebar - Right side for a change? Or traditional left? Let's do Left. */}
      <aside className="w-[30%] bg-slate-800 text-white p-12 flex flex-col gap-12">
        <div className="space-y-6">
          {basicInfo.profileImage ? (
            <div className="h-40 w-40 rounded-full border-4 border-slate-700 mx-auto overflow-hidden shadow-2xl">
              <img src={basicInfo.profileImage} alt={basicInfo.name} className="h-full w-full object-cover" />
            </div>
          ) : (
            <div className="h-40 w-40 rounded-full bg-slate-700 mx-auto flex items-center justify-center text-slate-500">
               <User size={64} />
            </div>
          )}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-black tracking-tight">{basicInfo.name || 'Your Name'}</h1>
            <p className="text-slate-400 font-bold uppercase text-xs tracking-[0.2em]">{basicInfo.role || 'Professional Role'}</p>
          </div>
        </div>

        <section className="space-y-6">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 border-b border-slate-700 pb-2">Contact</h3>
          <div className="space-y-4 text-xs font-medium text-slate-300">
            {basicInfo.email && (
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-primary" />
                <span className="break-all">{basicInfo.email}</span>
              </div>
            )}
            {basicInfo.phone && (
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-primary" />
                <span>{basicInfo.phone}</span>
              </div>
            )}
            {basicInfo.location && (
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-primary" />
                <span>{basicInfo.location}</span>
              </div>
            )}
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 border-b border-slate-700 pb-2">Skills</h3>
          <div className="flex flex-col gap-3">
            {skills.map((skill) => (
              <div key={skill} className="flex flex-col gap-1.5">
                <div className="flex justify-between text-[10px] items-center">
                   <span className="font-black uppercase text-slate-200">{skill}</span>
                </div>
                <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                   <div className="h-full bg-primary w-4/5 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 border-b border-slate-700 pb-2">Education</h3>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id}>
                <h4 className="font-bold text-xs text-slate-100">{edu.degree}</h4>
                <p className="text-[10px] text-slate-400 mt-1">{edu.school}</p>
                <p className="text-[10px] font-bold text-slate-500 mt-1 italic">{edu.duration}</p>
              </div>
            ))}
          </div>
        </section>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-16 space-y-12">
        {basicInfo.summary && (
          <section className="space-y-4">
             <h3 className="text-lg font-black text-slate-800 uppercase tracking-tighter flex items-center gap-2">
                <div className="h-6 w-1 bg-primary" /> Profile
             </h3>
             <p className="text-slate-600 leading-relaxed">
               {basicInfo.summary}
             </p>
          </section>
        )}

        {experience.length > 0 && (
          <section className="space-y-8">
            <h3 className="text-lg font-black text-slate-800 uppercase tracking-tighter flex items-center gap-2">
                <div className="h-6 w-1 bg-primary" /> Work Experience
            </h3>
            <div className="space-y-10">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-4">
                    <div>
                        <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                        <p className="text-primary font-bold text-sm tracking-tight">{exp.company}</p>
                    </div>
                    <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100 uppercase">{exp.duration}</span>
                  </div>
                  <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {projects.length > 0 && (
          <section className="space-y-8">
            <h3 className="text-lg font-black text-slate-800 uppercase tracking-tighter flex items-center gap-2">
                <div className="h-6 w-1 bg-primary" /> Projects
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {projects.map((proj) => (
                <div key={proj.id} className="relative pl-6">
                  <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-primary" />
                  <div className="flex items-center gap-2 mb-2">
                     <h4 className="font-bold text-slate-800">{proj.name}</h4>
                     {proj.link && <LinkIcon size={12} className="text-slate-300" />}
                  </div>
                  <p className="text-sm text-slate-600">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
