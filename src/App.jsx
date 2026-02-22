import ProjectCard from './components/ProjectCard'
import vero1 from './assets/images/vero-1.png'
import vero2 from './assets/images/vero-2.png'
import ayana1 from './assets/images/ayana-1.jpeg'
import ayana2 from './assets/images/ayana-2.jpeg'
import wfm1 from './assets/images/wfm-1.png'
import wfm2 from './assets/images/wfm-2.png'
import okky1 from './assets/images/okky-1.png'
import okky2 from './assets/images/okky-2.png'
import maripos1 from './assets/images/maripos-1.jpeg'
import maripos2 from './assets/images/maripos-2.jpeg'
const projects = [
  {
    id: 0,
    title: 'Veronika – Telkomsel Chatbot Orchestration',
    shortDescription:
      'Multi-channel chatbot orchestration platform for high-scale customer interaction across major social and messaging channels.',
    fullDescription:
      'Built a multi-channel chatbot orchestration system handling WhatsApp, Facebook, Instagram, and Telegram. Implemented SSE updates, Redis Pub/Sub fan-out, Kafka event streaming, and gRPC service routing in a Kubernetes environment to ensure resilient message flow and operational scale.',
    thumbnails: [
      {
        src: vero1,
        alt: 'Veronika orchestration service topology'
      },
      {
        src: vero2, 
        alt: 'Veronika real-time messaging infrastructure'
      }
    ],
    tech: ['Java Spring Boot', 'Redis', 'Kafka', 'MySQL', 'Kubernetes', 'gRPC']
  },
  {
    id: 1,
    title: 'Ayana CRM – FTTH Coverage & Monitoring',
    shortDescription:
      'CRM and operational visibility platform for FTTH coverage, outage detection, and infrastructure response workflows.',
    fullDescription:
      'Built a CRM platform with Google Maps polygon visualization, ONT remote reboot capability, outage detection, ticketing workflows, and network monitoring for FTTH providers, helping teams move from reactive to proactive operational handling.',
    thumbnails: [
      {
        src: ayana1,
        alt: 'Ayana CRM service coverage map analytics'
      },
      {
        src: ayana2,
        alt: 'Ayana CRM outage monitoring dashboard'
      }
    ],
    tech: ['Next.js', 'MySQL', 'Python Microservices', 'Redis', 'Docker']
  },
  {
    id: 2,
    title: 'Workforce Management System',
    shortDescription:
      'Mobile-first workforce orchestration for multi-vendor field technicians with real-time communication.',
    fullDescription:
      'Developed a mobile workforce management application for multi-vendor technicians with ticket tracking, WebSocket-based chat, outage handling flows, and an automated WhatsApp rating system to close the service feedback loop.',
    thumbnails: [
      {
        src: wfm1,
        alt: 'Workforce app dispatch command center'
      },
      {
        src: wfm2,
        alt: 'Technician ticket tracking mobile workflow'
      }
    ],
    tech: ['Flutter', 'Express.js', 'MySQL', 'Redis', 'WebSocket']
  },
  {
    id: 4,
    title: 'MariPOS – Multi-Tenant POS & Mini E-Commerce',
    shortDescription:
      'Scalable multi-tenant commerce platform for transaction processing, logistics integration, and payout automation.',
    fullDescription:
      'Built a multi-tenant POS and mini e-commerce system with payment gateway integration, automated payouts, Mapbox geocoding, and third-party delivery APIs. The architecture supported tenant isolation while keeping operations efficient and extendable.',
    thumbnails: [
      {
        src: maripos1,
        alt: 'MariPOS multi-tenant operations dashboard'
      },
      {
        src: maripos2,
        alt: 'MariPOS transaction and logistics engine'
      }
    ],
    tech: ['Nuxt 3', 'Vue.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    id: 3,
    title: 'Okky Jelly Drink Raffle System',
    shortDescription:
      'Campaign dashboard and consumer engagement microsite optimized for reward distribution at high concurrency.',
    fullDescription:
      'Developed a campaign management dashboard and spin-the-wheel microsite integrated with WhatsApp chatbot workflows. Optimized high-concurrency reward distribution using Redis to keep allocation consistent under burst traffic.',
    thumbnails: [
      {
        src: okky1,
        alt: 'Campaign administration panel overview'
      },
      {
        src: okky2,
        alt: 'Reward distribution architecture for campaign'
      }
    ],
    tech: ['Nuxt 3', 'NestJS', 'PostgreSQL', 'Redis']
  },
]

const skills = {
  Backend: ['Java (Spring Boot)', 'Node.js (Express, NestJS)', 'Python'],
  Frontend: ['React', 'Next.js', 'Vue.js', 'Nuxt 3'],
  Mobile: ['Flutter'],
  Database: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  Infrastructure: ['Docker', 'Kubernetes', 'Kafka', 'gRPC', 'SSE'],
  'Real-time': ['WebSocket', 'Redis Pub/Sub']
}

const skillIcons = {
  'Java (Spring Boot)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'Node.js (Express, NestJS)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.simpleicons.org/nextdotjs/0F172A',
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Nuxt 3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
  Flutter: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  Redis: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  Kubernetes: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
  Kafka: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
  gRPC: 'https://grpc.io/img/logos/grpc-icon-color.png',
  SSE: 'https://cdn.simpleicons.org/serverless/334155',
  WebSocket: 'https://cdn.simpleicons.org/socketdotio/0F172A',
  'Redis Pub/Sub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
}

function App() {
  return (
    <div className="min-h-screen">
      <header className="relative overflow-hidden border-b border-slate-200 bg-white grid-backdrop">
        <div className="section-container relative z-10 py-24 md:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_320px]">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 shadow-sm">
                Portfolio
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
                Ivallavi Fahrazi
              </h1>
              <p className="mt-4 text-lg font-semibold text-slate-700 md:text-xl">Fullstack Engineer</p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                I build scalable backend systems, real-time applications, and distributed architectures.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-900"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[320px]">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <div className="grid h-64 place-items-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 text-center">
                  <img className='rounded-xl' src="https://media.licdn.com/dms/image/v2/D5603AQEBma0f7iCoLg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699518054288?e=1773273600&v=beta&t=gVX4AGccto5k2gSOqJ7louSw0XVLDK0l42yS2QOzbVI" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section-container">
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">
            I’m a Software Engineer with 3 years of hands-on experience building distributed systems, chatbot orchestration platforms, CRM tools, workforce management systems, and multi-tenant commerce solutions. I focus on backend engineering, real-time communication systems, and designing scalable architectures that can handle real-world production demands.
          </p>
        </section>

        <section id="projects" className="section-container pt-8">
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">
            Engineered systems built for operational resilience, real-time workloads, and production-scale
            business use cases.
          </p>

          <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="skills" className="section-container pt-8">
          <h2 className="section-title">Technical Skills</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <article
                key={category}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft transition hover:shadow-md"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">{category}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <img
                        src={skillIcons[item] ?? 'https://cdn.simpleicons.org/code/334155'}
                        alt={`${item} icon`}
                        className="h-4 w-4"
                        loading="lazy"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-container pt-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft md:p-10">
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle mt-4">
              Open to Fullstack Developer opportunities and distributed systems.
            </p>

            <div className="mt-8 grid gap-4 text-sm text-slate-700 md:grid-cols-3">
              <a
                href="mailto:ivallavif@gmail.com"
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-slate-300 hover:bg-white"
              >
                Email: ivallavif@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/ivallavifahrazi"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-slate-300 hover:bg-white"
              >
                LinkedIn: linkedin.com/in/ivallavifahrazi
              </a>
              <a
                href="https://github.com/valrazi"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-slate-300 hover:bg-white"
              >
                GitHub: github.com/valrazi
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
