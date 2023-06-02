import OpenSource from "@/components/OpenSource";
import CodeLanguageStats from "@/components/CodeLanguageStats";
import PromoVideo from "@/components/PromoVideo";
import HeroSection from "@/components/HeroSection";
import Contributors from "@/components/Contributors";

export default function Home() {
  return (<>
  <HeroSection />
  <PromoVideo />
  <CodeLanguageStats />
  <OpenSource />
  <Contributors />
  </>);
}
