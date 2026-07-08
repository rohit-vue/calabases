// components/sections/Dentists.tsx
import DentistsCarousel from "./DentistsCarousel";

export default function Dentists() {
  const dentists = [
    { name: "Dr. Isaac Kashani", image: "/images/Dentist 1.JPG", imageClass: "object-center" },
    { name: "Dr. Chase Warner", image: "/images/Dentist 3.JPG", imageClass: "object-center" },
  ];

  return (
    <section id="meet-the-dentists" className="bg-[#FAF8F3] px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-24 lg:py-16">
      <div className="mx-auto w-full max-w-[1180px]">
        <h2 className="mb-10 font-fraunces text-[3.2rem] font-normal leading-[1.1] tracking-[-0.03em] text-[#0A0E1A] sm:mb-12 sm:text-[62px] lg:mb-14">
          Meet The <span className="font-normal italic">Dentists</span>
        </h2>

        <DentistsCarousel dentists={dentists} />
      </div>
    </section>
  );
}
