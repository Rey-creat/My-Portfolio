import heroImage from '../../assets/hero.png'
import { FaLinkedinIn } from 'react-icons/fa6'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: (
      <FaLinkedinIn size={20} aria-hidden="true" />
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
        <path d="M13.7 22v-8h2.7l.4-3.1h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.2H7.6V14h2.7v8h3.4Z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
        <path d="M16.7 5.1c-.7-.5-1.2-1.2-1.4-2.1h-2.8v12.2a2.7 2.7 0 1 1-2.3-2.7V9.7a5.5 5.5 0 1 0 5.1 5.5V9.1a7.7 7.7 0 0 0 4.5 1.4V7.7a4.8 4.8 0 0 1-3.1-2.6Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-[1.8]">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.7" r="1" className="fill-current stroke-none" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
        <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5A3.9 3.9 0 0 1 6.9 8.5c-.1-.3-.5-1.3.1-2.6 0 0 .9-.3 2.8 1.1a9.7 9.7 0 0 1 5.1 0c1.9-1.4 2.8-1.1 2.8-1.1.6 1.3.2 2.3.1 2.6a3.9 3.9 0 0 1 1 2.8c0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
]

function Home() {
  return (
    <section
      id="home"
      data-reveal
      className="relative flex min-h-[calc(100vh-82px)] scroll-mt-[82px] items-center overflow-hidden px-8 py-16 max-lg:px-6 max-lg:py-12 max-md:min-h-[calc(100vh-72px)] max-md:px-5"
    >
      <div className="absolute left-[8%] top-[18%] size-28 rounded-full bg-[#d9ff72]/20 blur-3xl" />
      <div className="absolute bottom-[12%] right-[10%] size-40 rounded-full bg-[#8b7cff]/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-[minmax(0,1.05fr)_minmax(380px,0.95fr)] items-center gap-10 max-lg:grid-cols-[minmax(0,1fr)_360px] max-md:grid-cols-1 max-md:gap-12">
        <div className="reveal-left max-w-[720px] max-md:text-center">
          <div className="mb-7 flex items-center gap-3 max-md:justify-center">
            <span className="h-px w-10 bg-[#171925]" />
            <p className="animate-fade-up text-[12px] font-bold uppercase tracking-[0.24em] text-[#62665f]">
              Creative Portfolio
            </p>
          </div>

          <p className="animate-fade-up-delayed mb-3 text-[clamp(17px,1.7vw,22px)] font-medium text-[#62665f]">
            Hello, I&apos;m Rey
          </p>
          <h1 className="animate-title max-w-[720px] text-[clamp(44px,5.4vw,74px)] font-semibold leading-[1] tracking-[-0.04em] text-[#171925]">
            I&apos;m a
            <span className="block text-[#697243]">Web Developer.</span>
          </h1>
          <p className="animate-fade-up-delayed mt-7 max-w-[580px] text-[clamp(16px,1.3vw,19px)] leading-8 text-[#62665f] max-md:mx-auto">
            I design and build polished digital experiences that are fast,
            responsive, and easy to use.
          </p>

          <div className="animate-fade-up-delayed mt-9 flex flex-wrap items-center gap-4 max-md:justify-center">
            <a
              href="#project"
              className="group inline-flex min-h-[46px] items-center gap-2.5 rounded-full bg-[#171925] px-5 text-[13px] font-semibold text-white no-underline shadow-[0_12px_28px_rgba(23,25,37,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#697243] hover:shadow-[0_16px_32px_rgba(105,114,67,0.22)] active:scale-95"
            >
              View My Work
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </a>

            <a
              href="#contacts"
              className="inline-flex min-h-[46px] items-center rounded-full border border-[#171925]/15 px-5 text-[13px] font-semibold text-[#171925] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[#171925]/30 hover:bg-white/70 active:scale-95"
            >
              Contact Me
            </a>
          </div>

          <div className="animate-fade-up-delayed mt-10 flex items-center gap-3 max-md:justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                title={social.label}
                className="stagger-item grid size-11 place-items-center rounded-full border border-[#171925]/10 bg-white/55 text-[#171925] no-underline shadow-[0_8px_24px_rgba(23,25,37,0.06)] backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:border-[#697243]/30 hover:bg-[#d9ff72] hover:shadow-[0_12px_26px_rgba(105,114,67,0.16)] active:scale-90"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="reveal-right relative mx-auto h-[520px] w-full max-w-[520px] max-lg:h-[460px] max-md:h-[400px] max-md:max-w-[420px]">
          <div className="absolute inset-x-[5%] bottom-[2%] h-[84%] rounded-[48%_48%_24%_24%/32%_32%_18%_18%] border border-[#171925]/8 bg-[linear-gradient(145deg,rgba(217,255,114,0.68),rgba(132,232,206,0.38)_52%,rgba(139,124,255,0.26))] shadow-[0_38px_90px_rgba(23,25,37,0.16),inset_0_1px_0_rgba(255,255,255,0.75)]" />
          <div className="animate-orbit-slow absolute right-[-2%] top-[2%] size-28 rounded-full border border-white/80 bg-white/35 shadow-[0_12px_30px_rgba(23,25,37,0.08)] backdrop-blur-md" />
          <div className="animate-orbit absolute bottom-[8%] left-[-2%] size-16 rounded-full border border-[#697243]/15 bg-[#d9ff72]/45 shadow-[0_12px_30px_rgba(105,114,67,0.12)]" />
          <div className="absolute left-[2%] top-[20%] size-2.5 rounded-full bg-[#697243] shadow-[0_0_18px_rgba(105,114,67,0.5)]" />
          <div className="animate-float absolute right-[8%] top-[18%] rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-[0_16px_40px_rgba(23,25,37,0.10)] backdrop-blur-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#62665f]">
              Experience
            </p>
            <p className="mt-1 text-[18px] font-black text-[#171925]">2+ Years</p>
          </div>

          <div className="absolute inset-x-[13%] bottom-0 top-[6%] overflow-hidden rounded-[46%_46%_22%_22%/30%_30%_14%_14%] border-[10px] border-white/75 bg-[#171925] shadow-[0_28px_65px_rgba(23,25,37,0.22),inset_0_0_0_1px_rgba(23,25,37,0.12)]">
            <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.32)_0%,transparent_38%,rgba(23,25,37,0.18)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 z-20 h-[18%] bg-[linear-gradient(to_top,rgba(23,25,37,0.34),transparent)]" />
            <div className="h-full w-full overflow-hidden">
              <img
                src={heroImage}
                alt="Rey's profile"
                className="h-full w-full scale-[1.02] object-cover object-center contrast-[1.03] saturate-[0.88] transition-transform duration-700 hover:scale-[1.07]"
              />
            </div>
          </div>

          <div className="animate-float-delayed absolute bottom-[12%] left-0 z-30 rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-[0_16px_40px_rgba(23,25,37,0.10)] backdrop-blur-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#62665f]">
              Focus
            </p>
            <p className="mt-1 text-[15px] font-black text-[#171925]">UI / UX</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home