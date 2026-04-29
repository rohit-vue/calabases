// components/sections/Dentists.tsx
export default function Dentists() {
  const dentists = [
    { name: "Dr. Isaac Kashani", icon: "👨‍⚕️" },
    { name: "Dr. First Last", icon: "👨‍⚕️" },
    { name: "Dr. First Last", icon: "👩‍⚕️" },
    { name: "Dr. First Last", icon: "👩‍⚕️" },
  ];

  return (
    <section className="bg-[#FAF8F3] px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-24 lg:py-16">
      <div className="mx-auto w-full max-w-[1180px]">
        <h2 className="mb-10 font-fraunces text-[70px] font-normal leading-[1.1] tracking-[-0.03em] text-[#1A1A1A] sm:mb-12 lg:mb-14">
          Meet The <span className="font-normal italic">Dentists</span>
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {dentists.map((dentist, idx) => (
            <article
              key={`${dentist.name}-${idx}`}
              className="flex h-[312px] flex-col rounded-[20px] border border-[#ece8e1] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-md sm:h-[320px] sm:p-6"
            >
              <h3 className="mb-4 line-clamp-2 h-[52px] font-fraunces text-[28px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0A0E1A] sm:mb-5 sm:h-[56px] sm:text-[18px]">
                {dentist.name}
              </h3>

             
              <div className="relative h-[220px] w-full overflow-hidden rounded-[12px] bg-[linear-gradient(143.7deg,#F5F2EB_0%,#E4E0D6_100%)] sm:h-[224px]">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[clamp(4rem,18vw,7rem)] leading-none sm:text-[clamp(4.5rem,12vw,6.5rem)]" aria-hidden="true">
                    {dentist.icon}
                  </span>
                  <span className="sr-only">Photo placeholder</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
