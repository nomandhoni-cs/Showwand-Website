import OpenSource from "@/components/OpenSource";
import CodeLanguageStats from "@/components/CodeLanguageStats";
import PromoVideo from "@/components/PromoVideo";
import HeroSection from "@/components/HeroSection";
import Contributors from "@/components/Contributors";
import KeyFeatures from "@/components/KeyFeatures";

export default function Home() {
  return (<>
  <HeroSection />
  <PromoVideo />
  <KeyFeatures />
  <CodeLanguageStats />
  <OpenSource />
  <Contributors />
  </>);
}
