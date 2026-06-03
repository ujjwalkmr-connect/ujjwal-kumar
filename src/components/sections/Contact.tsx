import { FormEvent, memo, useState } from 'react'
import { SectionLabel } from '../ui/SectionLabel'

/** Contact section with local success state. Replace with Formspree/API later if needed. */
function ContactComponent() {
  const [sent, setSent] = useState(false)

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="bg-ink px-6 py-24 text-white md:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-start">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-heading text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">
            Let&apos;s build something <span className="text-teal-2">great</span> together.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-pale">
            Open to senior growth, demand generation, marketing operations, and RevOps opportunities — at health-tech companies and growth-stage B2B/B2C startups.
          </p>
          <div className="mt-10 space-y-4 text-pale">
            <a className="block transition hover:text-teal-2" href="mailto:ujjwalkmr@outlook.com">✉ ujjwalkmr@outlook.com</a>
            <a className="block transition hover:text-teal-2" href="tel:+917762903717">📱 +91 77629 03717</a>
            <a className="block transition hover:text-teal-2" href="https://linkedin.com/in/ujjwal-kmr" target="_blank" rel="noreferrer">in linkedin.com/in/ujjwal-kmr</a>
            <p>📍 Ranchi, Jharkhand, India</p>
          </div>
        </div>
        <form onSubmit={submit} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur md:p-8">
          <label className="block text-sm font-semibold text-pale">Name</label>
          <input name="name" required className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-pale/50 focus:border-teal-2" placeholder="Your name" />
          <label className="mt-5 block text-sm font-semibold text-pale">Email</label>
          <input type="email" name="email" required className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-pale/50 focus:border-teal-2" placeholder="you@example.com" />
          <label className="mt-5 block text-sm font-semibold text-pale">Message</label>
          <textarea name="message" required rows={6} className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-pale/50 focus:border-teal-2" placeholder="Tell me about the opportunity..." />
          <button className="mt-6 w-full rounded-full bg-teal px-6 py-3 font-semibold text-white transition hover:bg-teal-2">Send message →</button>
          {sent && <p className="mt-4 text-center font-semibold text-teal-2">Message sent! I&apos;ll get back to you soon.</p>}
        </form>
      </div>
    </section>
  )
}

export const Contact = memo(ContactComponent)
