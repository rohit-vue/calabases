// components/sections/Dentists.tsx
export default function Dentists() {
  const dentists = [
    { name: "Dr. Isaac Kashani", icon: "👨‍⚕️" },
    { name: "Dr. First Last", icon: "👨‍⚕️" },
    { name: "Dr. First Last", icon: "👨‍⚕️" },
    { name: "Dr. First Last", icon: "👨‍⚕️" },
  ];

  return (
    <section className="bg-[#FAF8F3] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
      <div className="mx-auto w-full max-w-[1180px]">
        <h2 className="mb-10 font-fraunces text-[clamp(2.25rem,4.5vw,3.75rem)] font-medium leading-[1.1] tracking-tight text-[#1A1A1A] sm:mb-12 lg:mb-14">
          Meet The <span className="font-normal italic">Dentists</span>
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {dentists.map((dentist, idx) => (
            <article
              key={`${dentist.name}-${idx}`}
              className="flex flex-col rounded-[2rem] border border-[#ece8e1] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-md sm:p-7"
            >
              <h3 className="mb-6 font-fraunces text-base font-semibold leading-snug text-[#1A1A1A] sm:text-[1.05rem]">
                {dentist.name}
              </h3>

              {/* Photo area — ~282×420 proportion (design reference) */}
              <div className="relative w-full overflow-hidden rounded-[1.75rem] bg-[#F2EEE7] aspect-[282/420]">
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
