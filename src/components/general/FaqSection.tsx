"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How often should I go to the dentist?",
    answer:
      "Most patients should come every 6 months for an exam and cleaning. If you have gum issues, frequent cavities, or ongoing treatment, we may recommend every 3-4 months.",
  },
  {
    question: "Do you take my insurance?",
    answer:
      "We accept most major PPO plans and can usually verify benefits before your visit. If you call us, we can check your coverage and explain your expected out-of-pocket cost.",
  },
  {
    question: "What if I don't have insurance?",
    answer:
      "No problem. We offer the Gleam Membership for patients without insurance, which includes preventive care and discounts on additional treatment.",
  },
  {
    question: "How much does a cleaning cost without insurance?",
    answer:
      "A standard cleaning is typically around $150, but your exact total depends on whether X-rays or an exam are due. We confirm pricing before treatment begins.",
  },
  {
    question: "I haven't been to the dentist in years. Will I be judged?",
    answer:
      "Never. Our team is here to help, not lecture. We focus on where your oral health is today and build a practical plan that feels comfortable and manageable.",
  },
  {
    question: "Can I get a same-day appointment?",
    answer:
      "Yes, we keep time open daily for urgent needs and same-day concerns when possible. Call us early and we will do our best to get you seen right away.",
  },
  {
    question: "Do you see kids?",
    answer:
      "Yes. We treat families and children, including preventive visits, exams, and cleanings, with a calm approach designed to make younger patients feel comfortable.",
  },
  {
    question: "What should I do in a dental emergency after hours?",
    answer:
      "If you have severe swelling, trauma, or uncontrolled bleeding, seek emergency care immediately. For urgent dental pain or a broken tooth, contact our office and follow our after-hours instructions.",
  },
  {
    question: "What if I'm nervous about going to the dentist?",
    answer:
      "You are not alone. We explain everything step by step, move at your pace, and use comfort-first techniques so you feel in control throughout your visit.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#FAF8F3] px-4 py-16 sm:px-6 md:px-8 lg:px-80">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="max-w-[860px]">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#C9A961]">
            Frequently Asked
          </p>
          <h2 className="font-fraunces text-[30px] leading-[0.95] text-[#0A0E1A] tracking-[-0.03em] sm:text-[34px] lg:text-[50px]">
            Your <span className="italic font-light text-[#C9A961]">questions,</span> answered.
          </h2>
        </div>

        <div className="mt-8 space-y-2.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="overflow-hidden rounded-[12px] border border-[#e5e1d7] bg-[#f9f9f8]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-fraunces text-[19px] leading-[1.05] text-[#0A0E1A] sm:text-[20px]">
                    {faq.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f4f1e8] text-[18px] text-[#c9ab6c]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[14px] leading-[1.65] text-[#5A6578] tracking-[-0.02em] sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
