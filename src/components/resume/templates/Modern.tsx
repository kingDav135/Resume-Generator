import { ResumeData } from '@/store/useResumeStore';
import { Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, Code2, Sparkles, User } from 'lucide-react';

export function Modern({ data }: { data: ResumeData }) {
  const { basicInfo, experience, education, skills, projects } = data;

  return (
    <div className="flex flex-col h-full bg-white text-slate-800 font-sans">
      {/* Header */}
      <header className="p-10 bg-gradient-to-br from-indigo-900 to-primary text-white">
        <div className="flex justify-between items-start">
          <div className="space-y-4">
            <h1 className="text-5xl font-black tracking-tight">{basicInfo.name || 'Your Name'}</h1>
            <h2 className="text-2xl font-medium text-primary-foreground/80">{basicInfo.role || 'Your Professional Title'}</h2>
            <p className="max-w-2xl text-primary-foreground/70 leading-relaxed font-medium">
              {basicInfo.tagline || 'Your short tagline goes here...'}
            </p>
          </div>
          {basicInfo.profileImage && (
            <div className="h-24 w-24 rounded-2xl border-4 border-white/20 overflow-hidden shadow-xl">
               <img src={basicInfo.profileImage} alt={basicInfo.name} className="h-full w-full object-cover" />
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-white/80">
          {basicInfo.email && (
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-accent" />
              <span>{basicInfo.email}</span>
            </div>
          )}
          {basicInfo.phone && (
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-accent" />
              <span>{basicInfo.phone}</span>
            </div>
          )}
          {basicInfo.location && (
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-accent" />
              <span>{basicInfo.location}</span>
            </div>
          )}
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Main Content */}
        <div className="flex-1 p-10 space-y-10 overflow-y-auto">
          {/* Summary */}
          {basicInfo.summary && (
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b-2 border-slate-100 pb-2">
                <Sparkles size={20} className="text-primary" />
                <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900">Professional Summary</h3>
              </div>
              <p className="text-slate-600 leading-relaxed italic">
                {basicInfo.summary}
              </p>
            </section>
          )}

          {/* Work Experience */}
          {experience.length > 0 && (
            <section className="space-y-6">
              <div className="flex items-center gap-2 border-b-2 border-slate-100 pb-2">
                <Briefcase size={20} className="text-primary" />
                <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900">Experience</h3>
              </div>
              <div className="space-y-8">
                {experience.map((exp) => (
                  <div key={exp.id} className="relative pl-6 border-l-2 border-primary/20">
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-white" />
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-slate-900">{exp.role}</h4>
                        <p className="text-primary font-semibold text-sm">{exp.company}</p>
                      </div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter bg-slate-50 px-2 py-1 rounded">
                        {exp.duration}
                      </span>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <section className="space-y-6">
              <div className="flex items-center gap-2 border-b-2 border-slate-100 pb-2">
                <Code2 size={20} className="text-primary" />
                <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900">Key Projects</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-900 text-sm">{proj.name}</h4>
                      {proj.link && < Globe size={14} className="text-primary" />}
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="w-80 p-10 bg-slate-50 space-y-10 border-l border-slate-100 overflow-y-auto">
          {/* Skills */}
          {skills.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b-2 border-slate-200 pb-2">
                <Code2 size={18} className="text-primary" />
                <h3 className="font-bold text-sm uppercase tracking-wider text-slate-900">Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b-2 border-slate-200 pb-2">
                <GraduationCap size={18} className="text-primary" />
                <h3 className="font-bold text-sm uppercase tracking-wider text-slate-900">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h4 className="font-bold text-slate-900 text-sm">{edu.degree}</h4>
                    <p className="text-slate-600 text-xs mb-1">{edu.school}</p>
                    <span className="text-[10px] font-bold text-slate-400 tracking-tighter uppercase">{edu.duration}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </aside>
      </div>
    </div>
  );
}
