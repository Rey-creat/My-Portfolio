import TiltCard from '../animation/tilt-card'

const education = [
  {
    level: 'Elementary',
    school: 'Don A.R Montelibano Elementary School',
    years: 6,
  },
  {
    level: 'High School',
    school: 'Murcia National High School',
    years: 4,
  },
  {
    level: 'Senior High School',
    school: 'Murcia National High School',
    years: 3,
  },
  {
    level: 'College',
    school: 'La Consolacion College Bacolod',
    years: 5,
  },
]

function Education() {
  return (
    <section
      id="education"
      data-reveal
      className="relative scroll-mt-[82px] overflow-hidden px-8 py-20 max-lg:px-6 max-md:px-5 max-md:py-14"
    >
      <div className="relative mx-auto w-full max-w-[1120px]">
        <div className="reveal-left max-w-[680px]">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#697243]" />
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#697243]">
              Education
            </p>
          </div>
          <h2 className="text-[clamp(38px,4.5vw,64px)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#171925]">
            My learning
            <span className="block text-[#697243]">journey.</span>
          </h2>
        </div>

        <ol className="relative mt-12 grid list-none grid-cols-1 gap-y-6 p-0 before:absolute before:bottom-4 before:left-[15px] before:top-4 before:w-[2px] before:bg-[#697243]/45 md:grid-cols-2 md:gap-y-10 md:before:left-1/2 md:before:-translate-x-1/2">
          {education.map((item, index) => {
            const branchesLeft = index % 2 === 0

            return (
              <li
                className={`reveal-right relative pl-12 ${
                  branchesLeft
                    ? 'md:col-start-1 md:pr-[100px] md:text-right lg:pr-[150px]'
                    : 'md:col-start-2 md:mt-10 md:pl-[100px] lg:pl-[150px]'
                }`}
                style={{ animationDelay: `${220 + index * 140}ms` }}
                key={`${item.level}-${item.school}`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-[7px] top-7 z-10 size-[18px] rounded-full border-[4px] border-[#f4f3ed] bg-[#697243] shadow-[0_0_0_1px_rgba(105,114,67,0.28)] ${
                    branchesLeft
                      ? 'md:left-auto md:right-[-9px]'
                      : 'md:left-[-9px] md:right-auto'
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`absolute left-[24px] top-[35px] h-[2px] w-6 bg-[#697243]/55 md:w-[100px] lg:w-[150px] ${
                    branchesLeft
                      ? 'md:left-auto md:right-0'
                      : 'md:left-0'
                  }`}
                />
                <TiltCard>
                  <article className="group relative min-h-[148px] overflow-hidden rounded-[24px] border border-white/85 bg-gradient-to-br from-white/95 via-white/80 to-[#eef0e5]/75 p-5 text-left shadow-[0_16px_40px_rgba(23,25,37,0.07)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#697243]/35 hover:shadow-[0_22px_48px_rgba(23,25,37,0.12)] md:p-6">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-7 -top-8 size-24 rounded-full bg-[#697243]/[0.07] transition-transform duration-500 group-hover:scale-125"
                    />
                    <div className="relative flex items-center justify-between gap-4">
                      <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#697243]">
                        <span className="size-1.5 rounded-full bg-[#697243]" />
                        {item.level}
                      </p>
                      <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-[#697243]/15 bg-white/75 text-[11px] font-bold tracking-[0.1em] text-[#697243] shadow-[0_5px_14px_rgba(23,25,37,0.05)]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="relative mt-4 text-[18px] font-semibold leading-snug tracking-[-0.02em] text-[#171925]">
                      {item.school}
                    </h3>
                    <p className="relative mt-2 text-[13px] font-medium text-[#697243]">
                      {item.years} years
                    </p>
                  </article>
                </TiltCard>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default Education
