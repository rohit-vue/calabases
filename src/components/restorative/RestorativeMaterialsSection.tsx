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
    <section className="bg-[#ffffff] px-4 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1240px] items-start gap-10 lg:grid-cols-[1fr_500px] lg:gap-20">
        <div className="max-w-[640px]">
          <p className="font-fraunces text-[11px] uppercase tracking-[0.26em] text-[#B87333]">§ Materials Matter</p>

          <h2 className="mt-4 font-fraunces text-[44px] font-light leading-[0.96] tracking-[-0.0305em] text-[#0A0E1A] sm:text-[58px] lg:text-[64px]">
            The difference is
            <br />
            <span className="italic text-[#B87333]">measured in decades.</span>
          </h2>

          <div className="mt-7 space-y-5 text-[17px] leading-[1.68] text-[#5A6578] sm:text-[21px] lg:text-[17px]">
            <p>
              The material a restoration is made of determines everything - how long it lasts, how
              natural it looks, how much natural tooth we have to remove. Modern materials are{" "}
              <span className="font-semibold text-[#0A0E1A]">2-3x stronger</span> than what was available 15 years
              ago, with aesthetics that rival natural enamel.
            </p>
            <p>
              We use only <span className="font-semibold text-[#0A0E1A]">Emax, zirconia, and lithium disilicate</span>{" "}
              for our cosmetic and restorative work - never bargain ceramic or old-generation porcelain.
              The upfront cost is slightly higher. The long-term value is dramatically better.
            </p>
            <p>
              Every restoration is crafted at master ceramist labs in the United States. We never use
              overseas labs or mass-production milling centers. The difference is visible - and permanent.
            </p>
          </div>
        </div>

        <aside className="rounded-[20px]  bg-[#F7F2E7] px-6 py-6 sm:px-7 sm:py-7">
          <div className="space-y-6">
            {materials.map((material, index) => (
              <div key={material.name} className={index !== materials.length - 1 ? "border-b border-[#0A0E1A14] pb-4" : ""}>
                <div className="flex items-center justify-between gap-3">
                  <p
                    className={`font-fraunces text-[24px] tracking-[-0.006em] leading-tight sm:text-[29px] lg:text-[20px] ${
                      material.accent ? "italic text-[#B87333]" : "text-[#0A0E1A]"
                    }`}
                  >
                    {material.name}
                  </p>
                  <span
                    className={`inline-flex h-7 items-center rounded-[100px] px-3 font-bold text-[10px] uppercase tracking-[0.15em] ${
                      material.darkBadge
                        ? "bg-[#0A0E1A] text-[#FFFFFF]"
                        : "bg-[#B87333] text-[#FFFFFF]"
                    }`}
                  >
                    {material.badge}
                  </span>
                </div>

                <div className="mt-3 h-[4px] w-full rounded-full bg-[#0A0E1A14]">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${material.fill}%`,
                      background: "linear-gradient(90deg, #B87333 0%, #8B5A2B 100%)",
                    }}
                  />
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <p className="text-[12px] text-[#5A6578]">
                    Strength: <span className="font-semibold text-[#0A0E1A]">{material.strength}</span>
                  </p>
                  <p className="text-[12px] text-[#5A6578]">
                    Lifespan: <span className="font-semibold text-[#0A0E1A]">{material.lifespan}</span>
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
