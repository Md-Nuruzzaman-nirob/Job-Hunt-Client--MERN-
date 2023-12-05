import Advertise from "../../components/Advertise";
import BannerSection from "./homeComponents/BannerSection";
import Categories from "./homeComponents/category/Categories";
import CompanySection from "./homeComponents/CompanySection";

const HomePage = () => {
  return (
    <div>
      <BannerSection />
      <CompanySection />
      <Categories />
      <Advertise />
    </div>
  );
};

export default HomePage;
