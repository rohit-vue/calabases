type SignalCard = {
  id: string;
  title: string;
  description: string;
  solution: string;
};

const signalCards: SignalCard[] = [
  {
    id: "N*01",
    title: "Pain when biting down",
    description:
      "A cracked tooth or failing filling often shows up as sharp pain when chewing on one specific side. Catch it early and we save the tooth. Wait too long and it becomes a root canal.",
    solution: "Crown or Onlay",
  },
  {
    id: "N*02",
    title: "Visible crack or chip",
    description:
      "Any visible fracture line or chipped corner needs evaluation. Cracks can travel - a tooth that looks fine today can split completely within months if untreated.",
    solution: "Crown or Onlay",
  },
  {
    id: "N*03",
    title: "Missing tooth in smile line",
    description:
      "Even one missing tooth causes the adjacent teeth to shift over time. Within 3-5 years, one gap becomes a bite misalignment affecting the whole mouth.",
    solution: "Bridge or Implant",
  },
  {
    id: "N*04",
    title: "Old silver fillings",
    description:
      "Amalgam fillings expand and contract with temperature, cracking teeth over time. If yours are over 10-15 years old, they likely need replacement before they fail.",
    solution: "Composite or Onlay",
  },
  {
    id: "N*05",
    title: "Recent root canal",
    description:
      "90% of root-canaled teeth need a crown within 6 months. Without one, the remaining tooth structure is brittle and will likely fracture within a year or two.",
    solution: "Crown",
  },
  {
    id: "N*06",
    title: "Loose or failing dental work",
    description:
      "Most crowns, bridges, and dentures need replacement every 10-15 years. If your old work feels loose, looks worn, or has chipped - it's time.",
    solution: "Replacement",
  },
];

export default function RestorativeSignalsSection() {
  return (
    <section className="bg-[#F7F2E7] px-4 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1250px]">
        <p className="font-fraunces text-[11px] uppercase tracking-[0.26em] text-[#B87333]">§ The Signals</p>

        <h2 className="mt-4 max-w-[980px] font-fraunces text-[44px] font-light leading-[0.97] tracking-[-0.0305em] text-[#0A0E1A] sm:text-[58px] lg:text-[64px]">
          Six signs your tooth <span className="italic text-[#B87333]">needs work.</span>
        </h2>

        <p className="mt-6 max-w-[860px] text-[18px] leading-[1.55] text-[#5A6578] sm:text-[26px] font-light lg:text-[19px]">
          Most restorative problems announce themselves early - if you know what to listen for. Here are
          the signals we see most often in patients who&apos;ve waited too long.
        </p>

        <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {signalCards.map((card) => (
            <article
              key={card.id}
              className="rounded-[18px] border border-[#E4DDC8] bg-[#FFFFFF] px-6 pb-5 pt-6 sm:px-7 sm:pb-6"
            >
              <p className="font-fraunces text-[14px] uppercase tracking-[0.156em] text-[#B87333]">{card.id}</p>

              <h3 className="mt-3 font-fraunces text-[30px] leading-[1.05] text-[#0A0E1A] tracking-[-0.005em] sm:text-[38px] lg:text-[22px]">{card.title}</h3>

              <p className="mt-3 text-[17px] leading-[1.56] text-[#5A6578] sm:text-[20px] lg:text-[14px]">{card.description}</p>

              <div className="mt-5 border-t border-[#E4DDC8] pt-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5A6578]">Likely Solution</p>
                  <p className="font-fraunces text-[22px] italic text-[#B87333] sm:text-[26px] lg:text-[15px]">{card.solution}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
