import Container from "../../../components/Container";
import bannerIcon from "../../../assets/icon/Vector.png";
import searchIcon from "../../../assets/icon/Name=Search.svg";
import Button from "../../../components/Button";

const BannerSection = () => {
  return (
    <div className="bg-[#F8F8FD] h-screen relative overflow-hidden">
      <Container className="h-full flex flex-col justify-center">
        <h2 className="font-clashDisplay font-semibold text-5xl sm:text-7xl">
          Discover <span className="block">more than</span>
          <span className="text-[#26A4FF] block">5000+ Jobs</span>
        </h2>
        <img className="w-fit" src={bannerIcon} alt="" />
        <p className="my-6 lg:w-3/5 xl:w-2/5 opacity-70 font-medium">
          Great platform for the job seeker that searching for new career
          heights and passionate about startups.
        </p>
        <form className="p-4 bg-white w-fit flex flex-wrap items-center gap-8 z-10">
          <div className="flex items-center gap-3">
            <label htmlFor="">
              <img src={searchIcon} alt="" />
            </label>
            <input
              className=" border-b focus:border-black outline-none"
              type="text"
              name=""
              id=""
              placeholder="Job title or keyword"
            />
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="">
              <img src={searchIcon} alt="" />
            </label>
            <select
              className="py-[2px] border-b focus:border-black outline-none"
              type="text"
              name="jobPlace"
              id="jobPlace"
              defaultValue="select"
            >
              <option value="select" disabled>
                Job place
              </option>
              <option value="office">Office</option>
              <option value="remote">Remote</option>
              <option value="customer-site">Customer Site</option>
            </select>
          </div>
          <Button>Search job</Button>
        </form>
        <p className="my-5 opacity-70 font-medium z-10">
          Popular : UI Designer, UX Researcher, Android, Admin
        </p>
      </Container>
      <div className="absolute -bottom-96 -right-20 rotate-[70deg] w-[300px] h-[700px] bg-white"></div>
    </div>
  );
};

export default BannerSection;
