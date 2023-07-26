import OpenSource from "@/components/OpenSource";
import PromoVideo from "@/components/PromoVideo";
import HeroSection from "@/components/HeroSection";
// import Contributors from "@/components/Contributors";
import KeyFeatures from "@/components/KeyFeatures";
import CodeLanguageStats from "@/components/CodeLanguageStats";

const Home:React.FC = () => {
  return (
    <>
  <HeroSection />
  <PromoVideo />
  <KeyFeatures />
  <CodeLanguageStats />
  <OpenSource />
  {/* 
  <Contributors /> */}
  </>
  )
}

export default Home
