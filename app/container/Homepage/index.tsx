import Ecosystem from "@/app/components/Ecosystem";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/Herosection";
import Navbar from "@/app/components/Navbar";
import Platform from "@/app/components/Platform";
import Products from "@/app/components/Products";
import { platformData, productData } from "@/app/utils/constants";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Ecosystem/>
      <Products data={productData} />
      <Platform data={platformData}/>
      <Footer/>
    </div>
  );
};

export default Homepage;
