import HeroSection from "@/components/HeroSection";
import PromoVideo from "@/components/PromoVideo";
import KeyFeatures from "@/components/KeyFeatures";
import CodeLanguageStats from "@/components/CodeLanguageStats";
import OpenSource from "@/components/OpenSource";
import Contributors from "@/components/Contributors";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <PromoVideo />
      <KeyFeatures />
      <CodeLanguageStats />
      <OpenSource />
      <Contributors />
    </>
  )
}

export default Home
