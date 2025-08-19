import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import PreviewSection from "@/components/PreviewSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-gride-white/[0.02]">
      <HeroSection />
      <PreviewSection />
      {/* <FeaturedCourses /> */}
      <TestimonialCards />
      <UpcomingWebinars />
    </main>
  );
}
