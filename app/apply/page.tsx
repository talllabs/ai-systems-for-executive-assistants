"use client";

import { useState } from "react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import type { Metadata } from "next";

// Note: Metadata must be exported from a Server Component.
// For this client page, set <title> via layout or a separate metadata file.

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  title: string;
  yearsAsEA: string;
  biggestChallenge: string;
  fundingType: string;
}

const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  title: "",
  yearsAsEA: "",
  biggestChallenge: "",
  fundingType: "",
};

type Status = "idle" | "submitting" | "success" | "error";

const yearsOptions = [
  "Less than 1 year",
  "1–3 years",
  "3–5 years",
  "5–10 years",
  "10+ years",
];

const fundingOptions = [
  { value: "personal", label: "Personally" },
  { value: "company", label: "Through my company / employer" },
  { value: "unsure", label: "Not sure yet" },
];

function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-semibold text-[#1F2937] mb-2"
    >
      {children}
      {required && <span className="text-[#3B82F6] ml-1">*</span>}
    </label>
  );
}

const inputClass =
  "w-full px-4 py-3 border border-[#E5E7EB] bg-white text-[#1F2937] text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors";

export default function ApplyPage() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setForm(initialFormState);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred."
      );
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-[#0B1F3B] pt-32 pb-16 md:pt-40 md:pb-20">
        <Container narrow>
          <p className="text-[#3B82F6] text-xs font-semibold tracking-widest uppercase mb-4">
            Application
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
            Apply for the Next Cohort
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-xl">
            Spots are limited. We review every application and follow up within
            48 hours.
          </p>
        </Container>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24 bg-white">
        <Container narrow>
          {status === "success" ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-[#0B1F3B] flex items-center justify-center mx-auto mb-6">
                <svg
                  width="28"
                  height="22"
                  viewBox="0 0 28 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L10 19L26 2"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1F3B] mb-4">
                Application Received
              </h2>
              <p className="text-[#6B7280] text-lg max-w-md mx-auto mb-8">
                Thank you for applying. We&apos;ll review your application and
                follow up within 48 hours.
              </p>
              <Button href="/" variant="secondary" size="md">
                Back to Home
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-8">
                {/* Name row */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" required>
                      First Name
                    </Label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      autoComplete="given-name"
                      value={form.firstName}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" required>
                      Last Name
                    </Label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      autoComplete="family-name"
                      value={form.lastName}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Smith"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" required>
                    Email Address
                  </Label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="jane@company.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <Label htmlFor="company" required>
                    Company
                  </Label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    autoComplete="organization"
                    value={form.company}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Acme Corp"
                  />
                </div>

                {/* Title */}
                <div>
                  <Label htmlFor="title" required>
                    Your Title
                  </Label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    autoComplete="organization-title"
                    value={form.title}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Executive Assistant to the CEO"
                  />
                </div>

                {/* Years as EA */}
                <div>
                  <Label htmlFor="yearsAsEA">
                    Years as an EA or Chief of Staff
                  </Label>
                  <select
                    id="yearsAsEA"
                    name="yearsAsEA"
                    value={form.yearsAsEA}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="">Select an option</option>
                    {yearsOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Biggest Challenge */}
                <div>
                  <Label htmlFor="biggestChallenge">
                    What is your biggest AI challenge right now?
                  </Label>
                  <textarea
                    id="biggestChallenge"
                    name="biggestChallenge"
                    rows={4}
                    value={form.biggestChallenge}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us what's holding you back or what you're trying to solve..."
                  />
                </div>

                {/* Funding type */}
                <div>
                  <Label htmlFor="fundingType">
                    Are you investing personally or through your company?
                  </Label>
                  <div className="space-y-3 mt-1">
                    {fundingOptions.map((opt) => (
                      <label
                        key={opt.value}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="fundingType"
                          value={opt.value}
                          checked={form.fundingType === opt.value}
                          onChange={handleChange}
                          className="w-4 h-4 accent-[#0B1F3B] cursor-pointer"
                        />
                        <span className="text-sm text-[#374151] group-hover:text-[#0B1F3B] transition-colors">
                          {opt.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Error */}
                {status === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
                    {errorMessage || "Something went wrong. Please try again."}
                  </div>
                )}

                {/* Submit */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto"
                  >
                    {status === "submitting"
                      ? "Submitting..."
                      : "Submit Application"}
                  </Button>
                  <p className="mt-4 text-xs text-[#9CA3AF]">
                    By submitting, you agree to our{" "}
                    <a
                      href="/privacy"
                      className="underline hover:text-[#0B1F3B] transition-colors"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="/terms"
                      className="underline hover:text-[#0B1F3B] transition-colors"
                    >
                      Terms of Service
                    </a>
                    .
                  </p>
                </div>
              </div>
            </form>
          )}
        </Container>
      </section>
    </>
  );
}
