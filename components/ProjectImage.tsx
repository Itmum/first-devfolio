import type { Project } from "@/data/portfolio";

export default function ProjectImage({ project }: { project: Project }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl border border-line bg-bg">
      {project.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={project.image} alt={`${project.title} screenshot`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      ) : (
        <div className="grid h-full place-items-center p-4 text-center text-sm text-muted">
          Add a screenshot at<br />public/projects/{project.slug}.png
        </div>
      )}
    </div>
  );
}
