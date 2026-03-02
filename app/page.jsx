import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DealsSection from "@/components/DealsSection";
import CategorySections from "@/components/CategorySection";
import QuoteBanner from "@/components/QuoteBanner";
import RecommendedItems from "@/components/RecommendedItems";
import ExtraServices from "@/components/ExtraServices";
import SuppliersByRegion from "@/components/SuppliersByRegion";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary/30">
      <Header />
      <main>
        <HeroSection />
        <DealsSection />
        <CategorySections />
        <QuoteBanner />
        <RecommendedItems />
        <ExtraServices />
        <SuppliersByRegion />
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
}
