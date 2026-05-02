type MaterialRow = {
  name: string;
  badge: string;
  strength: string;
  lifespan: string;
  fill: number;
  accent?: boolean;
  darkBadge?: boolean;
};

const materials: MaterialRow[] = [
  {
    name: "Zirconia",
    badge: "Strongest",
    strength: "1,200 MPa",
    lifespan: "20-25 yrs",
    fill: 100,
    accent: true,
  },
  {
    name: "Emax / Lithium Disilicate",
    badge: "Most Natural",
    strength: "400 MPa",
    lifespan: "15-20 yrs",
    fill: 78,
    accent: true,
  },
  {
    name: "Porcelain-Fused-to-Metal",
    badge: "Traditional",
    strength: "250 MPa",
    lifespan: "10-15 yrs",
    fill: 62,
    darkBadge: true,
  },
  {
    name: "All-Porcelain (Older)",
    badge: "Legacy",
    strength: "110 MPa",
    lifespan: "5-10 yrs",
    fill: 36,
    darkBadge: true,
  },
];

export default function RestorativeMaterialsSection() {
  return (
    <section className="bg-[#EBE8DE] px-4 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1240px] items-start gap-10 lg:grid-cols-[1fr_500px] lg:gap-20">
        <div className="max-w-[640px]">
          <p className="font-fraunces text-[12px] uppercase tracking-[0.24em] text-[#B18453]">§ Materials Matter</p>

          <h2 className="mt-4 font-fraunces text-[44px] leading-[0.96] tracking-[-0.03em] text-[#111A2B] sm:text-[58px] lg:text-[76px]">
            The difference is
            <br />
            <span className="font-light italic text-[#B47A43]">measured in decades.</span>
          </h2>

          <div className="mt-7 space-y-5 text-[17px] leading-[1.68] text-[#66707F] sm:text-[21px] lg:text-[27px]">
            <p>
              The material a restoration is made of determines everything - how long it lasts, how
              natural it looks, how much natural tooth we have to remove. Modern materials are{" "}
              <span className="font-semibold text-[#273244]">2-3x stronger</span> than what was available 15 years
              ago, with aesthetics that rival natural enamel.
            </p>
            <p>
              We use only <span className="font-semibold text-[#273244]">Emax, zirconia, and lithium disilicate</span>{" "}
              for our cosmetic and restorative work - never bargain ceramic or old-generation porcelain.
              The upfront cost is slightly higher. The long-term value is dramatically better.
            </p>
            <p>
              Every restoration is crafted at master ceramist labs in the United States. We never use
              overseas labs or mass-production milling centers. The difference is visible - and permanent.
            </p>
          </div>
        </div>

        <aside className="rounded-[16px] border border-[#DDD4C1] bg-[#E9E1D1] px-6 py-6 sm:px-7 sm:py-7">
          <div className="space-y-6">
            {materials.map((material, index) => (
              <div key={material.name} className={index !== materials.length - 1 ? "border-b border-[#D8CFBC] pb-4" : ""}>
                <div className="flex items-center justify-between gap-3">
                  <p
                    className={`font-fraunces text-[24px] leading-tight sm:text-[29px] lg:text-[34px] ${
                      material.accent ? "italic text-[#B07A45]" : "text-[#1D2738]"
                    }`}
                  >
                    {material.name}
                  </p>
                  <span
                    className={`inline-flex h-7 items-center rounded-full px-3 font-semibold text-[10px] uppercase tracking-[0.14em] ${
                      material.darkBadge
                        ? "bg-[#020A1B] text-[#EFE4D1]"
                        : "bg-[#B77D43] text-[#FAF2E4]"
                    }`}
                  >
                    {material.badge}
                  </span>
                </div>

                <div className="mt-3 h-[4px] w-full rounded-full bg-[#DBD1BD]">
                  <div className="h-full rounded-full bg-[#9D6530]" style={{ width: `${material.fill}%` }} />
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <p className="text-[14px] text-[#636D7C]">
                    Strength: <span className="font-semibold text-[#1E2A3A]">{material.strength}</span>
                  </p>
                  <p className="text-[14px] text-[#636D7C]">
                    Lifespan: <span className="font-semibold text-[#1E2A3A]">{material.lifespan}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
