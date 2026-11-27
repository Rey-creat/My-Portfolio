import aboutImage from '../images/image.png'
import TiltCard from '../animation/tilt-card'

function About() {
  return (
    <section
      id="about"
      data-reveal
      className="relative flex min-h-[calc(100vh-82px)] scroll-mt-[82px] items-center overflow-hidden px-8 py-16 max-lg:px-6 max-md:min-h-[calc(100vh-72px)] max-md:px-5 max-md:py-14"
    >
      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-[minmax(0,1fr)_minmax(440px,0.9fr)] items-center gap-6 max-lg:grid-cols-[minmax(0,1fr)_360px] max-md:grid-cols-1 max-md:gap-12">
        <TiltCard className="group relative mx-auto h-[520px] w-full max-w-[400px] -translate-x-48 overflow-hidden rounded-[1.5rem] shadow-[0_24px_70px_rgba(23,25,37,0.12)] max-xl:-translate-x-8 max-lg:h-[460px] max-lg:translate-x-0 max-md:h-[400px] max-md:max-w-[320px]">
          <img
            src={aboutImage}
            alt="Portrait of Rey"
            className="h-full w-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
          />

          <div className="absolute bottom-[9%] left-[-2%] z-20 rounded-2xl border border-white/75 bg-white/80 px-5 py-4 shadow-[0_16px_40px_rgba(23,25,37,0.12)] backdrop-blur-xl max-md:left-[2%]">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#62665f]">
              Current Role
            </p>
            <p className="mt-1 text-[20px] font-semibold text-[#171925]">Student</p>
          </div>
        </TiltCard>

        <div className="reveal-right w-full max-w-[650px] justify-self-start -ml-86 max-lg:-ml-12 max-md:ml-0">
          <div className="mb-5 flex items-center gap-3 max-md:justify-center">
            <span className="h-px w-10 bg-[#697243]" />
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#697243]">
              About Me
            </p>
          </div>

          <h2 className="text-[clamp(38px,4.5vw,64px)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#171925] max-md:text-center">
            A portfolio
            <span className="block text-[#697243]">in progress.</span>
          </h2>

          <p className="mt-7 text-justify text-[clamp(16px,1.25vw,18px)] leading-[1.9] text-[#62665f]">
            I&apos;m a student preparing this portfolio for my future professional career. It is a work in progress, and I am continuously adding new pieces and refining existing ones. The portfolio is intended to showcase my skills, creativity, and growth as a designer and developer.
            and the development behind each piece.
          </p>

          <p className="mt-5 text-justify text-[clamp(16px,1.25vw,18px)] leading-[1.9] text-[#62665f]">
            As I add collaborative work, I want each entry to show more than a polished
            result: the studies, choices, and revisions that help an idea take shape.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 max-md:justify-center">
            <a
              href="#contacts"
              className="group inline-flex min-h-[46px] items-center gap-2.5 rounded-full bg-[#171925] px-5 text-[13px] font-semibold text-white no-underline shadow-[0_12px_28px_rgba(23,25,37,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#697243] active:scale-95"
            >
              Get in Touch
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </a>

            <a
              href="#project"
              className="inline-flex min-h-[46px] items-center rounded-full border border-[#171925]/15 px-5 text-[13px] font-semibold text-[#171925] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[#697243] hover:bg-white/70 active:scale-95"
            >
              Explore My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About