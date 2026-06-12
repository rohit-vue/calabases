// components/sections/Dentists.tsx
import Image from "next/image";

type Dentist = {
  name: string;
  image?: string;
  icon?: string;
};

export default function Dentists() {
  const dentists: Dentist[] = [
    { name: "Dr. Isaac Kashani", image: "/images/Dentist 1.JPG" },
    { name: "Dr. First Last", image: "/images/Dentist 2.JPG" },
    { name: "Dr. First Last", image: "/images/Dentist 4.JPG" },
    { name: "Dr. First Last", image: "/images/Dentist 7.JPG" },
  ];

  return (
    <section id="meet-the-dentists" className="bg-[#FAF8F3] px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-24 lg:py-16">
      <div className="mx-auto w-full max-w-[1180px]">
        <h2 className="mb-10 font-fraunces text-[3.2rem] font-normal leading-[1.1] tracking-[-0.03em] text-[#0A0E1A] sm:mb-12 sm:text-[62px] lg:mb-14">
          Meet The <span className="font-normal italic">Dentists</span>
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {dentists.map((dentist, idx) => (
            <article
              key={`${dentist.name}-${idx}`}
              className="flex h-[352px] flex-col rounded-[20px] border border-[#ece8e1] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-md sm:h-[360px] sm:p-6"
            >
              <h3 className="mb-4 line-clamp-2 h-[52px] font-fraunces text-[28px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0A0E1A] sm:mb-1 sm:h-[56px] sm:text-[22px]">
                {dentist.name}
              </h3>

             
              <div
                className="relative h-[260px] w-full overflow-hidden rounded-[12px] sm:h-[268px]"
                style={
                  dentist.image
                    ? undefined
                    : {
                        background:
                          "linear-gradient(143.7deg, #F5F2EB 0%, #E4E0D6 100%)",
                      }
                }
              >
                {dentist.image ? (
                  <Image
                    src={dentist.image}
                    alt={dentist.name}
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[clamp(4rem,18vw,7rem)] leading-none sm:text-[clamp(4.5rem,12vw,6.5rem)]" aria-hidden="true">
                      {dentist.icon}
                    </span>
                    <span className="sr-only">Photo placeholder</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
