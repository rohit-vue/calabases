import type { ReactNode } from "react";

type TreatCard = {
  badge: string;
  badgeTone: "red" | "amber" | "teal";
  title: string;
  subtitle: string;
  body: ReactNode;
  eta: string;
};

const treatCards: TreatCard[] = [
  {
    badge: "⚠ Call Immediately",
    badgeTone: "red",
    title: "Knocked-Out Tooth",
    subtitle: "Sports injury, fall, or trauma.",
    body: (
      <>
        A knocked-out permanent tooth can often be saved - but only if it&apos;s reimplanted within{" "}
        <strong className="font-semibold text-[#1A2436]">30-60 min</strong>. Keep the tooth moist (in milk,
        saliva, or a Save-A-Tooth kit) and call us en route.
      </>
    ),
    eta: "30 min",
  },
  {
    badge: "⚠ Call Immediately",
    badgeTone: "red",
    title: "Abscess + Swelling",
    subtitle: "Infected tooth with facial swelling or fever.",
    body: (
      <>
        A dental abscess with visible swelling can become life-threatening if infection spreads.{" "}
        <strong className="font-semibold text-[#1A2436]">Don&apos;t wait.</strong> We&apos;ll drain it, start
        antibiotics, and treat the underlying tooth today.
      </>
    ),
    eta: "1 hour",
  },
  {
    badge: "⚠ Call Immediately",
    badgeTone: "red",
    title: "Severe Toothache",
    subtitle: "Pain that won't respond to medication.",
    body: "Severe, persistent tooth pain usually means an infection, cracked root, or pulp damage. The longer you wait, the higher the chance you'll lose the tooth. We can diagnose and start treatment today.",
    eta: "2-4 hours",
  },
  {
    badge: "Same-Day",
    badgeTone: "amber",
    title: "Broken or Chipped Tooth",
    subtitle: "Accident, biting something hard, or old filling failure.",
    body: "Small chips can wait a day or two. Large breaks exposing the inner tooth (yellow or pink tissue visible) should be seen within 24 hours to prevent infection and nerve damage.",
    eta: "Same Day",
  },
  {
    badge: "Same-Day",
    badgeTone: "amber",
    title: "Lost Filling or Crown",
    subtitle: "Hard food, ice, or age caught up with old work.",
    body: "A lost filling or crown exposes sensitive tooth structure and puts the tooth at risk of further damage. We can often reseat an existing crown or place a temporary same-day.",
    eta: "Same Day",
  },
  {
    badge: "Same-Day",
    badgeTone: "amber",
    title: "Partially Dislodged Tooth",
    subtitle: "Tooth feels loose or out of position.",
    body: "If a tooth has shifted or loosened from trauma, quick repositioning and splinting can often save it. Call us immediately - don't try to push it back into place yourself.",
    eta: "1-2 hours",
  },
  {
    badge: "Urgent",
    badgeTone: "teal",
    title: "Object Stuck Between Teeth",
    subtitle: "Flossing and gentle removal didn't work.",
    body: "Don't use sharp objects or continue forcing floss - you risk damaging gums or the tooth. We can safely remove the object in minutes.",
    eta: "Same Day",
  },
  {
    badge: "Urgent",
    badgeTone: "teal",
    title: "Jaw Pain or Lockjaw",
    subtitle: "Can't open or close mouth fully.",
    body: "Jaw dysfunction can stem from TMJ, a dislocation, or an infection. We diagnose the cause and relieve symptoms same-day - and rule out anything more serious.",
    eta: "Same Day",
  },
  {
    badge: "Urgent",
    badgeTone: "teal",
    title: "Soft Tissue Injury",
    subtitle: "Cut tongue, lip, or cheek from dental trauma.",
    body: "Oral cuts bleed dramatically but often need less treatment than they appear to. Apply pressure with clean gauze and call us - we can assess and treat if stitches are needed.",
    eta: "1-3 hours",
  },
];

function badgeClass(tone: TreatCard["badgeTone"]) {
  if (tone === "red") return "bg-[#E84A58] text-white";
  if (tone === "amber") return "bg-[#F5B468] text-white";
  return "bg-[#1FB9B3] text-white";
}

export default function EmergencyTreatSection() {
  return (
    <section className="bg-[#efeee9] px-4 py-14 sm:px-12 lg:px-32">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="max-w-[980px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#44B4B2]" />
            <p className="text-[12px] uppercase tracking-[0.24em] text-[#43ACA9] font-bold">What We Treat</p>
          </div>
          <h2 className="mt-4 font-fraunces text-[44px] leading-[0.96] tracking-[-0.03em] text-[#111A2C] sm:text-[58px] lg:text-[64px]">
            Every dental emergency, <span className="font-light italic text-[#EC4252]">same day.</span>
          </h2>
          <p className="mt-5 max-w-[860px] text-[17px] leading-[1.6] text-[#687281] sm:text-[22px] lg:text-[18px]">
            If it involves your teeth or jaw and it&apos;s urgent, we handle it. Here&apos;s what we see most
            often - and how fast we can help.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {treatCards.map((card, index) => (
            <article
              key={card.title}
              className={`rounded-[16px] border border-[#F0DDE1] px-5 pb-5 pt-5 sm:px-6 sm:pb-6 ${
                index < 3 ? "bg-[rgba(252,209,213,0.25)]" : "bg-[rgba(228,224,214,0.25)]"
              }`}
            >
              <span className={`inline-flex h-7 items-center rounded-full px-3 text-[10px] font-semibold uppercase tracking-[0.16em] ${badgeClass(card.badgeTone)}`}>
                {card.badge}
              </span>

              <h3 className="mt-4 font-fraunces text-[34px] leading-tight text-[#111B2D] sm:text-[40px] lg:text-[24px]">{card.title}</h3>
              <p className="mt-1 min-h-[44px] font-inter text-[16px]  text-[#8A93A3] sm:text-[18px] lg:text-[13px]">{card.subtitle}</p>
              <p className="mt-4 text-[16px] leading-[1.68] text-[#49576A] sm:text-[18px] lg:text-[14px]">{card.body}</p>

              <div className="mt-5 border-t border-[#EFE6E8] pt-4">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#74839A]">See you in</p>
                  <p className="font-fraunces text-[30px]  text-[#EC4252] sm:text-[34px] lg:text-[16px]">{card.eta}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
