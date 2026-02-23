import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Privacy Policy | AI Systems for Executive Assistants",
  description: "Privacy Policy for AI Systems for Executive Assistants.",
};

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly to us when you:

• Submit an application through our website
• Contact us via email
• Register for or attend our program

This may include your name, email address, job title, company name, and other professional information you choose to share.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information we collect to:

• Review and respond to your application
• Communicate with you about our program and services
• Deliver the services you've enrolled in
• Send you relevant updates, if you've opted in
• Improve our website and offerings

We do not sell your personal information to third parties.`,
  },
  {
    title: "Information Sharing",
    content: `We may share your information with:

• Service providers who assist us in operating our business (e.g., email providers, payment processors)
• Professional advisors, in the ordinary course of business
• Law enforcement or regulatory bodies, when required by law

All third-party service providers are contractually required to protect your information.`,
  },
  {
    title: "Data Retention",
    content: `We retain your information for as long as necessary to provide our services and comply with our legal obligations. Application data is typically retained for 24 months following your initial submission. You may request deletion of your data at any time by contacting us.`,
  },
  {
    title: "Your Rights",
    content: `Depending on your location, you may have the right to:

• Access the personal information we hold about you
• Correct inaccurate information
• Request deletion of your information
• Opt out of marketing communications

To exercise any of these rights, contact us at hello@aisystemsforeas.com.`,
  },
  {
    title: "Cookies",
    content: `Our website may use cookies and similar tracking technologies to improve your browsing experience and analyze site traffic. You can control cookies through your browser settings. Disabling cookies may affect certain features of the site.`,
  },
  {
    title: "Security",
    content: `We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure. However, no data transmission over the internet is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page with a revised effective date. Your continued use of our website after such changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "Contact",
    content: `If you have any questions about this Privacy Policy, please contact us at:\n\nhello@aisystemsforeas.com`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-[#0B1F3B] pt-32 pb-16 md:pt-40 md:pb-20">
        <Container narrow>
          <p className="text-[#3B82F6] text-xs font-semibold tracking-widest uppercase mb-4">
            Legal
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#94A3B8] text-base">
            Effective Date: January 1, 2026
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container narrow>
          <div className="prose-custom space-y-12">
            <p className="text-[#374151] text-lg leading-relaxed border-l-2 border-[#3B82F6] pl-4">
              AI Systems for Executive Assistants (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, and protect your personal information when
              you interact with our website and services.
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
