import Image from "next/image";
import Link from "next/link";
import ProjectImage from "@/components/ProjectImage";
import { profile, skills, projects, experience, education } from "@/data/portfolio";

const wrap = "mx-auto max-w-6xl px-5";
const h2 = "text-3xl font-extrabold tracking-tight md:text-4xl";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className={`${wrap} grid min-h-screen items-center gap-12 pb-16 pt-28 md:grid-cols-[1.2fr_1fr]`}>
        <div>
          <p className="rise chip inline-flex items-center gap-2" style={{ "--i": 0 } as React.CSSProperties}>
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> {profile.availability}
          </p>
          <h1 className="rise mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl" style={{ "--i": 1 } as React.CSSProperties}>
            {profile.name}
          </h1>
          <p className="rise mt-4 text-xl font-semibold text-accent md:text-2xl" style={{ "--i": 2 } as React.CSSProperties}>{profile.headline}</p>
          <p className="rise mt-5 max-w-xl leading-relaxed text-muted" style={{ "--i": 3 } as React.CSSProperties}>
            CSE student at ULAB in Dhaka. I build responsive web apps with Next.js, React and TypeScript, and I&apos;m learning backend development.
          </p>
          <div className="rise mt-8 flex flex-wrap gap-3" style={{ "--i": 4 } as React.CSSProperties}>
            <Link href="/#projects" className="btn btn-primary">View projects</Link>
            <a href={profile.resume} download className="btn btn-ghost">Download CV</a>
            <Link href="/#contact" className="btn btn-ghost">Contact me</Link>
          </div>
        </div>
        <div className="rise relative mx-auto w-full max-w-sm" style={{ "--i": 3 } as React.CSSProperties}>
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[999px] rounded-b-3xl border-2 border-accent/60" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl border border-line bg-card">
            <Image src={profile.photo} alt={`Portrait of ${profile.name}`} width={800} height={1000} priority className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className={`${wrap} py-20`}>
        <h2 className={h2}>About me</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <p className="max-w-prose leading-relaxed text-muted">{profile.bio}</p>
          <dl className="card grid gap-4 p-6 text-sm">
            <div><dt className="text-muted">Studying</dt><dd className="font-semibold">CSE at ULAB, graduating 2028</dd></div>
            <div><dt className="text-muted">Based in</dt><dd className="font-semibold">{profile.location}</dd></div>
            <div><dt className="text-muted">Learning now</dt><dd className="font-semibold">Node.js, Express and MongoDB</dd></div>
          </dl>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className={`${wrap} py-20`}>
        <h2 className={h2}>Skills</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {skills.map((g) => (
            <div key={g.group} className="card card-hover p-6">
              <h3 className="font-bold">{g.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => <span key={s} className="chip">{s}</span>)}
                {g.learning?.map((s) => <span key={s} className="chip chip-learning">{s} (learning)</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className={`${wrap} py-20`}>
        <h2 className={h2}>Projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.slug} className="card card-hover group flex flex-col p-4">
              <ProjectImage project={p} />
              <div className="flex flex-1 flex-col p-2 pt-5">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.slice(0, 4).map((t) => <span key={t} className="chip">{t}</span>)}
                </div>
                <div className="mt-5 flex gap-3">
                  <Link href={`/projects/${p.slug}`} className="btn btn-ghost">Details</Link>
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience and education */}
      <section id="background" className={`${wrap} grid gap-12 py-20 md:grid-cols-2`}>
        <div>
          <h2 className={h2}>Experience</h2>
          {experience.map((e) => (
            <div key={e.org} className="mt-8 border-l-2 border-accent pl-5">
              <h3 className="font-bold">{e.role}</h3>
              <p className="text-sm text-muted">{e.org}, {e.period}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                {e.points.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h2 className={h2}>Education</h2>
          <div className="mt-8 space-y-6">
            {education.map((e) => (
              <div key={e.school} className="border-l-2 border-line pl-5 transition-colors hover:border-accent">
                <h3 className="font-bold">{e.school}</h3>
                <p className="text-sm text-muted">{e.detail}</p>
                <p className="text-sm text-muted">{e.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={`${wrap} py-20`}>
        <div className="card p-8 text-center md:p-14">
          <h2 className={h2}>Let&apos;s work together</h2>
          <p className="mx-auto mt-4 max-w-md text-muted">I&apos;m looking for internships and entry-level roles. The fastest way to reach me is email.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">{profile.email}</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.
      </footer>
    </main>
  );
}
