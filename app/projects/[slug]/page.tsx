import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectImage from "@/components/ProjectImage";
import { projects } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p ? `${p.title} | Itmum Sadiq Rahman` : "Project not found", description: p?.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <main className="mx-auto max-w-4xl px-5 pb-20 pt-28">
      <Link href="/#projects" className="text-sm text-muted transition-colors hover:text-accent">Back to projects</Link>
      <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">{p.title}</h1>
      {p.subtitle && <p className="mt-2 text-lg text-accent">{p.subtitle}</p>}
      <div className="mt-6 flex gap-3">
        <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live site</a>
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">GitHub</a>
      </div>
      <div className="group mt-10"><ProjectImage project={p} /></div>
      <p className="mt-10 max-w-prose leading-relaxed text-muted">{p.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="chip">{t}</span>)}</div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <section className="card p-6">
          <h2 className="text-xl font-bold">Features</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
        </section>
        <section className="card p-6">
          <h2 className="text-xl font-bold">What I learned</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">{p.learned.map((f) => <li key={f}>{f}</li>)}</ul>
        </section>
      </div>
    </main>
  );
}
