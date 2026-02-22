import { useState } from 'react'

const techIcons = {
  'Java Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  Redis: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  Kafka: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  Kubernetes: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
  gRPC: 'https://grpc.io/img/logos/grpc-icon-color.png',
  'Next.js': 'https://cdn.simpleicons.org/nextdotjs/0F172A',
  'Python Microservices': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  Flutter: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  WebSocket: 'https://cdn.simpleicons.org/socketdotio/0F172A',
  'Nuxt 3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
  NestJS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
}

function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          {project.thumbnails.map((thumbnail) => (
            <img
              key={thumbnail.alt}
              src={thumbnail.src}
              alt={thumbnail.alt}
              className="h-28 w-full rounded-xl border border-slate-200 object-cover md:h-32"
              loading="lazy"
            />
          ))}
        </div>

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
            isOpen ? 'max-h-[34rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-slate-100 pt-4">
            <p className="text-sm leading-7 text-slate-700">{project.fullDescription}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  <img
                    src={techIcons[item] ?? 'https://cdn.simpleicons.org/code/334155'}
                    alt={`${item} icon`}
                    className="h-3.5 w-3.5"
                    loading="lazy"
                  />
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
