// app/page.tsx
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Dentists from '@/components/sections/Dentists';
import BookingMap from '@/components/sections/BookingMap';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Dentists />
      <BookingMap />
    </>
  );
}