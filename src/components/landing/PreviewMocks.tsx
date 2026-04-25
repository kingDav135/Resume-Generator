'use client';

import clsx from 'clsx';

const SECTION_CARDS = [
  {
    title: 'Summary',
    subtitle: 'Value proposition',
    tone: 'lavender',
    body: 'Product marketing leader focused on launch strategy, clearer positioning, and stronger retention storytelling.',
  },
  {
    title: 'Experience',
    subtitle: 'Northstar Cloud',
    tone: 'slate',
    body: 'Led enterprise launch messaging and improved trial-to-paid conversion by 19% across key campaigns.',
  },
  {
    title: 'Projects',
    subtitle: 'Launch narrative system',
    tone: 'rose',
    body: 'Created buyer-specific stories used across demo pages, lifecycle email, and sales enablement decks.',
  },
] as const;

const PREVIEW_SKILLS = ['Go-to-market', 'Enablement', 'Retention', 'Research'];

const TEMPLATE_PREVIEW_CONTENT = {
  editorial: {
    eyebrow: 'Editorial',
    headline: 'Jordan Adebayo',
    subline: 'Product Marketing Manager',
    chips: ['Summary', 'Experience'],
    bodyTitle: 'Selected impact',
    bodyLines: [
      'Improved activation by 19% with sharper launch messaging.',
      'Built enablement assets for enterprise sales cycles.',
      'Refined lifecycle campaigns around adoption and retention.',
    ],
  },
  split: {
    eyebrow: 'Split Grid',
    headline: 'Jordan Adebayo',
    subline: 'PMM with launch and lifecycle depth',
    chips: ['Skills', 'Projects'],
    bodyTitle: 'Focus areas',
    bodyLines: [
      'Positioning and narrative design',
      'Cross-functional launch planning',
      'Retention and expansion messaging',
    ],
  },
  minimal: {
    eyebrow: 'Minimal',
    headline: 'Jordan Adebayo',
    subline: 'San Francisco, CA',
    chips: ['Profile', 'Experience'],
    bodyTitle: 'Highlights',
    bodyLines: [
      'Quiet hierarchy for recruiter scanning',
      'Conservative styling for broad role fit',
      'Readable spacing with tighter content blocks',
    ],
  },
} as const;

function SectionCard({
  title,
  subtitle,
  body,
  tone,
}: {
  title: string;
  subtitle: string;
  body: string;
  tone: 'lavender' | 'slate' | 'rose';
}) {
  const toneClass =
    tone === 'lavender'
      ? 'bg-[#efe8ff] text-[#5b43b6]'
      : tone === 'rose'
        ? 'bg-[#ffe8f0] text-[#c0567b]'
        : 'bg-slate-100 text-slate-500';

  return (
    <div className="rounded-[1.75rem] bg-white p-5 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.35)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
        </div>
        <span className={clsx('rounded-full px-2.5 py-1 text-[11px] font-semibold', toneClass)}>Live</span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">{body}</p>
    </div>
  );
}

export function HeroPreviewPanel() {
  return (
    <div className="rounded-[2.6rem] border border-white/12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 shadow-[0_35px_90px_-35px_rgba(124,58,237,0.45)]">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
        <div className="mb-5 flex items-center justify-between rounded-[1.5rem] border border-white/8 bg-white/5 px-4 py-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/45">ResumeFlow</p>
            <p className="mt-1 text-sm text-white/75">Product Marketing Manager Resume</p>
          </div>
          <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
            Auto-saved
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4 rounded-[1.6rem] bg-white/6 p-4">
            {SECTION_CARDS.map((card, index) => (
              <div
                key={card.title}
                className={clsx(
                  'rounded-2xl p-4',
                  index === 0 ? 'bg-primary/12' : index === 2 ? 'bg-accent/10' : 'bg-white/5'
                )}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/40">
                  {index === 0 ? 'Section 01' : index === 1 ? 'Section 02' : 'Section 03'}
                </p>
                <p className="mt-2 text-sm font-medium text-white/82">{card.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/58">{card.body}</p>
              </div>
            ))}

            <div className="rounded-2xl border border-white/8 px-4 py-3">
              <div className="mb-2 flex items-center justify-between text-sm text-white/65">
                <span>ATS match</span>
                <span>87%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-primary to-accent" />
              </div>
            </div>
          </div>

          <div className="rounded-[1.6rem] bg-white p-6 text-slate-950">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-lg font-black tracking-[-0.03em] text-slate-950">Jordan Adebayo</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                  Product Marketing Manager
                </p>
              </div>
              <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Live preview
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">Summary</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Product marketing leader translating launches, positioning, and lifecycle strategy into measurable
                  growth wins.
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">Experience</p>
                <div className="mt-2 space-y-3">
                  <div className="rounded-[1.1rem] bg-slate-50 p-3.5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-slate-900">Northstar Cloud</p>
                      <span className="text-[11px] text-slate-400">2022 - Present</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Improved launch conversion and supported enterprise sales with stronger messaging.
                    </p>
                  </div>
                  <div className="rounded-[1.1rem] bg-slate-50 p-3.5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-slate-900">Atlas Metrics</p>
                      <span className="text-[11px] text-slate-400">2019 - 2022</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Owned positioning, launch content, and enablement for analytics products.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.25rem] bg-slate-100 p-4">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-slate-400">
                  Suggested strengths
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {PREVIEW_SKILLS.map((item) => (
                    <div key={item} className="rounded-lg bg-white px-3 py-2 text-xs font-medium text-slate-600">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectionReorderPreview() {
  return (
    <div className="rounded-[2rem] border border-border/60 bg-white p-5 shadow-soft backdrop-blur-sm lg:p-6">
      <div className="grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="rounded-[1.8rem] bg-slate-50 p-5">
          <div className="space-y-4">
            {SECTION_CARDS.map((card) => (
              <SectionCard key={card.title} {...card} />
            ))}
          </div>
        </div>

        <div className="rounded-[1.8rem] bg-white p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-lg font-black tracking-[-0.03em] text-slate-950">Jordan Adebayo</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                Product Marketing Manager
              </p>
            </div>
            <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              Preview synced
            </div>
          </div>

          <div className="mt-5 space-y-5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">Summary</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Product marketing leader shaping launches, positioning, and retention stories for SaaS teams.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">Experience</p>
              <div className="mt-2 rounded-[1.35rem] bg-slate-50 p-4">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-900">Northstar Cloud</p>
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                    2022 - Present
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Improved enterprise launch clarity and lifted trial-to-paid conversion with sharper positioning.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.25rem] bg-slate-50 p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">Skills</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {PREVIEW_SKILLS.map((skill) => (
                    <span key={skill} className="rounded-full bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.25rem] bg-slate-50 p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">Projects</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Buyer-story system used across demos, launch emails, and enablement decks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TemplateDirectionPreview({
  variant,
}: {
  variant: 'editorial' | 'split' | 'minimal';
}) {
  const preview = TEMPLATE_PREVIEW_CONTENT[variant];

  return (
    <div className="h-full rounded-[1.35rem] border border-white/20 bg-white/92 p-5 text-slate-900 shadow-[0_22px_45px_-30px_rgba(15,23,42,0.55)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">{preview.eyebrow}</p>
          <p className="mt-2 text-lg font-black tracking-[-0.03em]">{preview.headline}</p>
          <p className="mt-1 text-sm text-slate-500">{preview.subline}</p>
        </div>
        <div className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500">
          Format
        </div>
      </div>

      <div className={clsx('mt-5 grid gap-3', variant === 'minimal' ? 'grid-cols-1' : 'grid-cols-2')}>
        {preview.chips.map((chip) => (
          <div key={chip} className="rounded-[1rem] bg-slate-50 px-3 py-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{chip}</p>
            <p className="mt-2 text-sm text-slate-600">
              {chip === 'Summary' && 'Clear opening statement for fast recruiter scanning.'}
              {chip === 'Experience' && 'Outcome-driven bullets with role and date hierarchy.'}
              {chip === 'Skills' && 'Short capability clusters grouped for quick review.'}
              {chip === 'Projects' && 'Selected proof points tailored to the role.'}
              {chip === 'Profile' && 'Quiet introduction block with compact contact details.'}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-[1.15rem] bg-slate-50 p-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">{preview.bodyTitle}</p>
        <div className="mt-3 space-y-2.5">
          {preview.bodyLines.map((line) => (
            <div key={line} className="rounded-xl bg-white px-3 py-2.5 text-sm text-slate-600">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
