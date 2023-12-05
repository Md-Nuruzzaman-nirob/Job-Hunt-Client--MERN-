import Advertise from "../../components/shared/Advertise";
import BannerSection from "./homeComponents/BannerSection";
import Categories from "./homeComponents/category/Categories";
import CompanySection from "./homeComponents/CompanySection";
import FeaturedJobSection from "./homeComponents/featuredJob/FeaturedJobSection";

const HomePage = () => {
  return (
    <div>
      <BannerSection />
      <CompanySection />
      <Categories />
      <Advertise />
      <FeaturedJobSection />
    </div>
  );
};

export default HomePage;
