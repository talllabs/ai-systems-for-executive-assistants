import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Terms of Service | AI Systems for Executive Assistants",
  description: "Terms of Service for AI Systems for Executive Assistants.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing our website or enrolling in our program, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`,
  },
  {
    title: "Services",
    content: `AI Systems for Executive Assistants provides consulting and live training services to help Executive Assistants implement AI tools into their professional workflows. Our services include:

• Live implementation sessions
• Prompt libraries and templates
• Recorded session access
• Office hours and ongoing support

Specific deliverables, session schedules, and program scope are detailed in your enrollment agreement.`,
  },
  {
    title: "Enrollment & Payment",
    content: `Enrollment in our program is subject to application review and approval. Upon acceptance, payment terms will be communicated directly. All fees are due as specified in your enrollment agreement.

We reserve the right to decline enrollment at our sole discretion. If we are unable to accommodate your enrollment after payment, you will receive a full refund.`,
  },
  {
    title: "Refund Policy",
    content: `Refund eligibility is as follows:

• Cancellations made more than 7 days before program start: full refund
• Cancellations made within 7 days of program start: 50% refund
• Cancellations after program start: no refund

In exceptional circumstances, we may consider refund requests on a case-by-case basis.`,
  },
  {
    title: "Intellectual Property",
    content: `All materials provided as part of our program — including prompt libraries, templates, frameworks, and recorded sessions — are the intellectual property of AI Systems for Executive Assistants.

You are granted a limited, personal, non-transferable license to use these materials for your own professional development. You may not:

• Share, sell, or redistribute our materials to third parties
• Use our materials to create competing products or training programs
• Remove any proprietary notices from our materials`,
  },
  {
    title: "Participant Conduct",
    content: `You agree to participate in our program in good faith and in accordance with professional standards. We reserve the right to remove participants who engage in disruptive, disrespectful, or inappropriate behavior, without refund.`,
  },
  {
    title: "Disclaimers",
    content: `Our services are provided "as is." We make no guarantees regarding specific outcomes, results, or career advancement from participation in our program.

AI tools and capabilities evolve rapidly. While we strive to keep our curriculum current, we cannot guarantee that specific tools or features will remain available or unchanged throughout the program.`,
  },
  {
    title: "Limitation of Liability",
    content: `To the fullest extent permitted by law, AI Systems for Executive Assistants shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of our services, even if we have been advised of the possibility of such damages.

Our total liability for any claim arising under these Terms shall not exceed the amount you paid for the program.`,
  },
  {
    title: "Privacy",
    content: `Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference.`,
  },
  {
    title: "Modifications",
    content: `We may update these Terms from time to time. Material changes will be communicated via email or notice on our website. Your continued use of our services after any changes constitutes acceptance of the updated Terms.`,
  },
  {
    title: "Governing Law",
    content: `These Terms are governed by the laws of the jurisdiction in which AI Systems for Executive Assistants operates, without regard to conflict of law principles.`,
  },
  {
    title: "Contact",
    content: `For questions about these Terms, please contact us at:\n\nhello@aisystemsforeas.com`,
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="bg-[#0B1F3B] pt-32 pb-16 md:pt-40 md:pb-20">
        <Container narrow>
          <p className="text-[#3B82F6] text-xs font-semibold tracking-widest uppercase mb-4">
            Legal
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-[#94A3B8] text-base">
            Effective Date: January 1, 2026
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container narrow>
          <div className="space-y-12">
            <p className="text-[#374151] text-lg leading-relaxed border-l-2 border-[#3B82F6] pl-4">
              Please read these Terms of Service carefully before using our
              website or enrolling in our program. These Terms constitute a
              legally binding agreement between you and AI Systems for Executive
              Assistants.
            </p>

            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-[#0B1F3B] mb-4">
                  {section.title}
                </h2>
                <div className="text-[#374151] leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-[#E5E7EB]">
            <Button href="/" variant="secondary" size="md">
              &larr; Back to Home
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
