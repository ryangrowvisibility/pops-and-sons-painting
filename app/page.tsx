import Image from "next/image";
import Icon from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(530) 364-8635";
const TEL = "tel:+15303648635";
const SMS = "sms:+15303648635";
const GOOGLE = "https://www.google.com/maps/search/?api=1&query=Pops%20and%20sons%20painting&query_place_id=ChIJZ5Gxp7r76KkRYr-YcQZ8tiQ";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

const mainServices = [
  { img: "/images/p2.jpg", alt: "Two-story craftsman house freshly painted navy with white trim and a red front door", title: "Exterior house painting", text: "Full exterior repaints done right from the start. Before a drop of paint goes on, Manny's crew repairs or replaces damaged shingles and siding so the new finish has something solid to hold onto. You get a clean, even coat on the body and crisp lines on the trim." },
  { img: "/images/p4.jpg", alt: "Kitchen with freshly painted blue cabinets and stainless appliances", title: "Cabinet painting", text: "Kitchen and bathroom cabinets refinished with real attention to detail: doors, boxes and built-ins sanded, primed and painted for a smooth factory-like finish. It is one of the most affordable ways to make a kitchen feel new." },
  { img: "/images/p15.jpg", alt: "Freshly painted living room with new wood-look flooring and baseboards", title: "Interior painting", text: "Walls, ceilings, trim and bannisters, from a single bedroom to the whole house. Many of our interior jobs are pre-sale refreshes, timed so the home is ready before it goes on the market." },
];

const moreServices = [
  { icon: "ruler", title: "Fence painting", text: "Big or small. One customer had about 2,000 sq ft of fence painted at a fair price and finished on time." },
  { icon: "layers", title: "Drywall tape & texture", text: "Patches that disappear, like blending a new whole-house fan vent into the existing ceiling texture." },
  { icon: "hammer", title: "Siding & shingle repair", text: "Damaged shingles and siding repaired or replaced as part of an exterior repaint." },
  { icon: "home", title: "Flooring & baseboards", text: "New flooring and baseboards installed alongside larger interior projects, so one crew handles the whole refresh." },
];

const reviews = [
  { name: "Kraig E.", job: "Exterior repaint + shingle repair", text: "Manny was upfront about the scope, the timing and the cost, which came in lower than the other estimates I got. He suggested cost-effective options and finished on time." },
  { name: "Satveer A.", job: "Large interior project", text: "Interior paint, flooring, baseboards, cabinets and bannisters. The most professional painters I have found in years." },
  { name: "Murray K.", job: "Pre-sale interior & exterior", text: "Manny walked through the house and gave me a written estimate the same day. His team painted inside and out right on schedule before we listed the home." },
  { name: "Thomas P.", job: "Fence painting", text: "About 2,000 square feet of fence painted at a fair price, and it was finished on time." },
  { name: "Gilbert S.", job: "Cabinet painting", text: "Our cabinets came out phenomenal. Manny's attention to detail really shows." },
  { name: "Ron C.", job: "Ceiling texture patch", text: "A small job blending a new whole-house fan vent into the ceiling. It is seamless, and they fixed a couple of extra spots while they were here." },
];

const steps = [
  { title: "Call or text Manny", text: `Reach him at ${PHONE}. Tell him what you want painted, or text a few photos.` },
  { title: "Walkthrough", text: "Manny comes out, walks the house with you and talks through colors, prep and budget-friendly options." },
  { title: "Written estimate", text: "You get the scope, timeline and price in writing, often the same day. No guesswork, no surprise charges." },
  { title: "Prep and paint", text: "Repairs first, then careful masking, priming and painting. The crew works to the schedule you agreed on." },
  { title: "Final walkthrough", text: "We walk the job together and touch up anything you spot before we call it done." },
];

const faqs = [
  { q: "Do you give free written estimates?", a: "Yes. Manny walks the job with you and gives you a written estimate with the scope, timeline and cost. Several customers got theirs the same day as the walkthrough." },
  { q: "What areas do you serve?", a: "We work in Fair Oaks, Orangevale, Citrus Heights, Carmichael, Folsom and around the Sacramento area. Not sure if you are in range? Call or text and ask." },
  { q: "Can you work around my budget?", a: "That is one of the things customers mention most. Manny is flexible on budget and timeline and will suggest cost-effective options, and his price often comes in under other bids." },
  { q: "I am selling my house. Can you get it done before listing?", a: "Yes. Pre-sale interior and exterior refreshes are a big part of our work, and we schedule them so the home is ready on time." },
  { q: "Do you take small jobs?", a: "Absolutely. We have done everything from whole-house repaints to a single ceiling texture patch. No job is too small to call about." },
  { q: "Do you fix damaged siding before painting?", a: "Yes. On exterior jobs we repair or replace damaged shingles and siding first, so the new paint lasts." },
  { q: "When can I reach you?", a: "Call or text any day of the week. If Manny is on a job he will get back to you." },
];

const gallery = [
  { src: "/images/p3.jpg", alt: "White stucco house with navy trim and garage doors after an exterior repaint", w: 1440, h: 1080, wide: true },
  { src: "/images/p5.jpg", alt: "Open kitchen with a painted black island and light cabinets", w: 1440, h: 1080 },
  { src: "/images/p6.jpg", alt: "Two-story Tudor-style home painted green with white trim", w: 1440, h: 1080 },
  { src: "/images/p11.jpg", alt: "Built-in cabinet painted dark gray", w: 810, h: 1080 },
  { src: "/images/p10.jpg", alt: "Kitchen cabinets and pantry painted light gray", w: 810, h: 1080 },
  { src: "/images/p8.jpg", alt: "Lower kitchen cabinets painted slate gray above wood floors", w: 810, h: 1080 },
  { src: "/images/p9.jpg", alt: "Bathroom vanity painted gray with new flooring", w: 810, h: 1080 },
  { src: "/images/p1.jpg", alt: "Single-story ranch home with fresh white and brown exterior paint", w: 1440, h: 1080, wide: true },
  { src: "/images/p13.jpg", alt: "White exterior wall and covered porch after painting", w: 1440, h: 1080 },
  { src: "/images/p7.jpg", alt: "Long wood privacy fence freshly stained beside a pool deck", w: 810, h: 1080 },
  { src: "/images/p12.jpg", alt: "Painted patio slab and porch posts", w: 810, h: 1080 },
  { src: "/images/p14.jpg", alt: "Before photo of a kitchen with original wood cabinets, prior to cabinet painting", w: 360, h: 640 },
];

const areas = ["Fair Oaks", "Orangevale", "Citrus Heights", "Carmichael", "Folsom", "Sacramento area"];

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="flex text-star" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className={className}><path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" /></svg>
      ))}
    </span>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HousePainter",
  name: "Pops and Sons Painting",
  telephone: "+1-530-364-8635",
  url: "https://pops-and-sons-painting.growlocalvisibility.com",
  image: "https://pops-and-sons-painting.growlocalvisibility.com/images/p3.jpg",
  areaServed: areas,
  geo: { "@type": "GeoCoordinates", latitude: 38.6548, longitude: -121.2572 },
  address: { "@type": "PostalAddress", addressRegion: "CA", addressCountry: "US" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: 5, reviewCount: 19 },
  founder: { "@type": "Person", name: "Manuel (Manny)" },
  sameAs: [GOOGLE],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      <div className="hidden bg-brand-deep text-[15px] text-white/90 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> Fair Oaks, Orangevale &amp; the Sacramento area</span>
          <span className="flex items-center gap-2"><Icon name="tag" className="h-4 w-4" /> Free written estimates &middot; Call or text 7 days</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-5 md:px-6">
          <a href="#top" className="leading-none" aria-label="Pops and Sons Painting, home">
            <span className="block font-[family-name:var(--font-head)] text-[22px] font-extrabold text-brand-deep">Pops &amp; Sons</span>
            <span className="block text-[14px] font-semibold text-muted">Painting &middot; Family owned</span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-[16px] font-semibold lg:flex">
            {nav.map((n) => <a key={n.href} href={n.href} className="hover:text-brand">{n.label}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden font-bold text-brand-deep md:inline">{PHONE}</a>
            <a href={TEL} className="btn btn-cta hidden sm:inline-flex"><Icon name="phone" className="h-5 w-5" /> Free Estimate</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="grid h-12 w-12 place-items-center rounded-lg bg-cta text-ink sm:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        <section id="top">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-16 pt-10 md:px-6 md:pb-24 md:pt-14 lg:grid-cols-2">
            <div>
              <h1 className="text-[clamp(2.25rem,5vw,3.6rem)]">House Painting in Fair Oaks, Orangevale &amp; the Sacramento Area</h1>
              <p className="mt-5 max-w-[54ch] text-[19px] text-muted">Pops and Sons is a family painting company led by Manny. Interior and exterior repaints, kitchen cabinets, fences and drywall touch-ups, with a written estimate up front and a price that often beats the other bids.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={TEL} className="btn btn-cta text-[19px]"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
                <a href={SMS} className="btn btn-ghost"><Icon name="text" className="h-5 w-5" /> Text photos for a quote</a>
              </div>
              <a href={GOOGLE} target="_blank" rel="noopener noreferrer" className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[16px] font-semibold">
                <Stars /> <span>5.0</span><span className="text-muted">&middot; 19 Google reviews</span><span className="text-muted">&middot; Family owned</span><span className="text-muted">&middot; Written estimates</span>
              </a>
            </div>
            <div className="relative">
              <Image src="/images/p3.jpg" alt="White stucco house with crisp navy trim after an exterior repaint by Pops and Sons" width={1440} height={1080} priority className="w-full rounded-2xl object-cover shadow-[0_30px_60px_-30px_oklch(0.25_0.05_160/0.45)]" />
              <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-xl border border-line bg-white px-5 py-3 shadow-lg">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-soft text-brand"><Icon name="check" className="h-5 w-5" /></span>
                <span className="leading-tight"><span className="block font-bold">Same-day written estimate</span><span className="text-[14px] text-muted">Murray K., Google review</span></span>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Why homeowners hire us" className="bg-brand text-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "thumb", t: "5.0 on Google", s: "19 reviews" },
              { icon: "users", t: "Family owned", s: "Manny on every job" },
              { icon: "tag", t: "Written estimates", s: "Often under other bids" },
              { icon: "calendar", t: "On schedule", s: "Pre-sale deadlines met" },
            ].map((x) => (
              <div key={x.t} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15"><Icon name={x.icon} className="h-5 w-5" /></span>
                <span className="leading-tight"><span className="block font-bold">{x.t}</span><span className="text-[15px] text-white/80">{x.s}</span></span>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal max-w-[62ch]">
              <p className="font-bold text-brand">Services</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.6rem)]">Inside, outside and everything in between</h2>
              <p className="mt-4 text-muted">One crew for the whole job, from fixing a damaged shingle to the last coat on the trim.</p>
            </div>
            <div className="mt-14 grid gap-16">
              {mainServices.map((s, i) => (
                <article key={s.title} className="reveal grid items-center gap-8 md:grid-cols-2 md:gap-14">
                  <Image src={s.img} alt={s.alt} width={1440} height={1080} className={`aspect-[4/3] w-full rounded-2xl object-cover ${i % 2 ? "md:order-2" : ""}`} />
                  <div>
                    <h3 className="text-[clamp(1.5rem,2.6vw,2rem)]">{s.title}</h3>
                    <p className="mt-3 text-muted">{s.text}</p>
                    <a href={TEL} className="mt-5 inline-flex items-center gap-1.5 font-bold text-brand transition-[gap] duration-200 hover:gap-2.5">Call about {s.title.toLowerCase()} <Icon name="arrow" className="h-4 w-4" /></a>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-20 grid gap-x-10 gap-y-8 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-4">
              {moreServices.map((s) => (
                <div key={s.title} className="reveal">
                  <span className="text-brand"><Icon name={s.icon} className="h-7 w-7" /></span>
                  <h3 className="mt-3 text-[20px]">{s.title}</h3>
                  <p className="mt-2 text-[17px] text-muted">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="reveal lg:sticky lg:top-28 lg:self-start">
              <p className="font-bold text-brand">Reviews</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.6rem)]">Rated 5.0 from 19 Google reviews</h2>
              <p className="mt-4 text-muted">Customers keep coming back to the same points: straightforward written estimates, flexibility on budget and timing, and detail-focused work that finishes on schedule.</p>
              <a href={GOOGLE} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-6">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {reviews.map((r, i) => (
                <figure key={r.name} className={`reveal flex flex-col rounded-2xl border border-line bg-white p-6 ${i === 0 ? "sm:col-span-2" : ""}`}>
                  <Stars className="h-4 w-4" />
                  <blockquote className={`mt-3 flex-1 ${i === 0 ? "text-[20px] font-semibold" : "text-[17px]"}`}>&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-4 leading-tight"><span className="block font-bold">{r.name}</span><span className="text-[15px] text-muted">{r.job} &middot; Google review</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="reveal">
                <p className="font-bold text-brand">About us</p>
                <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.6rem)]">Pops, his sons, and a crew that cares about the details</h2>
                <p className="mt-5 text-muted">Pops and Sons Painting is a family business led by Manuel, who most customers know as Manny. He does the walkthrough himself, writes up the estimate himself, and is on the job with his crew.</p>
                <p className="mt-4 text-muted">The way we work is simple. Tell people the truth about scope, timing and price. Fix what needs fixing before painting over it. Finish when we said we would. And if we notice a couple of extra spots that need attention while we are there, we take care of them.</p>
              </div>
              <ul className="reveal grid content-center gap-4 sm:grid-cols-2">
                {[
                  { icon: "tag", t: "Honest pricing", s: "Written, often below other bids" },
                  { icon: "clock", t: "On time", s: "Schedules you can plan around" },
                  { icon: "search", t: "Detail-focused", s: "Clean lines, seamless patches" },
                  { icon: "heart", t: "Flexible", s: "Works with your budget" },
                ].map((d) => (
                  <li key={d.t} className="flex gap-3 rounded-xl bg-tint p-5">
                    <span className="mt-0.5 text-brand"><Icon name={d.icon} /></span>
                    <span className="leading-tight"><span className="block font-bold">{d.t}</span><span className="text-[15px] text-muted">{d.s}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="process" className="bg-brand-soft py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal max-w-[60ch]">
              <p className="font-bold text-brand">How it works</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.6rem)]">From first call to final touch-up</h2>
            </div>
            <ol className="mt-12 grid gap-8 md:grid-cols-5">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal border-t-2 border-brand pt-5">
                  <span className="font-[family-name:var(--font-head)] text-[32px] font-extrabold text-brand">{i + 1}</span>
                  <h3 className="mt-2 text-[20px]">{s.title}</h3>
                  <p className="mt-2 text-[17px] text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="work" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-[60ch]">
                <p className="font-bold text-brand">Our work</p>
                <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.6rem)]">Recent painting projects</h2>
              </div>
              <p className="text-muted">Exteriors, kitchens, built-ins, fences and full interior refreshes.</p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {gallery.map((g) => (
                <div key={g.src} className={`reveal overflow-hidden rounded-xl ${g.wide ? "col-span-2" : ""}`}>
                  <Image src={g.src} alt={g.alt} width={g.w} height={g.h} loading="lazy" className="aspect-square h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="area" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal">
              <p className="font-bold text-brand">Service area</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.6rem)]">Painting homes around Fair Oaks and Orangevale</h2>
              <p className="mt-4 text-muted">We work in the neighborhoods east of Sacramento and nearby communities. If your town is not listed, call or text and Manny will let you know.</p>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {areas.map((a) => <li key={a} className="flex items-center gap-2 font-semibold"><Icon name="pin" className="h-5 w-5 text-brand" />{a}</li>)}
              </ul>
            </div>
            <div className="reveal overflow-hidden rounded-2xl border border-line bg-white">
              <iframe title="Map of the Pops and Sons Painting service area" src="https://maps.google.com/maps?q=Fair%20Oaks%2C%20CA&z=11&output=embed" className="h-[400px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto max-w-[860px] px-5 md:px-6">
            <div className="reveal">
              <p className="font-bold text-brand">FAQ</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.6rem)]">Common questions</h2>
            </div>
            <div className="mt-10 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="py-5">
                  <summary className="flex items-center justify-between gap-4 text-[19px] font-bold">{f.q}<span className="plus grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Icon name="plus" className="h-5 w-5" /></span></summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-deep text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-6">
            <div>
              <h2 className="text-[clamp(1.9rem,3.5vw,2.6rem)]">Ready for a fresh coat?</h2>
              <p className="mt-3 max-w-[52ch] text-white/85">Call or text Manny at {PHONE} for a free written estimate. Seven days a week.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={TEL} className="btn btn-cta text-[19px]"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
              <a href={SMS} className="btn border-[1.5px] border-white/40 text-white hover:border-white"><Icon name="text" className="h-5 w-5" /> Text Manny</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-bg pb-24 md:pb-0">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-4 md:px-6">
          <div className="md:col-span-2">
            <p className="font-[family-name:var(--font-head)] text-xl font-extrabold text-brand-deep">Pops and Sons Painting</p>
            <p className="mt-2 max-w-[44ch] text-[16px] text-muted">Family-owned interior and exterior painting, cabinets, fences and drywall texture for homes around Fair Oaks, Orangevale and Sacramento, California. Led by Manny (Manuel).</p>
          </div>
          <div className="text-[16px]">
            <p className="font-bold">Contact</p>
            <ul className="mt-3 space-y-2 text-muted">
              <li><a href={TEL} className="font-bold text-ink hover:text-brand">{PHONE}</a></li>
              <li>Call or text 7 days</li>
              <li>Fair Oaks &amp; Orangevale, CA</li>
              <li><a href={GOOGLE} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Find us on Google Maps</a></li>
            </ul>
          </div>
          <div className="text-[16px]">
            <p className="font-bold">Services</p>
            <ul className="mt-3 space-y-2 text-muted">
              {[...mainServices, ...moreServices].map((s) => <li key={s.title}><a href="#services" className="hover:text-brand">{s.title}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-line py-5 text-center text-[14px] text-muted">&copy; {new Date().getFullYear()} Pops and Sons Painting</div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 md:hidden">
        <a href={TEL} className="btn btn-cta"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={SMS} className="btn btn-ghost"><Icon name="text" className="h-5 w-5" /> Text</a>
      </div>
    </>
  );
}
