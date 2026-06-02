import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      {/* HERO */}
      <section className="max-w-full flex justify-center min-h-screen p-6 max-[770px]:p-4">
        <div className="w-full max-w-7xl flex flex-col justify-center pt-32 pb-16 px-8 lg:px-12 md:px-8 sm:px-6 ">
          {/* Available badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 bg-[rgba(74,222,128,0.08)] border border-[rgba(74,222,128,0.2)] rounded-full px-4 py-[0.4rem] w-fit mb-10">
            <span className="status-dot"></span>
            <span className="text-[0.75rem] text-[#4ade80] font-(--mono) tracking-widest">
              AVAILABLE FOR NEW OPPORTUNITIES
            </span>
          </div>
          {/* Name */}
          <h1 className=" animate-fade-up delay-1 font-[var(--serif)] text-[clamp(3.5rem,9vw,7rem)] font-extrabold tracking-[-0.04em] leading-none mb-5">
            Kaviya{" "}
            <span className="bg-[linear-gradient(135deg,#7c6bff_0%,#a78bfa_50%,#c4b5fd_100%)] bg-clip-text text-transparent">
              M.
            </span>
          </h1>

          {/* Title */}
          <p className="animate-fade-up delay-2 font-(--mono) text-[clamp(0.85rem,2vw,1.1rem)] text-[#888] tracking-widest mb-6">
            FRONTEND REACT DEVELOPER · CHENNAI, INDIA
          </p>

          {/* Description */}
          <p className="animate-fade-up delay-3 text-[1.05rem] text-[#aaa] max-w-130 leading-[1.8] mb-12">
            I build{" "}
            <span className="text-[#f5f5f5] font-medium">
              fast, production-ready
            </span>{" "}
            web apps with React.js & Next.js. Specialising in component
            architecture, performance optimisation, and shipping features that
            users actually love.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-up delay-4 flex gap-4 flex-wrap mb-24">
            <Link href="/projects" className="btn-primary">
              View my work →
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in touch
            </Link>
          </div>

          {/* Stats row */}
          <div className="animate-fade-up delay-5 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-1px bg-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.06)]">
            {[
              { num: "2+", label: "Years experience" },
              { num: "2", label: "Products shipped" },
              { num: "20+", label: "Reusable components" },
              { num: "40+", label: "Bugs resolved" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#111] py-7 px-6 text-center">
                <div className="font-[var(--serif)] text-[2.5rem] font-bold text-[#a78bfa] tracking-[-0.03em] leading-none mb-[0.5rem]">
                  {stat.num}
                </div>
                <div className="text-[0.75rem] text-[#666] font-(--mono) tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* TECH STRIP */}
          <section className="border-y border-[rgba(255,255,255,0.06)] py-5 px-8 flex items-center gap-4 overflow-x-auto whitespace-nowrap mt-8">
            <span className="text-[0.7rem] text-[#555] font-(--mono) tracking-widest shrink-0">
              TECH STACK
            </span>
            <div className="w-px h-4 bg-[rgba(255,255,255,0.1)] shrink-0" />
            {[
              "React.js",
              "Next.js",
              "TypeScript",
              "Redux Toolkit",
              "Tailwind CSS",
              "REST API",
              "JWT Auth",
              "SSR/SSG",
              "Git",
            ].map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </section>
        </div>
      </section>
    </>
  );
}
