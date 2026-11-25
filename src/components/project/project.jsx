const projects = [
  {
    number: '01',
    title: 'Creative Portfolio',
    category: 'Web Development',
    description: 'A responsive portfolio experience built with a clear visual system and smooth interactions.',
  },
  {
    number: '02',
    title: 'Modern Dashboard',
    category: 'UI / UX',
    description: 'A clean dashboard concept focused on data clarity, usability, and professional presentation.',
  },
  {
    number: '03',
    title: 'Mobile Experience',
    category: 'React Native',
    description: 'A mobile-first concept designed for speed, accessibility, and intuitive daily use.',
  },
]

function Project() {
  return (
    <section
      id="project"
      data-reveal
      className="relative flex min-h-[calc(100vh-82px)] scroll-mt-[82px] items-center overflow-hidden px-8 py-16 max-lg:px-6 max-md:min-h-[calc(100vh-72px)] max-md:px-5 max-md:py-14"
    >
      <div className="relative mx-auto w-full max-w-[1400px]">
        <div className="reveal-left mb-10 flex items-end justify-between gap-8 max-md:flex-col max-md:items-start">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#697243]" />
              <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#697243]">
                Selected Work
              </p>
            </div>
            <h2 className="text-[clamp(38px,4.5vw,64px)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#171925]">
              Featured
              <span className="block text-[#697243]">Projects.</span>
            </h2>
          </div>
          <p className="max-w-[420px] text-[15px] leading-7 text-[#62665f] max-md:text-left">
            A selection of digital work shaped by thoughtful design,
            responsive development, and purposeful interaction.
          </p>
        </div>

        <div className="reveal-right grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`stagger-item group relative min-h-[360px] overflow-hidden rounded-[28px] border border-white/70 bg-white/55 p-6 shadow-[0_18px_44px_rgba(23,25,37,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#697243]/25 hover:shadow-[0_24px_54px_rgba(23,25,37,0.14)] ${
                index === 0 ? 'max-lg:col-span-2 max-md:col-span-1' : ''
              }`}
            >
              <div className="relative h-[210px] overflow-hidden rounded-[20px] border border-[#171925]/8 bg-[linear-gradient(145deg,#d9ff72_0%,#84e8ce_55%,#8b7cff_120%)]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.38),transparent_55%,rgba(23,25,37,0.12))]" />
                <div className="absolute bottom-5 left-5 right-5 h-[72%] rounded-t-[16px] border border-white/60 bg-[#171925]/90 shadow-[0_18px_40px_rgba(23,25,37,0.18)] transition-transform duration-700 group-hover:-translate-y-2" />
                <div className="absolute bottom-8 left-8 right-8 h-[58%] rounded-t-[12px] bg-white/90 transition-transform duration-700 group-hover:-translate-y-3" />
                <span className="absolute right-4 top-4 text-[11px] font-bold tracking-[0.16em] text-[#171925]/55">
                  {project.number}
                </span>
              </div>

              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#697243]">
                {project.category}
              </p>
              <h3 className="mt-2 text-[21px] font-semibold tracking-[-0.02em] text-[#171925]">
                {project.title}
              </h3>
              <p className="mt-2 text-[14px] leading-6 text-[#62665f]">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project