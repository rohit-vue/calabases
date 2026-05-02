import Image from "next/image";

const principles = [
  {
    number: "01",
    title: "Natural-looking results",
    description:
      "We match shade, shape, translucency, and surface texture to your features and face shape - not a Hollywood template.",
  },
  {
    number: "02",
    title: "Minimally invasive techniques",
    description:
      "Traditional veneers required removing 30-50% of enamel. Our modern techniques require 5-15%. Your teeth stay yours.",
  },
  {
    number: "03",
    title: "Digital smile design",
    description:
      "You see a 3D preview of your final smile before we begin. You approve the exact outcome - no surprises.",
  },
  {
    number: "04",
    title: "Master ceramist partnerships",
    description:
      "Veneers are only as good as the lab that makes them. We work exclusively with top US-based ceramists using Emax and Empress materials.",
  },
];

export default function CosmaticApproachSection() {
  return (
    <section className="bg-[#F4F4F2] px-4 pb-14 pt-4 sm:px-8 sm:pb-16 sm:pt-6 lg:px-24 lg:pb-24 lg:pt-8">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="mx-auto w-full max-w-[430px] lg:max-w-[390px] flex justify-center items-center">
          <div >
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.30em] text-[#0A0E1A]">Our Philosophy</p>
              <div className="overflow-hidden rounded-[20px] border border-[#DBDBD8] bg-black shadow-[0px_4px_22px_0px_#00000082]">
                <Image
                  src="/images/approachimg.jpg"
                  alt="Cosmetic dentistry before and after"
                  width={1024}
                  height={1024}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-6 text-center font-fraunces text-[14px] italic leading-[1.3] text-[#0A0E1A]">
                Enhancement, not replacement. Preservation over perfection.
              </p>

          </div>
          
        </div>

        <div className="w-full max-w-[620px]">
          <div className="flex items-center gap-3">
            <span className="h-[0.2px] w-[30px] bg-[#C9A961]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9A961]">Our Approach</p>
          </div>

          <h2 className="mt-3 max-w-[470px] font-fraunces font-light text-[42px] leading-[0.95] tracking-[-0.026em] text-[#0A0E1A] sm:text-[54px] lg:text-[56px]">
            Look like you were <span className="font-light italic text-[#C9A961]">born with it.</span>
          </h2>

          <p className="mt-5 max-w-[520px] text-[17px] leading-[1.55] text-[#5A6578]">
            Here&apos;s what separates great cosmetic work from the rest: the goal isn&apos;t perfection,
            it&apos;s invisibility. The best cosmetic dentistry looks like you&apos;ve always had a great smile -
            not like you paid for one.
          </p>
          <p className="mt-4 max-w-[520px] text-[17px] leading-[1.55] text-[#5A6578]">
            Our approach is conservative, precise, and built around four principles.
          </p>

          <div className="mt-8 border-t border-[#E4E0D6]">
            {principles.map((item) => (
              <div key={item.number} className="grid grid-cols-[52px_minmax(0,1fr)] gap-3 border-b border-[#E2E2DF] py-5">
                <p className="pt-1 font-fraunces text-[20px] italic leading-none text-[#C9A961] sm:text-[22px]">{item.number}</p>
                <div>
                  <h3 className="font-fraunces text-[22px] leading-none tracking-[-0.01em] text-[#0A0E1A] sm:text-[26px] lg:text-[20px]">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.55] text-[#5A6578]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
