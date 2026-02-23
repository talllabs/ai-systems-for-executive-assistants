import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#F9FAFB] py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col">
            <span className="text-[#0B1F3B] font-bold text-base tracking-tight">
              AI Systems for Executive Assistants
            </span>
            <span className="text-[#6B7280] text-sm mt-1">
              Practical AI implementation for high-performing EAs
            </span>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/apply", label: "Apply" },
                { href: "/privacy", label: "Privacy" },
                { href: "/terms", label: "Terms" },
                {
                  href: "mailto:hello@aisystemsforeas.com",
                  label: "Contact",
                  external: true,
                },
              ].map(({ href, label, external }) => (
                <li key={label}>
                  {external ? (
                    <a
                      href={href}
                      className="text-sm text-[#6B7280] hover:text-[#0B1F3B] transition-colors"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className="text-sm text-[#6B7280] hover:text-[#0B1F3B] transition-colors"
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E5E7EB]">
          <p className="text-sm text-[#9CA3AF]">
            &copy; 2026 AI Systems for Executive Assistants. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
