import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply | AI Systems for Executive Assistants",
  description:
    "Apply for the next cohort of AI Systems for Executive Assistants — a live implementation program for senior EAs and Chiefs of Staff.",
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
