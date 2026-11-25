import {
  SiGithub,
  SiExpress,
  SiNodedotjs,
  SiVite,
  SiMongodb,
  SiXampp,
  SiReact,
  SiPython,
} from 'react-icons/si'

const technologies = [
  {
    name: 'GitHub',
    icon: SiGithub,
    detail: 'Version control',
    iconColor: '#171925',
    accent: 'from-[#171925] to-[#697243]',
    number: '01',
  },
  {
    name: 'Express',
    icon: SiExpress,
    detail: 'Backend API',
    iconColor: '#171925',
    accent: 'from-[#697243] to-[#84e8ce]',
    number: '02',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    detail: 'Server runtime',
    iconColor: '#3c873a',
    accent: 'from-[#84e8ce] to-[#d9ff72]',
    number: '03',
  },
  {
    name: 'Vite',
    icon: SiVite,
    detail: 'Build tool',
    iconColor: '#646cff',
    accent: 'from-[#8b7cff] to-[#84e8ce]',
    number: '04',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    detail: 'Database',
    iconColor: '#47a248',
    accent: 'from-[#697243] to-[#d9ff72]',
    number: '05',
  },
  {
    name: 'XAMPP',
    icon: SiXampp,
    detail: 'Local server',
    iconColor: '#fb7a24',
    accent: 'from-[#ff9566] to-[#d9ff72]',
    number: '06',
  },
  {
    name: 'React Native',
    icon: SiReact,
    detail: 'Mobile apps',
    iconColor: '#61dafb',
    accent: 'from-[#84e8ce] to-[#8b7cff]',
    number: '07',
  },
  {
    name: 'Python',
    icon: SiPython,
    detail: 'Automation',
    iconColor: '#3776ab',
    accent: 'from-[#5e88cc] to-[#d9ff72]',
    number: '08',
  },
]

function Services() {
  return (
    <section
      id="services"
      data-reveal
      className="relative flex min-h-[calc(100vh-82px)] scroll-mt-[82px] items-center overflow-hidden px-8 py-16 max-lg:px-6 max-md:min-h-[calc(100vh-72px)] max-md:px-5 max-md:py-14"
    >
      <div className="pointer-events-none absolute left-[7%] top-[16%] size-44 rounded-full bg-[#d9ff72]/12 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-[8%] right-[8%] size-52 rounded-full bg-[#8b7cff]/10 blur-[90px]" />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-col items-center">
        <div className="reveal-left relative max-w-[680px] text-center">
          <div className="absolute left-1/2 top-[55%] -z-10 h-32 w-[520px] -translate-x-1/2 rounded-full bg-white/45 blur-3xl" />
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#697243]" />
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#697243]">
              Technologies
            </p>
          </div>

          <h2 className="text-[clamp(38px,4.5vw,64px)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#171925]">
            Tools I use to build
            <span className="block text-[#697243]">modern products.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-8 text-[#62665f]">
            From responsive interfaces to scalable APIs and mobile applications,
            I use reliable tools that help turn ideas into polished digital experiences.
          </p>

          <a
            href="#project"
            className="group mt-8 inline-flex min-h-[46px] items-center gap-2.5 rounded-full bg-[#171925] px-5 text-[13px] font-semibold text-white no-underline shadow-[0_12px_28px_rgba(23,25,37,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#697243] active:scale-95"
          >
            Explore My Work
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <div className="reveal-right tech-marquee mt-12 w-screen max-w-none overflow-hidden py-5">
          <div className="tech-marquee-track flex w-max items-stretch gap-4">
            {[...technologies, ...technologies].map((technology, index) => (
              <article
                key={`${technology.name}-${index}`}
                aria-hidden={index >= technologies.length}
                className="group relative w-[280px] min-h-[148px] shrink-0 overflow-hidden rounded-[24px] border border-white/80 bg-white/65 p-5 text-left shadow-[0_18px_44px_rgba(23,25,37,0.08)] backdrop-blur-xl transition-[transform,border-color,box-shadow,background] duration-500 hover:-translate-y-2 hover:border-[#697243]/25 hover:bg-white/85 hover:shadow-[0_24px_54px_rgba(23,25,37,0.14)]"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${technology.accent} origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100`} />
                <div className="absolute right-4 top-3 text-[10px] font-bold tracking-[0.16em] text-[#171925]/25">
                  {technology.number}
                </div>
                <div className="flex items-center gap-4">
                  <div className="grid size-[58px] shrink-0 place-items-center rounded-[18px] border border-[#171925]/8 bg-white text-[#171925] shadow-[0_12px_26px_rgba(23,25,37,0.10)] transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg] group-hover:scale-[1.06]">
                    <technology.icon
                      size={28}
                      color={technology.iconColor}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#171925]">
                      {technology.name}
                    </h3>
                    <p className="mt-1 text-[13px] text-[#62665f]">
                      {technology.detail}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-5 right-5 h-px overflow-hidden bg-[#171925]/6">
                  <div className={`h-full w-1/3 -translate-x-full bg-gradient-to-r ${technology.accent} transition-transform duration-700 group-hover:translate-x-[300%]`} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services