import OpenSource from "@/components/OpenSource";
import PromoVideo from "@/components/PromoVideo";
import HeroSection from "@/components/HeroSection";
// import Contributors from "@/components/Contributors";
import KeyFeatures from "@/components/KeyFeatures";

const Home:React.FC = () => {
  return (
    <>
  <HeroSection />
  <PromoVideo />
  <KeyFeatures />
  <OpenSource />
  {/* 
  <Contributors /> */}
  </>
  )
}

export default Home
