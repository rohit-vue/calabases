type FirstAidStep = {
  title: string;
  description: string;
};

type FirstAidCard = {
  icon: string;
  iconAlt: string;
  title: string;
  subtitle: string;
  steps: FirstAidStep[];
  alert?: string;
};

const firstAidCards: FirstAidCard[] = [
  {
    icon: "/images/tooth.png",
    iconAlt: "Tooth icon",
    title: "Knocked-Out Tooth",
    subtitle: "Act within 30 minutes",
    steps: [
      {
        title: "Pick up the tooth by the crown.",
        description: "Never touch the root - cells on the root surface need to stay intact for implantation.",
      },
      {
        title: "Rinse gently if dirty.",
        description: "Milk or saline only. Do not scrub, do not use soap or chemicals.",
      },
      {
        title: "Try to reinsert it.",
        description: "If possible, gently place the tooth back in the socket, facing the correct way. Bite down softly on gauze to hold it.",
      },
      {
        title: "If you can't reinsert - store it properly.",
        description: "Best: in a glass of milk. Second best: in your saliva (inside your cheek). Do NOT store in water.",
      },
      {
        title: "Call us immediately and head over.",
        description: "Reimplantation success drops sharply after 30 minutes and is unlikely after 1 hour.",
      },
    ],
    alert: "⚠ Baby teeth should NOT be replanted. Call us for guidance.",
  },
  {
    icon: "/images/warning.png",
    iconAlt: "Warning icon",
    title: "Severe Toothache",
    subtitle: "Relieve pain, then come in",
    steps: [
      {
        title: "Rinse with warm salt water.",
        description: "1 tsp salt in 8oz warm water. Swish for 30 seconds. This reduces bacteria and inflammation.",
      },
      {
        title: "Floss carefully.",
        description: "Check for food stuck between teeth - a surprisingly common cause of severe pain.",
      },
      {
        title: "Take ibuprofen if safe for you.",
        description: "400-600mg reduces both pain and inflammation. Do not place aspirin directly on the gum - it causes chemical burns.",
      },
      {
        title: "Apply a cold compress.",
        description: "15 minutes on, 15 minutes off - to the outside of your cheek, not directly on the gum.",
      },
      {
        title: "Call us - don't wait it out.",
        description: "Severe, persistent pain usually means infection or a damaged nerve. It won't fix itself, and waiting increases the risk of losing the tooth.",
      },
    ],
    alert: "⚠ Pain + facial swelling + fever = call us immediately. Do not wait.",
  },
  {
    icon: "/images/hammer.png",
    iconAlt: "Hammer icon",
    title: "Broken or Chipped Tooth",
    subtitle: "Protect, preserve, come in",
    steps: [
      { title: "Save the broken piece.", description: "Rinse it with water and store in milk or saliva. We may be able to bond it back." },
      { title: "Rinse your mouth.", description: "Warm salt water removes debris and reduces bacteria around the injury." },
      { title: "Control bleeding.", description: "Apply gauze or a clean cloth with gentle pressure for 10 minutes. Bleeding usually stops quickly." },
      {
        title: "Cover sharp edges.",
        description: "Dental wax or sugar-free gum can cover a sharp edge temporarily to protect your cheek and tongue.",
      },
      {
        title: "Book a same-day appointment.",
        description: "Exposed inner tooth (yellow/pink visible) needs same-day treatment to prevent infection.",
      },
    ],
  },
  {
    icon: "/images/crown.png",
    iconAlt: "Crown icon",
    title: "Lost Filling or Crown",
    subtitle: "Temporary fix, then see us",
    steps: [
      { title: "Save the crown if possible.", description: "A dislodged crown can often be recemented - don't throw it away." },
      { title: "Clean the area gently.", description: "Rinse with warm water. Avoid chewing on that side." },
      { title: "Use temporary dental cement.", description: "Available at any pharmacy ($5-10). This is a stopgap - not a permanent solution." },
      { title: "Avoid hot, cold, or sweet foods.", description: "The exposed tooth will be sensitive. Stick to room-temperature, soft foods." },
      {
        title: "Call us within 24-48 hours.",
        description: "Exposed tooth structure is vulnerable to decay and fracture. We'll reseat or replace same-day in most cases.",
      },
    ],
  },
];

export default function EmergencyFirstAidSection() {
  return (
    <section className="bg-[#F8F9FA] px-4 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="max-w-[900px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#2AB8BC]" />
            <p className="text-[12px] uppercase tracking-[0.24em] text-[#2AAFB3] font-bold">First-Aid Guide</p>
          </div>
          <h2 className="mt-4 font-fraunces text-[44px] leading-[0.96] tracking-[-0.03em] text-[#111A2C] sm:text-[58px] lg:text-[64px]">
            What to do <span className="font-light italic text-[#EC4252]">right now.</span>
          </h2>
          <p className="mt-5 max-w-[860px] text-[17px] leading-[1.6] text-[#687281] sm:text-[22px] lg:text-[18px]">
            While you&apos;re on your way to us, these steps can save a tooth or reduce damage. Follow along
            carefully - the next 30 minutes matter.
          </p>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          {firstAidCards.map((card) => (
            <article key={card.title} className="rounded-[16px] border border-[#F0E6E8] bg-[#FFFEFE] px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF2F4]">
                <img src={card.icon} alt={card.iconAlt} className="h-5 w-5 object-contain" />
              </span>
              <h3 className="mt-4 font-fraunces text-[34px] leading-tight text-[#121C2E] sm:text-[40px] lg:text-[20px]">{card.title}</h3>
              <p className="mt-1 text-[15px] font-semibold uppercase tracking-[0.16em] text-[#EB4252] sm:text-[18px] lg:text-[13px]">{card.subtitle}</p>

              <div className="mt-5 divide-y divide-[#EFE6E8] border-y border-[#EFE6E8]">
                {card.steps.map((step) => (
                  <div key={step.title} className="flex gap-3 py-3">
                    <span className="mt-1 inline-block h-5 w-5 shrink-0 rounded-full bg-[#061127]" />
                    <div>
                      <p className="text-[16px] font-semibold text-[#141E31] sm:text-[17px] lg:text-[15px]">{step.title}</p>
                      <p className="mt-1 text-[15px] leading-[1.62] text-[#536276] sm:text-[16px] lg:text-[15px]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {card.alert ? (
                <div className="mt-4 rounded-[10px] border border-[#FFD4DA] bg-[#FFF3F5] px-3 py-2.5 text-[14px] font-semibold text-[#E94050]">
                  {card.alert}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
