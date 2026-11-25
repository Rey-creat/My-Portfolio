import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa6'

const socialLinks = [
  { label: 'LinkedIn', display: 'Rey Rico', href: 'https://www.linkedin.com/in/rey-rico-b830013a9/', icon: FaLinkedinIn },
  { label: 'GitHub', display: 'Rey Rico ', href: 'https://github.com/Rey-creat', icon: FaGithub },
  { label: 'Facebook', display: 'Rey Rico', href: 'https://github.com/Rey-creat', icon: FaFacebookF },
  { label: 'TikTok', display: 'Rey Rico', href: 'https://www.tiktok.com/@rr27630', icon: FaTiktok },
]

const contactLinks = [
  { label: 'Email', display: 'reyrico2001@gmail.com', href: 'https://accounts.google.com/v3/signin/accountchooser?authuser=0&checkedDomains=youtube&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&dsh=S-1474323162%3A1795484777846207&emr=1&flowEntry=AccountChooser&flowName=GlifWebSignIn&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&pstMsg=1&service=mail', icon: FaEnvelope },
  { label: 'WhatsApp', display: '+63 938 639 3966', href: 'https://api.whatsapp.com/send/?phone=639386393966&text&type=phone_number&app_absent=0', icon: FaWhatsapp },
]

function Contact() {
  return (
    <footer
      id="contacts"
      data-reveal
      className="scroll-mt-[82px] border-t border-white/8 bg-[#171925] text-white"
    >
      <div className="relative overflow-hidden px-8 py-16 max-lg:px-6 max-md:px-5 max-md:py-12">
        <div className="pointer-events-none absolute right-[12%] top-[-160px] size-80 rounded-full bg-[#8b7cff]/8 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-[-220px] left-[8%] size-72 rounded-full bg-[#d9ff72]/8 blur-[100px]" />

        <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-2 gap-24 max-md:grid-cols-1 max-md:gap-10">
          <div>
            <h2 className="mb-9 text-[22px] font-bold tracking-[-0.02em]">Social Media</h2>
            <div className="flex flex-col gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 text-[15px] text-white/85 no-underline transition-all duration-300 hover:translate-x-2 hover:text-[#d9ff72]"
                  >
                    <span className="grid size-9 shrink-0 place-items-center text-white transition-colors duration-300 group-hover:text-[#d9ff72]">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <span>{social.display}</span>
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h2 className="mb-9 text-[22px] font-bold tracking-[-0.02em]">Contacts</h2>
            <div className="flex flex-col gap-6">
              {contactLinks.map((contact) => {
                const Icon = contact.icon
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex items-center gap-4 text-[15px] text-white/85 no-underline transition-all duration-300 hover:translate-x-2 hover:text-[#d9ff72]"
                  >
                    <span className="grid size-9 shrink-0 place-items-center text-white transition-colors duration-300 group-hover:text-[#d9ff72]">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span>{contact.display}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-14 flex max-w-[1400px] items-center justify-between border-t border-white/10 pt-7 text-[12px] text-white/40 max-md:flex-col max-md:items-start max-md:gap-3">
          <a
            href="#home"
            className="font-semibold text-white/60 no-underline transition-colors duration-200 hover:text-[#d9ff72]"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Contact
