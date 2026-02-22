import ProjectCard from './components/ProjectCard'

const projects = [
  {
    title: 'Veronika – Telkomsel Chatbot Orchestration',
    shortDescription:
      'Multi-channel chatbot orchestration platform for high-scale customer interaction across major social and messaging channels.',
    fullDescription:
      'Built a multi-channel chatbot orchestration system handling WhatsApp, Facebook, Instagram, and Telegram. Implemented SSE updates, Redis Pub/Sub fan-out, Kafka event streaming, and gRPC service routing in a Kubernetes environment to ensure resilient message flow and operational scale.',
    tech: ['Java Spring Boot', 'Redis', 'Kafka', 'MySQL', 'Kubernetes', 'gRPC']
  },
  {
    title: 'Ayana CRM – FTTH Coverage & Monitoring',
    shortDescription:
      'CRM and operational visibility platform for FTTH coverage, outage detection, and infrastructure response workflows.',
    fullDescription:
      'Built a CRM platform with Google Maps polygon visualization, ONT remote reboot capability, outage detection, ticketing workflows, and network monitoring for FTTH providers, helping teams move from reactive to proactive operational handling.',
    tech: ['Next.js', 'MySQL', 'Python Microservices', 'Redis', 'Docker']
  },
  {
    title: 'Workforce Management System',
    shortDescription:
      'Mobile-first workforce orchestration for multi-vendor field technicians with real-time communication.',
    fullDescription:
      'Developed a mobile workforce management application for multi-vendor technicians with ticket tracking, WebSocket-based chat, outage handling flows, and an automated WhatsApp rating system to close the service feedback loop.',
    tech: ['Flutter', 'Express.js', 'MySQL', 'Redis', 'WebSocket']
  },
  {
    title: 'Okky Jelly Drink Raffle System',
    shortDescription:
      'Campaign dashboard and consumer engagement microsite optimized for reward distribution at high concurrency.',
    fullDescription:
      'Developed a campaign management dashboard and spin-the-wheel microsite integrated with WhatsApp chatbot workflows. Optimized high-concurrency reward distribution using Redis to keep allocation consistent under burst traffic.',
    tech: ['Nuxt 3', 'NestJS', 'PostgreSQL', 'Redis']
  },
  {
    title: 'MariPOS – Multi-Tenant POS & Mini E-Commerce',
    shortDescription:
      'Scalable multi-tenant commerce platform for transaction processing, logistics integration, and payout automation.',
    fullDescription:
      'Built a multi-tenant POS and mini e-commerce system with payment gateway integration, automated payouts, Mapbox geocoding, and third-party delivery APIs. The architecture supported tenant isolation while keeping operations efficient and extendable.',
    tech: ['Nuxt 3', 'Vue.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Redis']
  }
]

const skills = {
  Backend: ['Java (Spring Boot)', 'Node.js (Express, NestJS)', 'Python'],
  Frontend: ['React', 'Next.js', 'Vue.js', 'Nuxt 3'],
  Mobile: ['Flutter'],
  Database: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  Infrastructure: ['Docker', 'Kubernetes', 'Kafka', 'gRPC', 'SSE'],
  'Real-time': ['WebSocket', 'Redis Pub/Sub']
}

function App() {
  return (
    <div className="min-h-screen">
      <header className="relative overflow-hidden border-b border-slate-200 bg-white grid-backdrop">
        <div className="section-container relative z-10 py-24 md:py-28">
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
        </div>
      </header>

      <main>
        <section id="about" className="section-container">
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">
            I&apos;m a software engineer with experience building distributed systems, chatbot orchestration
            platforms, CRM tools, workforce management systems, and multi-tenant commerce solutions. I
            enjoy solving backend complexity, real-time communication problems, and designing scalable
            architecture.
          </p>
        </section>

        <section id="projects" className="section-container pt-8">
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">
            Engineered systems built for operational resilience, real-time workloads, and production-scale
            business use cases.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
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
                    <li key={item}>• {item}</li>
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
              Open to backend, distributed systems, and fullstack engineering opportunities.
            </p>

            <div className="mt-8 grid gap-4 text-sm text-slate-700 md:grid-cols-3">
              <a
                href="mailto:your.email@example.com"
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-slate-300 hover:bg-white"
              >
                Email: your.email@example.com
              </a>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-slate-300 hover:bg-white"
              >
                LinkedIn: linkedin.com/in/your-profile
              </a>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-slate-300 hover:bg-white"
              >
                GitHub: github.com/your-username
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
