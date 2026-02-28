import Button from "@/components/Button";
import Container from "@/components/Container";
import Section from "@/components/Section";

const whatWeDoItems = [
  "Workflow audit",
  "Custom Claude prompt library",
  "Inbox drafting systems",
  "Executive briefing builder",
  "Meeting preparation automation",
  "AI-powered SOP templates",
  "Live guided implementation",
];

const programIncludes = [
  "Live sessions",
  "Templates",
  "Prompt library",
  "Connector guidance",
  "Recorded replays",
  "Office hours",
];

const steps = [
  {
    number: "01",
    title: "Audit Your Workflow",
    description: "We map how you currently work.",
  },
  {
    number: "02",
    title: "Build Your AI System",
    description: "We design Claude workflows tailored to you.",
  },
  {
    number: "03",
    title: "Implement & Train",
    description: "Live sessions. Real usage. Recorded access.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-[#0B1F3B] overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Accent glow */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#3B82F6] opacity-[0.06] blur-3xl pointer-events-none" />

        <Container className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-4xl">
            <div className="fade-in">
              <p className="text-[#3B82F6] text-sm font-semibold tracking-widest uppercase mb-6">
                Practical AI Implementation
              </p>
            </div>
            <h1 className="fade-in fade-in-delay-1 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8">
              AI Implementation
              <br />
              <span className="text-[#3B82F6]">for Executive</span>
              <br />
              Assistants
            </h1>
            <p className="fade-in fade-in-delay-2 text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-2xl mb-12">
              We install practical AI systems into your daily workflow — so you
              can confidently support high-level executives.
            </p>
            <div className="fade-in fade-in-delay-3 flex flex-col sm:flex-row gap-4">
              <Button
                href="/apply"
                variant="primary"
                size="lg"
                className="bg-[#3B82F6] border-[#3B82F6] hover:bg-[#2563EB] hover:border-[#2563EB] text-white"
              >
                Apply for the Next Cohort
              </Button>
              <Button
                href="#how-it-works"
                variant="secondary"
                size="lg"
                className="!bg-transparent !text-white !border-white/30 hover:!bg-white/10 hover:!border-white/50"
              >
                Learn How It Works
              </Button>
            </div>
          </div>
        </Container>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/50" />
        </div>
      </section>

      {/* The Problem */}
      <Section id="problem" className="bg-white">
        <Container narrow>
          <div className="fade-in">
            <p className="text-[#3B82F6] text-xs font-semibold tracking-widest uppercase mb-4">
              The Problem
            </p>
          </div>
          <h2 className="fade-in fade-in-delay-1 text-3xl md:text-5xl font-bold text-[#0B1F3B] leading-tight tracking-tight mb-10">
            AI Pressure Is Real
          </h2>
          <div className="fade-in fade-in-delay-2 space-y-4 text-lg text-[#374151] leading-relaxed">
            <p>
              Executives expect AI adoption.
              <br />
              Budgets are approved.
              <br />
              But no one shows Executive Assistants how to implement it properly.
            </p>
            <p className="text-[#6B7280] border-l-2 border-[#3B82F6] pl-4 mt-6">
              You don&apos;t need another webinar.
              <br />
              You need structured implementation.
            </p>
          </div>
        </Container>
      </Section>

      {/* What We Do */}
      <Section className="bg-[#F9FAFB]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="fade-in">
                <p className="text-[#3B82F6] text-xs font-semibold tracking-widest uppercase mb-4">
                  What We Do
                </p>
              </div>
              <h2 className="fade-in fade-in-delay-1 text-3xl md:text-5xl font-bold text-[#0B1F3B] leading-tight tracking-tight">
                We Don&apos;t Teach Theory.
                <br />
                We Install Systems.
              </h2>
            </div>
            <ul className="space-y-3">
              {whatWeDoItems.map((item, i) => (
                <li
                  key={item}
                  className={`fade-in fade-in-delay-${Math.min(i + 1, 6)} flex items-start gap-3`}
                >
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#0B1F3B] flex items-center justify-center">
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[#374151] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Who This Is For */}
      <Section className="bg-white">
        <Container narrow>
          <div className="fade-in">
            <p className="text-[#3B82F6] text-xs font-semibold tracking-widest uppercase mb-4">
              Who This Is For
            </p>
          </div>
          <h2 className="fade-in fade-in-delay-1 text-3xl md:text-5xl font-bold text-[#0B1F3B] leading-tight tracking-tight mb-10">
            Built for High-Performing
            <br />
            Executive Assistants
          </h2>
          <div className="fade-in fade-in-delay-2 flex flex-wrap gap-3">
            {["Senior EAs", "Chiefs of Staff", "Support professionals under executive pressure to adopt AI"].map(
              (role) => (
                <span
                  key={role}
                  className="inline-block px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] text-[#0B1F3B] text-sm font-medium"
                >
                  {role}
                </span>
              )
            )}
          </div>
        </Container>
      </Section>

      {/* How It Works */}
      <Section id="how-it-works" className="bg-[#0B1F3B]">
        <Container>
          <div className="text-center mb-16">
            <div className="fade-in">
              <p className="text-[#3B82F6] text-xs font-semibold tracking-widest uppercase mb-4">
                The Process
              </p>
            </div>
            <h2 className="fade-in fade-in-delay-1 text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`fade-in fade-in-delay-${i + 1} relative p-8 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-300`}
              >
                <span className="block text-5xl font-bold text-white/10 mb-6 leading-none">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[#94A3B8] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Program Details */}
      <Section id="program" className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="fade-in">
                <p className="text-[#3B82F6] text-xs font-semibold tracking-widest uppercase mb-4">
                  Program Details
                </p>
              </div>
              <h2 className="fade-in fade-in-delay-1 text-3xl md:text-5xl font-bold text-[#0B1F3B] leading-tight tracking-tight mb-6">
                4–6 Week Live Implementation Program
              </h2>
              <p className="fade-in fade-in-delay-2 text-[#6B7280] text-lg leading-relaxed">
                Structured. Hands-on. Built around your real workflows.
              </p>
            </div>
            <div className="fade-in fade-in-delay-2">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#9CA3AF] mb-5">
                Includes
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {programIncludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[#374151] font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-[#F9FAFB] border-t border-[#E5E7EB] py-24 md:py-32">
        <Container narrow className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3B] leading-tight tracking-tight mb-6">
            Stop Experimenting.
            <br />
            Start Implementing.
          </h2>
          <p className="text-[#6B7280] text-lg mb-10 max-w-lg mx-auto">
            Join the next cohort of Executive Assistants building real AI
            systems with Claude.
          </p>
          <Button href="/apply" variant="primary" size="lg">
            Apply Now
          </Button>
        </Container>
      </section>
    </>
  );
}
