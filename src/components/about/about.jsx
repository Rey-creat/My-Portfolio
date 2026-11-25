import heroImage from '../../assets/hero.png'

function About() {
  return (
    <section
      id="about"
      data-reveal
      className="relative flex min-h-[calc(100vh-82px)] scroll-mt-[82px] items-center overflow-hidden px-8 py-16 max-lg:px-6 max-md:min-h-[calc(100vh-72px)] max-md:px-5 max-md:py-14"
    >
      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-[minmax(0,1fr)_minmax(440px,0.9fr)] items-center gap-6 max-lg:grid-cols-[minmax(0,1fr)_360px] max-md:grid-cols-1 max-md:gap-12">
        <div className="reveal-left relative h-[520px] w-full max-w-[520px] justify-self-start max-lg:h-[460px] max-md:h-[400px] max-md:max-w-[420px] max-md:justify-self-center">
          <div className="absolute inset-x-[4%] bottom-[3%] h-[88%] rounded-bl-[48px] rounded-tl-[18px] rounded-r-[28px] border border-[#171925]/8 bg-[linear-gradient(145deg,#d9ff72_0%,#84e8ce_58%,#8b7cff_145%)] shadow-[0_38px_90px_rgba(23,25,37,0.16),inset_0_1px_0_rgba(255,255,255,0.8)]" />
          <div className="absolute inset-x-[12%] bottom-0 top-[7%] overflow-hidden rounded-bl-[38px] rounded-tl-[12px] rounded-r-[22px] border-[10px] border-white/85 bg-[#171925] shadow-[0_28px_65px_rgba(23,25,37,0.22)]">
            <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.28)_0%,transparent_38%,rgba(23,25,37,0.20)_100%)]" />
            <img
              src={heroImage}
              alt="Rey's portrait"
              className="h-full w-full object-cover object-center contrast-[1.03] saturate-[0.88] transition-transform duration-700 hover:scale-[1.04]"
            />
          </div>

          <div className="absolute bottom-[9%] left-[-2%] z-20 rounded-2xl border border-white/75 bg-white/80 px-5 py-4 shadow-[0_16px_40px_rgba(23,25,37,0.12)] backdrop-blur-xl max-md:left-[2%]">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#62665f]">
              Experience
            </p>
            <p className="mt-1 text-[20px] font-semibold text-[#171925]">2+ Years</p>
          </div>

          <div className="animate-orbit absolute right-[-1%] top-[8%] z-20 size-16 rounded-full border border-white/80 bg-[#d9ff72]/70 shadow-[0_12px_30px_rgba(105,114,67,0.14)]" />
        </div>

        <div className="reveal-right w-full max-w-[650px] justify-self-start -ml-46 max-lg:-ml-8 max-md:ml-0">
          <div className="mb-5 flex items-center gap-3 max-md:justify-center">
            <span className="h-px w-10 bg-[#697243]" />
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#697243]">
              About Me
            </p>
          </div>

          <h2 className="text-[clamp(38px,4.5vw,64px)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#171925] max-md:text-center">
            Building digital
            <span className="block text-[#697243]">experiences that matter.</span>
          </h2>

          <p className="mt-7 text-justify text-[clamp(16px,1.25vw,18px)] leading-[1.9] text-[#62665f]">
            I am a passionate web developer focused on creating modern,
            responsive, and accessible digital products. I combine thoughtful
            UI/UX design with clean development practices to build experiences
            that feel intuitive, polished, and reliable across every screen.
          </p>

          <p className="mt-5 text-justify text-[clamp(16px,1.25vw,18px)] leading-[1.9] text-[#62665f]">
            I enjoy turning ideas into purposeful interfaces, improving
            usability, and writing maintainable code. Every project is an
            opportunity to solve real problems and deliver a strong, memorable
            result.
          </p>

          <div className="mt-9 flex flex-wrap gap-4 max-md:justify-center">
            <a
              href="#contacts"
              className="group inline-flex min-h-[46px] items-center gap-2.5 rounded-full bg-[#171925] px-5 text-[13px] font-semibold text-white no-underline shadow-[0_12px_28px_rgba(23,25,37,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#697243] active:scale-95"
            >
              Let&apos;s Work Together
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </a>

            <a
              href="#project"
              className="inline-flex min-h-[46px] items-center rounded-full border border-[#171925]/15 px-5 text-[13px] font-semibold text-[#171925] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[#171925]/30 hover:bg-white/70 active:scale-95"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About