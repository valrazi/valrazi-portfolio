import { useState } from 'react'

function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-slate-900 md:text-xl">{project.title}</h3>
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-600 transition hover:border-slate-500 hover:text-slate-900"
          >
            {isOpen ? 'Hide details' : 'View details'}
          </button>
        </div>

        <p className="text-sm leading-7 text-slate-600">{project.shortDescription}</p>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-slate-100 pt-4">
            <p className="text-sm leading-7 text-slate-700">{project.fullDescription}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
